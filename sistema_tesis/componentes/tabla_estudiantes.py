import reflex as rx
from ..estado.estado_estudiante import EstadoEstudiante


def celda_cabecera(texto: str) -> rx.Component:
    return rx.table.column_header_cell(
        rx.text(texto, font_weight="semibold", color="#0F172A"),
        py="3",
        px="3",
        font_size="14px",
        border_bottom="1px solid #E2E8F0",
    )


def celda_simple(texto: str | None, bold: bool = False) -> rx.Component:
    # Evitar usar 'or' con Vars reactivos; usar rx.cond para condiciones que puedan ser Var
    contenido = rx.cond(texto, texto, "-") if texto is not None else "-"
    return rx.table.cell(
        rx.text(contenido, font_weight=("bold" if bold else "normal"), color="#1E293B"),
        py="3",
        px="3",
        font_size="14px",
        white_space="nowrap",
    )


def fila_estudiante(estudiante) -> rx.Component:
    # Evitar operaciones booleanas/Python 'or' sobre Vars reactivos.
    nombre_completo_cell = rx.table.cell(
        rx.hstack(
            rx.text(rx.cond(estudiante.get("nombre"), estudiante.get("nombre"), "")),
            rx.text(" "),
            rx.text(rx.cond(estudiante.get("apellido"), estudiante.get("apellido"), "")),
        ),
        py="3",
        px="3",
        font_size="14px",
        white_space="nowrap",
    )

    tutor_cell = rx.table.cell(
        rx.text(rx.cond(estudiante.get("nombre_tutor"), estudiante.get("nombre_tutor"), "-")),
        py="3",
        px="3",
        font_size="14px",
        white_space="nowrap",
    )

    # Celda para la empresa: si existe muestra un botón click-able que abre la tarjeta flotante
    company_name = estudiante.get("nombre_empresa")
    company_cell = rx.table.cell(
        rx.cond(
            company_name,
            rx.button(
                company_name,
                variant="ghost",
                color_scheme="indigo",
                on_click=EstadoEstudiante.abrir_modal_empresa(
                    estudiante.get("nombre_empresa"),
                    estudiante.get("direccion_empresa"),
                    estudiante.get("correo_empresa"),
                    estudiante.get("telefono_empresa"),
                    estudiante.get("tutor_empresa"),
                ),
            ),
            rx.text("-", color="#94A3B8"),
        ),
        py="3",
        px="3",
        font_size="14px",
        white_space="nowrap",
    )

    return rx.table.row(
        celda_simple(estudiante.get("cedula"), bold=True),
        nombre_completo_cell,
        celda_simple(estudiante.get("carrera")),
        tutor_cell,
        company_cell,
        celda_simple(estudiante.get("telefono_personal")),
        celda_simple(estudiante.get("fecha_inicio_formateada")),
        celda_simple(estudiante.get("fecha_cierre_formateada")),
    )


def tabla_estudiantes() -> rx.Component:
    return rx.vstack(
        rx.box(
            rx.hstack(
                rx.input(
                    placeholder="Buscar por cédula, nombre o apellido...",
                    value=EstadoEstudiante.busqueda_dinamica,
                    on_change=EstadoEstudiante.fijar_busqueda_dinamica,
                    width="100%",
                ),
                rx.select(
                    items=EstadoEstudiante.carreras_disponibles,
                    value=EstadoEstudiante.filtro_carrera,
                    on_change=EstadoEstudiante.fijar_filtro_carrera,
                    width="240px",
                    placeholder="Todas las carreras",
                ),
                spacing="3",
                width="100%",
            ),
            padding="16px 20px",
            background="#F8FAFC",
            border_bottom="1px solid #E2E8F0",
            width="100%",
        ),
        rx.table.root(
            rx.table.header(
                rx.table.row(
                    celda_cabecera("Cédula"),
                    celda_cabecera("Nombre"),
                    celda_cabecera("Carrera"),
                    celda_cabecera("Tutor"),
                    celda_cabecera("Empresa"),
                    celda_cabecera("Teléfono"),
                    celda_cabecera("Inicio"),
                    celda_cabecera("Cierre"),
                )
            ),
            rx.table.body(
                rx.foreach(EstadoEstudiante.estudiantes_filtrados, fila_estudiante)
            ),
            variant="surface",
            width="100%",
        ),
        # Tarjeta flotante para mostrar datos de la empresa seleccionada
        rx.cond(
            EstadoEstudiante.empresa_modal_visible,
            rx.box(
                rx.box(position="fixed", inset="0", bg="rgba(0,0,0,0.4)", z_index="400", on_click=EstadoEstudiante.cerrar_modal_empresa),
                rx.box(
                    rx.vstack(
                        rx.hstack(rx.text("Ficha de Empresa", font_weight="bold", size="4"), rx.spacer(), rx.button("Cerrar", on_click=EstadoEstudiante.cerrar_modal_empresa, variant="ghost")),
                        rx.text(rx.cond(EstadoEstudiante.nombre_empresa, EstadoEstudiante.nombre_empresa, "-"), font_weight="600"),
                        rx.text(rx.cond(EstadoEstudiante.direccion_empresa, EstadoEstudiante.direccion_empresa, "-"), color="#475569"),
                        rx.hstack(rx.text("Correo: "), rx.text(rx.cond(EstadoEstudiante.correo_empresa, EstadoEstudiante.correo_empresa, "-"))),
                        rx.hstack(rx.text("Tel: "), rx.text(rx.cond(EstadoEstudiante.telefono_empresa, EstadoEstudiante.telefono_empresa, "-"))),
                        rx.hstack(rx.text("Tutor/Contacto: "), rx.text(rx.cond(EstadoEstudiante.tutor_empresa, EstadoEstudiante.tutor_empresa, "-"))),
                    ),
                    position="fixed", top="20%", right="5%",
                    bg="white", padding="18px", border_radius="12px",
                    width="320px", z_index="410", box_shadow="0 20px 25px -5px rgba(0,0,0,0.1)"
                )
            ),
            rx.fragment()
        ),
        rx.hstack(
            rx.button(
                "← Anterior",
                on_click=EstadoEstudiante.pagina_anterior,
                is_disabled=EstadoEstudiante.pagina_actual <= 1,
                variant="soft",
            ),
            rx.text(
                EstadoEstudiante.pagina_actual.to(str) + " / " + EstadoEstudiante.total_paginas.to(str),
                font_weight="600",
            ),
            rx.button(
                "Siguiente →",
                on_click=EstadoEstudiante.pagina_siguiente,
                is_disabled=EstadoEstudiante.pagina_actual >= EstadoEstudiante.total_paginas,
                variant="soft",
            ),
            rx.text(
                "(" + EstadoEstudiante.total_registros.to(str) + " estudiantes)",
                color="gray",
                font_size="12px",
            ),
            justify="center",
            align="center",
            padding_y="12px",
            spacing="4",
        ),
        width="100%",
    )
