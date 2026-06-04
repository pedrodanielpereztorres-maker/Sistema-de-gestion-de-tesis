import logging
import reflex as rx
from typing import List, Dict, Any
import csv
import io
from datetime import datetime
from ..database_manager import obtener_conexion
from fpdf import FPDF
from .estado_boveda import EstadoBoveda

logger = logging.getLogger(__name__)

class EstadoReportes(rx.State):
    resumen_global: Dict[str, int] = {
        "total_estudiantes": 0,
        "con_pasantia": 0,
        "sin_pasantia": 0,
        "total_tesis": 0
    }
    estadisticas_carreras: List[Dict[str, Any]] = []
    mejores_tutores: List[Dict[str, Any]] = []
    mejores_empresas: List[Dict[str, Any]] = []
    procesando: bool = False

    async def exportar_tesis_csv(self):
        """
        Centraliza la exportación de tesis desde el panel de reportes.
        Llama al método existente en EstadoBoveda.
        """
        boveda = await self.get_state(EstadoBoveda)
        if not boveda.lista_tesis:
            await boveda.cargar_tesis()
        
        if not boveda.lista_tesis:
            return rx.toast.warning("No hay tesis registradas para exportar.")
        
        return boveda.generar_reporte_tesis()

    async def cargar_reportes(self):
        """Carga todos los datos analíticos desde la base de datos."""
        conn = obtener_conexion()
        if conn is None:
            return rx.toast.error("Error de conexión al cargar reportes.")
        
        try:
            with conn:
                with conn.cursor() as cursor:
                    # 1. Resumen Global
                    cursor.execute("SELECT COUNT(*) FROM estudiante WHERE esta_activo = TRUE")
                    total = cursor.fetchone()[0]
                    
                    cursor.execute("SELECT COUNT(*) FROM estudiante WHERE tutor_academico_id IS NOT NULL AND esta_activo = TRUE")
                    con_pasantia = cursor.fetchone()[0]
                    
                    cursor.execute("SELECT COUNT(*) FROM tesis")
                    total_tesis = cursor.fetchone()[0]
                    
                    self.resumen_global = {
                        "total_estudiantes": total,
                        "con_pasantia": con_pasantia,
                        "sin_pasantia": total - con_pasantia,
                        "total_tesis": total_tesis
                    }

                    # 2. Estadísticas por Carrera
                    cursor.execute("""
                        SELECT c.nombre, COUNT(e.id) 
                        FROM carrera c 
                        LEFT JOIN estudiante e ON c.id = e.carrera_id AND e.esta_activo = TRUE
                        WHERE c.esta_activa = TRUE
                        GROUP BY c.nombre
                    """)
                    resultados_carreras = cursor.fetchall()
                    max_est = max([r[1] for r in resultados_carreras]) if resultados_carreras else 1
                    self.estadisticas_carreras = [
                        {"nombre": r[0], "cantidad": r[1], "progreso": (r[1] / max_est) * 100}
                        for r in resultados_carreras
                    ]

                    # 3. Mejores Tutores (Top 5)
                    cursor.execute("""
                        SELECT ta.nombre || ' ' || ta.apellido, COUNT(e.id) as cantidad
                        FROM tutor_academico ta
                        JOIN estudiante e ON ta.id = e.tutor_academico_id
                        WHERE ta.esta_activo = TRUE
                        GROUP BY ta.id, ta.nombre, ta.apellido
                        ORDER BY cantidad DESC LIMIT 5
                    """)
                    self.mejores_tutores = [{"nombre": r[0], "cantidad": r[1]} for r in cursor.fetchall()]

                    # 4. Todas las Empresas (con conteo de pasantes)
                    # Correo y teléfono se toman del tutor empresarial asociado
                    cursor.execute("""
                        SELECT emp.nombre, emp.direccion, MAX(te.correo), MAX(te.telefono), COUNT(e.id) as cantidad
                        FROM empresa emp
                        LEFT JOIN tutor_empresarial te ON emp.id = te.empresa_id
                        LEFT JOIN estudiante e ON te.id = e.tutor_empresarial_id AND e.esta_activo = TRUE
                        GROUP BY emp.id, emp.nombre, emp.direccion
                        ORDER BY cantidad DESC, emp.nombre ASC
                    """)
                    self.mejores_empresas = [
                        {"nombre": r[0], "direccion": r[1], "correo": r[2], "telefono": r[3], "cantidad": r[4]} 
                        for r in cursor.fetchall()
                    ]
        except Exception as e:
            logger.exception("Error al cargar reportes: %s", e)
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    def exportar_empresas_excel(self):
        """Genera un reporte CSV de todas las empresas vinculadas."""
        if not self.mejores_empresas:
            return rx.toast.warning("No hay datos de empresas para exportar.")
            
        salida = io.StringIO()
        escritor = csv.writer(salida)
        # Estructura de encabezado visual (Simulación de bordes)
        escritor.writerow(["=========================================================================================="])
        escritor.writerow(["SISTEMA DE GESTIÓN DE TESIS - REPORTE DE VINCULACIÓN EMPRESARIAL"])
        escritor.writerow(["=========================================================================================="])
        escritor.writerow(["DESCRIPCIÓN:", "Listado detallado de todas las entidades aliadas y su carga de pasantes."])
        escritor.writerow(["FECHA GENERACIÓN:", datetime.now().strftime('%d/%m/%Y %H:%M')])
        escritor.writerow(["=========================================================================================="])
        escritor.writerow([]) 

        escritor.writerow(["Empresa", "Dirección", "Correo de Contacto", "Teléfono", "Pasantes Actuales"])
        
        for emp in self.mejores_empresas:
            escritor.writerow([emp["nombre"], emp["direccion"], emp["correo"], emp["telefono"], emp["cantidad"]])
            
        return rx.download(
            data=salida.getvalue(),
            filename=f"reporte_empresas_{datetime.now().strftime('%d_%m_%Y')}.csv"
        )

    def exportar_empresas_pdf(self):
        """Genera un reporte PDF profesional de las empresas."""
        if not self.mejores_empresas:
            return rx.toast.warning("No hay datos para generar el PDF.")

        try:
            pdf = FPDF(orientation='P', unit='mm', format='A4')
            pdf.add_page()
            
            # --- Encabezado con Identidad Institucional ---
            pdf.set_font("Helvetica", 'B', 18)
            pdf.set_text_color(31, 41, 55)  # Gris oscuro
            pdf.cell(0, 15, "SISTEMA DE GESTIÓN DE TESIS", ln=True, align='C')
            
            # Línea decorativa
            pdf.set_draw_color(99, 102, 241)  # Indigo
            pdf.set_line_width(0.5)
            pdf.line(10, 25, 200, 25)
            pdf.ln(5)

            # --- Título del Reporte y Metadatos ---
            pdf.set_font("Helvetica", 'B', 14)
            pdf.cell(0, 10, "Reporte de Vinculación Empresarial", ln=True, align='L')
            
            pdf.set_font("Helvetica", 'I', 9)
            pdf.set_text_color(100, 116, 139)  # Slate
            pdf.cell(0, 5, f"Fecha de emisión: {datetime.now().strftime('%d/%m/%Y %H:%M')}", ln=True, align='L')
            pdf.ln(10)
            
            # --- Descripción del Reporte ---
            pdf.set_font("Helvetica", '', 10)
            pdf.set_text_color(30, 41, 59)
            desc = "Listado oficial de entidades receptoras de pasantes y vinculación académica institucional."
            pdf.cell(0, 10, desc, ln=True)
            
            # Resumen de métricas en el PDF
            pdf.set_font("Helvetica", 'B', 10)
            pdf.cell(0, 8, f"Total de Empresas Registradas: {len(self.mejores_empresas)}", ln=True)
            pdf.ln(10)

            # --- Cabecera de tabla ---
            pdf.set_fill_color(99, 102, 241) # Color Indigo del sistema
            pdf.set_text_color(255, 255, 255)
            pdf.set_font("Helvetica", 'B', 10)
            
            pdf.cell(65, 10, "Nombre de la Empresa", 1, 0, 'C', True)
            pdf.cell(75, 10, "Correo de Contacto", 1, 0, 'C', True)
            pdf.cell(30, 10, "Teléfono", 1, 0, 'C', True)
            pdf.cell(20, 10, "Pasantes", 1, 1, 'C', True)
            
            # --- Datos de la tabla ---
            pdf.set_text_color(30, 41, 59)
            pdf.set_font("Helvetica", '', 9)
            
            relleno = False
            for emp in self.mejores_empresas:
                pdf.set_fill_color(248, 250, 252) if relleno else pdf.set_fill_color(255, 255, 255)
                
                # Control de longitud para evitar desbordamiento
                nombre = (emp["nombre"][:35] + '..') if len(emp["nombre"]) > 37 else emp["nombre"]
                correo_val = emp["correo"] or "N/A"
                correo_val = (correo_val[:40] + '..') if len(correo_val) > 42 else correo_val
                
                pdf.cell(65, 8, nombre, 1, 0, 'L', relleno)
                pdf.cell(75, 8, correo_val, 1, 0, 'L', relleno)
                pdf.cell(30, 8, emp["telefono"] or "N/A", 1, 0, 'C', relleno)
                pdf.cell(20, 8, str(emp["cantidad"]), 1, 1, 'C', relleno)
                relleno = not relleno

            # --- Pie de página ---
            pdf.set_y(-20)
            pdf.set_font("Helvetica", 'I', 8)
            pdf.set_text_color(148, 163, 184)
            pdf.cell(0, 10, f"Página {pdf.page_no()} - Documento Administrativo Confidencial", align='C')
            
            # Obtener el contenido de forma segura
            pdf_output = bytes(pdf.output())
            
            return rx.download(data=pdf_output, filename=f"reporte_empresas_{datetime.now().strftime('%d_%m_%Y')}.pdf")
        except Exception as e:
            logger.exception("Error al generar PDF de reportes: %s", e)
            return rx.toast.error("Error técnico al generar el PDF.")