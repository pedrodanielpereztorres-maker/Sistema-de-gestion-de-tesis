import reflex as rx
from ..componentes.encabezado import encabezado_pagina
from ..componentes.layout import layout_principal
from ..estado.estado_autenticacion import EstadoAutenticacion
from ..estado.estado_reportes import EstadoReportes
from ..estado.estado_estudiante import EstadoEstudiante
from datetime import datetime

COLOR_BORDE = "#CBD5E1"
COLOR_TEXTO_TITULO = "#0F172A"
COLOR_TEXTO_CUERPO = "#334155"
COLOR_PRIMARIO = "#6366F1"

def tarjeta_metrica(titulo: str, valor: str, descripcion: str, icono: str, color_scheme: str) -> rx.Component:
    return rx.card(
        rx.flex(
            rx.center(
                rx.icon(icono, size=24),
                width="48px", height="48px",
                border_radius="12px",
                bg=rx.color(color_scheme, 3),
                color=rx.color(color_scheme, 9),
                margin_right="4"
            ),
            rx.vstack(
                rx.text(titulo, size="2", weight="medium", color=COLOR_TEXTO_CUERPO),
                rx.hstack(
                    rx.heading(valor, size="7", weight="bold", color=COLOR_TEXTO_TITULO),
                    rx.badge(
                        "Activo", 
                        color_scheme=color_scheme, 
                        variant="soft", 
                        radius="full",
                        size="1"
                    ),
                    align="center",
                    spacing="2"
                ),
                spacing="1"
            ),
            spacing="3", align="start"
        ),
        width="100%", size="2"
    )

def seccion_reporte(titulo: str, descripcion: str, icono: str, contenido: rx.Component) -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.center(
                rx.icon(icono, size=20, color="white"),
                width="36px", height="36px", bg=COLOR_PRIMARIO, border_radius="8px"
            ),
            rx.vstack(
                rx.text(titulo, font_weight="800", size="4", color=COLOR_TEXTO_TITULO),
                rx.text(descripcion, size="2", color=COLOR_TEXTO_CUERPO),
                spacing="0", align="start"
            ),
            rx.spacer(),
            rx.badge(f"Corte: {datetime.now().strftime('%d/%m/%Y')}", variant="outline"),
            align="center", spacing="3", width="100%", margin_bottom="2"
        ),
        rx.box(
            contenido,
            width="100%",
            padding="24px",
            background="white",
            border=f"1px solid {COLOR_BORDE}",
            border_radius="16px",
            box_shadow="0 4px 6px -1px rgba(0,0,0,0.05)",
        ),
        width="100%", spacing="3"
    )

def tarjeta_exportacion(titulo: str, desc: str, icono: str, color: str, accion) -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.center(
                rx.icon(icono, size=18, color="white"),
                width="36px", height="36px", border_radius="10px",
                bg=rx.color(color, 9)
            ),
            rx.vstack(
                rx.text(titulo, weight="bold", size="2", color=COLOR_TEXTO_TITULO),
                rx.text(desc, size="1", color=COLOR_TEXTO_CUERPO, line_height="1.2"),
                spacing="0", align="start"
            ),
            spacing="3", align="center"
        ),
        rx.button(
            rx.hstack(rx.icon("download", size=16), rx.text("Generar Archivo")),
            on_click=accion,
            color_scheme=color, variant="soft", width="100%", cursor="pointer",
            margin_top="2"
        ),
        spacing="2", align="start", padding="16px", border=f"1px solid {COLOR_BORDE}", border_radius="12px", background="#F8FAFC"
    )

def contenido_reportes() -> rx.Component:
    return rx.vstack(
        encabezado_pagina(
            "Analítica y Reportes", 
            "Descargar Estudiantes (CSV)", 
            EstadoEstudiante.generar_reporte_estudiantes
        ),
        
        # ── NUEVA SECCIÓN: ACCIONES DE EXPORTACIÓN ──
        seccion_reporte(
            "Centro de Exportación de Datos", "Genera archivos físicos para trámites administrativos.", "cloud-download",
            rx.grid(
                tarjeta_exportacion("Empresas (CSV)", "Listado detallado de aliados estratégicos.", "file-spreadsheet", "green", EstadoReportes.exportar_empresas_excel),
                tarjeta_exportacion("Empresas (PDF)", "Formato PDF listo para imprimir.", "file-text", "red", EstadoReportes.exportar_empresas_pdf),
                tarjeta_exportacion("Estudiantes (CSV)", "Estado actual de todos los alumnos.", "users", "indigo", EstadoEstudiante.generar_reporte_estudiantes),
                tarjeta_exportacion("Bóveda (CSV)", "Listado de trabajos de grado registrados.", "library", "amber", EstadoReportes.exportar_tesis_csv),
                columns={"initial": "1", "sm": "2", "md": "4"}, spacing="4", width="100%"
            )
        ),

        rx.grid(
            tarjeta_metrica("Estudiantes Totales", EstadoReportes.resumen_global["total_estudiantes"].to_string(), "Total registrados", "users", "indigo"),
            tarjeta_metrica("En Pasantía", EstadoReportes.resumen_global["con_pasantia"].to_string(), "Con tutor asignado", "circle-check", "green"),
            tarjeta_metrica("Pendientes", EstadoReportes.resumen_global["sin_pasantia"].to_string(), "Sin tutor asignado", "clock", "amber"),
            tarjeta_metrica("Tesis Registradas", EstadoReportes.resumen_global["total_tesis"].to_string(), "En la bóveda", "book", "blue"),
            columns={"initial": "1", "sm": "2", "md": "4"},
            spacing="4", width="100%", margin_bottom="6"
        ),

        rx.grid(
            seccion_reporte(
                "Distribución por Carreras", 
                "Visualización del volumen de estudiantes activos por cada programa académico.",
                "graduation-cap",
                rx.vstack(
                    rx.foreach(
                        EstadoReportes.estadisticas_carreras,
                        lambda item: rx.hstack(
                            rx.text(item["nombre"], size="2", flex="1", color=COLOR_TEXTO_CUERPO),
                            rx.progress(value=item["progreso"], color_scheme="indigo", width="50%"),
                            rx.text(item["cantidad"].to_string(), weight="bold", size="2", width="30px", text_align="right"),
                            width="100%", align="center", padding_y="8px", border_bottom=f"1px solid {COLOR_BORDE}"
                        )
                    ),
                    width="100%", spacing="1"
                )
            ),
            seccion_reporte(
                "Top 5 Tutores Académicos", 
                "Ranking de tutores con mayor carga de tutorías en el periodo actual.",
                "user-check",
                rx.vstack(
                    rx.foreach(
                        EstadoReportes.mejores_tutores,
                        lambda item: rx.hstack(
                            rx.center(rx.icon("user", size=14), width="24px", height="24px", bg="#F1F5F9", border_radius="full"),
                            rx.text(item["nombre"], size="2", flex="1", color=COLOR_TEXTO_CUERPO),
                            rx.badge(item["cantidad"].to_string() + " alumnos", color_scheme="blue"),
                            width="100%", align="center", padding_y="10px", border_bottom=f"1px solid {COLOR_BORDE}"
                        )
                    ),
                    width="100%", spacing="1"
                )
            ),
            columns={"initial": "1", "lg": "2"},
            spacing="6", width="100%", margin_bottom="6"
        ),

        seccion_reporte(
            "Ranking de Vinculación Empresarial", "Entidades receptoras ordenadas por número de pasantes asignados.", "building-2",
            rx.grid(
                rx.foreach(
                    EstadoReportes.mejores_empresas,
                    lambda item: rx.card(
                        rx.vstack(
                            rx.hstack(
                                rx.icon("building", size=18, color="#6366F1"),
                                rx.text(item["nombre"], weight="bold", size="3", color=COLOR_TEXTO_TITULO, no_of_lines=1),
                                align="center", width="100%"
                            ),
                            rx.vstack(
                                rx.hstack(rx.icon("mail", size=12, color="#64748B"), rx.text(item["correo"], size="1", color="#64748B"), spacing="1"),
                                rx.hstack(rx.icon("phone", size=12, color="#64748B"), rx.text(item["telefono"], size="1", color="#64748B"), spacing="1"),
                                align="start", spacing="1"
                            ),
                            rx.badge(
                                rx.hstack(rx.icon("users", size=14), rx.text(item["cantidad"].to_string() + " pasantes")),
                                color_scheme="indigo", variant="surface", radius="full"
                            ),
                            spacing="3", align="start"
                        ),
                        size="2"
                    )
                ),
                columns={"initial": "1", "sm": "2", "md": "3", "lg": "4"},
                spacing="4", width="100%"
            )
        ),

        padding=["16px", "20px", "24px", "24px"],
        width="100%",
        spacing="6",
    )

def pagina_reportes() -> rx.Component:
    return rx.theme(
        rx.cond(
            EstadoAutenticacion.rol_usuario == "administrador",
            layout_principal(
                rx.box(
                    contenido_reportes(),
                    on_mount=EstadoReportes.cargar_reportes
                )
            ),
            rx.center(
                rx.heading("Acceso denegado"),
                width="100vw", height="100vh"
            )
        ),
        appearance="light",
        has_background=True,
    )