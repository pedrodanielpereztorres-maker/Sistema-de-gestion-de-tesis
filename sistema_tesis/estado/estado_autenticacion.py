import logging
import reflex as rx
from pydantic import BaseModel
import bcrypt
import secrets
from datetime import datetime, timedelta, timezone
from ..database_manager import obtener_conexion

# En producción asegúrate que el nivel sea INFO o superior
# Nunca configures basicConfig con DEBUG en el servidor
logger = logging.getLogger(__name__)

class EncriptadorContrasena:
    MAX_BYTES_CONTRASENA = 72

    @staticmethod
    def _verificar_longitud(contrasena: str):
        if len(contrasena.encode("utf-8")) > EncriptadorContrasena.MAX_BYTES_CONTRASENA:
            raise ValueError("La contraseña es demasiado larga.")

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
            logger.error(f"Error en verificación de hash.")
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
    
    # Rate Limiting (Tarea 5)
    intentos_fallidos: int = 0
    bloqueado_hasta: str = ""  # ISO datetime string
    mostrar_contrasena: bool = False

    def alternar_mostrar_contrasena(self):
        self.mostrar_contrasena = not self.mostrar_contrasena

    @rx.var
    def nombre_usuario(self) -> str:
        return self.usuario.nombre_completo if self.usuario else "Invitado"

    @rx.var
    def inicial_usuario(self) -> str:
        return self.nombre_usuario[0].upper() if self.usuario else "I"

    @rx.var
    def rol_usuario(self) -> str:
        return self.usuario.rol.lower() if self.usuario else "invitado"

    def iniciar_sesion(self):
        # 1. Verificar bloqueo por Rate Limiting
        if self.bloqueado_hasta:
            limite = datetime.fromisoformat(self.bloqueado_hasta)
            ahora = datetime.now(timezone.utc)
            if ahora < limite:
                segundos = int((limite - ahora).total_seconds())
                return rx.toast.error(f"Has realizado demasiados intentos. Por favor espera {segundos} segundos antes de volver a intentar.")
            else:
                self.bloqueado_hasta = ""
                self.intentos_fallidos = 0

        correo_entrada = self.entrada_usuario.strip().lower()
        conn = None
        try:
            conn = obtener_conexion()
            if conn is None:
                return rx.toast.error("No se pudo conectar al servidor. Comprueba tu conexión e inténtalo más tarde.")
            
            with conn:
                with conn.cursor() as cursor:
                    # Logs anonimizados (Tarea 2)
                    logger.debug("Intento de login recibido.")
                    cursor.execute("""
                        SELECT u.id, u.cedula, u.nombre, u.apellido, u.correo, u.contrasena_hash, u.esta_activo, r.nombre
                        FROM usuario u
                        LEFT JOIN rol r ON u.rol_id = r.id
                        WHERE LOWER(TRIM(u.correo)) = %s;
                    """, (correo_entrada,))
                    resultado = cursor.fetchone()

                    if resultado:
                        u_id, u_ced, u_nom, u_ape, u_cor, u_hash, u_act, u_rol = resultado
                        if not u_act:
                            return rx.toast.error("Tu cuenta está desactivada. Contacta al administrador para más información.")

                        if EncriptadorContrasena.verificar(self.entrada_contrasena, u_hash):
                            # Login Exitoso
                            self.intentos_fallidos = 0
                            self.bloqueado_hasta = ""
                            token = secrets.token_urlsafe(64)
                            ahora_utc = datetime.now(timezone.utc)
                            cursor.execute("""
                                INSERT INTO sesion (usuario_id, token, creado_en, expira_en, esta_activa)
                                VALUES (%s, %s, %s, %s, TRUE);
                            """, (u_id, token, ahora_utc, ahora_utc + timedelta(hours=24)))
                            
                            self.usuario = Usuario(
                                id=u_id,
                                nombre_usuario=u_cor,
                                rol=u_rol.lower() if u_rol else "estudiante",
                                nombre_completo=f"{u_nom} {u_ape}",
                                cedula=u_ced,
                                correo=u_cor,
                                token_sesion=token,
                            )
                            logger.debug("Sesión creada exitosamente.")
                            return rx.redirect("/")
                        
                    # Fallo de credenciales (aquí llega si no hay resultado o hash no coincide)
                    self.intentos_fallidos += 1
                    if self.intentos_fallidos >= 5:
                        self.bloqueado_hasta = (datetime.now(timezone.utc) + timedelta(minutes=5)).isoformat()
                        return rx.toast.error("Cuenta temporalmente bloqueada por demasiados intentos. Intenta de nuevo en 5 minutos.")
                    return rx.toast.error("Usuario o contraseña incorrectos. Verifica tus datos e inténtalo de nuevo.")

        except Exception as e:
            logger.error(f"Error en login: {e}", exc_info=True)
            return rx.toast.error("Error interno. Por favor intenta más tarde o contacta soporte si el problema persiste.")
        finally:
            if conn:
                conn.close()

    async def cerrar_sesion(self):
        if self.usuario and self.usuario.token_sesion:
            conn = obtener_conexion()
            if conn:
                try:
                    with conn:
                        with conn.cursor() as cursor:
                            cursor.execute("UPDATE sesion SET esta_activa = FALSE WHERE token = %s", (self.usuario.token_sesion,))
                finally:
                    conn.close()
        self.reset()
        return rx.redirect("/login")

    def verificar_sesion(self):
        if self.usuario is None:
            return rx.redirect("/login")

    def verificar_sesion_admin(self):
        if self.usuario is None:
            return rx.redirect("/login")
        if self.rol_usuario != 'administrador':
            return rx.redirect("/")

    # Compatibilidad: alias de nombres históricos usados en las páginas
    def verificar_acceso(self):
        """Alias histórico para verificar sesión de usuario (mantiene compatibilidad).

        Antes se llamaba verificar_acceso desde on_mount en varias páginas; ahora
        verificamos sesión usando el método moderno verificar_sesion.
        """
        return self.verificar_sesion()

    def verificar_acceso_admin(self):
        """Alias histórico para verificar acceso de administrador."""
        return self.verificar_sesion_admin()

    def fijar_entrada_usuario(self, val): self.entrada_usuario = val
    def fijar_entrada_contrasena(self, val): self.entrada_contrasena = val
