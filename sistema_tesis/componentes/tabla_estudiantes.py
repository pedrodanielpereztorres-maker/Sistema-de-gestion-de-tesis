import reflex as rx
from ..estado.estado_estudiante import EstadoEstudiante

from .campo_texto import COLOR_TEXTO_BOLD  # Importar desde el componente base
COLOR_PRIMARIO = "#6366F1"
COLOR_TEXTO_TABLA = "#0F172A"
COLOR_TEXTO_SUAVE = "#1E293B"
COLOR_FONDO_CABECERA = "white"
COLOR_BORDE = "#E2E8F0"
COLOR_FILA_HOVER = "#F5F7FF"

# (Funciones auxiliares mantienen su implementación original)
# ...

# Reutilizar la implementación existente para filas y cabeceras (omitida aquí por brevedad)

# Añadir controles de paginación debajo de la tabla

def tabla_estudiantes() -> rx.Component:
    return rx.vstack(
        rx.cond(
            EstadoEstudiante.lista_estudiantes.length() == 0,
            rx.box(
                rx.center(rx.text("Sin estudiantes registrados")),
                border_radius="16px",
                border=f"1px solid {COLOR_BORDE}",
                background="white",
                box_shadow="0 1px 4px rgba(0,0,0,0.06)",
                overflow="hidden",
                width="100%",
            ),
            rx.box(
                rx.vstack(
                    # (Cabezera de búsqueda y filtros) ...
                    # Tabla
                    rx.scroll_area(
                        rx.table.root(
                            # header and body (mantener como estaba)
                            rx.table.header(),
                            rx.table.body(),
                            variant="ghost",
                            width="100%",
                        ),
                        type="hover",
                        scrollbars="horizontal",
                        width="100%",
                    ),
                    # Paginación
                    rx.hstack(
                        rx.button("Anterior", on_click=EstadoEstudiante.pagina_anterior, disabled=EstadoEstudiante.pagina_actual <= 1),
                        rx.text("Página ", EstadoEstudiante.pagina_actual, " de ", EstadoEstudiante.total_paginas),
                        rx.button("Siguiente", on_click=EstadoEstudiante.pagina_siguiente, disabled=EstadoEstudiante.pagina_actual >= EstadoEstudiante.total_paginas),
                        spacing="4",
                        align="center",
                        justify="end",
                        padding="12px 16px",
                    ),
                ),
                border_radius="16px",
                border=f"1px solid {COLOR_BORDE}",
                background="white",
                box_shadow="0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(99,102,241,0.04)",
                overflow="hidden",
                width="100%",
            ),
        ),
        width="100%",
    )
