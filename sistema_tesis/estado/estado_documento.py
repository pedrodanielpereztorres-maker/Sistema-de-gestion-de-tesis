import logging
import reflex as rx
logger = logging.getLogger(__name__)
import os
from typing import List
from pydantic import BaseModel
from datetime import date
from ..database_manager import obtener_conexion


class Documento(BaseModel):
    id: int
    titulo: str
    descripcion: str
    fecha_subida: str
    tipo: str
    tamano_kb: int
    tamano: str
    url: str = ""


class EstadoDocumento(rx.State):
    lista_documentos: list[Documento] = []

    titulo_nuevo: str = ""
    descripcion_nueva: str = ""
    procesando: bool = False

    # Variable para el texto de búsqueda del usuario
    busqueda_documento: str = ""

    mostrar_modal_edicion: bool = False
    id_edicion: int = 0
    titulo_edicion: str = ""
    descripcion_edicion: str = ""

    async def cargar_documentos(self):
        """Carga la lista de documentos desde la base de datos."""
        conn = None
        try:
            conn = obtener_conexion()
            if conn is None:
                logger.error("Sin conexión para cargar documentos.")
                return

            with conn:
                with conn.cursor() as cursor:
                    cursor.execute("""
                        SELECT id, titulo, descripcion, fecha_subida, tipo, tamano_kb, ruta_archivo 
                        FROM documento 
                        ORDER BY fecha_subida DESC;
                    """)
                    resultados = cursor.fetchall()
                    self.lista_documentos = [
                        Documento(
                            id=fila[0],
                            titulo=fila[1],
                            descripcion=fila[2],
                            fecha_subida=fila[3].strftime(
                                "%d/%m/%Y") if fila[3] else "",
                            tipo=fila[4],
                            tamano_kb=fila[5] or 0,
                            tamano=f"{fila[5]} KB" if fila[5] is not None else "0 KB",
                            url=f"/{fila[6].lstrip('/')}" if fila[6] else ""
                        ) for fila in resultados
                    ]
        except Exception as e:
            logger.exception("Error al cargar documentos: %s", e)
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    def fijar_titulo_nuevo(self, val: str) -> None:
        self.titulo_nuevo = val

    def fijar_descripcion_nueva(self, val: str) -> None:
        self.descripcion_nueva = val

    def fijar_busqueda_documento(self, valor: str) -> None:
        """Actualiza el texto de búsqueda de documentos."""
        self.busqueda_documento = valor

    @rx.var
    def documentos_filtrados(self) -> list[Documento]:
        """Retorna los documentos filtrados según la búsqueda activa."""
        if not self.busqueda_documento.strip():
            return self.lista_documentos

        texto = self.busqueda_documento.strip().lower()
        return [
            doc for doc in self.lista_documentos
            if (
                texto in doc.titulo.lower() or
                texto in doc.descripcion.lower()
            )
        ]

    async def publicar_documento(self, archivos: List[rx.UploadFile]):
        """Publica uno o varios documentos validando tipo (magic bytes), tamaño y sanitizando nombres.

        El flujo es: leer en memoria -> validar -> insertar registro en BD -> escribir archivo en disco.
        Si la escritura falla, se elimina el registro en BD para evitar inconsistencias.
        """
        if not self.titulo_nuevo:
            self.procesando = False
            return rx.toast.error("Debes ingresar un título para el documento.")

        TIPOS_PERMITIDOS = {
            "pdf": b"%PDF",
            "docx": b"PK\x03\x04",
            "doc": b"\xd0\xcf\x11\xe0",
            "xlsx": b"PK\x03\x04",
            "pptx": b"PK\x03\x04",
            "png": b"\x89PNG",
            "jpg": b"\xff\xd8\xff",
        }

        MAX_TAMANO_BYTES = 20 * 1024 * 1024  # 20MB

        self.procesando = True
        archivos_creados_bd_ids = []

        conn = obtener_conexion()
        if conn is None:
            self.procesando = False
            return rx.toast.error("No se pudo establecer la conexión con el servidor.")

        try:
            for archivo in archivos:
                datos_subida = await archivo.read()
                if len(datos_subida) > MAX_TAMANO_BYTES:
                    return rx.toast.error(f"El archivo {archivo.filename} supera el límite de 20MB.")

                # Determinar extensión y validar
                extension = archivo.filename.split('.')[-1].lower() if '.' in archivo.filename else ""
                if extension not in TIPOS_PERMITIDOS:
                    return rx.toast.error(f"Tipo de archivo no permitido: {extension}")

                magic = TIPOS_PERMITIDOS[extension]
                if not datos_subida.startswith(magic):
                    return rx.toast.error(f"El archivo {archivo.filename} no cumple con los bytes mágicos esperados para .{extension}.")

                # Sanitizar nombre y preparar rutas
                import re as _re
                nombre_limpio = _re.sub(r"[^\w\.-]", "_", archivo.filename)
                nombre_final = f"doc_{date.today().isoformat()}_{nombre_limpio}"
                ruta_bd = f"documentos/{nombre_final}"
                ruta_destino = os.path.join("assets", "documentos", nombre_final)

                # Insertar registro en BD y obtener id
                try:
                    with conn:
                        with conn.cursor() as cursor:
                            tamano_kb = max(1, len(datos_subida) // 1024)
                            cursor.execute("""
                                INSERT INTO documento (titulo, descripcion, tipo, tamano_kb, ruta_archivo)
                                VALUES (%s, %s, %s, %s, %s)
                                RETURNING id;
                            """, (
                                self.titulo_nuevo,
                                self.descripcion_nueva or "Sin descripción",
                                extension, tamano_kb, ruta_bd
                            ))
                            nuevo_id = cursor.fetchone()[0]
                        conn.commit()
                except Exception as e:
                    # Error al insertar en BD
                    logger.exception("Error al insertar documento en BD: %s", e)
                    return rx.toast.error("Error al guardar el registro del documento en la base de datos.")

                # Escribir archivo en disco; si falla, eliminar registro BD creado
                try:
                    os.makedirs(os.path.dirname(ruta_destino), exist_ok=True)
                    with open(ruta_destino, "wb") as f:
                        f.write(datos_subida)
                    archivos_creados_bd_ids.append((nuevo_id, ruta_destino))
                except Exception as e:
                    # Intentar borrar registro en BD
                    logger.error("Error al escribir archivo en disco: %s", e)
                    conn2 = obtener_conexion()
                    try:
                        if conn2:
                            with conn2:
                                with conn2.cursor() as c2:
                                    c2.execute("DELETE FROM documento WHERE id = %s", (nuevo_id,))
                                conn2.commit()
                    except Exception as ex:
                        logger.error("Fallo en limpieza de BD: %s", ex)
                    finally:
                        if conn2: conn2.close()
                        
                    return rx.toast.error(f"Error al guardar el archivo {archivo.filename} en el servidor.")

            # Si llegamos aquí, todos los archivos se procesaron correctamente
            self.titulo_nuevo = ""
            self.descripcion_nueva = ""
            await self.cargar_documentos()
            return rx.toast.success("Documento(s) publicado(s) correctamente.")

        except Exception as e:
            # Limpieza general en caso de fallo inesperado
            for (_id, ruta) in archivos_creados_bd_ids:
                try:
                    # borrar el archivo físico
                    if os.path.exists(ruta):
                        os.remove(ruta)
                    # borrar registro BD
                    conn2 = obtener_conexion()
                    if conn2:
                        try:
                            with conn2:
                                with conn2.cursor() as c2:
                                    c2.execute("DELETE FROM documento WHERE id = %s", (_id,))
                                conn2.commit()
                        finally:
                            conn2.close()
                except Exception:
                    pass
            logger.exception("Error crítico al publicar documentos: %s", e)
            return rx.toast.error(f"Error al publicar el documento: {e}")
        finally:
            self.procesando = False
            try:
                conn.close()
            except Exception:
                pass

    def cancelar_publicacion(self):
        """Limpia los campos del formulario de publicación."""
        self.titulo_nuevo = ""
        self.descripcion_nueva = ""
        return rx.clear_selected_files("upload_docs")

    async def eliminar_documento(self, id_documento: int):
        conn = obtener_conexion()
        if conn is None:
            return rx.toast.error("Error de conexión.")

        try:
            with conn:
                with conn.cursor() as cursor:
                    # 1. Obtener ruta del archivo antes de borrar el registro
                    cursor.execute("SELECT ruta_archivo FROM documento WHERE id = %s;", (id_documento,))
                    res_archivo = cursor.fetchone()
                    
                    # 2. Borrar de la base de datos
                    cursor.execute(
                        "DELETE FROM documento WHERE id = %s;", (id_documento,))
                    conn.commit()
                    
                    # 3. Borrar archivo físico del disco
                    if res_archivo and res_archivo[0]:
                        ruta_fisica = os.path.join("assets", res_archivo[0])
                        if os.path.exists(ruta_fisica):
                            os.remove(ruta_fisica)
                            
            await self.cargar_documentos()
            return rx.toast.success("Documento eliminado correctamente.")
        except Exception as e:
            logger.error("Error al eliminar documento: %s", e, exc_info=True)
            return rx.toast.error("Error al eliminar el documento.")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    def preparar_edicion(self, documento_instancia: Documento):
        self.id_edicion = documento_instancia.id
        self.titulo_edicion = documento_instancia.titulo
        self.descripcion_edicion = documento_instancia.descripcion
        self.mostrar_modal_edicion = True

    def cancelar_edicion(self):
        self.mostrar_modal_edicion = False

    async def guardar_edicion(self):
        """Guarda los cambios realizados en el título y descripción de un documento."""
        if not self.titulo_edicion.strip():
            return rx.toast.error("El título del documento es obligatorio.")

        conn = obtener_conexion()
        if conn is None:
            return rx.toast.error("Error de conexión.")

        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute("""
                        UPDATE documento 
                        SET titulo = %s, descripcion = %s
                        WHERE id = %s;
                    """, (self.titulo_edicion, self.descripcion_edicion, self.id_edicion))
                    conn.commit()

            await self.cargar_documentos()
            self.mostrar_modal_edicion = False
            return rx.toast.success("Documento actualizado correctamente.")
        except Exception as e:
            logger.exception("Error al actualizar documento: %s", e)
            return rx.toast.error(f"Error al actualizar el documento: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    def fijar_titulo_edicion(self, val: str) -> None: self.titulo_edicion = val
    def fijar_descripcion_edicion(self, val: str) -> None: self.descripcion_edicion = val

    @rx.var
    def total_documentos(self) -> int:
        return len(self.lista_documentos)
