import logging
import reflex as rx
logger = logging.getLogger(__name__)
from pydantic import BaseModel
from datetime import date, datetime, timedelta
import csv
import io
from .estado_autenticacion import EstadoAutenticacion
from typing import List, Dict, Any
from ..database_manager import obtener_conexion
from .estado_boveda import EstadoBoveda
import math


class EstudianteResumen(BaseModel):
    cedula: str
    nombre: str
    apellido: str
    carrera: str
    telefono_personal: str
    periodo_inicio: str
    periodo_cierre: str
    fecha_inicio_formateada: str
    fecha_cierre_formateada: str
    nombre_tutor: str
    tutor_empresa: str
    nombre_empresa: str
    direccion_empresa: str
    correo_empresa: str
    telefono_empresa: str


class EstadoEstudiante(rx.State):
    cedula: str = ""
    nombre: str = ""
    apellido: str = ""
    carrera: str = ""
    telefono_personal: str = ""
    periodo_inicio: str = date.today().strftime("%Y-%m-%d")
    periodo_cierre: str = (
        date.today() + timedelta(weeks=12)).strftime("%Y-%m-%d")
    nombre_tutor: str = ""
    tutor_empresa: str = ""
    nombre_empresa: str = ""
    direccion_empresa: str = ""
    correo_empresa: str = ""
    telefono_empresa: str = ""
    haciendo_tesis: bool = False
    tutor_academico_seleccionado: str = ""
    tutores_disponibles: list[str] = []

    filtro_carrera: str = ""
    filtro_estado: str = "Todos"
    busqueda_dinamica: str = ""

    mostrar_modal: bool = False
    en_edicion: bool = False
    lista_estudiantes: List[Dict[str, Any]] = []
    carreras_disponibles: list[str] = []
    usuario_encontrado: bool = False
    mostrar_ficha: bool = False
    estudiante_seleccionado: dict = {}

    # Paginación
    pagina_actual: int = 1
    registros_por_pagina: int = 20
    total_registros: int = 0
    total_paginas: int = 1

    # Estadísticas por carrera en memoria
    carreras_con_cantidad: list[dict] = []

    # Seguridad en eliminación
    mostrar_modal_confirmacion: bool = False
    password_confirmacion: str = ""
    cedula_a_eliminar: str = ""

    async def cargar_estudiantes(self) -> None:
        auth_state = await self.get_state(EstadoAutenticacion)
        if auth_state.rol_usuario != "administrador":
            return

        # Contar total y paginar
        conn = obtener_conexion()
        if conn is None:
            return
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute("SELECT COUNT(*) FROM estudiante WHERE esta_activo = TRUE")
                    total = cursor.fetchone()[0]
                    self.total_registros = total
                    self.total_paginas = max(1, math.ceil(total / self.registros_por_pagina))
                    offset = (self.pagina_actual - 1) * self.registros_por_pagina

                    consulta = """
                        SELECT 
                            e.cedula, e.nombre, e.apellido, c.nombre as carrera_nom,
                            e.celular, e.periodo_inicio, e.periodo_cierre,
                            ta.nombre || ' ' || ta.apellido as tutor_acad,
                            te.nombre as tutor_emp, emp.nombre as empresa_nom,
                            emp.direccion, te.correo, te.telefono
                        FROM estudiante e
                        JOIN carrera c ON e.carrera_id = c.id
                        LEFT JOIN tutor_academico ta ON e.tutor_academico_id = ta.id
                        LEFT JOIN tutor_empresarial te ON e.tutor_empresarial_id = te.id
                        LEFT JOIN empresa emp ON te.empresa_id = emp.id
                        WHERE e.esta_activo = TRUE
                        ORDER BY e.nombre, e.apellido
                        LIMIT %s OFFSET %s
                    """
                    cursor.execute(consulta, (self.registros_por_pagina, offset))
                    rows = cursor.fetchall()

                    # Cargar carreras disponibles
                    cursor.execute("SELECT nombre FROM carrera WHERE esta_activa = TRUE ORDER BY nombre")
                    self.carreras_disponibles = [r[0] for r in cursor.fetchall()]

                    self.lista_estudiantes = [
                        {
                            "cedula": r[0], "nombre": r[1], "apellido": r[2], "carrera": r[3],
                            "telefono_personal": r[4] or "", "periodo_inicio": str(r[5]),
                            "periodo_cierre": str(r[6]),
                            "fecha_inicio_formateada": r[5].strftime("%d/%m/%Y") if r[5] else "",
                            "fecha_cierre_formateada": r[6].strftime("%d/%m/%Y") if r[6] else "",
                            "nombre_tutor": r[7] or "", "tutor_empresa": r[8] or "",
                            "nombre_empresa": r[9] or "", "direccion_empresa": r[10] or "",
                            "correo_empresa": r[11] or "", "telefono_empresa": r[12] or ""
                        } for r in rows
                    ]

            # Cargar estadísticas por carrera en memoria
            await self.cargar_estadisticas_carrera()

        except Exception as e:
            logger.error("Error al cargar estudiantes: %s", e, exc_info=True)
        finally:
            conn.close()

    async def cargar_estadisticas_carrera(self) -> None:
        """Llena carreras_con_cantidad usando consultas SQL y los datos en memoria."""
        conn = obtener_conexion()
        if conn is None:
            self.carreras_con_cantidad = []
            return
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute("SELECT nombre FROM carrera WHERE esta_activa = TRUE;")
                    carreras_db = [c[0] for c in cursor.fetchall()]

            conteo = {}
            for e in self.lista_estudiantes:
                conteo[e["carrera"]] = conteo.get(e["carrera"], 0) + 1

            self.carreras_con_cantidad = [
                {"nombre": c, "cantidad": conteo.get(c, 0), "progreso": min(conteo.get(c, 0) * 10, 100)}
                for c in carreras_db
            ]
        except Exception as e:
            logger.error("Error al cargar estadísticas de carrera: %s", e, exc_info=True)
            self.carreras_con_cantidad = []
        finally:
            conn.close()

    @rx.var
    def estudiantes_filtrados(self) -> List[Dict[str, Any]]:
        lista = self.lista_estudiantes
        if self.busqueda_dinamica:
            search = self.busqueda_dinamica.lower()
            lista = [e for e in lista if search in e["cedula"] or search in e["nombre"].lower() or search in e["apellido"].lower()]
        if self.filtro_carrera and self.filtro_carrera != "Todas las carreras" and self.filtro_carrera != "":
            lista = [e for e in lista if e["carrera"] == self.filtro_carrera]
        if self.filtro_estado == "En Pasantía":
            lista = [e for e in lista if e["nombre_tutor"] != ""]
        elif self.filtro_estado == "Sin Pasantía":
            lista = [e for e in lista if e["nombre_tutor"] == ""]
        return lista

    def pagina_siguiente(self) -> None:
        if self.pagina_actual < self.total_paginas:
            self.pagina_actual += 1
            # recargar página
            rx.run_async(self.cargar_estudiantes())

    def pagina_anterior(self) -> None:
        if self.pagina_actual > 1:
            self.pagina_actual -= 1
            rx.run_async(self.cargar_estudiantes())

    def ir_a_pagina(self, n: int) -> None:
        if 1 <= n <= self.total_paginas:
            self.pagina_actual = n
            rx.run_async(self.cargar_estudiantes())

    # El resto del archivo (abrir_modal, guardar_estudiante, eliminar, reportes) se mantiene igual.

    def abrir_modal(self) -> None:
        self.mostrar_modal = True
        self.en_edicion = False
        self.estudiante_seleccionado = {}

    def cerrar_modal(self) -> None:
        self.mostrar_modal = False
        self.en_edicion = False
        self.estudiante_seleccionado = {}

    async def cargar_datos_usuario(self) -> None:
        """Carga datos básicos de usuario/estudiante por cédula y los coloca en el estado.
        Método llamado desde el on_blur del campo cédula en la UI.
        """
        ced = (self.cedula or "").strip()
        if not ced:
            self.usuario_encontrado = False
            return
        conn = obtener_conexion()
        if conn is None:
            self.usuario_encontrado = False
            return
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        "SELECT nombre, apellido FROM usuario WHERE cedula = %s AND esta_activo = TRUE",
                        (ced,)
                    )
                    row = cursor.fetchone()
                    if row:
                        self.nombre = row[0] or ""
                        self.apellido = row[1] or ""
                        self.usuario_encontrado = True
                    else:
                        # No existe usuario; limpiar campos relevantes
                        self.nombre = ""
                        self.apellido = ""
                        self.usuario_encontrado = False

                    # Intentar cargar datos de estudiante si existe
                    cursor.execute(
                        "SELECT c.nombre, e.celular, e.periodo_inicio, e.periodo_cierre, ta.nombre || ' ' || ta.apellido, te.nombre, emp.nombre, emp.direccion, te.correo, te.telefono FROM estudiante e LEFT JOIN carrera c ON e.carrera_id = c.id LEFT JOIN tutor_academico ta ON e.tutor_academico_id = ta.id LEFT JOIN tutor_empresarial te ON e.tutor_empresarial_id = te.id LEFT JOIN empresa emp ON te.empresa_id = emp.id WHERE e.cedula = %s AND e.esta_activo = TRUE",
                        (ced,)
                    )
                    est = cursor.fetchone()
                    if est:
                        self.carrera = est[0] or ""
                        self.telefono_personal = est[1] or ""
                        self.periodo_inicio = str(est[2]) if est[2] else self.periodo_inicio
                        self.periodo_cierre = str(est[3]) if est[3] else self.periodo_cierre
                        self.nombre_tutor = est[4] or ""
                        self.tutor_empresa = est[5] or ""
                        self.nombre_empresa = est[6] or ""
                        self.direccion_empresa = est[7] or ""
                        self.correo_empresa = est[8] or ""
                        self.telefono_empresa = est[9] or ""
                        self.en_edicion = True
                    else:
                        # No hay fila de estudiante; mantener datos de usuario
                        self.en_edicion = False
        except Exception as e:
            logger.error("Error al cargar datos de usuario: %s", e, exc_info=True)
            self.usuario_encontrado = False
        finally:
            try:
                conn.close()
            except Exception:
                pass

    async def cargar_tutores_por_carrera(self, carrera: str = None) -> None:
        """Llena self.tutores_disponibles con tutores académicos para la carrera indicada.
        Si carrera es None, usa self.carrera.
        """
        carrera_nombre = (carrera or self.carrera or "").strip()
        if not carrera_nombre:
            self.tutores_disponibles = []
            return
        conn = obtener_conexion()
        if conn is None:
            self.tutores_disponibles = []
            return
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute("SELECT ta.id, ta.nombre || ' ' || ta.apellido FROM tutor_academico ta JOIN carrera c ON ta.carrera_id = c.id WHERE c.nombre = %s AND ta.esta_activo = TRUE ORDER BY ta.nombre", (carrera_nombre,))
                    rows = cursor.fetchall()
                    # Guardar como lista de strings "id|Nombre Apellido" o solo nombre según uso en UI
                    self.tutores_disponibles = [f"{r[0]}|{r[1]}" for r in rows]
        except Exception as e:
            logger.exception("Error al cargar tutores por carrera: %s", e)
            self.tutores_disponibles = []
        finally:
            try:
                conn.close()
            except Exception:
                pass

    def fijar_password_confirmacion(self, val: str) -> None:
        try:
            self.password_confirmacion = val
        except Exception:
            self.password_confirmacion = str(val)

    def abrir_modal_confirmacion(self, cedula: str) -> None:
        try:
            self.cedula_a_eliminar = cedula
        except Exception:
            self.cedula_a_eliminar = str(cedula)
        self.password_confirmacion = ""
        self.mostrar_modal_confirmacion = True

    def cerrar_modal_confirmacion(self) -> None:
        self.mostrar_modal_confirmacion = False
        self.password_confirmacion = ""
        self.cedula_a_eliminar = ""

    async def confirmar_eliminacion_estudiante(self) -> rx.Component:
        if not self.cedula_a_eliminar:
            return rx.toast.error("No se seleccionó ningún estudiante.")
        conn = obtener_conexion()
        if conn is None:
            return rx.toast.error("Error de conexión al servidor.")
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute("UPDATE estudiante SET esta_activo = FALSE WHERE cedula = %s", (self.cedula_a_eliminar,))
                    cursor.execute("UPDATE usuario SET esta_activo = FALSE WHERE cedula = %s", (self.cedula_a_eliminar,))
                conn.commit()
            await self.cargar_estudiantes()
            self.cerrar_modal_confirmacion()
            return rx.toast.success("Estudiante desactivado correctamente.")
        except Exception as e:
            try:
                conn.rollback()
            except Exception:
                pass
            logger.exception("Error al desactivar estudiante: %s", e)
            return rx.toast.error(f"Error al desactivar: {e}")
        finally:
            try:
                conn.close()
            except Exception:
                pass

    async def guardar_estudiante(self) -> rx.Component:
        """Inserta o actualiza un estudiante y usuario según el estado de edición.
        Valida coherencia de fechas y realiza las operaciones en BD de forma segura.
        """
        if not self.cedula or not self.nombre or not self.apellido:
            return rx.toast.error("Cédula, nombre y apellido son obligatorios.")

        # Validación de fechas antes de tocar la BD
        try:
            inicio = date.fromisoformat(self.periodo_inicio)
            cierre = date.fromisoformat(self.periodo_cierre)
        except Exception:
            return rx.toast.error("Formato de fechas inválido. Use AAAA-MM-DD.")

        if cierre <= inicio:
            return rx.toast.error("La fecha de cierre debe ser posterior a la de inicio.")

        if inicio.year < date.today().year - 2:
            return rx.toast.error("La fecha de inicio parece incorrecta. Verifique el año.")

        duracion_semanas = (cierre - inicio).days / 7
        if duracion_semanas > 52:
            # Advertencia, pero se permite continuar
            # El toast de advertencia no detiene la operación
            rx.toast.warning("La pasantía supera 52 semanas. Verifique la duración.")

        conn = obtener_conexion()
        if conn is None:
            return rx.toast.error("Error de conexión al servidor.")
        try:
            with conn:
                with conn.cursor() as cursor:
                    # Asegurar existencia de usuario
                    cursor.execute("SELECT 1 FROM usuario WHERE cedula = %s", (self.cedula,))
                    exists = cursor.fetchone()
                    if not exists:
                        # Crear usuario básico (contraseña no gestionada aquí)
                        cursor.execute(
                            "INSERT INTO usuario (cedula, nombre, apellido, esta_activo) VALUES (%s, %s, %s, TRUE)",
                            (self.cedula, self.nombre, self.apellido)
                        )
                    # Obtener id de carrera
                    carrera_id = None
                    if self.carrera:
                        cursor.execute("SELECT id FROM carrera WHERE nombre = %s", (self.carrera,))
                        r = cursor.fetchone()
                        if r:
                            carrera_id = r[0]
                    # Si estamos en edición, actualizar fila de estudiante
                    cursor.execute("SELECT 1 FROM estudiante WHERE cedula = %s", (self.cedula,))
                    est_exists = cursor.fetchone()
                    if est_exists:
                        cursor.execute(
                            "UPDATE estudiante SET nombre=%s, apellido=%s, carrera_id=%s, celular=%s, periodo_inicio=%s, periodo_cierre=%s WHERE cedula=%s",
                            (self.nombre, self.apellido, carrera_id, self.telefono_personal, inicio, cierre, self.cedula)
                        )
                    else:
                        cursor.execute(
                            "INSERT INTO estudiante (cedula, nombre, apellido, carrera_id, celular, periodo_inicio, periodo_cierre, esta_activo) VALUES (%s,%s,%s,%s,%s,%s,%s,TRUE)",
                            (self.cedula, self.nombre, self.apellido, carrera_id, self.telefono_personal, inicio, cierre)
                        )
                conn.commit()
            await self.cargar_estudiantes()
            self.cerrar_modal()
            return rx.toast.success("Estudiante guardado correctamente.")
        except Exception as e:
            try:
                conn.rollback()
            except Exception:
                pass
            logger.exception("Error al guardar estudiante: %s", e)
            return rx.toast.error(f"Error al guardar estudiante: {e}")
        finally:
            try:
                conn.close()
            except Exception:
                pass

    # Simple setters utilizados por los componentes de la UI
    def fijar_cedula(self, val: str) -> None:
        try:
            self.cedula = val
        except Exception:
            self.cedula = str(val)

    def fijar_nombre(self, val: str) -> None:
        try:
            self.nombre = val
        except Exception:
            self.nombre = str(val)

    def fijar_apellido(self, val: str) -> None:
        try:
            self.apellido = val
        except Exception:
            self.apellido = str(val)

    def fijar_telefono_personal(self, val: str) -> None:
        try:
            self.telefono_personal = val
        except Exception:
            self.telefono_personal = str(val)

    def fijar_periodo_inicio(self, val: str) -> None:
        try:
            self.periodo_inicio = val
        except Exception:
            self.periodo_inicio = str(val)

    def fijar_periodo_cierre(self, val: str) -> None:
        try:
            self.periodo_cierre = val
        except Exception:
            self.periodo_cierre = str(val)

    def fijar_haciendo_tesis(self, val) -> None:
        try:
            self.haciendo_tesis = bool(val)
        except Exception:
            self.haciendo_tesis = str(val).lower() in ("1","true","yes")

    def fijar_tutor_academico_seleccionado(self, val: str) -> None:
        try:
            self.tutor_academico_seleccionado = val
        except Exception:
            self.tutor_academico_seleccionado = str(val)

    def fijar_nombre_empresa(self, val: str) -> None:
        try:
            self.nombre_empresa = val
        except Exception:
            self.nombre_empresa = str(val)

    def fijar_direccion_empresa(self, val: str) -> None:
        try:
            self.direccion_empresa = val
        except Exception:
            self.direccion_empresa = str(val)

    def fijar_tutor_empresa(self, val: str) -> None:
        try:
            self.tutor_empresa = val
        except Exception:
            self.tutor_empresa = str(val)

    def fijar_correo_empresa(self, val: str) -> None:
        try:
            self.correo_empresa = val
        except Exception:
            self.correo_empresa = str(val)

    def fijar_telefono_empresa(self, val: str) -> None:
        try:
            self.telefono_empresa = val
        except Exception:
            self.telefono_empresa = str(val)

    def fijar_carrera(self, val: str) -> None:
        try:
            self.carrera = val
        except Exception:
            self.carrera = str(val)

    def fijar_password_confirmacion(self, val: str) -> None:
        try:
            self.password_confirmacion = val
        except Exception:
            self.password_confirmacion = str(val)


    # --- Compatibilidad con vistas antiguas: contadores y listas esperadas por inicio.py ---
    class _CountProxy:
        def __init__(self, value: int):
            self._value = value

        def to_string(self) -> str:
            return str(self._value)

    @rx.var
    def total_estudiantes(self) -> int:
        """Número total de estudiantes activo."""
        return int(self.total_registros)

    @rx.var
    def estudiantes_en_pasantia(self) -> int:
        c = sum(1 for e in self.lista_estudiantes if e.get("nombre_tutor"))
        return int(c)

    @rx.var
    def estudiantes_sin_pasantia(self) -> int:
        c = sum(1 for e in self.lista_estudiantes if not e.get("nombre_tutor"))
        return int(c)
        return EstadoEstudiante._CountProxy(c)

    @rx.var
    def lista_con_pasantia(self) -> List[Dict[str, Any]]:
        return [e for e in self.lista_estudiantes if e.get("nombre_tutor")]

    @rx.var
    def lista_sin_pasantia(self) -> List[Dict[str, Any]]:
        return [e for e in self.lista_estudiantes if not e.get("nombre_tutor")]

    @rx.var
    def estudiantes_por_carrera(self) -> List[Dict[str, Any]]:
        """Lista con nombre, cantidad y progreso para cada carrera (compatibilidad con plantilla)."""
        return self.carreras_con_cantidad

    async def generar_reporte_estudiantes(self) -> rx.Component:
        """Genera un CSV en memoria con los estudiantes listados. Devuelve toast al terminar.
        (Descarga no implementada en esta prueba automatizada.)"""
        try:
            output = io.StringIO()
            writer = csv.writer(output)
            writer.writerow(["Cédula", "Nombre", "Apellido", "Carrera", "Teléfono", "Inicio", "Cierre"])
            for e in self.lista_estudiantes:
                writer.writerow([
                    e.get("cedula", ""), e.get("nombre", ""), e.get("apellido", ""),
                    e.get("carrera", ""), e.get("telefono_personal", ""),
                    e.get("periodo_inicio", ""), e.get("periodo_cierre", ""),
                ])
            # Nota: aquí podríamos guardar a disco o enviar como respuesta; por ahora devolvemos un toast.
            return rx.toast.success("Reporte generado (en memoria).")
        except Exception as e:
            logger.exception("Error al generar reporte de estudiantes: %s", e)
            return rx.toast.error(f"Error al generar reporte: {e}")

