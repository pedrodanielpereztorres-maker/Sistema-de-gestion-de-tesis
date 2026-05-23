import logging
import reflex as rx
from pydantic import BaseModel
import bcrypt
import secrets
from datetime import datetime, timedelta, timezone
from ..database_manager import obtener_conexion

# Logger para el módulo; en producción el nivel por defecto puede ser INFO
logger = logging.getLogger(__name__)


class EncriptadorContrasena:
    MAX_BYTES_CONTRASENA = 72

    @staticmethod
    def _verificar_longitud(contrasena: str):
        if len(contrasena.encode("utf-8")) > EncriptadorContrasena.MAX_BYTES_CONTRASENA:
            raise ValueError("Contrasena demasiado larga.")

    @staticmethod
    def encriptar(contrasena: str) -> str:
        EncriptadorContrasena._verificar_longitud(contrasena)
        sal = bcrypt.gensalt()
        return bcrypt.hashpw(contrasena.encode("utf-8"), sal).decode("utf-8")

    @staticmethod
    def verificar(contrasena: str, hash_almacenado: str) -> bool:
        try:
            if not contrasena or not hash_almacenado:
                return False

            EncriptadorContrasena._verificar_longitud(contrasena)
            return bcrypt.checkpw(
                contrasena.encode("utf-8"),
                hash_almacenado.strip().encode("utf-8")
            )
        except Exception as e:
            # Registramos el error en el logger en vez de imprimirlo
            logger.error(f"ERROR EN BCRYPT: {e}", exc_info=True)
            return False


class Usuario(BaseModel):
    id: int | None = None
    nombre_usuario: str = ""
    rol: str = ""
    nombre_completo: str = ""
    cedula: str = ""
    correo: str = ""
    token_sesion: str | None = None


class EstadoAutenticacion(rx.State):
    usuario: Usuario | None = None
    entrada_usuario: str = ""
    entrada_contrasena: str = ""
    error_login: str = ""
    mostrar_contrasena: bool = False

    def alternar_mostrar_contrasena(self):
        """Alterna la visibilidad de la contraseña en el login."""
        self.mostrar_contrasena = not self.mostrar_contrasena

    @rx.var
    def nombre_usuario(self) -> str:
        if self.usuario and self.usuario.nombre_completo:
            return self.usuario.nombre_completo
        return "Invitado"

    @rx.var
    def inicial_usuario(self) -> str:
        nombre = self.nombre_usuario
        return nombre[0].upper() if nombre else "I"

    @rx.var
    def rol_usuario(self) -> str:
        if self.usuario and self.usuario.rol:
            return self.usuario.rol.lower()
        return "invitado"

    def iniciar_sesion(self):
        correo_entrada = self.entrada_usuario.strip().lower()
        conn = obtener_conexion()
        if conn is None:
            # Error crítico al obtener conexión: registrar y notificar al usuario
            logger.error("No se pudo establecer la conexión para el login.")
            return rx.toast.error("Error de conexión al servidor.")

        try:
            with conn:
                with conn.cursor() as cursor:
                    consulta = """
                    SELECT u.id, u.cedula, u.nombre, u.apellido, u.correo, u.contrasena_hash, u.esta_activo, r.nombre as rol_nombre
                    FROM usuario u
                    LEFT JOIN rol r ON u.rol_id = r.id
                    WHERE LOWER(TRIM(u.correo)) = %s
                    """
                    # Información de depuración registrada con logger.debug
                    logger.debug("Intentando login para: %s", correo_entrada)
                    cursor.execute(consulta, (correo_entrada,))
                    resultado = cursor.fetchone()

                    if resultado:
                        u_id, u_cedula, u_nombre, u_apellido, u_correo, u_hash, u_activo, u_rol = resultado
                        logger.debug("Usuario encontrado. Rol: %s. Activo: %s", u_rol, u_activo)
                        if not u_activo:
                            return rx.toast.error("Cuenta desactivada. Contacte al administrador.")

                        # Depuración: longitudes y hashes (solo en DEBUG)
                        logger.debug("Longitud contraseña ingresada: %d", len(self.entrada_contrasena))
                        # Mostrar solo parte del hash para depuración, no exponer en producción
                        logger.debug("Hash en DB empieza por: %s... (Longitud: %d)", (u_hash[:10] if u_hash else ''), (len(u_hash) if u_hash else 0))

                        if EncriptadorContrasena.verificar(self.entrada_contrasena, u_hash):
                            token = secrets.token_urlsafe(64)
                            ahora = datetime.now(timezone.utc)
                            expira = ahora + timedelta(hours=24)

                            cursor.execute("""
                                INSERT INTO sesion (usuario_id, token, creado_en, expira_en, esta_activa)
                                VALUES (%s, %s, %s, %s, TRUE)
                            """, (u_id, token, ahora, expira))
                            conn.commit()

                            self.usuario = Usuario(
                                id=u_id,
                                nombre_usuario=u_correo,
                                rol=u_rol.lower() if u_rol else "estudiante",
                                nombre_completo=f"{u_nombre} {u_apellido}",
                                cedula=u_cedula,
                                correo=u_correo,
                                token_sesion=token,
                            )
                            logger.debug("Login exitoso para %s", u_correo)
                            return rx.redirect("/")
                        else:
                            logger.debug("La contraseña no coincide con el hash almacenado.")
                    else:
                        logger.debug("No se encontró ningún usuario con el correo: %s", correo_entrada)
                    return rx.toast.error("Credenciales inválidas. Verifique sus datos.")
        except Exception as e:
            # Registrar excepción completa en el logger para diagnóstico
            logger.error(f"Error al iniciar sesión: {e}", exc_info=True)
            return rx.toast.error("Error interno al iniciar sesión.")
        finally:
            conn.close()

    async def cerrar_sesion(self):
        """Invalidar token en DB (si existe) y resetear el estado local."""
        token = None
        try:
            if self.usuario and getattr(self.usuario, 'token_sesion', None):
                token = self.usuario.token_sesion
            if token:
                conn = obtener_conexion()
                if conn:
                    try:
                        with conn:
                            with conn.cursor() as cursor:
                                cursor.execute("UPDATE sesion SET esta_activa = FALSE WHERE token = %s", (token,))
                            conn.commit()
                    except Exception as e:
                        logger.error(f"Error al invalidar token en BD: {e}", exc_info=True)
                    finally:
                        conn.close()
        finally:
            # Garantizar que el estado local se limpie aunque falle la BD
            self.reset()
        return rx.redirect("/login")

    def verificar_acceso(self):
        """Compatibilidad: alias para verificar_sesion_global"""
        return self.verificar_sesion_global()

    def verificar_sesion_global(self):
        """Verifica que exista una sesión activa; redirige a /login si no."""
        if self.usuario is None:
            return rx.redirect("/login")

    # Wrappers con los nombres solicitados por parametros.txt
    def verificar_sesion(self):
        """Alias histórico: redirige a /login si no hay sesión activa."""
        return self.verificar_sesion_global()

    def verificar_acceso_admin(self):
        """Verifica sesión y rol de administrador; redirige a /login o muestra acceso denegado."""
        if self.usuario is None:
            return rx.redirect("/login")
        if getattr(self.usuario, 'rol', '').lower() != 'administrador':
            # Redirigir al inicio si no es admin
            return rx.redirect("/")

    def verificar_sesion_admin(self):
        """Alias histórico: comportamiendo igual que verificar_acceso_admin."""
        return self.verificar_acceso_admin()

    def fijar_entrada_usuario(self, val): self.entrada_usuario = val
    def fijar_entrada_contrasena(self, val): self.entrada_contrasena = val

    @staticmethod
    def encriptar_clave(clave: str) -> str:
        return EncriptadorContrasena.encriptar(clave)

    @staticmethod
    def verificar_clave(clave: str, hash_db: str) -> bool:
        return EncriptadorContrasena.verificar(clave, hash_db)
