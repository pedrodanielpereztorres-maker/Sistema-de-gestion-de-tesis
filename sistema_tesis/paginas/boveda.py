import reflex as rx
from ..estado.estado_autenticacion import EstadoAutenticacion
from ..estado.estado_boveda import EstadoBoveda
from ..componentes.toast_viewer import toast_viewer
from ..componentes.campo_texto import campo_texto
from ..componentes.encabezado import encabezado_pagina
from ..componentes.layout import layout_principal

COLOR_PRIMARIO = "#6366F1"
COLOR_FONDO_GLOBAL = "#F8F9FF"
COLOR_PRIMARIO_OSCURO = "#4338CA"
COLOR_TEXTO_TITULO = "#0F172A"
COLOR_TEXTO_SUAVE = "#1E293B"
COLOR_TEXTO_MUY_SUAVE = "#334155"
COLOR_BORDE = "#E2E8F0"
DEGRADADO_ICONO = "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)"


# ════════════════════════════════════════════════════════════
#  COMPONENTE: TARJETA DE TESIS
# ════════════════════════════════════════════════════════════

def tarjeta_tesis(tesis: rx.Var[dict]) -> rx.Component:
    """Card individual con datos de una tesis registrada."""
    return rx.box(
        rx.vstack(
            # ── Encabezado: avatar + nombre + carrera ─────
            rx.hstack(
                rx.center(
                    rx.text(
                        # Usamos .to(str) para asegurar que podemos tratarlo como cadena
                        tesis["nombre_estudiante"].to(str)[0],
                        font_size="18px",
                        font_weight="800",
                        color="white",
                        text_transform="uppercase",
                    ),
                    width="44px",
                    height="44px",
                    border_radius="12px",
                    background=DEGRADADO_ICONO,
                    box_shadow="0 3px 10px rgba(99,102,241,0.30)",
                    flex_shrink="0",
                ),
                rx.vstack(
                    rx.text(
                        # Concatenamos asegurando que son strings
                        tesis["nombre_estudiante"].to(str) + " " +
                        tesis["apellido_estudiante"].to(str),
                        font_size="16px",
                        font_weight="800",
                        color=COLOR_TEXTO_TITULO,
                        no_of_lines=1,
                    ),
                    rx.cond(
                        tesis["publico"].to(bool),
                        rx.badge(
                            "Pública", variant="soft", color_scheme="green", radius="full", font_size="11px",
                            style={
                                "color": "#065F46",  # Verde esmeralda oscuro
                                "background_color": "#D1FAE5",  # Verde esmeralda claro
                                "border": "1px solid #A7F3D0",
                                "font_weight": "bold",
                            }
                        ),
                        rx.badge(
                            "Privada", variant="soft", color_scheme="gray", radius="full", font_size="11px",
                            style={
                                "color": "#1E293B",  # Slate oscuro
                                "background_color": "#F1F5F9",  # Slate claro
                                "border": "1px solid #E2E8F0",
                                "font_weight": "bold",
                            }
                        ),
                    ),
                    align="start",
                    spacing="1",
                    flex="1",
                ),
                rx.badge(
                    tesis["carrera"].to(str),
                    variant="soft",
                    color_scheme="indigo",
                    radius="full",
                    font_size="12px",
                    font_weight="700",
                    padding_x="10px",
                    style={
                        "color": "#3730A3",  # Indigo oscuro
                        "background_color": "#E0E7FF",  # Indigo claro
                        "border": "1px solid #C7D2FE",
                    }
                ),
                width="100%",
                align="center",
                spacing="3",
            ),

            # Título
            rx.box(
                rx.text(
                    tesis["titulo"].to(str),
                    font_size="15px",
                    font_weight="700",
                    color=COLOR_TEXTO_TITULO,
                    line_height="1.4",
                    no_of_lines=3,
                ),
                width="100%",
                border_left="4px solid #6366F1",
                padding_left="14px",
                margin_y="2",
            ),

            # Información detallada: Tutores y Empresa (Diseño Vertical Mejorado)
            rx.vstack(
                rx.vstack(
                    rx.hstack(
                        rx.icon("user", size=15,
                                color=COLOR_PRIMARIO, stroke_width=2.5),
                        rx.text("Tutor Académico", font_size="11px", font_weight="800",
                                color=COLOR_TEXTO_MUY_SUAVE, text_transform="uppercase"),
                        spacing="1", align="center",
                    ),
                    rx.text(tesis["tutor_academico"].to(str), font_size="14px",
                            font_weight="600", color=COLOR_TEXTO_TITULO, no_of_lines=1),
                    spacing="1", align="start",
                ),
                rx.vstack(
                    rx.hstack(
                        rx.icon("user-check", size=15,
                                color="#10B981", stroke_width=2.5),
                        rx.text("Tutor Empresarial", font_size="11px", font_weight="800",
                                color=COLOR_TEXTO_MUY_SUAVE, text_transform="uppercase"),
                        spacing="1", align="center",
                    ),
                    rx.text(tesis["tutor_empresa"].to(str), font_size="14px",
                            font_weight="600", color=COLOR_TEXTO_TITULO, no_of_lines=1),
                    spacing="1", align="start",
                ),
                rx.vstack(
                    rx.hstack(
                        rx.icon("building-2", size=15,
                                color="#0EA5E9", stroke_width=2.5),
                        rx.text("Empresa", font_size="11px", font_weight="800",
                                color=COLOR_TEXTO_MUY_SUAVE, text_transform="uppercase"),
                        spacing="1", align="center",
                    ),
                    rx.text(tesis["nombre_empresa"].to(str), font_size="14px",
                            font_weight="600", color=COLOR_TEXTO_TITULO, no_of_lines=1),
                    spacing="1", align="start",
                ),
                spacing="4", width="100%", align="start",
                padding_top="14px", border_top=f"1px solid {COLOR_BORDE}",
            ),

            # Botones de acción
            rx.hstack(
                rx.link(
                    rx.button(
                        rx.icon("eye", size=18), "Visualizar",
                        variant="surface", color_scheme="indigo", size="3", width="100%",
                        style={
                            "font_weight": "bold",
                            "cursor": "pointer",
                            "border": "1px solid rgba(99,102,241,0.2)"
                        },
                        _hover={"background_color": "#E0E7FF",
                                "transform": "translateY(-1px)"},
                    ),
                    href=rx.cond(
                        tesis["url"].to(str) != "",
                        tesis["url"].to(str) + "#toolbar=0",
                        "#"
                    ),
                    is_external=True,
                    style={"textDecoration": "none", "flex": "1"},
                ),
                # Botón de descarga: SOLO para Administradores
                rx.cond(
                    EstadoAutenticacion.rol_usuario == "administrador",
                    rx.button(
                        rx.icon("download", size=18), "Descargar",
                        on_click=rx.download(
                            url=tesis["url"].to(str),
                            filename=f"Tesis_{tesis['cedula_estudiante'].to(str)}.pdf"
                        ),
                        variant="solid", color_scheme="blue", size="3",
                        style={
                            "font_weight": "bold",
                            "cursor": "pointer",
                        },
                        flex="1",
                        _hover={
                            "transform": "translateY(-1px)", "box_shadow": "lg"}
                    )
                ),
                width="100%", padding_top="12px"
            ),

            # Botones de edición y eliminación (solo para admin o dueño)
            rx.cond(
                (EstadoAutenticacion.rol_usuario == "administrador") |
                (EstadoAutenticacion.usuario.id == tesis["usuario_id"]),
                rx.hstack(
                    rx.icon_button(
                        rx.icon("pencil", size=18), "Editar",
                        on_click=EstadoBoveda.abrir_modal_edicion(tesis["id"]),
                        variant="soft", color_scheme="blue", size="3",
                        style={
                            "color": "#1E3A8A",  # Blue 900
                            "background_color": "#DBEAFE",  # Blue 100
                            "border": "1px solid #BFDBFE",  # Blue 200
                            "font_weight": "bold",
                        },
                        _hover={"background_color": "#BFDBFE",
                                "transform": "scale(1.02)"},
                        flex="1",
                    ),
                    rx.icon_button(
                        rx.icon("trash-2", size=18), "Eliminar",
                        on_click=EstadoBoveda.abrir_modal_confirmacion(
                            tesis["id"]),
                        variant="soft", color_scheme="red", size="3",
                        style={
                            "color": "#B91C1C",  # Red 800
                            "background_color": "#FEE2E2",  # Red 100
                            "border": "1px solid #FECACA",  # Red 200
                            "font_weight": "bold",
                        },
                        _hover={"background_color": "#FECACA",
                                "transform": "scale(1.02)"},
                        flex="1",
                    ),
                    width="100%", spacing="3", padding_top="12px"
                ),
                rx.box(),  # Si no tiene permisos, no muestra nada
            ),
            height="100%", padding="24px", border_radius="16px",
            background="white", border="1px solid " + COLOR_BORDE,
            box_shadow="0 1px 4px rgba(0,0,0,0.06)",
            _hover={
                "transform": "translateY(-4px)",
                "box_shadow": "0 12px 28px rgba(99,102,241,0.14), 0 4px 10px rgba(0,0,0,0.06)",
                "border_color": "rgba(99,102,241,0.25)",
            },
            transition="all 0.22s cubic-bezier(0.4, 0, 0.2, 1)",
        )
    )


def estado_vacio_boveda() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.center(
                rx.icon("book-open", size=48,
                        color="rgba(99,102,241,0.35)", stroke_width=1.3),
                width="96px", height="96px", border_radius="24px",
                background="rgba(99,102,241,0.06)",
                border="1.5px dashed rgba(99,102,241,0.22)",
            ),
            rx.vstack(
                rx.text("La bóveda está vacía", font_size="17px", font_weight="700",
                        color="#334155", text_align="center"),
                rx.text("Registra la primera tesis usando el botón de arriba.",
                        font_size="13.5px", color=COLOR_TEXTO_MUY_SUAVE, text_align="center"),
                spacing="1", align="center",
            ),
            width="100%", spacing="4", align="center", padding_bottom="10px",
            direction={"initial": "column", "md": "row"},
        ),
        padding_y="80px", width="100%",
    )


def seccion_modal(icono: str, titulo: str, *contenido, **estilos) -> rx.Component:
    # Definir valores por defecto y permitir sobrescritura desde **estilos para evitar duplicidad
    estilos.setdefault("spacing", "4")
    estilos.setdefault("width", "100%")
    estilos.setdefault("padding", "22px")
    estilos.setdefault("border_radius", "14px")
    estilos.setdefault("background", "white")
    estilos.setdefault("border", f"1.5px solid {COLOR_BORDE}")
    estilos.setdefault("border_left", f"4px solid {COLOR_PRIMARIO}")
    estilos.setdefault("box_shadow", "0 2px 4px rgba(0,0,0,0.02)")

    return rx.vstack(
        rx.hstack(
            rx.center(
                rx.icon(icono, size=13, stroke_width=2, color="white"),
                width="26px", height="26px", border_radius="7px",
                background=DEGRADADO_ICONO, flex_shrink="0",
            ),
            rx.text(titulo, font_size="11px", font_weight="700",
                    color=COLOR_TEXTO_SUAVE, letter_spacing="0.07em",
                    text_transform="uppercase"),
            rx.box(flex="1", height="1px",
                   background="linear-gradient(90deg, rgba(99,102,241,0.20), transparent)"),
            align="center", spacing="3", width="100%",
        ),
        *contenido,
        **estilos,
    )


def modal_nueva_tesis() -> rx.Component:
    return rx.cond(
        EstadoBoveda.mostrar_modal,

        rx.box(
            rx.box(
                position="fixed",
                top="0", left="0",
                width="100vw", height="100vh",
                background="rgba(10,10,30,0.55)",
                backdrop_filter="blur(3px)",
                z_index="100",
                on_click=EstadoBoveda.cerrar_modal,
            ),
            rx.center(
                rx.vstack(
                    rx.hstack(
                        rx.center(
                            rx.icon("book-plus", size=20,
                                    stroke_width=1.8, color="white"),
                            width="44px", height="44px", border_radius="13px",
                            background=DEGRADADO_ICONO,
                            box_shadow="0 4px 14px rgba(99,102,241,0.35)",
                            flex_shrink="0",
                        ),
                        rx.vstack(
                            rx.text(
                                rx.cond(
                                    EstadoBoveda.en_edicion,
                                    "Editar Tesis",
                                    "Registrar Nueva Tesis"
                                ),
                                font_size="18px", font_weight="800", color=COLOR_TEXTO_TITULO,
                                letter_spacing="-0.3px"
                            ),
                            rx.text(rx.cond(EstadoBoveda.en_edicion, "Actualice la información del trabajo de grado.", "Ingrese la cédula para vincular al autor."),
                                    font_size="12.5px", color=COLOR_TEXTO_SUAVE),
                            spacing="0", align="start",
                        ),
                        rx.spacer(),
                        rx.icon_button(
                            rx.icon("x", size=15, stroke_width=2),
                            variant="ghost", color_scheme="gray", size="2",
                            border_radius="9px", cursor="pointer",
                            on_click=EstadoBoveda.cerrar_modal,
                            _hover={
                                "background": "rgba(239,68,68,0.10)", "color": "#EF4444"},
                            transition="all 0.15s ease",
                        ),
                        align="center", spacing="4", width="100%",
                        padding_bottom="18px",
                        border_bottom="1px solid " + COLOR_BORDE,
                    ),
                    # --- ÁREA DESPLAZABLE DEL FORMULARIO ---
                    rx.vstack(
                        rx.flex(
                            rx.box(
                                rx.icon(
                                    "search", size=15,
                                    color="#475569",
                                    stroke_width=2,
                                    position="absolute",
                                    left="13px", top="50%",
                                    transform="translateY(-50%)",
                                    z_index="1",
                                    pointer_events="none",
                                ),
                                rx.input(
                                    on_change=EstadoBoveda.fijar_cedula_busqueda,
                                    value=EstadoBoveda.cedula_busqueda,
                                    placeholder="Cédula del estudiante...",
                                    size="3",
                                    variant="classic",
                                    width="100%",
                                    radius="large",
                                    style={
                                        "padding_left":  "42px",
                                        "padding_right": "10px",
                                        "background_color": "white",
                                        "border":        "1.5px solid #CBD5E1",
                                        "color":         "black",
                                        "font_size":     "13.5px",
                                        "font_weight":   "bold",
                                        "&::placeholder": {
                                            "color": "#64748B",
                                            "opacity": "1",
                                        },
                                    },
                                    _focus={
                                        "border_color": COLOR_PRIMARIO,
                                        "box_shadow":   "0 0 0 3px rgba(99,102,241,0.15)",
                                        "outline":      "none",
                                    },
                                    _hover={"border_color": "#A5B4FC"},
                                    transition="border-color 0.15s ease",
                                ),
                                position="relative",
                                flex="1",
                            ),
                            rx.button(
                                rx.icon("search", size=15, stroke_width=2),
                                rx.text("Buscar", font_weight="600"),
                                on_click=EstadoBoveda.buscar_estudiante,
                                size="3", radius="large", color_scheme="indigo",
                                cursor="pointer", background=DEGRADADO_ICONO,
                                box_shadow="0 3px 10px rgba(99,102,241,0.25)",
                                _hover={
                                    "box_shadow": "0 5px 16px rgba(99,102,241,0.35)"},
                                transition="all 0.15s ease",
                            ),
                            width="100%", spacing="3", align="center", direction="row",
                        ),
                        rx.grid(
                            # COLUMNA IZQUIERDA: Datos del Estudiante
                            seccion_modal(
                                "user", "Autor",
                                rx.vstack(
                                    campo_texto("Nombre Completo", 
                                                EstadoBoveda.nombre_encontrado + " " + EstadoBoveda.apellido_encontrado, 
                                                None, solo_lectura=True),
                                    campo_texto("Carrera", EstadoBoveda.carrera_encontrada, None, solo_lectura=True),
                                    campo_texto("Tutor Académico", EstadoBoveda.tutor_academico_encontrado, None, solo_lectura=True),
                                    campo_texto("Empresa", EstadoBoveda.empresa_encontrada, None, solo_lectura=True),
                                    spacing="3", width="100%",
                                ),
                                height="100%",
                            ),
                            # COLUMNA DERECHA: Detalles
                            seccion_modal(
                                "file-text", "Trabajo de Grado",
                                rx.vstack(
                                    rx.text("Título de la Tesis", font_size="13px", font_weight="600", color=COLOR_TEXTO_TITULO),
                                    rx.text_area(
                                        placeholder="Ingrese el título completo...",
                                        on_change=EstadoBoveda.fijar_titulo_tesis,
                                        value=EstadoBoveda.titulo_tesis,
                                        width="100%",
                                        style={"min_height": "125px", "border": "1.5px solid #CBD5E1", "font_size": "13.5px", "resize": "none", "color": "black"}
                                    ),
                                    rx.hstack(
                                        rx.checkbox(on_change=EstadoBoveda.fijar_hacer_publico, checked=EstadoBoveda.hacer_publico, color_scheme="indigo"),
                                        rx.text("Hacer pública en la biblioteca digital", font_size="13px", font_weight="600"),
                                        align="center", spacing="2", padding="12px", bg="rgba(99,102,241,0.04)", border_radius="10px", width="100%"
                                    ),
                                    spacing="3", width="100%",
                                ),
                                height="100%",
                            ),
                            columns={"initial": "1", "lg": "2"},
                            spacing="4",
                            width="100%",
                        ),
                        seccion_modal(
                            "upload", "Archivo de la Tesis",
                            rx.cond(
                                rx.selected_files("upload_tesis"),
                                rx.hstack(
                                    rx.center(
                                        rx.icon("file-check", size=24,
                                                color=COLOR_PRIMARIO),
                                        width="48px", height="48px",
                                        background="rgba(99,102,241,0.1)", border_radius="10px"
                                    ),
                                    rx.vstack(
                                        rx.foreach(
                                            rx.selected_files(
                                                "upload_tesis"),
                                            lambda f: rx.text(
                                                f, font_weight="bold", size="3", color=COLOR_TEXTO_TITULO, no_of_lines=1)
                                        ),
                                        rx.text("Nuevo archivo listo para subir",
                                                size="2", color=COLOR_TEXTO_SUAVE),
                                        spacing="0", align="start"
                                    ),
                                    rx.spacer(),
                                    rx.button(
                                        rx.icon("trash-2", size=16),
                                        "Quitar",
                                        on_click=rx.clear_selected_files(
                                            "upload_tesis"),
                                        color_scheme="red", variant="soft", size="2", cursor="pointer"
                                    ),
                                    width="100%", padding="16px",
                                    border=f"1.5px solid {COLOR_PRIMARIO}",
                                    border_radius="12px", background="rgba(99,102,241,0.03)", align="center"
                                ),
                                rx.upload(
                                    rx.cond(
                                        EstadoBoveda.en_edicion & (
                                            EstadoBoveda.ruta_archivo_actual != ""),
                                        rx.hstack(
                                            rx.center(
                                                rx.icon("file-text", size=24,
                                                        color=COLOR_PRIMARIO),
                                                width="48px", height="48px",
                                                background="rgba(99,102,241,0.1)", border_radius="10px"
                                            ),
                                            rx.vstack(
                                                rx.text(EstadoBoveda.ruta_archivo_actual.split('/')[-1],
                                                        font_weight="bold", size="3", color=COLOR_TEXTO_TITULO, no_of_lines=1),
                                                rx.text("Archivo actual (Haz clic para cambiar)",
                                                        size="2", color=COLOR_TEXTO_SUAVE),
                                                spacing="0", align="start", flex="1"
                                            ),
                                            rx.icon(
                                                "upload", size=18, color=COLOR_PRIMARIO, opacity=0.6),
                                            width="100%", align="center", spacing="3"
                                        ),
                                        rx.vstack(
                                            rx.icon("file-up", size=24,
                                                    color="#94A3B8"),
                                            rx.text("Arrastra el PDF de la tesis o haz clic",
                                                    color="#64748B", font_size="13px"),
                                            align="center", spacing="2"
                                        )
                                    ),
                                    id="upload_tesis",
                                    border="2px dashed #CBD5E1",
                                    padding="20px",
                                    border_radius="12px",
                                    background="#F8FAFC",
                                    width="100%",
                                    max_files=1,
                                    accept={"application/pdf": [".pdf"]},
                                    _hover={
                                        "border_color": COLOR_PRIMARIO,
                                        "background": "rgba(99,102,241,0.02)"
                                    },
                                    transition="all 0.2s ease",
                                    cursor="pointer"
                                )
                            ),
                        ),
                        spacing="5",
                        max_height="60vh",
                        overflow_y="auto",
                        padding_right="10px",
                        style={
                            "&::-webkit-scrollbar": {"width": "6px"},
                            "&::-webkit-scrollbar-thumb": {
                                "background": "#CBD5E1",
                                "border-radius": "10px",
                            },
                        },
                        width="100%",
                    ),
                    rx.flex(
                        rx.button(
                            rx.icon("ban", size=14, stroke_width=1.8),
                            rx.text("Cancelar", font_weight="600"),
                            on_click=EstadoBoveda.cerrar_modal,
                            variant="soft", color_scheme="gray",
                            size="3", radius="large", cursor="pointer",
                            flex={"initial": "1", "sm": "none"},
                            style={
                                "color": "#0F172A",
                                "background_color": "#F1F5F9",
                                "border": "1.5px solid #94A3B8",
                                "font_weight": "700",
                            },
                            _hover={
                                "background_color": "#E2E8F0"},
                            transition="all 0.15s ease",
                        ),
                        rx.button(
                            rx.icon("check", size=14, stroke_width=2),
                            rx.text(
                                rx.cond(
                                    EstadoBoveda.en_edicion,
                                    "Guardar Cambios",
                                    "Registrar Tesis"
                                ),
                                font_weight="700"
                            ),
                            on_click=lambda: EstadoBoveda.registrar_tesis(
                                rx.upload_files("upload_tesis")),
                            size="3", radius="large",
                            flex={"initial": "1", "sm": "none"},
                            color_scheme="indigo", cursor="pointer",
                            loading=EstadoBoveda.procesando,
                            background=DEGRADADO_ICONO,
                            box_shadow="0 4px 14px rgba(99,102,241,0.28)",
                            _hover={
                                "box_shadow": "0 6px 20px rgba(99,102,241,0.40)",
                                "transform": "translateY(-1px)",
                            },
                            transition="all 0.15s ease",
                        ),
                        spacing="3",
                        width="100%",
                        flex_direction="row",  # Siempre uno al lado del otro
                        justify="between",     # Distribución perfecta en móvil
                        padding_top="18px",
                        border_top="1px solid " + COLOR_BORDE,
                    ),

                    spacing="5", width="100%",
                    padding_bottom="5px",
                ),
                on_click=rx.stop_propagation,
                style={
                    "background": "white",
                    "border-radius": "22px",
                    "padding": "32px",
                    "width": "840px",
                    "max-width": "96vw",
                    "z-index": "200",
                    "border": f"1px solid {COLOR_BORDE}",
                    "box_shadow": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    "margin-y": "40px",
                },
            ),
            display="flex",
            align_items="start",
            justify_content="center",
            position="fixed",
            inset="0",
            z_index="200",
            overflow_y="auto",
        ),
    )


def modal_confirmar_eliminacion_tesis() -> rx.Component:
    """Modal de seguridad para confirmar la eliminación de una tesis."""
    return rx.cond(
        EstadoBoveda.mostrar_modal_confirmacion,
        rx.box(
            rx.box(
                position="fixed", inset="0", bg="rgba(10,10,30,0.6)",
                backdrop_filter="blur(4px)", z_index="300",
                on_click=EstadoBoveda.cerrar_modal_confirmacion,
            ),
            rx.box(
                rx.vstack(
                    rx.hstack(
                        rx.center(
                            rx.icon("triangle-alert", size=22,
                                    color="white", stroke_width=2.5),
                            width="44px", height="44px", border_radius="12px",
                            background="linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)",
                            box_shadow="0 4px 12px rgba(239,68,68,0.3)"
                        ),
                        rx.vstack(
                            rx.text("Confirmar Eliminación", size="4",
                                    weight="bold", color="#0F172A"),
                            rx.text("Esta acción es irreversible", size="1",
                                    color="#B91C1C", font_weight="700"),
                            spacing="0", align="start"
                        ),
                        width="100%", align="center", border_bottom="1px solid #E2E8F0", padding_bottom="16px"
                    ),
                    rx.text(
                        "Por motivos de seguridad, debe ingresar su contraseña para confirmar que desea eliminar permanentemente este trabajo de grado.",
                        size="2", color="#334155", line_height="1.5"
                    ),
                    rx.vstack(
                        rx.text("Su Contraseña", size="2",
                                weight="bold", color="#1E293B"),
                        rx.input(
                            type="password", placeholder="••••••••",
                            on_change=EstadoBoveda.fijar_password_confirmacion,
                            width="100%", variant="classic", size="3",
                            style={
                                "border": "1.5px solid #64748B",
                                "font_weight": "bold",
                                "&::placeholder": {"color": "#000000", "opacity": "1", "font_weight": "bold"},
                            },
                        ),
                        width="100%", spacing="2", align="start"
                    ),
                    rx.hstack(
                        rx.button("Cancelar", on_click=EstadoBoveda.cerrar_modal_confirmacion,
                                  variant="soft", color_scheme="gray", size="3", cursor="pointer"),
                        rx.button(
                            "Eliminar Definitivamente", on_click=EstadoBoveda.confirmar_eliminacion_tesis,
                            variant="solid", color_scheme="red", size="3", cursor="pointer"
                        ),
                        justify="end", width="100%", spacing="3", padding_top="12px"
                    ),
                    spacing="5", width="100%"
                ),
                padding="32px", background="white", border_radius="20px",
                width="480px", max_width="94vw", position="fixed",
                top="50%", left="50%", transform="translate(-50%, -50%)",
                z_index="310", box_shadow="0 25px 50px -12px rgba(0,0,0,0.25)"
            )
        )
    )


def contenido_boveda() -> rx.Component:
    """Contenido interno de la bóveda de tesis."""
    return rx.vstack(
        encabezado_pagina(
            "Bóveda de Tesis",
            "Registrar Nueva Tesis",
            EstadoBoveda.abrir_modal,
        ),
        # ── Barra de búsqueda dinámica ────────────────────────────────
        rx.box(
            rx.icon(
                "search",
                size=16,
                color="#64748B",
                position="absolute",
                left="14px",
                top="50%",
                transform="translateY(-50%)",
                z_index="1",
            ),
            rx.input(
                placeholder="Buscar por título, estudiante o cédula...",
                value=EstadoBoveda.busqueda_dinamica,
                on_change=EstadoBoveda.fijar_busqueda_dinamica,
                size="3",
                radius="large",
                variant="classic",
                style={
                    "padding_left": "42px",
                    "background_color": "white",
                    "border": "1.5px solid #94A3B8",
                    "color": "#0F172A",
                    "font_size": "15px",
                    "font_weight": "500",
                    "&::placeholder": {
                        "color": "#64748B",
                        "opacity": "1",
                    },
                },
                _focus={"border_color": "#6366F1"},
                _hover={"border_color": "#6366F1"},
                width="100%",
            ),
            position="relative",
            width=["100%", "100%", "640px"],
            margin_bottom="8px",
        ),

        rx.flex(  # Contenido de filtros y búsqueda
            rx.select(
                EstadoBoveda.opciones_carreras,
                placeholder="Todas las carreras",
                value=EstadoBoveda.filtro_carrera,
                on_change=EstadoBoveda.fijar_filtro_carrera,
                size="3",
                width={"initial": "100%", "md": "240px"},
                radius="large",
                variant="classic",
                style={
                        "background_color": "#F8FAFC",
                        "color": "#0F172A",
                        "border": "1.5px solid #64748B",
                        "font_size": "15px",
                        "font_weight": "600",
                        "cursor": "pointer",
                },
                _hover={"border_color": COLOR_PRIMARIO},
            ),
            rx.cond(
                (EstadoBoveda.busqueda_dinamica != "") |
                (EstadoBoveda.filtro_carrera != "") & (
                    EstadoBoveda.filtro_carrera != "Todas las carreras"),
                rx.button(
                    rx.icon("rotate-ccw", size=14),
                    "Limpiar",
                    on_click=EstadoBoveda.limpiar_filtros,
                    variant="soft", color_scheme="gray", size="2", cursor="pointer"
                ),
            ),
            rx.cond(
                EstadoAutenticacion.rol_usuario == "administrador",
                rx.button(
                    rx.icon("file-spreadsheet", size=14),
                    "Descargar Reporte",
                    on_click=EstadoBoveda.generar_reporte_tesis,
                    variant="soft",
                    color_scheme="green",
                    size="2",
                    cursor="pointer"
                ),
            ),
            rx.spacer(),
            rx.hstack(
                rx.center(
                    rx.icon(
                        "book-marked", size=14, color=COLOR_PRIMARIO, stroke_width=2),
                    width="28px", height="28px", border_radius="8px",
                    background="white", border=f"1px solid {COLOR_BORDE}",
                ),
                rx.text(
                    EstadoBoveda.tesis_a_mostrar.length().to_string() +
                    rx.cond(
                        EstadoAutenticacion.rol_usuario == "administrador", " resultados", " disponibles"),
                    font_size="15px", font_weight="700", color=COLOR_TEXTO_SUAVE,
                ),
                spacing="2", align="center",
            ),
            width="100%", spacing="4", align="center", padding_bottom="10px",
            direction={"initial": "column", "md": "row"},
        ),
        rx.cond(
            EstadoBoveda.tesis_a_mostrar.length() == 0,
            estado_vacio_boveda(),
            rx.grid(
                rx.foreach(
                    EstadoBoveda.tesis_a_mostrar, tarjeta_tesis),
                columns={"initial": "1", "sm": "2", "md": "2", "lg": "3"},
                spacing="5", width="100%",
            ),
        ),
        modal_nueva_tesis(),
        modal_confirmar_eliminacion_tesis(),
        toast_viewer(),
        padding=["16px", "20px", "24px", "24px"],
        width="100%",
        spacing="5",
        align="start",
    )


def pagina_boveda() -> rx.Component:
    return rx.theme(
        rx.cond(
            EstadoAutenticacion.usuario,
            layout_principal(contenido_boveda()),
            rx.center(
                rx.spinner(size="3", color="indigo"),
                width="100vw", height="100vh",
                on_mount=[
                    EstadoAutenticacion.verificar_acceso,
                    EstadoBoveda.cargar_tesis
                ],
            ),
        ),
        appearance="light",
        has_background=True,
    )
