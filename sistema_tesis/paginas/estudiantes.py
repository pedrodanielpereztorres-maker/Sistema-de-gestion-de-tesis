import reflex as rx
from ..componentes.encabezado import encabezado_pagina
from ..componentes.modal_estudiante import modal_registrar_estudiante
from ..componentes.tabla_estudiantes import tabla_estudiantes
from ..componentes.toast_viewer import toast_viewer
from ..componentes.layout import layout_principal
from ..estado.estado_estudiante import EstadoEstudiante
from ..estado.estado_autenticacion import EstadoAutenticacion


def modal_seguridad_estudiante() -> rx.Component:
    return rx.cond(
        EstadoEstudiante.mostrar_modal_confirmacion,
        rx.box(
            rx.box(
                position="fixed", inset="0", bg="rgba(0,0,0,0.5)",
                backdrop_filter="blur(4px)", z_index="400",
                on_click=EstadoEstudiante.cerrar_modal_confirmacion
            ),
            rx.box(
                rx.vstack(
                    rx.hstack(
                        rx.icon("triangle-alert", size=24, color="#EF4444"),
                        rx.text("Confirmar Eliminación", size="4",
                                weight="bold", color="#1E293B"),
                        align="center", spacing="3"
                    ),
                    rx.text(
                        "Esta acción desactivará al estudiante y su cuenta de acceso. Ingrese su contraseña de administrador para confirmar.",
                        size="2", color="#475569"
                    ),
                    rx.input(
                        type="password",
                        placeholder="Contraseña de Administrador",
                        on_change=EstadoEstudiante.fijar_password_confirmacion,
                        width="100%",
                        style={
                            "border": "1.5px solid #64748B",
                            "font_weight": "bold",
                            "&::placeholder": {"color": "#000000", "opacity": "1", "font_weight": "bold"}
                        }
                    ),
                    rx.hstack(
                        rx.button("Cancelar", on_click=EstadoEstudiante.cerrar_modal_confirmacion,
                                  variant="soft", color_scheme="gray"),
                        rx.button(
                            "Confirmar Acción",
                            on_click=EstadoEstudiante.confirmar_eliminacion_estudiante,
                            color_scheme="red"
                        ),
                        width="100%", justify="end", spacing="3"
                    ),
                    spacing="4"
                ),
                position="fixed", top="50%", left="50%",
                transform="translate(-50%, -50%)",
                bg="white", padding="28px", border_radius="16px",
                width="400px", z_index="410", box_shadow="0 20px 25px -5px rgba(0,0,0,0.1)"
            )
        ),
        rx.fragment()
    )


def contenido_estudiantes() -> rx.Component:
    """Contenido interno de la gestión de estudiantes."""
    return rx.vstack(
        encabezado_pagina(
            "Estudiantes en Pasantías Profesionales",
            "Añadir Estudiante",
            EstadoEstudiante.abrir_modal
        ),
        tabla_estudiantes(),
        modal_registrar_estudiante(),
        modal_seguridad_estudiante(),
        toast_viewer(),
        width="100%",
        padding=["16px", "20px", "24px", "24px"],
        on_mount=EstadoEstudiante.cargar_estudiantes,
    )


def pagina_estudiantes() -> rx.Component:
    return rx.theme(
        rx.cond(
            EstadoAutenticacion.usuario,
            layout_principal(contenido_estudiantes()),
            rx.center(
                rx.spinner(size="3", color="indigo"),
                width="100vw", height="100vh",
                background_color="#F8F9FF",
                on_mount=EstadoAutenticacion.verificar_acceso
            )
        ),
        appearance="light",
        has_background=True,
    )
