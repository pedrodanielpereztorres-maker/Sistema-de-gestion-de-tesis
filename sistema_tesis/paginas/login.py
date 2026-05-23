import reflex as rx
from ..estado.estado_autenticacion import EstadoAutenticacion
from ..componentes.toast_viewer import toast_viewer
# Importar desde el componente base
from ..componentes.campo_texto import COLOR_TEXTO_BOLD

COLOR_FONDO_GLOBAL = "white"


def pagina_login() -> rx.Component:
    return rx.theme(
        rx.box(
            rx.center(
                rx.card(
                    rx.vstack(
                        rx.center(
                            rx.icon("graduation-cap", size=48,
                                    color=rx.color("indigo", 9)),
                            width="100%",
                            margin_bottom="4",
                        ),
                        rx.center(
                            rx.heading("Bienvenido", size="6",
                                       align="center", weight="bold", color="#0F172A"),
                            width="100%",
                            margin_bottom="4",
                        ),
                        rx.center(
                            rx.text("Sistema de Gestión de Tesis",
                                    color="#1E293B", size="2", margin_bottom="4", font_weight="500"),
                            width="100%",
                            margin_bottom="4",
                        ),
                        rx.vstack(
                            rx.text("Usuario", size="2",
                                    weight="bold", color="#1E293B"),
                            rx.input(
                                placeholder="ejemplo@correo.com",
                                value=EstadoAutenticacion.entrada_usuario,
                                on_change=EstadoAutenticacion.fijar_entrada_usuario,
                                width="100%",
                                variant="classic",
                                size="3",
                                style={
                                    "background": "white",
                                    "border": "1.6px solid #94A3B8",
                                    "color": "black",
                                    "font_size": "15px",
                                    "font_weight": "bold",
                                    "box_shadow": "inset 0 1px 3px rgba(15,23,42,0.12)",
                                    "&::placeholder": {"color": "#000000", "opacity": "1", "font_weight": "bold"},
                                },
                                _focus={
                                    "border_color": "#4338CA",
                                    "box_shadow": "0 0 0 3px rgba(99,102,241,0.22)",
                                    "outline": "none",
                                },
                                _hover={"border_color": "#6366F1"}
                            ),
                            width="100%",
                        ),
                        rx.vstack(
                            rx.text("Contraseña", size="2",
                                    weight="bold", color="#1E293B"),
                            rx.box(
                                rx.input(
                                    placeholder="••••••••",
                                    type=rx.cond(
                                        EstadoAutenticacion.mostrar_contrasena,
                                        "text",
                                        "password"
                                    ),
                                    value=EstadoAutenticacion.entrada_contrasena,
                                    on_change=EstadoAutenticacion.fijar_entrada_contrasena,
                                    width="100%",
                                    variant="classic",
                                    size="3",
                                    style={
                                        "background": "white",
                                        "border": "1.6px solid #94A3B8",
                                        "color": "black",
                                        "font_size": "15px",
                                        "font_weight": "bold",
                                        "padding_right": "45px",
                                        "box_shadow": "inset 0 1px 3px rgba(15,23,42,0.12)",
                                        "&::placeholder": {"color": "#000000", "opacity": "1", "font_weight": "bold"},
                                    },
                                    _focus={
                                        "border_color": "#4338CA",
                                        "box_shadow": "0 0 0 3px rgba(99,102,241,0.22)",
                                        "outline": "none",
                                    },
                                    _hover={"border_color": "#6366F1"}
                                ),
                                rx.icon_button(
                                    rx.icon(
                                        rx.cond(
                                            EstadoAutenticacion.mostrar_contrasena, "eye-off", "eye"),
                                        size=18
                                    ),
                                    on_click=EstadoAutenticacion.alternar_mostrar_contrasena,
                                    variant="ghost",
                                    color_scheme="gray",
                                    position="absolute",
                                    right="10px",
                                    top="0",
                                    height="100%",
                                    display="flex",
                                    align_items="center",
                                    z_index="10",
                                    cursor="pointer",
                                    _hover={
                                        "background": "transparent",
                                        "opacity": "0.7",
                                    },
                                ),
                                position="relative",
                                width="100%",
                            ),
                            width="100%",
                        ),
                        rx.button(
                            "Iniciar Sesión",
                            on_click=EstadoAutenticacion.iniciar_sesion,
                            width="100%",
                            size="3",
                            margin_top="2",
                        ),
                        toast_viewer(),
                        spacing="4",
                        width="100%",
                    ),
                    size="4",
                    width="100%",
                    max_width="400px",
                    style={"background": "#FFFFFF", "opacity": "1"},
                    box_shadow="lg",
                ),
                height="100vh",
            ),
            rx.image(
                src="/logo.png",
                width=["100px", "130px", "160px"],
                object_fit="contain",
                position="fixed",
                bottom="0px",
                right="0px",
                opacity=["0.6", "0.4", "0.3"],  # Más visible en móvil
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))",
                transition="all 0.4s ease-in-out",
                _hover={"opacity": "0.9", "transform": "scale(1.05)"},
                z_index="10",
            ),
            background=COLOR_FONDO_GLOBAL,
            width="100%",
            height="100vh",
            position="relative",
        ),
        appearance="light",
        has_background=True,
    )
