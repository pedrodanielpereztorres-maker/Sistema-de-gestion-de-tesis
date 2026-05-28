import logging
import re
import reflex as rx
from pydantic import BaseModel
from datetime import date, datetime, timedelta, timezone
from ..database_manager import obtener_conexion
from ..estado.estado_autenticacion import EstadoAutenticacion, EncriptadorContrasena
from ..componentes.layout import layout_principal

logger = logging.getLogger(__name__)


class EstadoPerfil(EstadoAutenticacion):
    """Estado para la gestión del perfil de usuario."""
    nombre_edit: str = ""
    apellido_edit: str = ""
    correo_edit: str = ""
    pass_nueva: str = ""
    pass_conf: str = ""

    tutor_nombre: str = "Pendiente"
    tutor_correo: str = "Pendiente"
    tutor_telefono: str = "Pendiente"
    tutor_empresa_nombre: str = "Pendiente"
    tutor_empresa_correo: str = "Pendiente"
    tutor_empresa_telefono: str = "Pendiente"
    empresa: str = "No asignada"
    empresa_direccion: str = "No asignada"
    fecha_inicio: str = "Pendiente"
    fecha_cierre: str = "Pendiente"

    def fijar_nombre_edit(self, val: str) -> None:
        self.nombre_edit = str(val or "")

    def fijar_apellido_edit(self, val: str) -> None:
        self.apellido_edit = str(val or "")

    def fijar_correo_edit(self, val: str) -> None:
        self.correo_edit = str(val or "")

    def fijar_pass_nueva(self, val: str) -> None:
        self.pass_nueva = str(val or "")

    def fijar_pass_conf(self, val: str) -> None:
        self.pass_conf = str(val or "")

    async def cargar_datos_iniciales(self):
        """Carga los datos del perfil y la información académica de forma centralizada."""
        if not self.usuario:
            return rx.redirect("/login")

        nombres = self.usuario.nombre_completo.split(" ")
        self.nombre_edit = nombres[0]
        self.apellido_edit = " ".join(nombres[1:]) if len(nombres) > 1 else ""
        self.correo_edit = self.usuario.correo

        if self.rol_usuario == "estudiante":
            conn = None
            try:
                conn = obtener_conexion()
                if conn is None:
                    logger.error("No hay conexión para cargar datos académicos de perfil.")
                    return

                with conn:
                    with conn.cursor() as cursor:
                        cursor.execute("""
                            SELECT 
                                ta.nombre || ' ' || ta.apellido, ta.correo, ta.telefono,
                                te.nombre, te.correo, te.telefono,
                                emp.nombre, emp.direccion,
                                e.periodo_inicio, e.periodo_cierre
                            FROM estudiante e
                            LEFT JOIN tutor_academico ta ON e.tutor_academico_id = ta.id
                            LEFT JOIN tutor_empresarial te ON e.tutor_empresarial_id = te.id
                            LEFT JOIN empresa emp ON te.empresa_id = emp.id
                            WHERE e.usuario_id = %s
                        """, (self.usuario.id,))
                        res = cursor.fetchone()
                        if res:
                            self.tutor_nombre = res[0] or "Pendiente"
                            self.tutor_correo = res[1] or "Pendiente"
                            self.tutor_telefono = res[2] or "Pendiente"
                            self.tutor_empresa_nombre = res[3] or "Pendiente"
                            self.tutor_empresa_correo = res[4] or "Pendiente"
                            self.tutor_empresa_telefono = res[5] or "Pendiente"
                            self.empresa = res[6] or "Pendiente"
                            self.empresa_direccion = res[7] or "Pendiente"
                            self.fecha_inicio = res[8].strftime("%d/%m/%Y") if res[8] else "Pendiente"
                            self.fecha_cierre = res[9].strftime("%d/%m/%Y") if res[9] else "Pendiente"
            except Exception as e:
                logger.exception("Error al cargar datos académicos de perfil: %s", e)
            finally:
                if conn:
                    try:
                        conn.close()
                    except Exception:
                        pass

    async def actualizar_datos(self):
        """Actualiza los datos del usuario y la contraseña si corresponde."""
        nombre = self.nombre_edit.strip()
        apellido = self.apellido_edit.strip()
        correo = self.correo_edit.strip().lower()

        if not nombre or not apellido or not correo:
            return rx.toast.warning("Nombre, apellido y correo son obligatorios.")

        patron_correo = r'^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$'
        if not re.match(patron_correo, correo):
            return rx.toast.error("El correo no tiene un formato válido.")

        if self.pass_nueva or self.pass_conf:
            if self.pass_nueva != self.pass_conf:
                return rx.toast.error("Las contraseñas no coinciden.")
            if len(self.pass_nueva) < 8:
                return rx.toast.error("La contraseña debe tener al menos 8 caracteres.")

        conn = None
        try:
            conn = obtener_conexion()
            if conn is None:
                return rx.toast.error("Error de conexión al servidor.")

            with conn:
                with conn.cursor() as cursor:
                    if self.usuario is None or self.usuario.id is None:
                        return rx.toast.error("No se encontró el usuario en sesión.")

                    if self.pass_nueva:
                        nuevo_hash = EncriptadorContrasena.encriptar(self.pass_nueva)
                        cursor.execute(
                            """
                            UPDATE usuario
                            SET nombre = %s, apellido = %s, correo = %s, contrasena_hash = %s
                            WHERE id = %s;
                            """,
                            (nombre, apellido, correo, nuevo_hash, self.usuario.id)
                        )
                    else:
                        cursor.execute(
                            """
                            UPDATE usuario
                            SET nombre = %s, apellido = %s, correo = %s
                            WHERE id = %s;
                            """,
                            (nombre, apellido, correo, self.usuario.id)
                        )
                conn.commit()

            if self.usuario:
                self.usuario.nombre_completo = f"{nombre} {apellido}"
                self.usuario.correo = correo

            self.pass_nueva = ""
            self.pass_conf = ""
            return rx.toast.success("Perfil actualizado correctamente.")

        except Exception as e:
            logger.exception("Error al actualizar el perfil: %s", e)
            return rx.toast.error("Error interno al actualizar el perfil.")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass


def tarjeta_usuario_resumen() -> rx.Component:
    """Muestra el avatar y datos principales del usuario."""
    return rx.card(
        rx.hstack(
            rx.avatar(fallback=EstadoPerfil.inicial_usuario, size="7"),
            rx.vstack(
                rx.heading(EstadoPerfil.nombre_usuario, size="6"),
                rx.badge(EstadoPerfil.rol_usuario.upper(), color_scheme="indigo"),
                align_items="start",
            ),
            spacing="4", align="center"
        ),
        width="100%",
    )


def info_academica() -> rx.Component:
    """Sección visible solo para estudiantes con información de su pasantía."""
    return rx.card(
        rx.vstack(
            rx.heading("Información Académica", size="4"),
            rx.divider(),
            rx.grid(
                rx.vstack(rx.text("Tutor Académico", weight="bold"), rx.text(EstadoPerfil.tutor_nombre)),
                rx.vstack(rx.text("Correo Tutor Académico", weight="bold"), rx.text(EstadoPerfil.tutor_correo)),
                rx.vstack(rx.text("Teléfono Tutor Académico", weight="bold"), rx.text(EstadoPerfil.tutor_telefono)),
                rx.vstack(rx.text("Empresa", weight="bold"), rx.text(EstadoPerfil.empresa)),
                rx.vstack(rx.text("Correo Tutor Empresa", weight="bold"), rx.text(EstadoPerfil.tutor_empresa_correo)),
                rx.vstack(rx.text("Teléfono Tutor Empresa", weight="bold"), rx.text(EstadoPerfil.tutor_empresa_telefono)),
                columns="3", spacing="4", width="100%"
            ),
            rx.divider(),
            rx.grid(
                rx.vstack(rx.text("Inicio de pasantía", weight="bold"), rx.text(EstadoPerfil.fecha_inicio)),
                rx.vstack(rx.text("Cierre de pasantía", weight="bold"), rx.text(EstadoPerfil.fecha_cierre)),
                columns="2", spacing="4", width="100%"
            ),
            spacing="4",
        ),
        width="100%",
        variant="surface"
    )


def pagina_perfil() -> rx.Component:
    """Vista principal del perfil de usuario con formularios integrados."""
    return layout_principal(
        rx.vstack(
            rx.box(
                rx.vstack(
                    rx.heading("Mi Perfil", size="7"),
                    rx.text("Administra tu información personal y fortalece la seguridad de tu cuenta."),
                    spacing="3",
                ),
                width="100%",
            ),
            tarjeta_usuario_resumen(),
            rx.grid(
                rx.card(
                    rx.vstack(
                        rx.heading("Datos Personales", size="5"),
                        rx.input(
                            placeholder="Nombre",
                            value=EstadoPerfil.nombre_edit,
                            on_change=EstadoPerfil.fijar_nombre_edit,
                        ),
                        rx.input(
                            placeholder="Apellido",
                            value=EstadoPerfil.apellido_edit,
                            on_change=EstadoPerfil.fijar_apellido_edit,
                        ),
                        rx.input(
                            placeholder="Correo",
                            value=EstadoPerfil.correo_edit,
                            on_change=EstadoPerfil.fijar_correo_edit,
                        ),
                        rx.button(
                            "Guardar Cambios",
                            on_click=EstadoPerfil.actualizar_datos,
                            width="100%",
                            color_scheme="indigo",
                        ),
                        spacing="4",
                    ),
                    padding="24px",
                ),
                rx.card(
                    rx.vstack(
                        rx.heading("Seguridad", size="5"),
                        rx.text("Cambia tu contraseña de manera segura."),
                        rx.input(
                            type="password",
                            placeholder="Nueva Contraseña",
                            value=EstadoPerfil.pass_nueva,
                            on_change=EstadoPerfil.fijar_pass_nueva,
                        ),
                        rx.input(
                            type="password",
                            placeholder="Confirmar Contraseña",
                            value=EstadoPerfil.pass_conf,
                            on_change=EstadoPerfil.fijar_pass_conf,
                        ),
                        rx.button(
                            "Actualizar Clave",
                            on_click=EstadoPerfil.actualizar_datos,
                            width="100%",
                            variant="outline",
                            color_scheme="gray",
                        ),
                        spacing="4",
                    ),
                    padding="24px",
                ),
                columns="2",
                spacing="4",
                width="100%",
            ),
            rx.cond(EstadoPerfil.rol_usuario == "estudiante", info_academica()),
            on_mount=EstadoPerfil.cargar_datos_iniciales,
            spacing="6",
            width="100%",
            max_width="980px",
            margin="auto",
        )
    )
