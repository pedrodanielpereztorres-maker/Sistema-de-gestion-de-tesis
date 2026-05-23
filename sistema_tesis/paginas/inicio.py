import reflex as rx
from ..estado.estado_autenticacion import EstadoAutenticacion
from ..estado.estado_estudiante import EstadoEstudiante, EstudianteResumen
from ..estado.estado_boveda import EstadoBoveda
from ..estado.estado_documento import EstadoDocumento
from ..componentes.layout import layout_principal
from .perfil import EstadoPerfil

COLOR_PRIMARIO = "#6366F1"
COLOR_FONDO_GLOBAL = "white"
COLOR_TEXTO_BOLD = "#0F172A"
COLOR_TEXTO_BODY = "#1E293B"


def fila_estudiante_lista(estudiante: dict) -> rx.Component:
    return rx.hstack(
        rx.center(
            rx.text(estudiante["nombre"].to(str)[0], color="white",
                    font_weight="bold", font_size="11px"),
            width="28px", height="28px", border_radius="full",
            background="linear-gradient(135deg, #6366F1 0%, #4338CA 100%)"
        ),
        rx.vstack(
            rx.text(estudiante["nombre"].to(str) + " " + estudiante["apellido"].to(str), font_size="14px",
                    font_weight="700", color=COLOR_TEXTO_BOLD),
            rx.text(estudiante["carrera"].to(str), font_size="12px",
                    color="#475569", font_weight="500"),
            spacing="0", align="start"
        ),
        rx.spacer(),
        rx.badge(
            estudiante["cedula"].to(str), variant="soft", color_scheme="gray", radius="large",
            style={
                "color": "#1E293B",
                "background_color": "#F1F5F9",
                "font_weight": "bold",
            }
        ),
        width="100%", align="center", padding_y="10px", border_bottom="1px solid #F1F5F9"
    )


def tarjeta_estadistica(titulo: str, valor: str, icono: str, color: str) -> rx.Component:
    return rx.card(
        rx.vstack(
            rx.hstack(
                rx.center(
                    rx.icon(icono, size=22, color="white"),
                    width="42px",
                    height="42px",
                    background=color,
                    border_radius="10px",
                    box_shadow="0 4px 12px rgba(0, 0, 0, 0.12)"
                ),
                rx.spacer(),
                rx.badge(
                    "Actualizado", variant="soft", color_scheme="gray", radius="full",
                    style={
                        "color": "#1E293B",
                        "background_color": "#F1F5F9",
                        "font_weight": "bold",
                    }
                ),
                width="100%",
                align="center",
            ),
            rx.vstack(
                rx.text(titulo, size="3", font_weight="700",
                        color=COLOR_TEXTO_BODY),
                rx.heading(valor, size="8", weight="bold",
                           color=COLOR_TEXTO_BOLD),
                spacing="1",
                align="start",
            ),
            spacing="3",
            align="start",
        ),
        size="3",
        width="100%",
        style={
            "background": "#FFFFFF",
            "border": "1px solid #E2E8F0",
            "transition": "transform 0.2s ease, box-shadow 0.2s ease",
            "cursor": "default",
        },
        _hover={
            "transform": "translateY(-4px)",
            "box_shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }
    )


def tarjeta_info_estudiante(titulo: str, valor: str, icono: str, color: str) -> rx.Component:
    return rx.card(
        rx.hstack(
            rx.center(
                rx.icon(icono, size=20, color=color),
                width="40px",
                height="40px",
                background="white",
                border=f"1.5px solid {color}30",
                border_radius="10px",
            ),
            rx.vstack(
                rx.text(titulo, size="2", font_weight="800",
                        color="#475569", text_transform="uppercase", letter_spacing="0.05em"),
                rx.text(valor, size="4", weight="bold",
                        color=COLOR_TEXTO_BOLD),
                spacing="0",
                align="start",
            ),
            spacing="3",
            align="center",
        ),
        size="2",
        width="100%",
        style={
            "background": "#FFFFFF",
            "border": "1px solid #E2E8F0",
            "box_shadow": "0 1px 2px rgba(0, 0, 0, 0.05)",
        }
    )


def encabezado_bienvenida() -> rx.Component:
    return rx.flex(
        rx.vstack(
            rx.heading(
                f"Bienvenido, {EstadoAutenticacion.nombre_usuario}",
                size={"initial": "6", "sm": "8"},
                weight="bold",
                color=COLOR_TEXTO_BOLD
            ),
            rx.text("Panel central de control y seguimiento académico",
                    color="#334155", size="3"),
            spacing="1",
            align="start",
        ),
        rx.spacer(),
        rx.button(
            rx.icon("refresh-cw", size=16),
            rx.text("Sincronizar", weight="bold"),
            variant="soft",
            color_scheme="indigo",
            style={
                "color": "#312E81",  # Indigo 900
                "background_color": "#E0E7FF",  # Indigo 100
                "border": "1px solid #C7D2FE",  # Indigo 200
            },
            _hover={"background_color": "#C7D2FE"},
            on_click=[EstadoEstudiante.cargar_estudiantes,
                      EstadoBoveda.cargar_tesis]
        ),
        width="100%",
        align={"initial": "start", "sm": "center"},
        direction={"initial": "column", "sm": "row"},
        justify="between",
        spacing="4",
        margin_bottom="8",
    )


def panel_estudiante() -> rx.Component:
    return rx.vstack(
        rx.box(
            rx.vstack(
                rx.hstack(
                    rx.icon(
                        "graduation-cap", size=22, color=COLOR_PRIMARIO),
                    rx.text(
                        "Mi Información de Pasantía", size="4", weight="bold", color=COLOR_TEXTO_BOLD),
                    rx.spacer(),
                    rx.badge(
                        "En Curso", color_scheme="green", variant="soft", radius="full",
                        style={
                            "color": "#065F46",  # Verde oscuro
                            "background_color": "#D1FAE5",  # Verde claro
                            "font_weight": "800",
                            "padding_x": "10px",
                        }
                    ),
                    width="100%", align="center", margin_bottom="4"
                ),
                rx.grid(
                    tarjeta_info_estudiante(
                        "Tutor Académico", EstadoPerfil.tutor_nombre, "user-check", "#6366F1"),
                    tarjeta_info_estudiante(
                        "Correo Tutor Acad.", EstadoPerfil.tutor_correo, "mail", "#8B5CF6"),
                    tarjeta_info_estudiante(
                        "Teléfono Tutor Acad.", EstadoPerfil.tutor_telefono, "phone", "#6366F1"),
                    tarjeta_info_estudiante(
                        "Tutor Empresarial", EstadoPerfil.tutor_empresa_nombre, "user-check", "#10B981"),
                    tarjeta_info_estudiante(
                        "Correo Tutor Emp.", EstadoPerfil.tutor_empresa_correo, "mail", "#10B981"),
                    tarjeta_info_estudiante(
                        "Teléfono Tutor Emp.", EstadoPerfil.tutor_empresa_telefono, "phone", "#10B981"),
                    tarjeta_info_estudiante(
                        "Empresa Asignada", EstadoPerfil.empresa, "building-2", "#0EA5E9"),
                    tarjeta_info_estudiante(
                        "Dirección Empresa", EstadoPerfil.empresa_direccion, "map-pin", "#0EA5E9"),
                    tarjeta_info_estudiante(
                        "Fecha de Inicio", EstadoPerfil.fecha_inicio, "calendar-days", "#10B981"),
                    tarjeta_info_estudiante(
                        "Fecha de Cierre", EstadoPerfil.fecha_cierre, "calendar-check", "#F59E0B"),
                    tarjeta_info_estudiante(
                        "Estado de Trámite", "Activo", "check-check", "#6366F1"),
                    columns={"initial": "1", "sm": "1", "md": "2", "lg": "3"},
                    spacing="4",
                    width="100%",
                ),
                width="100%",
            ),
            padding=["18px", "24px", "28px"],
            background="white",
            border_radius="18px",
            border="1px solid #E2E8F0",
            box_shadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            margin_bottom="8",
            width="100%",
            overflow_x="auto",  # Permite mover el contenido si se corta
        ),
        width="100%",
    )


def panel_administrador() -> rx.Component:
    return rx.vstack(
        rx.grid(
            tarjeta_estadistica(
                "Total Estudiantes", str(EstadoEstudiante.total_estudiantes), "users", "linear-gradient(135deg, #6366F1, #4338CA)"
            ),
            tarjeta_estadistica(
                "En Pasantía", str(EstadoEstudiante.estudiantes_en_pasantia), "graduation-cap", "linear-gradient(135deg, #10B981, #059669)"
            ),
            tarjeta_estadistica(
                "Sin Pasantía", str(EstadoEstudiante.estudiantes_sin_pasantia), "user-minus", "linear-gradient(135deg, #F59E0B, #D97706)"
            ),
            tarjeta_estadistica(
                "Bóveda (Tesis)", str(EstadoBoveda.total_tesis), "library", "linear-gradient(135deg, #8B5CF6, #7C3AED)"
            ),
            columns={"initial": "1", "sm": "2", "md": "4"},
            spacing="5",
            width="100%",
            margin_bottom="8"
        ),
        width="100%",
    )


def pagina_inicio() -> rx.Component:
    return rx.theme(
        rx.cond(
            EstadoAutenticacion.usuario,
            layout_principal(
                rx.vstack(
                    encabezado_bienvenida(),
                    rx.spacer(height="1rem"),  # Espacio extra solicitado
                    rx.cond(
                        EstadoAutenticacion.rol_usuario == "estudiante",
                        panel_estudiante(),
                        rx.fragment()
                    ),
                    rx.cond(
                        EstadoAutenticacion.rol_usuario == "administrador",
                        panel_administrador(),
                        rx.fragment()
                    ),
                    rx.cond(
                        EstadoAutenticacion.rol_usuario == "administrador",
                        rx.grid(
                            rx.vstack(
                                rx.hstack(
                                    rx.icon("circle-check",
                                            size=20, color="#10B981"),
                                    rx.text(
                                        "Estudiantes en Pasantía", font_weight="800", color=COLOR_TEXTO_BOLD),
                                    spacing="2", align="center", margin_bottom="2"
                                ),
                                rx.vstack(
                                    rx.foreach(
                                        EstadoEstudiante.lista_con_pasantia, fila_estudiante_lista),
                                    width="100%", spacing="0"
                                ),
                                padding="24px", background="white", border_radius="20px",
                                border="1px solid #E2E8F0", width="100%", height="380px", overflow_y="auto"
                            ),
                            rx.vstack(
                                rx.hstack(
                                    rx.icon("circle-alert",
                                            size=20, color="#F59E0B"),
                                    rx.text(
                                        "Pendientes de Pasantía", font_weight="800", color=COLOR_TEXTO_BOLD),
                                    spacing="2", align="center", margin_bottom="2"
                                ),
                                rx.vstack(
                                    rx.foreach(
                                        EstadoEstudiante.lista_sin_pasantia, fila_estudiante_lista),
                                    width="100%", spacing="0"
                                ),
                                padding="24px", background="white", border_radius="20px",
                                border="1px solid #E2E8F0", width="100%", height="380px", overflow_y="auto"
                            ),
                            columns={"initial": "1", "sm": "1", "md": "1", "lg": "2"}, spacing="6", width="100%", margin_bottom="8"
                        ),
                    ),
                    rx.grid(
                        rx.cond(
                            EstadoAutenticacion.rol_usuario == "administrador",
                            rx.card(
                                rx.vstack(
                                    rx.hstack(
                                        rx.icon("graduation-cap", size=18,
                                                color=COLOR_PRIMARIO),
                                        rx.text("Carga Académica por Carrera",
                                                weight="bold", size="3", color="#1E293B"),
                                        spacing="2", align="center", margin_bottom="4"
                                    ),
                                    rx.foreach(
                                        EstadoEstudiante.estudiantes_por_carrera,
                                        lambda c: rx.vstack(
                                            rx.hstack(
                                                rx.text(
                                                    c["nombre"], size="2", color="#1E293B", font_weight="600"),
                                                rx.spacer(),
                                                rx.text(str(c["cantidad"]) + " alumnos", size="2", weight="bold", color="#0F172A"),
                                                width="100%",
                                            ),
                                            rx.progress(
                                                value=c["progreso"],
                                                width="100%",
                                                color_scheme="indigo",
                                                style={
                                                    "background": "#EDF2F7",
                                                    "height": "9px",
                                                    "border_radius": "10px"
                                                }),
                                            spacing="2",
                                            width="100%",
                                        )
                                    ),
                                    width="100%",
                                ),
                                size="3",
                                style={"background": "#FFFFFF",
                                       "border": "1px solid #E2E8F0"}
                            ),
                        ),
                        rx.cond(
                            EstadoAutenticacion.rol_usuario == "administrador",
                            rx.card(
                                rx.vstack(
                                    rx.hstack(
                                        rx.icon("shield-check", size=18,
                                                color="#8B5CF6"),
                                        rx.text("Estado de la Bóveda",
                                                weight="bold", size="3", color="#1E293B"),
                                        spacing="2", align="center", margin_bottom="4"
                                    ),
                                    rx.foreach(
                                        EstadoBoveda.balance_privacidad_tesis,
                                        lambda b: rx.hstack(
                                            rx.box(
                                                width="12px", height="12px", border_radius="full", background=b["color"]),
                                            rx.text(b["tipo"], size="2",
                                                    color="#1E293B", font_weight="500"),
                                            rx.spacer(),
                                            rx.text(str(b["valor"]),
                                                    size="3", weight="bold", color="#0F172A"),
                                            width="100%", align="center", padding_y="8px",
                                            border_bottom="1px solid #E2E8F0"
                                        )
                                    ),
                                    rx.text(
                                        "El administrador puede ver ambos estados, los estudiantes solo las públicas.",
                                        size="1", color="#334155", margin_top="4", font_weight="500"
                                    ),
                                    spacing="1", width="100%",
                                ),
                                size="3",
                                style={"background": "#FFFFFF",
                                       "border": "1px solid #E2E8F0"}
                            ),
                        ),
                        rx.card(
                            rx.vstack(
                                rx.text("Acciones de Gestión", weight="bold",
                                        size="3", margin_bottom="4", color="#1E293B"),
                                rx.cond(
                                    EstadoAutenticacion.rol_usuario == "administrador",
                                    rx.button(
                                        rx.hstack(rx.icon("user-plus", size=18),
                                                  rx.text("Inscribir Estudiante", weight="bold")),
                                        width="100%", variant="soft", color_scheme="indigo", size="3",
                                        style={
                                            "color": "#312E81",  # Indigo 900
                                            "background_color": "#E0E7FF",  # Indigo 100
                                            "border": "1px solid #C7D2FE",  # Indigo 200
                                        },
                                        _hover={
                                            "background_color": "#C7D2FE"},
                                        on_click=rx.redirect(
                                            "/estudiantes")
                                    ),
                                ),
                                rx.cond(
                                    EstadoAutenticacion.rol_usuario == "administrador",
                                    rx.button(
                                        rx.hstack(
                                            rx.icon("book-plus", size=18), rx.text("Nueva Tesis", weight="bold")),
                                        width="100%", variant="soft", color_scheme="violet", size="3",
                                        style={
                                            "color": "#4C1D95",  # Violet 900
                                            "background_color": "#EDE9FE",  # Violet 100
                                            "border": "1px solid #DDD6FE",  # Violet 200
                                        },
                                        _hover={
                                            "background_color": "#DDD6FE"},
                                        on_click=rx.redirect("/boveda")
                                    ),
                                ),
                                rx.button(
                                    rx.hstack(
                                        rx.icon("library", size=18), rx.text("Explorar Bóveda", weight="bold")),
                                    width="100%", variant="soft", color_scheme="indigo", size="3",
                                    style={
                                        "color": "#312E81",
                                        "background_color": "#E0E7FF",
                                        "border": "1px solid #C7D2FE",
                                    },
                                    _hover={"background_color": "#C7D2FE"},
                                    on_click=rx.redirect("/boveda")
                                ),
                                rx.cond(
                                    EstadoAutenticacion.rol_usuario == "administrador",
                                    rx.button(
                                        rx.hstack(rx.icon("file-up", size=18),
                                                  rx.text("Subir Guía PDF", weight="bold")),
                                        width="100%", variant="soft", color_scheme="blue", size="3",
                                        style={
                                            "color": "#1E3A8A",  # Blue 900
                                            "background_color": "#DBEAFE",  # Blue 100
                                            "border": "1px solid #BFDBFE",  # Blue 200
                                        },
                                        _hover={
                                            "background_color": "#BFDBFE"},
                                        on_click=rx.redirect(
                                            "/documentacion")
                                    ),
                                    rx.button(
                                        rx.hstack(rx.icon("file-text", size=18),
                                                  rx.text("Ver Documentación", weight="bold")),
                                        width="100%", variant="soft", color_scheme="blue", size="3",
                                        style={
                                            "color": "#1E3A8A",
                                            "background_color": "#DBEAFE",
                                            "border": "1px solid #BFDBFE",
                                        },
                                        _hover={
                                            "background_color": "#BFDBFE"},
                                        on_click=rx.redirect(
                                            "/documentacion")
                                    ),
                                ),
                                rx.cond(
                                    EstadoAutenticacion.rol_usuario == "administrador",
                                    rx.button(
                                        rx.hstack(rx.icon("file-down", size=18),
                                                  rx.text("Reporte General", weight="bold")),
                                        width="100%", variant="soft", color_scheme="green", size="3",
                                        style={
                                            "color": "#064E3B",
                                            "background_color": "#D1FAE5",
                                            "border": "1px solid #A7F3D0",
                                        },
                                        _hover={"background_color": "#A7F3D0"},
                                        on_click=EstadoEstudiante.generar_reporte_estudiantes
                                    ),
                                ),
                                spacing="3",
                                width="100%",
                            ),
                            size="3",
                            style={"background": "#FFFFFF",
                                   "border": "1px solid #E2E8F0"}
                        ),
                        columns=rx.cond(
                            EstadoAutenticacion.rol_usuario == "administrador", "3", "1"),
                        spacing="5",
                        width="100%",
                    ),
                    width="100%",
                    max_width="1200px",
                    margin_x="auto",
                    # Padding estandarizado para alejar de los bordes
                    padding=["16px", "20px", "24px", "24px"],
                    on_mount=[
                        EstadoEstudiante.cargar_estudiantes,
                        EstadoPerfil.cargar_datos_iniciales,
                        EstadoBoveda.cargar_tesis,
                        EstadoDocumento.cargar_documentos
                    ],
                ),
            ),
            rx.center(
                rx.spinner(size="3", color="indigo"),
                width="100vw", height="100vh",
                background_color=COLOR_FONDO_GLOBAL,
                on_mount=EstadoAutenticacion.verificar_acceso
            )
        ),
        appearance="light",
        has_background=True,
    )
