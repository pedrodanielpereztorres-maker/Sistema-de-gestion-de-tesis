import reflex as rx
from sistema_tesis.estado.estado_autenticacion import EstadoAutenticacion
from ..estado.estado_layout import EstadoLayout


# ════════════════════════════════════════════════════════════
#  CONSTANTES DE DISEÑO
#  Centralizadas aquí para cambiar colores fácilmente.
# ════════════════════════════════════════════════════════════

COLOR_PRIMARIO = "#3B82F6"   # Azul brillante para buen contraste
COLOR_PRIMARIO_OSCURO = "#1E40AF"   # Azul oscuro
COLOR_SECUNDARIO = "#8B5CF6"   # Violeta
COLOR_ACTIVO_FONDO = "rgba(59,130,246,0.15)"
COLOR_HOVER_FONDO = "rgba(59,130,246,0.10)"
COLOR_TEXTO_PRINCIPAL = "#0F172A"  # Slate 900 (Máximo contraste)
COLOR_TEXTO_SECUNDARIO = "#1E293B"  # Slate 800
COLOR_TEXTO_TENUE = "#334155"  # Slate 700
COLOR_BORDE = "#E2E8F0"  # Gris claro
COLOR_PELIGRO = "#EF4444"  # Rojo
COLOR_FONDO_PANEL = "#FFFFFF"  # Fondo blanco
COLOR_FONDO_PIE = "#F8FAFC"  # Fondo gris muy suave

ANCHO_BARRA = "285px"
RADIO_ITEM = "10px"
RADIO_ICONO = "9px"
TAMANO_ICONO = 18


def etiqueta_seccion(titulo: str) -> rx.Component:
    return rx.hstack(
        rx.text(
            titulo,
            font_size="11px",
            font_weight="700",
            letter_spacing="0.12em",
            color=COLOR_TEXTO_TENUE,  # Gris medio
            text_transform="uppercase",
        ),
        rx.divider(border_color="rgba(100,116,139,0.30)"),
        width="100%",
        align="center",
        padding_x="10px",
        margin_top="18px",
        margin_bottom="4px",
        spacing="2",
    )


def _generar_contenido_enlace(
    texto: str,
    nombre_icono: str,
    ruta: str,
    es_admin_only: bool = False
) -> rx.Component:
    """Función interna para evitar duplicación de estilos en los enlaces."""
    esta_activo = rx.State.router.page.path == ruta

    return rx.hstack(
        rx.center(
            rx.icon(nombre_icono, size=TAMANO_ICONO,
                    stroke_width=1.8,
                    color=rx.cond(esta_activo, "white", COLOR_TEXTO_TENUE)),
            width="34px", height="34px", border_radius=RADIO_ICONO,
            background=rx.cond(esta_activo, COLOR_PRIMARIO, "transparent"),
            box_shadow=rx.cond(
                esta_activo, "0 3px 10px rgba(99,102,241,0.35)", "none"),
            flex_shrink="0",
            transition="all 0.18s ease",
        ),
        rx.text(
            texto, font_size="15px",
            font_weight=rx.cond(esta_activo, "600", "500"),
            color=rx.cond(esta_activo, COLOR_PRIMARIO_OSCURO,
                          COLOR_TEXTO_SECUNDARIO),
            transition="color 0.16s", flex="1",
        ),
        rx.cond(
            es_admin_only,
            rx.badge(
                "Admin", color_scheme="indigo", variant="soft", radius="full", size="1",
                style={
                    "color": "#3730A3",  # Indigo oscuro
                    "background_color": "#E0E7FF",  # Indigo muy claro
                    "font_weight": "bold",
                }
            ),
            rx.fragment()
        ),
        spacing="3", align="center", width="100%", padding_x="10px", padding_y="9px",
        border_radius=RADIO_ITEM,
        background=rx.cond(esta_activo, COLOR_ACTIVO_FONDO, "transparent"),
        border_left=rx.cond(
            esta_activo, f"3px solid {COLOR_PRIMARIO}", "3px solid transparent"),
        transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        _hover={
            "background": COLOR_HOVER_FONDO,
            "border_left": f"3px solid {COLOR_PRIMARIO}",
            "transform": "translateX(4px)",
        },
        cursor="pointer",
    )


def enlace_navegacion(texto: str, nombre_icono: str, ruta: str) -> rx.Component:
    return rx.link(
        _generar_contenido_enlace(texto, nombre_icono, ruta),
        href=ruta,
        underline="none",
        width="100%",
    )


def enlace_solo_administrador(texto: str, nombre_icono: str, ruta: str) -> rx.Component:
    return rx.cond(
        EstadoAutenticacion.rol_usuario == "administrador",
        rx.link(
            _generar_contenido_enlace(
                texto, nombre_icono, ruta, es_admin_only=True),
            href=ruta, underline="none", width="100%"
        ),
        rx.fragment(),
    )


# ════════════════════════════════════════════════════════════
#  COMPONENTE: ENCABEZADO DE LA BARRA
# ════════════════════════════════════════════════════════════

def encabezado_barra() -> rx.Component:
    """
    Parte superior de la barra lateral.
    Muestra el logo de la universidad y el nombre del sistema.
    El logo se carga desde /assets/logo.png.
    """
    return rx.hstack(
        # Logo de la universidad
        rx.image(
            src="/logo.png",
            alt="Logo de la universidad",
            width="46px",
            height="46px",
            object_fit="contain",
            border_radius="10px",
            background="white",
            padding="4px",
            box_shadow="0 2px 12px rgba(79,70,229,0.18)",
            flex_shrink="0",
        ),
        # Nombre y descripción del sistema
        rx.vstack(
            rx.text(
                "S.G.T.",
                font_size="16px",
                font_weight="800",
                letter_spacing="-0.4px",
                background="linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
                background_clip="text",
                color="transparent",
                line_height="1.2",
            ),
            rx.text(
                "Sistema de Gestión de Tesis",
                font_size="11px",
                font_weight="600",
                color=COLOR_TEXTO_SECUNDARIO,  # Gris claro
                letter_spacing="0.04em",
                text_transform="uppercase",
                line_height="1.4",
            ),
            spacing="0",
            align="start",
        ),
        align="center",
        spacing="3",
        width="100%",
        padding_x="16px",
        padding_y="18px",
        border_bottom=f"1px solid {COLOR_BORDE}",
    )


def pie_usuario() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.center(
                rx.text(
                    EstadoAutenticacion.inicial_usuario,
                    font_size="15px",
                    font_weight="700",
                    color="white",
                    text_transform="uppercase",
                ),
                width="40px",
                height="40px",
                border_radius="11px",
                background=f"linear-gradient(135deg, {COLOR_PRIMARIO}, {COLOR_SECUNDARIO})",
                box_shadow="0 2px 10px rgba(99,102,241,0.30)",
                flex_shrink="0",
            ),
            rx.vstack(
                rx.text(
                    EstadoAutenticacion.nombre_usuario,
                    font_size="14px",
                    font_weight="700",
                    color=COLOR_TEXTO_PRINCIPAL,  # Blanco grisáceo
                    white_space="nowrap",
                    overflow="hidden",
                    text_overflow="ellipsis",
                    max_width="140px",
                ),
                rx.text(
                    EstadoAutenticacion.rol_usuario.capitalize(),
                    font_size="12px",
                    font_weight="500",
                    color=COLOR_TEXTO_SECUNDARIO,  # Gris claro
                ),
                spacing="0",
                align="start",
                flex="1",
                min_width="0",
            ),
            align="center",
            spacing="3",
            width="100%",
        ),
        rx.button(
            rx.hstack(rx.icon("log-out", size=14, stroke_width=2),
                      rx.text("Cerrar sesión", font_size="12px", font_weight="600")),
            variant="surface",
            color_scheme="red",
            size="2",
            radius="large",
            on_click=EstadoAutenticacion.cerrar_sesion,
            cursor="pointer",
            title="Cerrar sesión",
            style={
                "border": "1px solid rgba(239, 68, 68, 0.3)",
                "font_weight": "bold",
                "box_shadow": "0 2px 4px rgba(0,0,0,0.05)",
            },
            _hover={
                "background_color": "#FEE2E2",
                "border_color": "#EF4444",
                "color": "#B91C1C",
                "transform": "scale(1.02)",
                "box_shadow": "0 4px 8px rgba(239, 68, 68, 0.15)",
            },
            transition="all 0.16s ease",
            width="100%",
        ),
        spacing="3",
        width="100%",
        padding_x="14px",
        padding_top="20px",
        # Margen inferior extra grande para que no lo tapen los botones del celular
        padding_bottom={"initial": "100px", "lg": "28px"},
        border_top=f"1px solid {COLOR_BORDE}",
        background=COLOR_FONDO_PIE,
    )


def sidebar_contenido() -> rx.Component:
    """Genera el contenido interno de la barra de navegación."""
    return rx.vstack(
        encabezado_barra(),
        rx.vstack(
            etiqueta_seccion("Principal"),
            enlace_navegacion("Inicio", "layout-dashboard", "/"),
            etiqueta_seccion("Gestión"),
            enlace_solo_administrador("Reportes", "bar-chart-big", "/reportes"),
            enlace_solo_administrador("Estudiantes", "users", "/estudiantes"),
            enlace_navegacion("Bóveda de Tesis", "library", "/boveda"),
            etiqueta_seccion("Académico"),
            enlace_navegacion("Documentación", "file-text", "/documentacion"),
            etiqueta_seccion("Sistema"),
            enlace_solo_administrador(
                "Mantenimiento", "settings-2", "/mantenimiento"),
            enlace_navegacion("Mi Perfil", "circle-user-round", "/perfil"),
            spacing="1",
            width="100%",
            padding_x="8px",
            padding_y="6px",
            flex="1",
            # Permitimos scroll vertical para que en Windows (donde las fuentes son más grandes) no se corten opciones
            overflow_y="auto",
            overflow_x="hidden",
            align="start",
            on_click=EstadoLayout.cerrar_menu,
        ),
        pie_usuario(),
        spacing="0",
        width="100%",
        height="100vh",
        align="start",
        background=COLOR_FONDO_PANEL,
    )


def barra_lateral() -> rx.Component:
    """
    Componente de compatibilidad. 
    Permite que las páginas que aún no usan 'layout_principal' sigan funcionando
    mientras se completa la migración.
    """
    return rx.box(
        sidebar_contenido(),
        width=ANCHO_BARRA,
        # Mantiene la lógica responsiva: oculto en móvil, visible en escritorio
        display={"initial": "none", "lg": "flex"},
        height="100vh",
        background=COLOR_FONDO_PANEL,
        border_right=f"1px solid {COLOR_BORDE}",
        position="sticky",
        top="0",
    )
