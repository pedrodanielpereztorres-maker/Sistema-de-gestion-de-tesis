import logging
import math
import re
import reflex as rx
from pydantic import BaseModel
from ..database_manager import obtener_conexion
from .estado_boveda import EstadoBoveda
logger = logging.getLogger(__name__)


class Rol(BaseModel):
    id: int
    nombre: str
    descripcion: str


class Carrera(BaseModel):
    id: int
    nombre: str
    esta_activa: bool
    tiene_movimientos: bool


class TutorAcademico(BaseModel):
    id: int
    nombre: str
    cedula: str
    correo: str
    telefono: str
    carrera: str
    especialidad: str
    activo: bool
    tiene_movimientos: bool


class UsuarioSistema(BaseModel):
    id: int
    cedula: str
    nombre: str
    apellido: str
    correo: str
    rol: str
    esta_activo: bool
    clave: str


class EstadoMantenimiento(rx.State):
    indice_pestana: str = "usuarios"
    usuarios: list[UsuarioSistema] = []
    roles: list[Rol] = []
    tutores: list[TutorAcademico] = []
    carreras: list[Carrera] = []
    carreras_nombres: list[str] = []
    busqueda_usuarios: str = ""
    busqueda_tutores: str = ""
    busqueda_roles: str = ""
    busqueda_carreras: str = ""
    usuarios_pagina_actual: int = 1
    tutores_pagina_actual: int = 1
    roles_pagina_actual: int = 1
    carreras_pagina_actual: int = 1
    registros_por_pagina: int = 10
    modal_usuario_abierto: bool = False
    modal_tutor_abierto: bool = False
    modal_rol_abierto: bool = False
    modal_carrera_abierto: bool = False
    modal_confirmar_rol_abierto: bool = False
    t_en_edicion: bool = False
    t_usuario_encontrado: bool = False
    t_id: int = 0
    t_nombre: str = ""
    t_cedula: str = ""
    t_correo: str = ""
    t_telefono: str = ""
    t_carrera: str = ""
    t_especialidad: str = ""
    u_cedula: str = ""
    u_nombre: str = ""
    u_apellido: str = ""
    u_correo: str = ""
    u_clave: str = ""
    u_rol: str = ""
    r_nombre: str = ""
    r_descripcion: str = ""
    id_rol_eliminar: int = 0
    password_confirmacion: str = ""
    c_en_edicion: bool = False
    c_id: int = 0
    c_nombre: str = ""

    def cargar_datos(self):
        """Carga la configuración global del sistema usando SQL puro."""
        conn = obtener_conexion()
        if conn is None:
            logger.error("Sin conexión para cargar mantenimiento.")
            return rx.toast.error("Error de conexión al servidor.")
        try:
            with conn:
                with conn.cursor() as cursor:
                    # Usuarios
                    cursor.execute("""
                        SELECT u.id, u.cedula, u.nombre, u.apellido, u.correo, r.nombre, u.esta_activo
                        FROM usuario u
                        LEFT JOIN rol r ON u.rol_id = r.id
                        ORDER BY u.id;
                    """)
                    self.usuarios = [
                        UsuarioSistema(id=u[0], cedula=u[1], nombre=u[2], apellido=u[3],
                                       correo=u[4] or "", rol=u[5] or "Sin Rol", esta_activo=bool(u[6]), clave="")
                        for u in cursor.fetchall()
                    ]
                    # Roles
                    cursor.execute(
                        "SELECT id, nombre, descripcion FROM rol ORDER BY nombre;")
                    self.roles = [Rol(id=r[0], nombre=r[1], descripcion=r[2]
                                      or f"Nivel {r[0]}") for r in cursor.fetchall()]
                    # Carreras
                    cursor.execute(
                        "SELECT id, nombre, esta_activa FROM carrera ORDER BY nombre;")
                    res_c = cursor.fetchall()
                    self.carreras_nombres = [c[1] for c in res_c]
                    self.carreras = []
                    for c_id, c_nom, c_act in res_c:
                        cursor.execute("""
                            SELECT EXISTS(SELECT 1 FROM estudiante WHERE carrera_id = %s) OR 
                                   EXISTS(SELECT 1 FROM tutor_academico WHERE carrera_id = %s);
                        """, (c_id, c_id))
                        tiene_mov = cursor.fetchone()[0]
                        self.carreras.append(
                            Carrera(id=c_id, nombre=c_nom, esta_activa=bool(c_act), tiene_movimientos=bool(tiene_mov)))
                    # Tutores
                    cursor.execute("""
                        SELECT ta.id, COALESCE(u.nombre, ta.nombre), COALESCE(u.apellido, ta.apellido), 
                               COALESCE(u.cedula, ta.cedula), COALESCE(u.correo, ta.correo), 
                               ta.especialidad, ta.esta_activo, c.nombre as carrera_nom, ta.telefono
                        FROM tutor_academico ta
                        LEFT JOIN usuario u ON ta.usuario_id = u.id
                        JOIN carrera c ON ta.carrera_id = c.id
                        ORDER BY ta.id;
                    """)
                    res_tutores = cursor.fetchall()
                    self.tutores = []
                    for t in res_tutores:
                        cursor.execute("""
                            SELECT EXISTS(
                                SELECT 1 FROM tesis 
                                JOIN estudiante ON tesis.estudiante_id = estudiante.id 
                                WHERE estudiante.tutor_academico_id = %s
                            );
                        """, (t[0],))
                        tesis_v = cursor.fetchone()[0]
                        self.tutores.append(TutorAcademico(
                            id=t[0], nombre=f"{t[1]} {t[2]}", cedula=t[3], correo=t[4], telefono=t[8] or "",
                            carrera=t[7], especialidad=t[5], activo=t[6], tiene_movimientos=bool(
                                tesis_v)
                        ))
        except Exception as e:
            logger.exception("Error crítico al cargar datos: %s", e)
            return rx.toast.error("Error al cargar datos.")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    def probar_conexion(self):
        conn = obtener_conexion()
        if conn is None:
            return rx.toast.error("Fallo de conexión.")
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute("SELECT 1")
                    return rx.toast.success("Conexión a PostgreSQL exitosa.")
        except Exception as e:
            logger.exception("Error en prueba de conexión: %s", e)
            return rx.toast.error(f"Error de conexión: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    @rx.var
    def usuarios_filtrados(self) -> list[UsuarioSistema]:
        if not self.busqueda_usuarios:
            return self.usuarios
        termino = self.busqueda_usuarios.lower()
        return [u for u in self.usuarios if termino in u.nombre.lower() or termino in u.apellido.lower() or termino in u.correo.lower()]

    @rx.var
    def tutores_filtrados(self) -> list[TutorAcademico]:
        if not self.busqueda_tutores:
            return self.tutores
        termino = self.busqueda_tutores.lower()
        return [t for t in self.tutores if termino in t.nombre.lower() or termino in t.especialidad.lower()]

    @rx.var
    def roles_filtrados(self) -> list[Rol]:
        return [r for r in self.roles if self.busqueda_roles.lower() in r.nombre.lower()] if self.busqueda_roles else self.roles

    @rx.var
    def carreras_filtradas(self) -> list[Carrera]:
        return [c for c in self.carreras if self.busqueda_carreras.lower() in c.nombre.lower()] if self.busqueda_carreras else self.carreras

    def abrir_modal_usuario(self):
        self.u_cedula, self.u_nombre, self.u_apellido = "", "", ""
        self.u_correo, self.u_clave, self.u_rol = "", "", ""
        self.modal_usuario_abierto = True

    def cerrar_modal_usuario(self):
        self.modal_usuario_abierto = False

    async def guardar_usuario(self):
        if not self.u_nombre or not self.u_correo or not self.u_cedula or not self.u_clave:
            return rx.toast.warning("⚠️ Campos Requeridos: Todos los campos del formulario son obligatorios. Por favor, asegúrese de ingresar cédula, nombre, apellido, correo y contraseña.")

        # Validar longitud mínima de contraseña
        if len(self.u_clave) < 8:
            return rx.toast.error("🔒 Seguridad de Contraseña: La clave ingresada debe tener un mínimo de 8 caracteres para cumplir con las políticas de seguridad.")

        # Validar formato básico del correo
        patron_correo = r'^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$'
        if not re.match(patron_correo, self.u_correo.strip()):
            return rx.toast.error("✉️ Correo Inválido: La dirección de correo electrónico provista no posee un formato estructuralmente válido (ejemplo: usuario@dominio.com).")

        # Validar cédula (solo números, longitud razonable)
        if not self.u_cedula.strip().isdigit() or not (6 <= len(self.u_cedula.strip()) <= 10):
            return rx.toast.error("🪪 Cédula Incorrecta: El número de cédula de identidad debe contener únicamente caracteres numéricos y una longitud de entre 6 y 10 dígitos.")

        conn = obtener_conexion()
        if conn is None:
            return rx.toast.error("🔌 Fallo de Conexión: No se pudo establecer comunicación con el servidor. Verifique la base de datos.")
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        "SELECT id FROM rol WHERE nombre = %s", (self.u_rol,))
                    res_rol = cursor.fetchone()
                    if not res_rol:
                        return rx.toast.error("❌ Rol Inválido: El rol seleccionado para el nuevo usuario no existe en la base de datos.")
                    from .estado_autenticacion import EncriptadorContrasena
                    hash_clave = EncriptadorContrasena.encriptar(self.u_clave)
                    cursor.execute("""
                        INSERT INTO usuario (cedula, nombre, apellido, correo, contrasena_hash, rol_id)
                        VALUES (%s, %s, %s, %s, %s, %s)
                        RETURNING id;
                    """, (self.u_cedula, self.u_nombre, self.u_apellido, self.u_correo, hash_clave, res_rol[0]))
                    u_id = cursor.fetchone()[0]
                    conn.commit()
                    cursor.execute(
                        "UPDATE estudiante SET usuario_id = %s WHERE cedula = %s;", (u_id, self.u_cedula))
                    cursor.execute(
                        "UPDATE tutor_academico SET usuario_id = %s WHERE cedula = %s;", (u_id, self.u_cedula))
                    conn.commit()

            self.modal_usuario_abierto = False
            self.cargar_datos()

            # Refrescar Bóveda por si el usuario es un estudiante o tutor
            boveda = await self.get_state(EstadoBoveda)
            await boveda.cargar_tesis()

            return rx.toast.success("🎉 Registro Exitoso: El nuevo usuario ha sido registrado y vinculado correctamente en el sistema.")
        except Exception as e:
            logger.exception("Error al guardar usuario: %s", e)
            return rx.toast.error(f"💥 Error al registrar: Ocurrió un error inesperado al almacenar el usuario: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    async def cargar_datos_usuario_tutor(self):
        if not self.t_cedula:
            self.t_nombre = ""
            self.t_correo = ""
            self.t_usuario_encontrado = False
            return
        conn = obtener_conexion()
        if conn is None:
            logger.error("Sin conexión para buscar usuario tutor.")
            return
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        "SELECT nombre, apellido, correo FROM usuario WHERE cedula = %s;", (self.t_cedula,))
                    res = cursor.fetchone()
                    if res:
                        self.t_nombre = f"{res[0]} {res[1]}"
                        self.t_correo = res[2]
                        self.t_usuario_encontrado = True
                    else:
                        self.t_nombre = ""
                        self.t_correo = ""
                        self.t_usuario_encontrado = False
        except Exception as e:
            logger.exception("Error al buscar usuario tutor: %s", e)
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    def abrir_modal_tutor(self, editar: bool = False, tutor: TutorAcademico = None):
        self.t_en_edicion = editar
        if editar and tutor:
            self.t_id, self.t_nombre, self.t_cedula = tutor.id, tutor.nombre, tutor.cedula
            self.t_correo, self.t_telefono, self.t_carrera = tutor.correo, tutor.telefono, tutor.carrera
            self.t_especialidad, self.t_usuario_encontrado = tutor.especialidad, True
        else:
            self.t_nombre = self.t_cedula = self.t_correo = self.t_telefono = self.t_carrera = self.t_especialidad = ""
            self.t_usuario_encontrado = False
        self.modal_tutor_abierto = True

    def cerrar_modal_tutor(self):
        self.modal_tutor_abierto = False

    def abrir_modal_rol(self):
        self.r_nombre, self.r_descripcion = "", ""
        self.modal_rol_abierto = True

    def cerrar_modal_rol(self):
        self.modal_rol_abierto = False

    def abrir_modal_carrera(self, editar: bool = False, carrera: Carrera = None):
        self.c_en_edicion = editar
        if editar and carrera:
            self.c_id, self.c_nombre = carrera.id, carrera.nombre
        else:
            self.c_id, self.c_nombre = 0, ""
        self.modal_carrera_abierto = True

    def cerrar_modal_carrera(self):
        self.modal_carrera_abierto = False

    def fijar_busqueda_usuarios(self, val: str) -> None:
        self.busqueda_usuarios = val
        self.usuarios_pagina_actual = 1

    def fijar_busqueda_tutores(self, val: str) -> None:
        self.busqueda_tutores = val
        self.tutores_pagina_actual = 1

    def fijar_busqueda_roles(self, val: str) -> None:
        self.busqueda_roles = val
        self.roles_pagina_actual = 1

    def fijar_busqueda_carreras(self, val: str) -> None:
        self.busqueda_carreras = val
        self.carreras_pagina_actual = 1

    def fijar_u_cedula(self, val: str) -> None: self.u_cedula = val
    def fijar_u_nombre(self, val: str) -> None: self.u_nombre = val
    def fijar_u_apellido(self, val: str) -> None: self.u_apellido = val
    def fijar_u_correo(self, val: str) -> None: self.u_correo = val
    def fijar_u_clave(self, val: str) -> None: self.u_clave = val
    def fijar_u_rol(self, val: str) -> None: self.u_rol = val
    def fijar_r_nombre(self, val: str) -> None: self.r_nombre = val
    def fijar_r_descripcion(self, val: str) -> None: self.r_descripcion = val
    def fijar_c_nombre(self, val: str) -> None: self.c_nombre = val
    def fijar_t_nombre(self, val: str) -> None: self.t_nombre = val
    def fijar_t_cedula(self, val: str) -> None: self.t_cedula = val
    def fijar_t_correo(self, val: str) -> None: self.t_correo = val
    def fijar_t_telefono(self, val: str) -> None: self.t_telefono = val
    def fijar_t_carrera(self, val: str) -> None: self.t_carrera = val
    def fijar_t_especialidad(self, val: str) -> None: self.t_especialidad = val

    @rx.var
    def usuarios_paginados(self) -> list[UsuarioSistema]:
        inicio = (self.usuarios_pagina_actual - 1) * self.registros_por_pagina
        return self.usuarios_filtrados[inicio: inicio + self.registros_por_pagina]

    @rx.var
    def usuarios_total_paginas(self) -> int:
        return max(1, math.ceil(len(self.usuarios_filtrados) / self.registros_por_pagina))

    @rx.var
    def usuarios_total_registros(self) -> int:
        return len(self.usuarios_filtrados)

    def usuarios_pagina_anterior(self) -> None:
        if self.usuarios_pagina_actual > 1:
            self.usuarios_pagina_actual -= 1

    def usuarios_pagina_siguiente(self) -> None:
        if self.usuarios_pagina_actual < self.usuarios_total_paginas:
            self.usuarios_pagina_actual += 1

    @rx.var
    def tutores_paginados(self) -> list[TutorAcademico]:
        inicio = (self.tutores_pagina_actual - 1) * self.registros_por_pagina
        return self.tutores_filtrados[inicio: inicio + self.registros_por_pagina]

    @rx.var
    def tutores_total_paginas(self) -> int:
        return max(1, math.ceil(len(self.tutores_filtrados) / self.registros_por_pagina))

    @rx.var
    def tutores_total_registros(self) -> int:
        return len(self.tutores_filtrados)

    def tutores_pagina_anterior(self) -> None:
        if self.tutores_pagina_actual > 1:
            self.tutores_pagina_actual -= 1

    def tutores_pagina_siguiente(self) -> None:
        if self.tutores_pagina_actual < self.tutores_total_paginas:
            self.tutores_pagina_actual += 1

    @rx.var
    def roles_paginados(self) -> list[Rol]:
        inicio = (self.roles_pagina_actual - 1) * self.registros_por_pagina
        return self.roles_filtrados[inicio: inicio + self.registros_por_pagina]

    @rx.var
    def roles_total_paginas(self) -> int:
        return max(1, math.ceil(len(self.roles_filtrados) / self.registros_por_pagina))

    @rx.var
    def roles_total_registros(self) -> int:
        return len(self.roles_filtrados)

    def roles_pagina_anterior(self) -> None:
        if self.roles_pagina_actual > 1:
            self.roles_pagina_actual -= 1

    def roles_pagina_siguiente(self) -> None:
        if self.roles_pagina_actual < self.roles_total_paginas:
            self.roles_pagina_actual += 1

    @rx.var
    def carreras_paginadas(self) -> list[Carrera]:
        inicio = (self.carreras_pagina_actual - 1) * self.registros_por_pagina
        return self.carreras_filtradas[inicio: inicio + self.registros_por_pagina]

    @rx.var
    def carreras_total_paginas(self) -> int:
        return max(1, math.ceil(len(self.carreras_filtradas) / self.registros_por_pagina))

    @rx.var
    def carreras_total_registros(self) -> int:
        return len(self.carreras_filtradas)

    def carreras_pagina_anterior(self) -> None:
        if self.carreras_pagina_actual > 1:
            self.carreras_pagina_actual -= 1

    def carreras_pagina_siguiente(self) -> None:
        if self.carreras_pagina_actual < self.carreras_total_paginas:
            self.carreras_pagina_actual += 1

    async def guardar_tutor(self):
        if not self.t_carrera:
            return rx.toast.warning("Seleccione una carrera para el tutor.")
        if not self.t_cedula or not self.t_nombre:
            return rx.toast.warning("Cédula y Nombre son obligatorios.")

        # Validar que se ingrese al menos nombre y apellido
        nom_parts = self.t_nombre.strip().split(" ")
        if len(nom_parts) < 2:
            return rx.toast.warning("Por favor, ingrese el nombre y el apellido del tutor en el campo Nombre Completo.")

        conn = obtener_conexion()
        if conn is None:
            return rx.toast.error("Error de conexión al servidor.")
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        "SELECT id, nombre, apellido FROM usuario WHERE cedula = %s", (self.t_cedula,))
                    u_id = cursor.fetchone()
                    cursor.execute(
                        "SELECT id FROM carrera WHERE nombre = %s", (self.t_carrera,))
                    c_id = cursor.fetchone()

                    if not c_id:
                        return rx.toast.error("La carrera seleccionada no existe.")

                    nombre = u_id[1] if u_id else nom_parts[0]
                    apellido = u_id[2] if u_id else (" ".join(nom_parts[1:]))

                    if self.t_en_edicion:
                        cursor.execute("""
                            UPDATE tutor_academico SET 
                            especialidad = %s, carrera_id = %s, usuario_id = %s,
                            correo = %s, telefono = %s, cedula = %s, nombre = %s, apellido = %s
                            WHERE id = %s;
                        """, (self.t_especialidad, c_id[0], u_id[0] if u_id else None,
                              self.t_correo, self.t_telefono, self.t_cedula, nombre, apellido, self.t_id))
                    else:
                        cursor.execute("""
                            INSERT INTO tutor_academico (usuario_id, carrera_id, especialidad, esta_activo, correo, telefono, cedula, nombre, apellido)
                            VALUES (%s, %s, %s, TRUE, %s, %s, %s, %s, %s);
                        """, (u_id[0] if u_id else None, c_id[0], self.t_especialidad,
                              self.t_correo, self.t_telefono, self.t_cedula, nombre, apellido))
                    conn.commit()
            self.modal_tutor_abierto = False
            self.cargar_datos()

            # Sincronizar Bóveda para actualizar nombres de tutores en las tesis
            boveda = await self.get_state(EstadoBoveda)
            await boveda.cargar_tesis()

            return rx.toast.success("Datos del tutor guardados correctamente.")
        except Exception as e:
            logger.exception("Error al guardar tutor: %s", e)
            return rx.toast.error(f"Error al procesar tutor: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    def alternar_estado_tutor(self, id_tutor: int):
        conn = obtener_conexion()
        if conn is None:
            return
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        "UPDATE tutor_academico SET esta_activo = NOT esta_activo WHERE id = %s;", (id_tutor,))
                    conn.commit()
            self.cargar_datos()
        except Exception as e:
            logger.exception("Error al alternar estado de tutor: %s", e)
            return rx.toast.error(f"Error: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    def eliminar_tutor(self, id_tutor: int):
        conn = obtener_conexion()
        if conn is None:
            return
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        "SELECT EXISTS(SELECT 1 FROM estudiante WHERE tutor_academico_id = %s)", (id_tutor,))
                    if cursor.fetchone()[0]:
                        return rx.toast.error("No se puede eliminar: el tutor tiene estudiantes asignados.")
                    cursor.execute(
                        "DELETE FROM tutor_academico WHERE id = %s;", (id_tutor,))
                    conn.commit()
            self.cargar_datos()
        except Exception as e:
            logger.exception("Error al eliminar tutor: %s", e)
            return rx.toast.error(f"Error al eliminar: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    def guardar_rol(self):
        conn = obtener_conexion()
        if conn is None:
            return
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        "INSERT INTO rol (nombre, descripcion) VALUES (%s, %s);", (self.r_nombre, self.r_descripcion))
                    conn.commit()
            self.modal_rol_abierto = False
            self.cargar_datos()
        except Exception as e:
            logger.exception("Error al guardar rol: %s", e)
            return rx.toast.error(f"Error al guardar rol: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    def guardar_carrera(self):
        conn = obtener_conexion()
        if conn is None:
            return
        try:
            with conn:
                with conn.cursor() as cursor:
                    if self.c_en_edicion:
                        cursor.execute(
                            "UPDATE carrera SET nombre = %s WHERE id = %s;", (self.c_nombre, self.c_id))
                    else:
                        cursor.execute(
                            "INSERT INTO carrera (nombre) VALUES (%s);", (self.c_nombre,))
                    conn.commit()
            self.modal_carrera_abierto = False
            self.cargar_datos()
            return rx.toast.success("Carrera guardada correctamente.")
        except Exception as e:
            logger.exception("Error al guardar carrera: %s", e)
            return rx.toast.error(f"Error al guardar carrera: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    def eliminar_carrera(self, id_carrera: int):
        conn = obtener_conexion()
        if conn is None:
            return
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute("""
                        SELECT EXISTS(SELECT 1 FROM estudiante WHERE carrera_id = %s) OR 
                               EXISTS(SELECT 1 FROM tutor_academico WHERE carrera_id = %s);
                    """, (id_carrera, id_carrera))
                    if cursor.fetchone()[0]:
                        return rx.toast.error("No se puede eliminar: la carrera tiene registros asociados.")
                    cursor.execute(
                        "DELETE FROM carrera WHERE id = %s;", (id_carrera,))
                    conn.commit()
            self.cargar_datos()
        except Exception as e:
            logger.exception("Error al eliminar carrera: %s", e)
            return rx.toast.error(f"Error: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    async def alternar_estado_usuario(self, id_usuario: int):
        from .estado_autenticacion import EstadoAutenticacion
        estado_auth = await self.get_state(EstadoAutenticacion)

        # Validación de seguridad: no permitir que el usuario se desactive a sí mismo
        if estado_auth.usuario and estado_auth.usuario.id == id_usuario:
            return rx.toast.warning("Por motivos de seguridad, no puedes desactivar tu propia cuenta administrativa.")

        conn = obtener_conexion()
        if conn is None:
            logger.error("Sin conexión para alternar estado de usuario (crítico).")
            return
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        "UPDATE usuario SET esta_activo = NOT esta_activo WHERE id = %s;", (id_usuario,))
                    conn.commit()
            self.cargar_datos()
            return rx.toast.success("Estado de cuenta actualizado.")
        except Exception as e:
            logger.exception("Error al alternar estado de usuario: %s", e)
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    async def eliminar_usuario(self, id_usuario: int):
        from .estado_autenticacion import EstadoAutenticacion
        estado_auth = await self.get_state(EstadoAutenticacion)

        if estado_auth.usuario and estado_auth.usuario.id == id_usuario:
            return rx.toast.warning("Por motivos de seguridad, no puedes eliminar tu propia cuenta administrativa.")

        conn = obtener_conexion()
        if conn is None:
            logger.error("Sin conexión para eliminar usuario.")
            return rx.toast.error("Error de conexión al servidor.")
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        "SELECT EXISTS(SELECT 1 FROM estudiante WHERE usuario_id = %s) OR EXISTS(SELECT 1 FROM tutor_academico WHERE usuario_id = %s);",
                        (id_usuario, id_usuario)
                    )
                    if cursor.fetchone()[0]:
                        return rx.toast.error("No se puede eliminar: cuenta con datos asociados. Desactívela en su lugar.")
                    cursor.execute("DELETE FROM usuario WHERE id = %s;", (id_usuario,))
                    conn.commit()
            self.cargar_datos()
            return rx.toast.success("Cuenta eliminada correctamente.")
        except Exception as e:
            logger.exception("Error al eliminar usuario: %s", e)
            return rx.toast.error(f"Error al eliminar cuenta: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    def alternar_estado_carrera(self, id_carrera: int):
        conn = obtener_conexion()
        if conn is None:
            logger.error("Sin conexión para alternar estado de carrera.")
            return
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        "UPDATE carrera SET esta_activa = NOT esta_activa WHERE id = %s;", (id_carrera,))
                    conn.commit()
            self.cargar_datos()
            return rx.toast.success("Estado de carrera actualizado.")
        except Exception as e:
            logger.exception("Error al alternar estado de carrera: %s", e)
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    @rx.var
    def nombres_roles(self) -> list[str]: return [r.nombre for r in self.roles]

    def abrir_confirmacion_rol(self, id_rol: int):
        self.id_rol_eliminar = id_rol
        self.password_confirmacion = ""
        self.modal_confirmar_rol_abierto = True

    def cerrar_confirmacion_rol(self):
        self.modal_confirmar_rol_abierto = False

    def fijar_password_confirmacion(self, val: str) -> None:
        self.password_confirmacion = val

    def eliminar_rol(self, id_rol: int):
        conn = obtener_conexion()
        if conn is None:
            return
        try:
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        "SELECT EXISTS(SELECT 1 FROM usuario WHERE rol_id = %s);", (id_rol,))
                    if cursor.fetchone()[0]:
                        return rx.toast.error("No se puede eliminar: hay usuarios asignados a este rol.")
                    cursor.execute("DELETE FROM rol WHERE id = %s;", (id_rol,))
                    conn.commit()
            self.cargar_datos()
        except Exception as e:
            logger.exception("Error al eliminar rol: %s", e)
            return rx.toast.error(f"Error: {e}")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass

    async def confirmar_eliminar_rol(self):
        """Verifica la contraseña del administrador contra el hash en BD y elimina el rol si coincide.

        Se usa obtener_conexion() y EncriptadorContrasena.verificar() para evitar comparar texto plano
        y garantizar que solo un administrador autenticado pueda eliminar roles.
        """
        from .estado_autenticacion import EstadoAutenticacion, EncriptadorContrasena
        auth_state = await self.get_state(EstadoAutenticacion)
        admin_id = auth_state.usuario.id if auth_state.usuario else None
        if admin_id is None:
            # No hay sesión válida
            return rx.redirect("/login")

        conn = obtener_conexion()
        if conn is None:
            return rx.toast.error("Sin conexión para verificar credenciales.")

        try:
            # Obtener hash de la BD de forma segura
            with conn:
                with conn.cursor() as cursor:
                    cursor.execute("SELECT contrasena_hash FROM usuario WHERE id = %s;", (admin_id,))
                    fila = cursor.fetchone()
                    if not fila or not fila[0]:
                        return rx.toast.error("No se pudo verificar la contraseña del administrador.")
                    hash_almacenado = fila[0]

            # Verificar la contraseña usando el helper del estado de autenticación
            if EncriptadorContrasena.verificar(self.password_confirmacion, hash_almacenado):
                res = self.eliminar_rol(self.id_rol_eliminar)
                if isinstance(res, rx.Component):
                    return res
                self.cerrar_confirmacion_rol()
                return rx.toast.success("Rol eliminado correctamente.")
            else:
                return rx.toast.error("Contraseña incorrecta. Operación cancelada.")
        except Exception as e:
            logger.exception("Error al confirmar eliminación de rol: %s", e)
            return rx.toast.error("Error al verificar credenciales.")
        finally:
            if conn:
                try:
                    conn.close()
                except Exception:
                    pass
