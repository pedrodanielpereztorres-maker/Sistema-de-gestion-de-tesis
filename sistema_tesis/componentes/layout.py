import reflex as rx
from .barra_lateral import sidebar_contenido, ANCHO_BARRA, COLOR_BORDE
from ..estado.estado_layout import EstadoLayout
from ..estado.estado_autenticacion import EstadoAutenticacion


def admin_restringido_movil() -> rx.Component:
    """Pantalla profesional que bloquea el acceso administrativo en móviles."""
    return rx.center(
        rx.card(
            rx.vstack(
                rx.center(
                    rx.icon("monitor-off", size=50, color="#EF4444"),
                    background="rgba(239, 68, 68, 0.08)",
                    padding="20px",
                    border_radius="22px",
                    margin_bottom="4",
                ),
                rx.heading("Acceso Administrativo Restringido",
                           size="5", color="#1E293B", text_align="center"),
                rx.text(
                    "Estimado Administrador, por motivos de seguridad y para garantizar una gestión óptima de los datos, "
                    "el panel de control está diseñado para ser utilizado exclusivamente en dispositivos de pantalla grande.",
                    size="2", color="#475569", text_align="center", weight="medium", line_height="1.6"
                ),
                rx.text(
                    "El uso de herramientas administrativas en pantallas pequeñas puede generar errores visuales e incomodidad. "
                    "Por favor, acceda desde su Laptop o PC de escritorio.",
                    size="2", color="#64748B", text_align="center", italic=True
                ),
                rx.button(
                    rx.hstack(rx.icon("log-out", size=18),
                              rx.text("Cerrar Sesión")),
                    on_click=EstadoAutenticacion.cerrar_sesion,
                    color_scheme="red",
                    variant="solid",
                    width="100%",
                    size="3",
                    radius="large",
                    cursor="pointer",
                    margin_top="4",
                    style={"font_weight": "bold"}
                ),
                spacing="4",
                align="center",
            ),
            padding="32px",
            max_width="380px",
            border_radius="28px",
            box_shadow="0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            border="1px solid #E2E8F0",
            background="white",
        ),
        width="100%",
        height="100vh",
        background="#F8FAFC",
    )


def generar_cuerpo_sistema(contenido: rx.Component) -> rx.Component:
    """Genera la estructura visual interna del sistema."""
    return rx.flex(
        # ── SIDEBAR ESCRITORIO (LG+) ──
        rx.box(
            sidebar_contenido(),
            width=ANCHO_BARRA,
            height="100vh",
            position="sticky",
            top="0",
            display=["none", "none", "none", "flex"],  # Visible solo en LG
            border_right=f"1px solid {COLOR_BORDE}",
            flex_shrink="0", overflow="hidden",
        ),

        # ── CONTENEDOR DERECHO (Header + Página) ──
        rx.vstack(
            # HEADER (Solo visible en móvil/tablet)
            rx.hstack(
                rx.icon_button(
                    rx.icon("menu", size=24),
                    on_click=EstadoLayout.alternar_menu,
                    variant="ghost",
                    color_scheme="indigo",
                    display=["flex", "flex", "flex", "none"],  # Oculto en LG
                    cursor="pointer",
                ),
                rx.image(src="/logo.png", width="42px", height="42px"),
                rx.heading("S.G.T.", size="4", color="#3B82F6"),
                rx.spacer(),
                rx.icon_button(
                    rx.icon("log-out", size=20),
                    on_click=EstadoAutenticacion.cerrar_sesion,
                    variant="surface",
                    color_scheme="indigo",
                    size="2",
                    radius="medium",
                    cursor="pointer",
                    style={
                        "border": "1px solid rgba(79, 70, 229, 0.3)",
                        "background": "rgba(79, 70, 229, 0.05)"
                    },
                    _hover={"background": "rgba(79, 70, 229, 0.1)"},
                    display=["flex", "flex", "flex", "none"],
                ),
                width="100%",
                padding="12px 20px",
                background="white",
                border_bottom=f"1px solid {COLOR_BORDE}",
                align="center",
                display=["flex", "flex", "flex", "none"],  # Oculto en LG
            ),

            # CONTENIDO DINÁMICO DE LA PÁGINA
            rx.box(
                contenido,
                # Separación del borde superior en móvil y desktop
                padding_top=["20px", "20px", "24px", "28px"],
                # Ajuste de separación del sidebar para que no esté tan apartado
                padding_x=["16px", "16px", "20px", "24px"],
                # Separación del borde inferior
                padding_bottom="40px",
                width="100%",
                flex="1",
                overflow_x="hidden",
            ),
            width="100%",
            align="start",
            spacing="0",
            min_height="100vh",
            flex="1",
            overflow_x="hidden",  # Evita el scroll horizontal
        ),

        # ── DRAWER MÓVIL (Overlay) ──
        rx.cond(
            EstadoLayout.menu_abierto,
            rx.box(
                # Fondo Oscuro (Backdrop)
                rx.box(
                    on_click=EstadoLayout.cerrar_menu,
                    position="fixed",
                    inset="0",
                    background="rgba(0,0,0,0.5)",
                    backdrop_filter="blur(2px)",
                    z_index="1000",
                ),
                # Panel Lateral (Drawer)
                rx.box(
                    rx.vstack(
                        rx.hstack(
                            rx.heading("Navegación", size="4"),
                            rx.spacer(),
                            rx.icon_button(
                                rx.icon("x", size=20),
                                on_click=EstadoLayout.cerrar_menu,
                                variant="ghost",
                                color_scheme="gray",
                            ),
                            width="100%",
                            padding="16px",
                            align="center",
                            background="white",
                            position="sticky",
                            top="0",
                            z_index="10",
                            border_bottom=f"1px solid {COLOR_BORDE}",
                        ),
                        # El contenido del sidebar es desplazable
                        rx.box(sidebar_contenido(), width="100%"),
                        width="100%",
                    ),
                    position="fixed",
                    top="0",
                    left="0",
                    width=ANCHO_BARRA,
                    height="100vh",
                    background="white",
                    overflow_y="auto",
                    z_index="1001",
                    box_shadow="5px 0 25px rgba(0,0,0,0.2)",
                ),
                display=["block", "block", "block", "none"],
            )
        ),

        width="100%",
        min_height="100vh",
        background="#F8FAFC",
    )


def layout_principal(contenido: rx.Component) -> rx.Component:
    """
    Estructura base del sistema con sidebar responsivo.
    Implementa lógica de visibilidad para móvil (drawer) y desktop (fijo).
    """
    # Aplicamos la restricción para el Administrador
    return rx.cond(
        EstadoAutenticacion.rol_usuario == "administrador",
        rx.box(
            rx.box(admin_restringido_movil(), display=["flex", "flex", "flex", "none"]),
            rx.box(generar_cuerpo_sistema(contenido), display=["none", "none", "none", "flex"]),
            width="100%",
            id="layout-admin-root",
            key="layout-admin"
        ),
        rx.box(
            generar_cuerpo_sistema(contenido),
            width="100%",
            id="layout-estudiante-root",
            key="layout-student"
        )
    )
