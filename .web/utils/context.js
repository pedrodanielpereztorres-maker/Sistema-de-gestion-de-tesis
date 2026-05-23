import { createContext, useContext, useMemo, useReducer, useState, createElement, useEffect } from "react"
import { applyDelta, ReflexEvent, hydrateClientStorage, useEventLoop, refs } from "$/utils/state"
import { jsx } from "@emotion/react";

export const initialState = {"reflex___state____state": {"is_hydrated_rx_state_": false, "router_rx_state_": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": "", "raw_headers": {}}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}, "url": "", "route_id": ""}}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}, "reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion": {"entrada_contrasena_rx_state_": "", "entrada_usuario_rx_state_": "", "error_login_rx_state_": "", "inicial_usuario_rx_state_": "I", "mostrar_contrasena_rx_state_": false, "nombre_usuario_rx_state_": "Invitado", "rol_usuario_rx_state_": "invitado", "usuario_rx_state_": null}, "reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda": {"apellido_encontrado_rx_state_": "", "balance_privacidad_tesis_rx_state_": [{"tipo": "Públicas", "color": "#10B981", "valor": 0}, {"tipo": "Privadas", "color": "#F59E0B", "valor": 0}], "busqueda_dinamica_rx_state_": "", "carrera_encontrada_rx_state_": "", "carreras_disponibles_rx_state_": [], "cedula_busqueda_rx_state_": "", "detalles_estudiante_encontrado_rx_state_": {"Nombre Completo": " ", "Carrera": "", "Tutor Académico": "", "Empresa": " ()"}, "empresa_encontrada_rx_state_": "", "en_edicion_rx_state_": false, "estudiante_encontrado_rx_state_": false, "filtro_carrera_rx_state_": "", "hacer_publico_rx_state_": false, "lista_filtrada_rx_state_": [], "lista_tesis_rx_state_": [], "mostrar_modal_rx_state_": false, "mostrar_modal_confirmacion_rx_state_": false, "nombre_encontrado_rx_state_": "", "opciones_carreras_rx_state_": ["Todas las carreras"], "password_confirmacion_rx_state_": "", "procesando_rx_state_": false, "ruta_archivo_actual_rx_state_": "", "tesis_a_mostrar_rx_state_": [], "tesis_en_edicion_id_rx_state_": 0, "tesis_id_a_eliminar_rx_state_": 0, "tesis_visibles_rx_state_": [], "titulo_tesis_rx_state_": "", "total_tesis_rx_state_": 0, "tutor_academico_encontrado_rx_state_": "", "tutor_empresa_encontrado_rx_state_": "", "usuario_actual_id_rx_state_": 0, "usuario_actual_rol_rx_state_": ""}, "reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento": {"busqueda_documento_rx_state_": "", "descripcion_edicion_rx_state_": "", "descripcion_nueva_rx_state_": "", "documentos_filtrados_rx_state_": [], "id_edicion_rx_state_": 0, "lista_documentos_rx_state_": [], "mostrar_modal_edicion_rx_state_": false, "procesando_rx_state_": false, "titulo_edicion_rx_state_": "", "titulo_nuevo_rx_state_": "", "total_documentos_rx_state_": 0}, "reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante": {"apellido_rx_state_": "", "busqueda_dinamica_rx_state_": "", "carrera_rx_state_": "", "carreras_con_cantidad_rx_state_": [], "carreras_disponibles_rx_state_": [], "cedula_rx_state_": "", "cedula_a_eliminar_rx_state_": "", "correo_empresa_rx_state_": "", "direccion_empresa_rx_state_": "", "en_edicion_rx_state_": false, "estudiante_seleccionado_rx_state_": {}, "estudiantes_en_pasantia_rx_state_": 0, "estudiantes_filtrados_rx_state_": [], "estudiantes_por_carrera_rx_state_": [], "estudiantes_sin_pasantia_rx_state_": 0, "filtro_carrera_rx_state_": "", "filtro_estado_rx_state_": "Todos", "haciendo_tesis_rx_state_": false, "lista_con_pasantia_rx_state_": [], "lista_estudiantes_rx_state_": [], "lista_sin_pasantia_rx_state_": [], "mostrar_ficha_rx_state_": false, "mostrar_modal_rx_state_": false, "mostrar_modal_confirmacion_rx_state_": false, "nombre_rx_state_": "", "nombre_empresa_rx_state_": "", "nombre_tutor_rx_state_": "", "pagina_actual_rx_state_": 1, "password_confirmacion_rx_state_": "", "periodo_cierre_rx_state_": "2026-08-14", "periodo_inicio_rx_state_": "2026-05-22", "registros_por_pagina_rx_state_": 20, "telefono_empresa_rx_state_": "", "telefono_personal_rx_state_": "", "total_estudiantes_rx_state_": 0, "total_paginas_rx_state_": 1, "total_registros_rx_state_": 0, "tutor_academico_seleccionado_rx_state_": "", "tutor_empresa_rx_state_": "", "tutores_disponibles_rx_state_": [], "usuario_encontrado_rx_state_": false}, "reflex___state____state.sistema_tesis___estado___estado_layout____estado_layout": {"menu_abierto_rx_state_": false}, "reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento": {"busqueda_carreras_rx_state_": "", "busqueda_roles_rx_state_": "", "busqueda_tutores_rx_state_": "", "busqueda_usuarios_rx_state_": "", "c_en_edicion_rx_state_": false, "c_id_rx_state_": 0, "c_nombre_rx_state_": "", "carreras_rx_state_": [], "carreras_filtradas_rx_state_": [], "carreras_nombres_rx_state_": [], "id_rol_eliminar_rx_state_": 0, "indice_pestana_rx_state_": "usuarios", "modal_carrera_abierto_rx_state_": false, "modal_confirmar_rol_abierto_rx_state_": false, "modal_rol_abierto_rx_state_": false, "modal_tutor_abierto_rx_state_": false, "modal_usuario_abierto_rx_state_": false, "nombres_roles_rx_state_": [], "password_confirmacion_rx_state_": "", "r_descripcion_rx_state_": "", "r_nombre_rx_state_": "", "roles_rx_state_": [], "roles_filtrados_rx_state_": [], "t_carrera_rx_state_": "", "t_cedula_rx_state_": "", "t_correo_rx_state_": "", "t_en_edicion_rx_state_": false, "t_especialidad_rx_state_": "", "t_id_rx_state_": 0, "t_nombre_rx_state_": "", "t_telefono_rx_state_": "", "t_usuario_encontrado_rx_state_": false, "tutores_rx_state_": [], "tutores_filtrados_rx_state_": [], "u_apellido_rx_state_": "", "u_cedula_rx_state_": "", "u_clave_rx_state_": "", "u_correo_rx_state_": "", "u_nombre_rx_state_": "", "u_rol_rx_state_": "", "usuarios_rx_state_": [], "usuarios_filtrados_rx_state_": []}, "reflex___state____state.sistema_tesis___estado___estado_reportes____estado_reportes": {"estadisticas_carreras_rx_state_": [], "mejores_empresas_rx_state_": [], "mejores_tutores_rx_state_": [], "procesando_rx_state_": false, "resumen_global_rx_state_": {"total_estudiantes": 0, "con_pasantia": 0, "sin_pasantia": 0, "total_tesis": 0}}, "reflex___state____state.sistema_tesis___paginas___perfil____estado_perfil": {"correo_rx_state_": "", "empresa_rx_state_": "No vinculada", "empresa_direccion_rx_state_": "", "fecha_cierre_rx_state_": "N/A", "fecha_inicio_rx_state_": "N/A", "mostrar_clave_rx_state_": false, "nombre_rx_state_": "", "password_actual_rx_state_": "", "password_confirmar_rx_state_": "", "password_nueva_rx_state_": "", "telefono_rx_state_": "", "tutor_correo_rx_state_": "", "tutor_empresa_correo_rx_state_": "", "tutor_empresa_nombre_rx_state_": "No asignado", "tutor_empresa_telefono_rx_state_": "", "tutor_nombre_rx_state_": "No asignado", "tutor_telefono_rx_state_": ""}}

export const defaultColorMode = "light"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {reflex___state____state: createContext(null),reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),reflex___state____state__reflex___state____on_load_internal_state: createContext(null),reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion: createContext(null),reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda: createContext(null),reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento: createContext(null),reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante: createContext(null),reflex___state____state__sistema_tesis___estado___estado_layout____estado_layout: createContext(null),reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento: createContext(null),reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes: createContext(null),reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil: createContext(null),};
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}


export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            ReflexEvent(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(ReflexEvent('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    ReflexEvent('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]
    

export const isDevMode = true;

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return createElement(
    UploadFilesContext.Provider,
    { value: [filesById, setFilesById] },
    children
  );
}

export function ClientSide(component) {
  return ({ children, ...props }) => {
    const [Component, setComponent] = useState(null);
    useEffect(() => {
      async function load() {
        const comp = await component();
        setComponent(() => comp);
      }
      load();
    }, []);
    return Component ? jsx(Component, props, children) : null;
  };
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return createElement(
    EventLoopContext.Provider,
    { value: [addEvents, connectErrors] },
    children
  );
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
const [reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion, dispatch_reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion] = useReducer(applyDelta, initialState["reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion"])
const [reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda, dispatch_reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda] = useReducer(applyDelta, initialState["reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda"])
const [reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento, dispatch_reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento] = useReducer(applyDelta, initialState["reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento"])
const [reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante, dispatch_reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante] = useReducer(applyDelta, initialState["reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante"])
const [reflex___state____state__sistema_tesis___estado___estado_layout____estado_layout, dispatch_reflex___state____state__sistema_tesis___estado___estado_layout____estado_layout] = useReducer(applyDelta, initialState["reflex___state____state.sistema_tesis___estado___estado_layout____estado_layout"])
const [reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento, dispatch_reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento] = useReducer(applyDelta, initialState["reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento"])
const [reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes, dispatch_reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes] = useReducer(applyDelta, initialState["reflex___state____state.sistema_tesis___estado___estado_reportes____estado_reportes"])
const [reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil, dispatch_reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil] = useReducer(applyDelta, initialState["reflex___state____state.sistema_tesis___paginas___perfil____estado_perfil"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
"reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
"reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
"reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
"reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion": dispatch_reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion,
"reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda": dispatch_reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda,
"reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento": dispatch_reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento,
"reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante": dispatch_reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante,
"reflex___state____state.sistema_tesis___estado___estado_layout____estado_layout": dispatch_reflex___state____state__sistema_tesis___estado___estado_layout____estado_layout,
"reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento": dispatch_reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento,
"reflex___state____state.sistema_tesis___estado___estado_reportes____estado_reportes": dispatch_reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes,
"reflex___state____state.sistema_tesis___paginas___perfil____estado_perfil": dispatch_reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil,
    }
  }, [])

  return (
    createElement(StateContexts.reflex___state____state,{value: reflex___state____state},
createElement(StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state,{value: reflex___state____state__reflex___state____frontend_event_exception_state},
createElement(StateContexts.reflex___state____state__reflex___state____on_load_internal_state,{value: reflex___state____state__reflex___state____on_load_internal_state},
createElement(StateContexts.reflex___state____state__reflex___state____update_vars_internal_state,{value: reflex___state____state__reflex___state____update_vars_internal_state},
createElement(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion,{value: reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion},
createElement(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda,{value: reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda},
createElement(StateContexts.reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento,{value: reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento},
createElement(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante,{value: reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante},
createElement(StateContexts.reflex___state____state__sistema_tesis___estado___estado_layout____estado_layout,{value: reflex___state____state__sistema_tesis___estado___estado_layout____estado_layout},
createElement(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento,{value: reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento},
createElement(StateContexts.reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes,{value: reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes},
createElement(StateContexts.reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil,{value: reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil},
    createElement(DispatchContext, {value: dispatchers}, children)
    ))))))))))))
  )
}