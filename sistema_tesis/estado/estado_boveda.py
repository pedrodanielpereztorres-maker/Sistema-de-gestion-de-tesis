import os
import csv
import io
import re
from datetime import date
from typing import List, Dict, Any, Optional
import logging
import reflex as rx
logger = logging.getLogger(__name__)
from ..database_manager import obtener_conexion
from .estado_autenticacion import EstadoAutenticacion, EncriptadorContrasena


class CountProxy:
    """Contenedor simple para exponer un método to_string() usado en la UI.

    Definido a nivel de módulo para que las anotaciones de tipos sean evaluables
    en tiempo de importación por reflex sin depender de referencias hacia la
    propia clase EstadoBoveda.
    """
    def __init__(self, value: int):
        self._value = value

    def to_string(self) -> str:
        return str(self._value)

class EstadoBoveda(rx.State):
    lista_tesis: list[Dict[str, Any]] = []
    carreras_disponibles: list[str] = []
    mostrar_modal: bool = False
    cedula_busqueda: str = ""
    titulo_tesis: str = ""
    procesando: bool = False
    busqueda_dinamica: str = ""
    filtro_carrera: str = ""
    nombre_encontrado: str = ""
    apellido_encontrado: str = ""
    carrera_encontrada: str = ""
    tutor_academico_encontrado: str = ""
    tutor_empresa_encontrado: str = ""
    empresa_encontrada: str = ""
    hacer_publico: bool = False
    tesis_en_edicion_id: int = 0
    en_edicion: bool = False
    ruta_archivo_actual: str = ""  # Para mostrar el archivo actual en edición
    usuario_actual_id: int = 0
    usuario_actual_rol: str = ""

    # Variables para seguridad en eliminación
    mostrar_modal_confirmacion: bool = False
    password_confirmacion: str = ""
    tesis_id_a_eliminar: int = 0

    async def cargar_tesis(self) -> None:
        estado_auth = await self.get_state(EstadoAutenticacion)
        self.usuario_actual_id = estado_auth.usuario.id if estado_auth.usuario else 0
        self.usuario_actual_rol = estado_auth.rol_usuario if estado_auth.usuario else ""

        consulta = """
            SELECT 
                t.id,
                e.cedula, e.nombre, e.apellido, c.nombre as carrera_nom,
                ta.nombre || ' ' || ta.apellido as tutor_acad,
                te.nombre as tutor_emp, emp.nombre as empresa_nom,
                t.titulo, t.es_publica, t.ruta_archivo, e.usuario_id
            FROM tesis t
            LEFT JOIN estudiante e ON t.estudiante_id = e.id
            LEFT JOIN carrera c ON e.carrera_id = c.id
            LEFT JOIN tutor_academico ta ON e.tutor_academico_id = ta.id
            LEFT JOIN tutor_empresarial te ON e.tutor_empresarial_id = te.id
            LEFT JOIN empresa emp ON te.empresa_id = emp.id
        """
        conn = obtener_conexion()
        if conn is None:
            logger.error("Sin conexión para cargar tesis.")
            return rx.toast.error("Error de conexión al servidor.")

        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute(consulta)
                    self.lista_tesis = [
                        {
                            "id": r[0],  # Tesis ID
                            "cedula_estudiante": r[1], "nombre_estudiante": r[2],
                            "apellido_estudiante": r[3], "carrera": r[4] or "Sin Carrera",
                            "tutor_academico": r[5] or "No asignado",
                            "tutor_empresa": r[6] or "No asignado",
                            "nombre_empresa": r[7] or "N/A",
                            "titulo": r[8], "publico": r[9],
                            "url": f"/{r[10]}" if r[10] else "", "usuario_id": r[11]
                        } for r in cursor.fetchall()
                    ]
                    cursor.execute(
                        "SELECT nombre FROM carrera WHERE esta_activa = TRUE ORDER BY nombre")
                    self.carreras_disponibles = [r[0]
                                                 for r in cursor.fetchall()]
        except Exception as e:
            logger.error("Error al cargar tesis: %s", e, exc_info=True)
            return rx.toast.error("Error al cargar tesis.")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    @rx.var
    def lista_filtrada(self) -> list[Dict[str, Any]]:
        resultado = self.lista_tesis
        if self.filtro_carrera and self.filtro_carrera != "Todas las carreras":
            resultado = [
                t for t in resultado
                if t["carrera"] == self.filtro_carrera
            ]
        if self.busqueda_dinamica:
            busqueda = self.busqueda_dinamica.lower()
            resultado = [
                t for t in resultado
                if (
                    busqueda in t["titulo"].lower() or
                    busqueda in t["nombre_estudiante"].lower() or
                    busqueda in t["cedula_estudiante"].lower()
                )
            ]
        return resultado

    @rx.var
    def tesis_visibles(self) -> list[Dict[str, Any]]:
        return [
            t for t in self.lista_filtrada
            if t["publico"] or (t.get("usuario_id") is not None and t.get("usuario_id") == self.usuario_actual_id)
        ]

    @rx.var
    def tesis_a_mostrar(self) -> list[Dict[str, Any]]:
        if self.usuario_actual_rol == "administrador":
            return self.lista_filtrada
        return self.tesis_visibles

    @rx.var
    def opciones_carreras(self) -> list[str]:
        return ["Todas las carreras"] + self.carreras_disponibles

    @rx.var
    def estudiante_encontrado(self) -> bool:
        return bool(self.nombre_encontrado)

    @rx.var
    def balance_privacidad_tesis(self) -> List[Dict[str, Any]]:
        """Retorna conteo de tesis públicas y privadas para mostrar en dashboard."""
        total = len(self.lista_tesis)
        publicas = sum(1 for t in self.lista_tesis if t.get("publico"))
        privadas = max(0, total - publicas)
        return [
            {"tipo": "Públicas", "color": "#10B981", "valor": publicas},
            {"tipo": "Privadas", "color": "#F59E0B", "valor": privadas},
        ]

    @rx.var
    def total_tesis_count(self) -> int:
        """Cantidad de tesis que se mostrarán según filtros y permisos."""
        # len() funciona sobre la lista devuelta por tesis_a_mostrar
        return len(self.tesis_a_mostrar)

    @rx.var
    def total_tesis_display(self) -> int:
        """Contenedor amigable para la UI."""
        return len(self.tesis_a_mostrar)

    @rx.var
    def detalles_estudiante_encontrado(self) -> Dict[str, str]:
        return {
            "Nombre Completo": f"{self.nombre_encontrado} {self.apellido_encontrado}",
            "Carrera": self.carrera_encontrada,
            "Tutor Académico": self.tutor_academico_encontrado,
            "Empresa": f"{self.empresa_encontrada} ({self.tutor_empresa_encontrado})"
        }

    def abrir_modal(self) -> None:
        self.mostrar_modal = True

    def limpiar_filtros(self) -> None:
        self.busqueda_dinamica = ""
        self.filtro_carrera = ""

    def cerrar_modal(self) -> None:
        self.mostrar_modal = False
        self.cedula_busqueda = ""
        self.titulo_tesis = ""
        self.hacer_publico = False
        self.nombre_encontrado = ""
        self.apellido_encontrado = ""
        self.carrera_encontrada = ""
        self.tutor_academico_encontrado = ""
        self.tesis_en_edicion_id = 0
        self.en_edicion = False
        self.ruta_archivo_actual = ""
        self.tutor_empresa_encontrado = ""
        self.empresa_encontrada = ""

    async def fijar_busqueda_dinamica(self, val: str) -> None:
        """Setter simple para la búsqueda dinámica en la UI. Recarga la lista de tesis."""
        try:
            self.busqueda_dinamica = val
        except Exception:
            self.busqueda_dinamica = str(val)
        await self.cargar_tesis()

    def fijar_cedula_busqueda(self, val: str) -> None:
        try:
            self.cedula_busqueda = val
        except Exception:
            self.cedula_busqueda = str(val)

    def fijar_titulo_tesis(self, val: str) -> None:
        try:
            self.titulo_tesis = val
        except Exception:
            self.titulo_tesis = str(val)

    def fijar_hacer_publico(self, val) -> None:
        # El valor puede venir como bool o Var
        try:
            self.hacer_publico = bool(val)
        except Exception:
            self.hacer_publico = str(val).lower() in ("1", "true", "yes")

    def fijar_password_confirmacion(self, val: str) -> None:
        try:
            self.password_confirmacion = val
        except Exception:
            self.password_confirmacion = str(val)

    async def fijar_filtro_carrera(self, val: str) -> None:
        try:
            self.filtro_carrera = val
        except Exception:
            self.filtro_carrera = str(val)
        await self.cargar_tesis()

    async def generar_reporte_tesis(self) -> rx.Component:
        try:
            output = io.StringIO()
            writer = csv.writer(output)
            writer.writerow(["ID", "Cédula", "Nombre", "Apellido", "Carrera", "Título", "Pública"])
            for t in self.lista_tesis:
                writer.writerow([
                    t.get("id", ""), t.get("cedula_estudiante", ""), t.get("nombre_estudiante", ""),
                    t.get("apellido_estudiante", ""), t.get("carrera", ""), t.get("titulo", ""),
                    t.get("publico", False),
                ])
            return rx.toast.success("Reporte de tesis generado (en memoria).")
        except Exception as e:
            logger.error("Error al generar reporte de tesis: %s", e, exc_info=True)
            return rx.toast.error(f"Error al generar reporte: {e}")

    def abrir_modal_confirmacion(self, tesis_id: int) -> None:
        """Abrir modal de confirmación para eliminar tesis definitivamente."""
        try:
            self.tesis_id_a_eliminar = int(tesis_id)
        except Exception:
            self.tesis_id_a_eliminar = tesis_id
        self.password_confirmacion = ""
        self.mostrar_modal_confirmacion = True

    def cerrar_modal_confirmacion(self) -> None:
        self.mostrar_modal_confirmacion = False
        self.password_confirmacion = ""
        self.tesis_id_a_eliminar = 0

    async def confirmar_eliminacion_tesis(self) -> rx.Component:
        """Elimina la tesis indicada por tesis_id_a_eliminar si existe.
        Requiere que el usuario ingrese correctamente su contraseña actual de inicio de sesión.
        """
        if not self.tesis_id_a_eliminar:
            return rx.toast.error("No hay tesis seleccionada para eliminar.")

        if not self.password_confirmacion:
            return rx.toast.error("Debe ingresar su contraseña para confirmar la eliminación.")

        estado_auth = await self.get_state(EstadoAutenticacion)
        if not estado_auth.usuario:
            return rx.toast.error("Sesión no válida o expirada.")

        conn = obtener_conexion()
        if conn is None:
            return rx.toast.error("Error de conexión al servidor de base de datos.")

        try:
            with conn:
                with conn.cursor() as cursor:
                    # Validar contraseña
                    cursor.execute("SELECT contrasena_hash FROM usuario WHERE id = %s", (estado_auth.usuario.id,))
                    resultado = cursor.fetchone()
                    if not resultado:
                        return rx.toast.error("Usuario no registrado o inactivo.")
                    
                    hash_almacenado = resultado[0]
                    if not EncriptadorContrasena.verificar(self.password_confirmacion, hash_almacenado):
                        return rx.toast.error("La contraseña ingresada es incorrecta.")

                    # Proceder con la eliminación
                    cursor.execute("DELETE FROM tesis WHERE id = %s", (self.tesis_id_a_eliminar,))
                conn.commit()

            await self.cargar_tesis()
            self.cerrar_modal_confirmacion()
            return rx.toast.success("Tesis eliminada permanentemente de la bóveda.")
        except Exception as e:
            try:
                conn.rollback()
            except Exception:
                pass
            logger.exception("Error al eliminar tesis: %s", e)
            return rx.toast.error(f"Error al eliminar la tesis: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    async def abrir_modal_edicion(self, tesis_id: int) -> rx.Component:
        self.en_edicion = True
        self.tesis_en_edicion_id = tesis_id
        tesis_a_editar = next(
            (t for t in self.lista_tesis if t["id"] == tesis_id), None)

        if tesis_a_editar:
            self.cedula_busqueda = tesis_a_editar["cedula_estudiante"]
            self.titulo_tesis = tesis_a_editar["titulo"]
            self.hacer_publico = tesis_a_editar["publico"]
            self.ruta_archivo_actual = tesis_a_editar["url"]
            await self.buscar_estudiante()
            self.mostrar_modal = True
        else:
            return rx.toast.error("No se encontró la tesis seleccionada.")

    async def buscar_estudiante(self) -> rx.Component:
        cedula = self.cedula_busqueda.strip()
        if not cedula:
            return rx.toast.warning("Ingrese una cédula válida.")

        consulta = """
                SELECT 
                    e.nombre, e.apellido, c.nombre as carrera_nom,
                    ta.nombre || ' ' || ta.apellido as tutor_acad,
                    emp.nombre as empresa_nom, te.nombre as tutor_emp
                FROM estudiante e
                LEFT JOIN carrera c ON e.carrera_id = c.id
                LEFT JOIN tutor_academico ta ON e.tutor_academico_id = ta.id
                LEFT JOIN tutor_empresarial te ON e.tutor_empresarial_id = te.id
                LEFT JOIN empresa emp ON te.empresa_id = emp.id
                WHERE e.cedula = %s AND e.esta_activo = TRUE
        """
        conn = obtener_conexion()
        if conn is None:
            logger.error("No se pudo establecer la conexión para buscar estudiante.")
            return rx.toast.error("Error de conexión al servidor.")

        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute(consulta, (cedula,))
                    resultado = cursor.fetchone()
                    if resultado:
                        self.nombre_encontrado, self.apellido_encontrado, self.carrera_encontrada, \
                            self.tutor_academico_encontrado, self.empresa_encontrada, \
                            self.tutor_empresa_encontrado = resultado
                    else:
                        return rx.toast.error("Estudiante no encontrado.")
        except Exception as e:
            logger.exception("Error en búsqueda de estudiante: %s", e)
            return rx.toast.error(f"Error en búsqueda: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    async def registrar_tesis(self, archivos: list[rx.UploadFile]) -> rx.Component:
        estado_auth = await self.get_state(EstadoAutenticacion)
        es_admin = estado_auth.rol_usuario == "administrador"

        if not es_admin and self.cedula_busqueda != (estado_auth.usuario.cedula if estado_auth.usuario else ""):
            return rx.toast.error("No tienes permiso para registrar la tesis de otro estudiante.")

        if not self.cedula_busqueda.strip() or not self.titulo_tesis.strip() or not self.nombre_encontrado:
            return rx.toast.warning("Debe buscar un estudiante válido y proporcionar un título.")

        ruta_destino_final = None
        nombre_archivo_seguro = None
        datos_subida = None

        if archivos:
            # Leer bytes y validar magic bytes y tamaño antes de cualquier operación
            archivo = archivos[0]
            datos_subida = await archivo.read()
            MAX_TAMANO_BYTES = 50 * 1024 * 1024
            if len(datos_subida) > MAX_TAMANO_BYTES:
                return rx.toast.error("El archivo supera el límite de 50MB.")
            if not datos_subida.startswith(b"%PDF"):
                return rx.toast.error("El archivo no es un PDF válido.")

            # Sanitizar nombre para evitar path traversal
            extension = archivo.filename.split('.')[-1] if '.' in archivo.filename else 'pdf'
            nombre_original = f"tesis_{self.cedula_busqueda.strip()}.{extension}"
            nombre_archivo_seguro = re.sub(r'[^a-zA-Z0-9_\-\.]', '_', nombre_original)
            ruta_destino = os.path.join("assets", "tesis", nombre_archivo_seguro)
            ruta_destino_final = f"tesis/{nombre_archivo_seguro}"
        elif self.en_edicion and self.ruta_archivo_actual:
            ruta_destino_final = self.ruta_archivo_actual.lstrip('/')
        else:
            return rx.toast.warning("Debe subir el archivo de la tesis.")

        self.procesando = True
        conn = None
        exito_db = False
        try:
            conn = obtener_conexion()
            if conn is None:
                self.procesando = False
                logger.error("No se pudo establecer la conexión para registrar tesis.")
                return rx.toast.error("Error de conexión al servidor.")

            self.titulo_tesis = self.titulo_tesis.strip()
            self.cedula_busqueda = self.cedula_busqueda.strip()

            with conn:
                with conn.cursor() as cursor:
                    cursor.execute("SELECT id FROM estudiante WHERE cedula = %s", (self.cedula_busqueda.strip(),))
                    resultado_estudiante = cursor.fetchone()
                    if not resultado_estudiante:
                        self.procesando = False
                        return rx.toast.error("Error: El estudiante no está registrado.")
                    id_estudiante = resultado_estudiante[0]

                    if self.en_edicion and self.tesis_en_edicion_id:
                        cursor.execute("""
                            UPDATE tesis
                            SET titulo = %s, es_publica = %s, ruta_archivo = %s, estudiante_id = %s
                            WHERE id = %s;
                        """, (self.titulo_tesis, self.hacer_publico, ruta_destino_final, id_estudiante, self.tesis_en_edicion_id))
                    else:
                        cursor.execute("""
                            INSERT INTO tesis (titulo, es_publica, ruta_archivo, estudiante_id)
                            VALUES (%s, %s, %s, %s)
                            ON CONFLICT (estudiante_id) DO UPDATE SET 
                                titulo = EXCLUDED.titulo, 
                                ruta_archivo = EXCLUDED.ruta_archivo,
                                es_publica = EXCLUDED.es_publica;
                        """, (self.titulo_tesis, self.hacer_publico, ruta_destino_final, id_estudiante))

                conn.commit()
                exito_db = True

        except Exception as e:
            if conn:
                try:
                    conn.rollback()
                except Exception:
                    pass
            logger.exception("Error al registrar tesis en BD: %s", e)
            self.procesando = False
            return rx.toast.error(f"Error al registrar en base de datos: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

        # 5. Solo si el commit fue exitoso, escribir el archivo en disco
        if exito_db and archivos and datos_subida is not None:
            try:
                os.makedirs(os.path.dirname(ruta_destino), exist_ok=True)
                with open(ruta_destino, "wb") as f:
                    f.write(datos_subida)
            except Exception as e:
                logger.error("Error al escribir archivo de tesis tras commit: %s", e)
                return rx.toast.warning("Tesis registrada en BD, pero hubo un error al guardar el archivo físico.")

        # Refrescar estado y UI
        self.procesando = False
        self.cerrar_modal()
        await self.cargar_tesis()
        return rx.toast.success("Tesis procesada correctamente.")

    # El resto del archivo se mantiene igual (métodos de eliminación, reportes, etc.)

    @rx.var
    def total_tesis(self) -> int:
        """Número total de tesis cargadas (activos)."""
        return len(self.lista_tesis)
