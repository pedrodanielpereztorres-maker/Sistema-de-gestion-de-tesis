import {Fragment,useCallback,useContext,useEffect,useRef} from "react"
import {Badge as RadixThemesBadge,Box as RadixThemesBox,Button as RadixThemesButton,Card as RadixThemesCard,Flex as RadixThemesFlex,Grid as RadixThemesGrid,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Link as RadixThemesLink,Separator as RadixThemesSeparator,Spinner as RadixThemesSpinner,Text as RadixThemesText,TextArea as RadixThemesTextArea,TextField as RadixThemesTextField,Theme as RadixThemesTheme} from "@radix-ui/themes"
import theme from "$/utils/theme"
import {ColorModeContext,EventLoopContext,StateContexts,UploadFilesContext} from "$/utils/context"
import {ReflexEvent,applyEventActions,isNotNullOrUndefined,isTrue,refs} from "$/utils/state"
import {BarChartBig as LucideBarChartBig,CircleUserRound as LucideCircleUserRound,CloudUpload as LucideCloudUpload,Download as LucideDownload,Eye as LucideEye,FileCheck as LucideFileCheck,FileText as LucideFileText,LayoutDashboard as LucideLayoutDashboard,Library as LucideLibrary,LogOut as LucideLogOut,Menu as LucideMenu,MonitorOff as LucideMonitorOff,Pencil as LucidePencil,Plus as LucidePlus,Search as LucideSearch,SearchX as LucideSearchX,Send as LucideSend,Settings2 as LucideSettings2,Trash2 as LucideTrash2,Upload as LucideUpload,Users as LucideUsers,X as LucideX} from "lucide-react"
import {DynamicIcon} from "lucide-react/dynamic.mjs"
import {Link as ReactRouterLink} from "react-router"
import DebounceInput from "react-debounce-input"
import {} from "react-dropzone"
import {useDropzone} from "react-dropzone"
import {Toaster,toast} from "sonner"
import {jsx} from "@emotion/react"




function Button_5977b7afe692bf040c90733865003001 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_3c40baa264d9c1a2632ef2ab3adbd661 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion.cerrar_sesion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"red",css:({ ["fontWeight"] : "bold", ["width"] : "100%", ["cursor"] : "pointer", ["marginTop"] : "4" }),onClick:on_click_3c40baa264d9c1a2632ef2ab3adbd661,radius:"large",size:"3",variant:"solid"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideLogOut,{size:18},),jsx(RadixThemesText,{as:"p"},"Cerrar Sesi\u00f3n")))
  )
}


function Link_b6175631333cde836a27a1d1c3bc47a9 () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),underline:"none"},jsx(ReactRouterLink,{to:"/"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingTop"] : "9px", ["paddingBottom"] : "9px", ["borderRadius"] : "10px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()) ? "rgba(59,130,246,0.15)" : "transparent"), ["borderLeft"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()) ? "3px solid #3B82F6" : "3px solid transparent"), ["transition"] : "all 0.16s cubic-bezier(.4,0,.2,1)", ["&:hover"] : ({ ["background"] : "rgba(59,130,246,0.10)", ["borderLeft"] : "3px solid #3B82F6" }), ["cursor"] : "pointer" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "34px", ["height"] : "34px", ["borderRadius"] : "9px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()) ? "#3B82F6" : "transparent"), ["boxShadow"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()) ? "0 3px 10px rgba(99,102,241,0.35)" : "none"), ["flexShrink"] : "0", ["transition"] : "all 0.18s ease" })},jsx(LucideLayoutDashboard,{css:({ ["strokeWidth"] : 1.8, ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()) ? "white" : "#334155") }),size:18},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "15px", ["fontWeight"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()) ? "600" : "500"), ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()) ? "#1E40AF" : "#1E293B"), ["transition"] : "color 0.16s", ["flex"] : "1" })},"Inicio"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBadge,{color:"indigo",css:({ ["color"] : "#3730A3", ["backgroundColor"] : "#E0E7FF", ["fontWeight"] : "bold" }),radius:"full",size:"1",variant:"soft"},"Admin"))):(jsx(Fragment,{},)))))))
  )
}


function Link_87d4b5604480d312116d87a5c6de15db () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),underline:"none"},jsx(ReactRouterLink,{to:"/reportes"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingTop"] : "9px", ["paddingBottom"] : "9px", ["borderRadius"] : "10px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/reportes"?.valueOf?.()) ? "rgba(59,130,246,0.15)" : "transparent"), ["borderLeft"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/reportes"?.valueOf?.()) ? "3px solid #3B82F6" : "3px solid transparent"), ["transition"] : "all 0.16s cubic-bezier(.4,0,.2,1)", ["&:hover"] : ({ ["background"] : "rgba(59,130,246,0.10)", ["borderLeft"] : "3px solid #3B82F6" }), ["cursor"] : "pointer" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "34px", ["height"] : "34px", ["borderRadius"] : "9px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/reportes"?.valueOf?.()) ? "#3B82F6" : "transparent"), ["boxShadow"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/reportes"?.valueOf?.()) ? "0 3px 10px rgba(99,102,241,0.35)" : "none"), ["flexShrink"] : "0", ["transition"] : "all 0.18s ease" })},jsx(LucideBarChartBig,{css:({ ["strokeWidth"] : 1.8, ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/reportes"?.valueOf?.()) ? "white" : "#334155") }),size:18},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "15px", ["fontWeight"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/reportes"?.valueOf?.()) ? "600" : "500"), ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/reportes"?.valueOf?.()) ? "#1E40AF" : "#1E293B"), ["transition"] : "color 0.16s", ["flex"] : "1" })},"Reportes"),jsx(Fragment,{},(true?(jsx(Fragment,{},jsx(RadixThemesBadge,{color:"indigo",css:({ ["color"] : "#3730A3", ["backgroundColor"] : "#E0E7FF", ["fontWeight"] : "bold" }),radius:"full",size:"1",variant:"soft"},"Admin"))):(jsx(Fragment,{},)))))))
  )
}


function Fragment_69952ddae989125c5fb9f5a9e0facfe1 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(Link_87d4b5604480d312116d87a5c6de15db,{},))):(jsx(Fragment,{},))))
  )
}


function Link_8a7eaf98272ce94ad833ae4e0fe4000a () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),underline:"none"},jsx(ReactRouterLink,{to:"/estudiantes"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingTop"] : "9px", ["paddingBottom"] : "9px", ["borderRadius"] : "10px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/estudiantes"?.valueOf?.()) ? "rgba(59,130,246,0.15)" : "transparent"), ["borderLeft"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/estudiantes"?.valueOf?.()) ? "3px solid #3B82F6" : "3px solid transparent"), ["transition"] : "all 0.16s cubic-bezier(.4,0,.2,1)", ["&:hover"] : ({ ["background"] : "rgba(59,130,246,0.10)", ["borderLeft"] : "3px solid #3B82F6" }), ["cursor"] : "pointer" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "34px", ["height"] : "34px", ["borderRadius"] : "9px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/estudiantes"?.valueOf?.()) ? "#3B82F6" : "transparent"), ["boxShadow"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/estudiantes"?.valueOf?.()) ? "0 3px 10px rgba(99,102,241,0.35)" : "none"), ["flexShrink"] : "0", ["transition"] : "all 0.18s ease" })},jsx(LucideUsers,{css:({ ["strokeWidth"] : 1.8, ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/estudiantes"?.valueOf?.()) ? "white" : "#334155") }),size:18},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "15px", ["fontWeight"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/estudiantes"?.valueOf?.()) ? "600" : "500"), ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/estudiantes"?.valueOf?.()) ? "#1E40AF" : "#1E293B"), ["transition"] : "color 0.16s", ["flex"] : "1" })},"Estudiantes"),jsx(Fragment,{},(true?(jsx(Fragment,{},jsx(RadixThemesBadge,{color:"indigo",css:({ ["color"] : "#3730A3", ["backgroundColor"] : "#E0E7FF", ["fontWeight"] : "bold" }),radius:"full",size:"1",variant:"soft"},"Admin"))):(jsx(Fragment,{},)))))))
  )
}


function Fragment_944bfa397aebf1ac1c09015340d50460 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(Link_8a7eaf98272ce94ad833ae4e0fe4000a,{},))):(jsx(Fragment,{},))))
  )
}


function Link_a581ecab06007e8e4b22f10f5c86419b () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),underline:"none"},jsx(ReactRouterLink,{to:"/boveda"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingTop"] : "9px", ["paddingBottom"] : "9px", ["borderRadius"] : "10px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/boveda"?.valueOf?.()) ? "rgba(59,130,246,0.15)" : "transparent"), ["borderLeft"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/boveda"?.valueOf?.()) ? "3px solid #3B82F6" : "3px solid transparent"), ["transition"] : "all 0.16s cubic-bezier(.4,0,.2,1)", ["&:hover"] : ({ ["background"] : "rgba(59,130,246,0.10)", ["borderLeft"] : "3px solid #3B82F6" }), ["cursor"] : "pointer" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "34px", ["height"] : "34px", ["borderRadius"] : "9px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/boveda"?.valueOf?.()) ? "#3B82F6" : "transparent"), ["boxShadow"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/boveda"?.valueOf?.()) ? "0 3px 10px rgba(99,102,241,0.35)" : "none"), ["flexShrink"] : "0", ["transition"] : "all 0.18s ease" })},jsx(LucideLibrary,{css:({ ["strokeWidth"] : 1.8, ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/boveda"?.valueOf?.()) ? "white" : "#334155") }),size:18},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "15px", ["fontWeight"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/boveda"?.valueOf?.()) ? "600" : "500"), ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/boveda"?.valueOf?.()) ? "#1E40AF" : "#1E293B"), ["transition"] : "color 0.16s", ["flex"] : "1" })},"B\u00f3veda de Tesis"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBadge,{color:"indigo",css:({ ["color"] : "#3730A3", ["backgroundColor"] : "#E0E7FF", ["fontWeight"] : "bold" }),radius:"full",size:"1",variant:"soft"},"Admin"))):(jsx(Fragment,{},)))))))
  )
}


function Link_fc22f1b109e059be4d01ce3d33d1199e () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),underline:"none"},jsx(ReactRouterLink,{to:"/documentacion"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingTop"] : "9px", ["paddingBottom"] : "9px", ["borderRadius"] : "10px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/documentacion"?.valueOf?.()) ? "rgba(59,130,246,0.15)" : "transparent"), ["borderLeft"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/documentacion"?.valueOf?.()) ? "3px solid #3B82F6" : "3px solid transparent"), ["transition"] : "all 0.16s cubic-bezier(.4,0,.2,1)", ["&:hover"] : ({ ["background"] : "rgba(59,130,246,0.10)", ["borderLeft"] : "3px solid #3B82F6" }), ["cursor"] : "pointer" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "34px", ["height"] : "34px", ["borderRadius"] : "9px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/documentacion"?.valueOf?.()) ? "#3B82F6" : "transparent"), ["boxShadow"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/documentacion"?.valueOf?.()) ? "0 3px 10px rgba(99,102,241,0.35)" : "none"), ["flexShrink"] : "0", ["transition"] : "all 0.18s ease" })},jsx(LucideFileText,{css:({ ["strokeWidth"] : 1.8, ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/documentacion"?.valueOf?.()) ? "white" : "#334155") }),size:18},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "15px", ["fontWeight"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/documentacion"?.valueOf?.()) ? "600" : "500"), ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/documentacion"?.valueOf?.()) ? "#1E40AF" : "#1E293B"), ["transition"] : "color 0.16s", ["flex"] : "1" })},"Documentaci\u00f3n"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBadge,{color:"indigo",css:({ ["color"] : "#3730A3", ["backgroundColor"] : "#E0E7FF", ["fontWeight"] : "bold" }),radius:"full",size:"1",variant:"soft"},"Admin"))):(jsx(Fragment,{},)))))))
  )
}


function Link_f93274c466ab8bca8d98b2ad4081f280 () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),underline:"none"},jsx(ReactRouterLink,{to:"/mantenimiento"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingTop"] : "9px", ["paddingBottom"] : "9px", ["borderRadius"] : "10px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/mantenimiento"?.valueOf?.()) ? "rgba(59,130,246,0.15)" : "transparent"), ["borderLeft"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/mantenimiento"?.valueOf?.()) ? "3px solid #3B82F6" : "3px solid transparent"), ["transition"] : "all 0.16s cubic-bezier(.4,0,.2,1)", ["&:hover"] : ({ ["background"] : "rgba(59,130,246,0.10)", ["borderLeft"] : "3px solid #3B82F6" }), ["cursor"] : "pointer" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "34px", ["height"] : "34px", ["borderRadius"] : "9px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/mantenimiento"?.valueOf?.()) ? "#3B82F6" : "transparent"), ["boxShadow"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/mantenimiento"?.valueOf?.()) ? "0 3px 10px rgba(99,102,241,0.35)" : "none"), ["flexShrink"] : "0", ["transition"] : "all 0.18s ease" })},jsx(LucideSettings2,{css:({ ["strokeWidth"] : 1.8, ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/mantenimiento"?.valueOf?.()) ? "white" : "#334155") }),size:18},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "15px", ["fontWeight"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/mantenimiento"?.valueOf?.()) ? "600" : "500"), ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/mantenimiento"?.valueOf?.()) ? "#1E40AF" : "#1E293B"), ["transition"] : "color 0.16s", ["flex"] : "1" })},"Mantenimiento"),jsx(Fragment,{},(true?(jsx(Fragment,{},jsx(RadixThemesBadge,{color:"indigo",css:({ ["color"] : "#3730A3", ["backgroundColor"] : "#E0E7FF", ["fontWeight"] : "bold" }),radius:"full",size:"1",variant:"soft"},"Admin"))):(jsx(Fragment,{},)))))))
  )
}


function Fragment_cdf375471d4c37f72f7509498d119686 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(Link_f93274c466ab8bca8d98b2ad4081f280,{},))):(jsx(Fragment,{},))))
  )
}


function Link_e0cbb54b20fbf6e05cbeb1849416b6a3 () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),underline:"none"},jsx(ReactRouterLink,{to:"/perfil"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingTop"] : "9px", ["paddingBottom"] : "9px", ["borderRadius"] : "10px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/perfil"?.valueOf?.()) ? "rgba(59,130,246,0.15)" : "transparent"), ["borderLeft"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/perfil"?.valueOf?.()) ? "3px solid #3B82F6" : "3px solid transparent"), ["transition"] : "all 0.16s cubic-bezier(.4,0,.2,1)", ["&:hover"] : ({ ["background"] : "rgba(59,130,246,0.10)", ["borderLeft"] : "3px solid #3B82F6" }), ["cursor"] : "pointer" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "34px", ["height"] : "34px", ["borderRadius"] : "9px", ["background"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/perfil"?.valueOf?.()) ? "#3B82F6" : "transparent"), ["boxShadow"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/perfil"?.valueOf?.()) ? "0 3px 10px rgba(99,102,241,0.35)" : "none"), ["flexShrink"] : "0", ["transition"] : "all 0.18s ease" })},jsx(LucideCircleUserRound,{css:({ ["strokeWidth"] : 1.8, ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/perfil"?.valueOf?.()) ? "white" : "#334155") }),size:18},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "15px", ["fontWeight"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/perfil"?.valueOf?.()) ? "600" : "500"), ["color"] : ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/perfil"?.valueOf?.()) ? "#1E40AF" : "#1E293B"), ["transition"] : "color 0.16s", ["flex"] : "1" })},"Mi Perfil"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBadge,{color:"indigo",css:({ ["color"] : "#3730A3", ["backgroundColor"] : "#E0E7FF", ["fontWeight"] : "bold" }),radius:"full",size:"1",variant:"soft"},"Admin"))):(jsx(Fragment,{},)))))))
  )
}


function Flex_1d4cc71c503ca3ed411f03c49144a23a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9255efac4a778f07b72cbf559ef0c3bd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_layout____estado_layout.cerrar_menu", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "8px", ["paddingInlineEnd"] : "8px", ["paddingTop"] : "6px", ["paddingBottom"] : "6px", ["flex"] : "1", ["overflow"] : "hidden" }),direction:"column",onClick:on_click_9255efac4a778f07b72cbf559ef0c3bd,gap:"1"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["marginTop"] : "18px", ["marginBottom"] : "4px" }),direction:"row",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "700", ["letterSpacing"] : "0.12em", ["color"] : "#334155", ["textTransform"] : "uppercase" })},"Principal"),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "rgba(100,116,139,0.30)" }),size:"4"},)),jsx(Link_b6175631333cde836a27a1d1c3bc47a9,{},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["marginTop"] : "18px", ["marginBottom"] : "4px" }),direction:"row",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "700", ["letterSpacing"] : "0.12em", ["color"] : "#334155", ["textTransform"] : "uppercase" })},"Gesti\u00f3n"),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "rgba(100,116,139,0.30)" }),size:"4"},)),jsx(Fragment_69952ddae989125c5fb9f5a9e0facfe1,{},),jsx(Fragment_944bfa397aebf1ac1c09015340d50460,{},),jsx(Link_a581ecab06007e8e4b22f10f5c86419b,{},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["marginTop"] : "18px", ["marginBottom"] : "4px" }),direction:"row",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "700", ["letterSpacing"] : "0.12em", ["color"] : "#334155", ["textTransform"] : "uppercase" })},"Acad\u00e9mico"),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "rgba(100,116,139,0.30)" }),size:"4"},)),jsx(Link_fc22f1b109e059be4d01ce3d33d1199e,{},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["marginTop"] : "18px", ["marginBottom"] : "4px" }),direction:"row",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "700", ["letterSpacing"] : "0.12em", ["color"] : "#334155", ["textTransform"] : "uppercase" })},"Sistema"),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "rgba(100,116,139,0.30)" }),size:"4"},)),jsx(Fragment_cdf375471d4c37f72f7509498d119686,{},),jsx(Link_e0cbb54b20fbf6e05cbeb1849416b6a3,{},))
  )
}


function Text_6bebc9904e958838795e941bee057153 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "15px", ["fontWeight"] : "700", ["color"] : "white", ["textTransform"] : "uppercase" })},reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.inicial_usuario_rx_state_)
  )
}


function Text_08489eda476db536626a0341f88d4fed () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "700", ["color"] : "#0F172A", ["whiteSpace"] : "nowrap", ["overflow"] : "hidden", ["textOverflow"] : "ellipsis", ["maxWidth"] : "140px" })},reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.nombre_usuario_rx_state_)
  )
}


function Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "12px", ["fontWeight"] : "500", ["color"] : "#1E293B" })},(((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())(reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_)))
  )
}


function Button_146d50e4ab9bc4bfece71b04cb47c93e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_3c40baa264d9c1a2632ef2ab3adbd661 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion.cerrar_sesion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"red",css:({ ["border"] : "1px solid rgba(239, 68, 68, 0.3)", ["fontWeight"] : "bold", ["boxShadow"] : "0 2px 4px rgba(0,0,0,0.05)", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#FEE2E2", ["borderColor"] : "#EF4444", ["color"] : "#B91C1C", ["transform"] : "scale(1.02)", ["boxShadow"] : "0 4px 8px rgba(239, 68, 68, 0.15)" }), ["transition"] : "all 0.16s ease", ["width"] : "100%" }),onClick:on_click_3c40baa264d9c1a2632ef2ab3adbd661,radius:"large",size:"2",title:"Cerrar sesi\u00f3n",variant:"surface"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideLogOut,{css:({ ["strokeWidth"] : 2 }),size:14},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "12px", ["fontWeight"] : "600" })},"Cerrar sesi\u00f3n")))
  )
}


function Iconbutton_243cdc69ecd95808ec0f7766a4bb981e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_04b7ab1f51e560088f2b1f1d71f89cd7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_layout____estado_layout.alternar_menu", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{color:"indigo",css:({ ["padding"] : "6px", ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }), ["cursor"] : "pointer" }),onClick:on_click_04b7ab1f51e560088f2b1f1d71f89cd7,variant:"ghost"},jsx(LucideMenu,{size:24},))
  )
}


function Iconbutton_b2690b771256b22e5d2daba59f06315f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_3c40baa264d9c1a2632ef2ab3adbd661 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion.cerrar_sesion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{color:"indigo",css:({ ["padding"] : "6px", ["border"] : "1px solid rgba(79, 70, 229, 0.3)", ["background"] : "rgba(79, 70, 229, 0.05)", ["cursor"] : "pointer", ["&:hover"] : ({ ["background"] : "rgba(79, 70, 229, 0.1)" }), ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) }),onClick:on_click_3c40baa264d9c1a2632ef2ab3adbd661,radius:"medium",size:"2",variant:"surface"},jsx(LucideLogOut,{size:24},))
  )
}


function Debounceinput_eb2c97518609402d8e3ab4c4d9b58bb2 () {
  const reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_a4c7d2ef397a524901b2bfa185f31a50 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.fijar_titulo_nuevo", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["backgroundColor"] : "white", ["border"] : "1.5px solid #64748B", ["color"] : "black", ["& input"] : ({ ["color"] : "black" }), ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["& input::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1" }), ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_a4c7d2ef397a524901b2bfa185f31a50,placeholder:"T\u00edtulo del documento...",radius:"large",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.titulo_nuevo_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.titulo_nuevo_rx_state_ : ""),variant:"classic"},)
  )
}


function Debounceinput_a7436c10770b6fca08ffac142463aac9 () {
  const reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_5a13bf02dbe2b466c21e3e5c6d56504b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.fijar_descripcion_nueva", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["backgroundColor"] : "white", ["border"] : "1.5px solid #4D5054", ["color"] : "black", ["& textarea"] : ({ ["color"] : "black" }), ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["& textarea::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1" }), ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextArea,onChange:on_change_5a13bf02dbe2b466c21e3e5c6d56504b,placeholder:"Descripci\u00f3n breve del contenido...",radius:"large",resize:"vertical",value:reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.descripcion_nueva_rx_state_,variant:"classic"},)
  )
}


function Button_3bc1696a356d2448e8c98595d3293047 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_57f00f91c1494df09a3a3d6175813fdf = useCallback(((_e) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => (refs["__clear_selected_files"]("upload_docs"))), ["callback"] : null }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["cursor"] : "pointer" }),onClick:on_click_57f00f91c1494df09a3a3d6175813fdf,size:"2",variant:"ghost"},"Cambiar archivo")
  )
}


function Flex_d0d8de58c942f1596c47c6bcc668bd6d () {
  const [filesById, setFilesById] = useContext(UploadFilesContext);



  return (
    jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["padding"] : "30px", ["border"] : "2px solid #4F46E5", ["borderRadius"] : "12px", ["background"] : "rgba(79,70,229,0.05)", ["width"] : "100%", ["height"] : "100%" }),direction:"column",gap:"3"},jsx(LucideFileCheck,{css:({ ["color"] : "#4F46E5" }),size:40},),Array.prototype.map.call((filesById["upload_docs"] ? filesById["upload_docs"].map((f) => f.name) : []) ?? [],((f_rx_state_,index_bede8f0291a01c88c45765c1f2044002)=>(jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B", ["textAlign"] : "center" }),key:index_bede8f0291a01c88c45765c1f2044002,weight:"bold"},f_rx_state_)))),jsx(Button_3bc1696a356d2448e8c98595d3293047,{},))
  )
}


function Comp_3b687e502cbdf88961fa03601096fe7f () {
  const ref_upload_docs = useRef(null); refs["ref_upload_docs"] = ref_upload_docs;
const [addEvents, connectErrors] = useContext(EventLoopContext);
const [filesById, setFilesById] = useContext(UploadFilesContext);
const on_drop_acc7c1bb6ba11e60443430a50961a253 = useCallback(((_ev_0) => ((e => setFilesById(filesById => {
    const updatedFilesById = Object.assign({}, filesById);
    updatedFilesById["upload_docs"] = e;
    return updatedFilesById;
  })
    )(_ev_0))), [addEvents, ReflexEvent, filesById, setFilesById])
const on_drop_rejected_51f7597a906ee6a527ceb347e5723946 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => (refs['__toast']?.["error"]("", ({ ["title"] : "Files not Accepted", ["description"] : _ev_0.map(((dmioulfl) => (dmioulfl?.["file"]?.["path"]+": "+dmioulfl?.["errors"].map(((lgviwvuc) => lgviwvuc?.["message"])).join(", ")))).join("\n\n"), ["closeButton"] : true, ["style"] : ({ ["whiteSpace"] : "pre-line" }) })))), ["callback"] : null }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const { getRootProps: zbxordmc, getInputProps: dcmdllti, isDragActive: rjutlsgw} = useDropzone(({ ["maxFiles"] : 1, ["accept"] : ({ ["application/pdf"] : [".pdf"], ["application/msword"] : [".doc"], ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"] : [".docx"], ["application/vnd.ms-excel"] : [".xls", ".xlsx"] }), ["multiple"] : true, ["id"] : "upload_docs", ["onDrop"] : on_drop_acc7c1bb6ba11e60443430a50961a253, ["onDropRejected"] : on_drop_rejected_51f7597a906ee6a527ceb347e5723946 }));



  return (
    jsx(Fragment,{},jsx("div",{className:"rx-Upload",css:({ ["border"] : "2px dashed #CBD5E1", ["padding"] : "30px", ["borderRadius"] : "12px", ["background"] : "#F8FAFC", ["width"] : "100%", ["height"] : "100%", ["textAlign"] : "center" }),id:"upload_docs",ref:ref_upload_docs,...zbxordmc()},jsx("input",{type:"file",...dcmdllti()},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"2"},jsx(LucideUpload,{css:({ ["color"] : "#475569" }),size:30},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155" }),weight:"medium"},"Arrastra archivos aqu\u00ed o haz clic"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569" }),size:"1"},"Soporta PDF, Word, Excel"))))
  )
}


function Fragment_9042d7339bb23b8865619db3332ebbec () {
  const [filesById, setFilesById] = useContext(UploadFilesContext);



  return (
    jsx(Fragment,{},(isTrue((filesById["upload_docs"] ? filesById["upload_docs"].map((f) => f.name) : []))?(jsx(Fragment,{},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["height"] : "100%" })},jsx(Flex_d0d8de58c942f1596c47c6bcc668bd6d,{},)))):(jsx(Fragment,{},jsx(Comp_3b687e502cbdf88961fa03601096fe7f,{},)))))
  )
}


function Button_98e6624b45c97f510236e29230eedc26 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_be72b052d9033b9edbea894dc9266f03 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.cancelar_publicacion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",css:({ ["border"] : "1.5px solid #94A3B8", ["fontWeight"] : "bold", ["cursor"] : "pointer" }),onClick:on_click_be72b052d9033b9edbea894dc9266f03,radius:"large",size:"3",variant:"outline"},"Cancelar")
  )
}


function Button_8d7686e1db1d83c79d998a8fd3c829d9 () {
  const [filesById, setFilesById] = useContext(UploadFilesContext);
const reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_21567c1cde1acf6c9eabde6062cbc181 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.publicar_documento", ({ ["files"] : filesById?.["upload_docs"], ["archivos"] : filesById?.["upload_docs"], ["upload_param_name"] : "archivos", ["upload_id"] : "upload_docs", ["extra_headers"] : ({  }) }), ({  }), "uploadFiles"))], [_e], ({  })))), [addEvents, ReflexEvent, filesById, setFilesById, filesById, setFilesById])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["fontWeight"] : "bold", ["cursor"] : "pointer", ["paddingInlineStart"] : "24px", ["paddingInlineEnd"] : "24px" }),loading:reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.procesando_rx_state_,onClick:on_click_21567c1cde1acf6c9eabde6062cbc181,radius:"large",size:"3",variant:"solid"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideSend,{size:16},),jsx(RadixThemesText,{as:"p"},"Publicar Documento")))
  )
}


function Fragment_1e2fe3292cf3bf5a79ae980b4a3ea66a () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["marginBottom"] : "32px" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "24px", ["background"] : "white", ["borderRadius"] : "16px", ["border"] : "1px solid #4D5054", ["boxShadow"] : "0 4px 6px -1px rgba(0,0,0,0.02)", ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginBottom"] : "2" }),direction:"row",gap:"2"},jsx(LucideCloudUpload,{css:({ ["color"] : "#4F46E5" }),size:20},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#4338CA" }),weight:"bold"},"Publicar Nuevo Documento")),jsx(RadixThemesGrid,{columns:"2",css:({ ["width"] : "100%" }),gap:"6"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black" }),size:"2",weight:"bold"},"Detalles del archivo"),jsx(Debounceinput_eb2c97518609402d8e3ab4c4d9b58bb2,{},),jsx(Debounceinput_a7436c10770b6fca08ffac142463aac9,{},)),jsx(Fragment_9042d7339bb23b8865619db3332ebbec,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingTop"] : "4" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Button_98e6624b45c97f510236e29230eedc26,{},),jsx(Button_8d7686e1db1d83c79d998a8fd3c829d9,{},)))))):(jsx(Fragment,{},))))
  )
}


function Debounceinput_5e075d663bcc623ecfac24ddddf87fd0 () {
  const reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_0a5be206584a37f79b71a0944d8bc206 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.fijar_busqueda_documento", ({ ["valor"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["paddingLeft"] : "42px", ["backgroundColor"] : "white", ["border"] : "1.5px solid #94A3B8", ["color"] : "#0F172A", ["fontSize"] : "15px", ["fontWeight"] : "500", ["&::placeholder"] : ({ ["color"] : "#64748B", ["opacity"] : "1" }), ["&:focus"] : ({ ["borderColor"] : "#6366F1" }), ["&:hover"] : ({ ["borderColor"] : "#6366F1" }), ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_0a5be206584a37f79b71a0944d8bc206,placeholder:"Buscar documento por nombre o descripci\u00f3n...",radius:"large",size:"3",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.busqueda_documento_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.busqueda_documento_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_417c6b89925cba00ce2bc4186325e4b1 () {
  const reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569" }),size:"2"},(reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.documentos_filtrados_rx_state_.length+" documentos"))
  )
}


function Flex_0abfd7d5e555c1003f26ced725175d28 () {
  const reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento)
const [addEvents, connectErrors] = useContext(EventLoopContext);
const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"4"},Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.documentos_filtrados_rx_state_ ?? [],((doc_rx_state_,index_4c76d643fe4f2d8e464cbd062cc139cf)=>(jsx(RadixThemesCard,{css:({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["padding"] : "20px" }), ["@media screen and (min-width: 30em)"] : ({ ["padding"] : "20px" }), ["@media screen and (min-width: 48em)"] : ({ ["padding"] : "16px" }), ["background"] : "white", ["borderRadius"] : "16px", ["border"] : "1px solid #4D5054", ["boxShadow"] : "0 1px 3px rgba(0,0,0,0.05)", ["&:hover"] : ({ ["borderColor"] : "#6366F1", ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 4px 6px -1px rgba(99,102,241,0.1)" }), ["transition"] : "all 0.2s ease", ["marginBottom"] : "12px" }),key:index_4c76d643fe4f2d8e464cbd062cc139cf},jsx(RadixThemesFlex,{align:({ ["initial"] : "start", ["md"] : "center" }),css:({ ["width"] : "100%" }),direction:({ ["initial"] : "column", ["md"] : "row" }),gap:"4"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"4"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "48px", ["height"] : "48px", ["background"] : ((doc_rx_state_?.["tipo"].toLowerCase().includes("pdf") ? "#EF4444" : (doc_rx_state_?.["tipo"].toLowerCase().includes("doc") ? "#3B82F6" : (doc_rx_state_?.["tipo"].toLowerCase().includes("xls") ? "#10B981" : "#6B7280")))+"15"), ["borderRadius"] : "12px", ["border"] : (("1px solid "+(doc_rx_state_?.["tipo"].toLowerCase().includes("pdf") ? "#EF4444" : (doc_rx_state_?.["tipo"].toLowerCase().includes("doc") ? "#3B82F6" : (doc_rx_state_?.["tipo"].toLowerCase().includes("xls") ? "#10B981" : "#6B7280"))))+"30") })},jsx(DynamicIcon,{css:({ ["color"] : (doc_rx_state_?.["tipo"].toLowerCase().includes("pdf") ? "#EF4444" : (doc_rx_state_?.["tipo"].toLowerCase().includes("doc") ? "#3B82F6" : (doc_rx_state_?.["tipo"].toLowerCase().includes("xls") ? "#10B981" : "#6B7280"))) }),name:(doc_rx_state_?.["tipo"].toLowerCase().includes("pdf") ? "file-text" : (doc_rx_state_?.["tipo"].toLowerCase().includes("doc") ? "file-type-2" : (doc_rx_state_?.["tipo"].toLowerCase().includes("xls") ? "file-spreadsheet" : "file"))).replaceAll("_", "-"),size:24},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"3",weight:"bold"},doc_rx_state_?.["titulo"]),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B", ["noOfLines"] : 2 }),size:"2"},doc_rx_state_?.["descripcion"]),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"2"},jsx(RadixThemesBadge,{color:"gray",css:({ ["color"] : "#1E293B", ["backgroundColor"] : "#F1F5F9", ["border"] : "1px solid #E2E8F0", ["fontWeight"] : "bold" }),radius:"full",size:"1",variant:"soft"},doc_rx_state_?.["tipo"].toUpperCase()),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569" }),size:"1"},("\u2022 "+doc_rx_state_?.["tamano"])),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569" }),size:"1"},("\u2022 "+doc_rx_state_?.["fecha_subida"]))))),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }) })},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : ({ ["initial"] : "100%", ["md"] : "auto" }), ["margin_top"] : ({ ["initial"] : "3", ["md"] : "0" }) }),direction:"row",justify:({ ["initial"] : "end", ["md"] : "start" }),gap:"2"},jsx(Fragment,{},(doc_rx_state_?.["tipo"].toLowerCase().includes("pdf")?(jsx(Fragment,{},jsx(RadixThemesLink,{asChild:true,css:({ ["display"] : "inline-flex", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{rel:"noopener noreferrer",target:"_blank",to:(!((doc_rx_state_?.["url"]?.valueOf?.() === ""?.valueOf?.())) ? doc_rx_state_?.["url"] : "#")},jsx(RadixThemesIconButton,{color:"indigo",css:({ ["padding"] : "6px", ["cursor"] : "pointer", ["&:disabled"] : ({ ["opacity"] : "0.45", ["cursor"] : "not-allowed" }) }),radius:"full",size:"2",title:"Abrir documento",variant:"solid"},jsx(LucideEye,{size:24},)))))):(jsx(Fragment,{},)))),jsx(RadixThemesIconButton,{color:"blue",css:({ ["padding"] : "6px", ["cursor"] : "pointer", ["&:disabled"] : ({ ["opacity"] : "0.45", ["cursor"] : "not-allowed" }) }),onClick:((_e) => (addEvents([(!((doc_rx_state_?.["url"]?.valueOf?.() === ""?.valueOf?.())) ? (ReflexEvent("_download", ({ ["url"] : doc_rx_state_?.["url"], ["filename"] : (doc_rx_state_?.["titulo"]+"."+doc_rx_state_?.["tipo"]) }), ({  }))) : null)], [_e], ({  })))),radius:"full",size:"2",title:"Descargar documento",variant:"solid"},jsx(LucideDownload,{size:24},)),jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"2"},jsx(RadixThemesIconButton,{color:"amber",css:({ ["padding"] : "6px", ["cursor"] : "pointer" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.preparar_edicion", ({ ["documento_instancia"] : doc_rx_state_ }), ({  })))], [_e], ({  })))),radius:"full",size:"2",title:"Editar",variant:"solid"},jsx(LucidePencil,{size:24},)),jsx(RadixThemesIconButton,{color:"red",css:({ ["padding"] : "6px", ["cursor"] : "pointer" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.eliminar_documento", ({ ["id_documento"] : doc_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),radius:"full",size:"2",title:"Eliminar",variant:"solid"},jsx(LucideTrash2,{size:24},))))):(jsx(Fragment,{},)))))))))))
  )
}


function Text_33faab84bc87f66482d125dae92c5fe3 () {
  const reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569", ["fontWeight"] : "600" })},(("Sin resultados para \""+reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.busqueda_documento_rx_state_)+"\""))
  )
}


function Fragment_f6d99d7c9ee9425a18565b7341b60ef7 () {
  const reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento)



  return (
    jsx(Fragment,{},(!((reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.busqueda_documento_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["paddingTop"] : "40px", ["paddingBottom"] : "40px" }),direction:"column",gap:"2"},jsx(LucideSearchX,{css:({ ["color"] : "#94A3B8" }),size:32},),jsx(Text_33faab84bc87f66482d125dae92c5fe3,{},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#94A3B8", ["fontSize"] : "13px" })},"Intenta con otro t\u00e9rmino de b\u00fasqueda.")))):(jsx(Fragment,{},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["padding"] : "20px" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569" })},"No hay documentos publicados a\u00fan."))))))
  )
}


function Fragment_06ab294235a3aea054c9dc3ad00409c0 () {
  const reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.documentos_filtrados_rx_state_.length > 0)?(jsx(Fragment,{},jsx(Flex_0abfd7d5e555c1003f26ced725175d28,{},))):(jsx(Fragment_f6d99d7c9ee9425a18565b7341b60ef7,{},))))
  )
}


function Toaster_11b04b7ca7e917be1c8df8032e226c05 () {
  const { resolvedColorMode } = useContext(ColorModeContext)
refs['__toast'] = toast


  return (
    jsx(Toaster,{closeButton:false,expand:true,position:"bottom-right",richColors:true,theme:resolvedColorMode},)
  )
}


function Box_c94a72e90c1bf1482bfa0bf48b4cc8da () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_0b501787df8832233925e6629ce70287 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.cancelar_edicion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "0", ["left"] : "0", ["width"] : "100vw", ["height"] : "100vh", ["background"] : "rgba(10,10,30,0.5)", ["backdropFilter"] : "blur(2px)", ["zIndex"] : "100" }),onClick:on_click_0b501787df8832233925e6629ce70287},)
  )
}


function Iconbutton_e6830814d6b8d26874c1301e5b404772 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_0b501787df8832233925e6629ce70287 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.cancelar_edicion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{color:"gray",css:({ ["padding"] : "6px" }),onClick:on_click_0b501787df8832233925e6629ce70287,variant:"ghost"},jsx(LucideX,{},))
  )
}


function Debounceinput_79be93f2e00b74c0e8a73545a1fb8296 () {
  const reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_9a1f355489f22e778d9698e767ad128d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.fijar_titulo_edicion", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["backgroundColor"] : "white", ["border"] : "1.5px solid #64748B", ["color"] : "black", ["& input"] : ({ ["color"] : "black" }), ["&::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_9a1f355489f22e778d9698e767ad128d,value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.titulo_edicion_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.titulo_edicion_rx_state_ : ""),variant:"classic"},)
  )
}


function Debounceinput_c9f21eb93900d1f5be11bce158e4a41f () {
  const reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_577a48af8e8d47f54b4dc161f8416080 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.fijar_descripcion_edicion", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["backgroundColor"] : "white", ["border"] : "1.5px solid #64748B", ["color"] : "black", ["& textarea"] : ({ ["color"] : "black" }), ["&::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextArea,onChange:on_change_577a48af8e8d47f54b4dc161f8416080,resize:"vertical",value:reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.descripcion_edicion_rx_state_,variant:"classic"},)
  )
}


function Button_6e54cfd89123833e084e03686667d4b7 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_0b501787df8832233925e6629ce70287 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.cancelar_edicion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",onClick:on_click_0b501787df8832233925e6629ce70287,variant:"soft"},"Cancelar")
  )
}


function Button_33f114ae69d0c7096368607f999d6dc6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b04843bf4a437493b91b80f3ebadb8f1 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.guardar_edicion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",onClick:on_click_b04843bf4a437493b91b80f3ebadb8f1,variant:"solid"},"Guardar Cambios")
  )
}


function Fragment_3a3ce2d3a96b928d146e1ca16a182b5b () {
  const reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_documento____estado_documento.mostrar_modal_edicion_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(Box_c94a72e90c1bf1482bfa0bf48b4cc8da,{},),jsx(RadixThemesBox,{css:({ ["padding"] : "24px", ["background"] : "white", ["borderRadius"] : "16px", ["width"] : "500px", ["maxWidth"] : "90vw", ["position"] : "fixed", ["top"] : "50%", ["left"] : "50%", ["transform"] : "translate(-50%, -50%)", ["zIndex"] : "200", ["boxShadow"] : "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "4" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "10px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)" })},jsx(LucidePencil,{css:({ ["color"] : "white" }),size:20},)),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B" }),size:"5",weight:"bold"},"Editar Documento"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_e6830814d6b8d26874c1301e5b404772,{},)),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B" }),size:"2",weight:"bold"},"T\u00edtulo"),jsx(Debounceinput_79be93f2e00b74c0e8a73545a1fb8296,{},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B" }),size:"2",weight:"bold"},"Descripci\u00f3n"),jsx(Debounceinput_c9f21eb93900d1f5be11bce158e4a41f,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["marginTop"] : "6" }),direction:"row",justify:"end",gap:"3"},jsx(Button_6e54cfd89123833e084e03686667d4b7,{},),jsx(Button_33f114ae69d0c7096368607f999d6dc6,{},))))))):(jsx(Fragment,{},))))
  )
}


function Flex_0fc48b6b41c7f8bd36879b99b4429e53 () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.cargar_documentos", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["padding"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["padding"] : "20px" }), ["@media screen and (min-width: 48em)"] : ({ ["padding"] : "24px" }), ["@media screen and (min-width: 62em)"] : ({ ["padding"] : "24px" }), ["maxWidth"] : "1200px" }),direction:"column",gap:"5"},jsx(RadixThemesFlex,{align:({ ["initial"] : "start", ["sm"] : "center" }),css:({ ["width"] : "100%", ["paddingBottom"] : "16px", ["borderBottom"] : "1px solid #E2E8F0", ["marginBottom"] : "28px" }),direction:({ ["initial"] : "column", ["sm"] : "row" }),justify:"between",gap:({ ["initial"] : "4", ["sm"] : "0" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A", ["letterSpacing"] : "-0.02em" }),size:({ ["initial"] : "7", ["sm"] : "8" }),weight:"bold"},"Biblioteca de Documentos"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B", ["fontSize"] : "13px", ["fontWeight"] : "500" })},"Panel de gesti\u00f3n y monitoreo acad\u00e9mico")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesButton,{color:"indigo",css:({ ["cursor"] : "pointer", ["boxShadow"] : "0 4px 12px rgba(99,102,241,0.3)" }),size:"3",variant:"solid"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucidePlus,{size:18},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700" })},""))))):(jsx(Fragment,{},))))),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155", ["marginBottom"] : "4" })},"Repositorio oficial de formatos, gu\u00edas y reglamentos de tesis."),jsx(Fragment_1e2fe3292cf3bf5a79ae980b4a3ea66a,{},),jsx(RadixThemesBox,{css:({ ["position"] : "relative", ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "800px" }), ["marginBottom"] : "8px" })},jsx(LucideSearch,{css:({ ["color"] : "#64748B", ["position"] : "absolute", ["left"] : "14px", ["top"] : "50%", ["transform"] : "translateY(-50%)", ["zIndex"] : "1" }),size:16},),jsx(Debounceinput_5e075d663bcc623ecfac24ddddf87fd0,{},)),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "4" }),direction:"row",gap:"3"},jsx(RadixThemesHeading,{css:({ ["color"] : "#1E293B" }),size:"6"},"Archivos Disponibles"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Text_417c6b89925cba00ce2bc4186325e4b1,{},)),jsx(Fragment_06ab294235a3aea054c9dc3ad00409c0,{},),jsx(Toaster_11b04b7ca7e917be1c8df8032e226c05,{},),jsx(Fragment_3a3ce2d3a96b928d146e1ca16a182b5b,{},))
  )
}


function Box_496568498cdd4d82f89e50d0fee896a9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9255efac4a778f07b72cbf559ef0c3bd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_layout____estado_layout.cerrar_menu", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["inset"] : "0", ["background"] : "rgba(0,0,0,0.5)", ["backdropFilter"] : "blur(2px)", ["zIndex"] : "1000" }),onClick:on_click_9255efac4a778f07b72cbf559ef0c3bd},)
  )
}


function Iconbutton_703bb00d69f5d7b8609ea879ff90df68 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9255efac4a778f07b72cbf559ef0c3bd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_layout____estado_layout.cerrar_menu", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{color:"gray",css:({ ["padding"] : "6px" }),onClick:on_click_9255efac4a778f07b72cbf559ef0c3bd,variant:"ghost"},jsx(LucideX,{size:20},))
  )
}


function Fragment_9fdd3a6df977cd8529074381f51c11ae () {
  const reflex___state____state__sistema_tesis___estado___estado_layout____estado_layout = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_layout____estado_layout)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_layout____estado_layout.menu_abierto_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},jsx(Box_496568498cdd4d82f89e50d0fee896a9,{},),jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "0", ["left"] : "0", ["width"] : "285px", ["height"] : "100vh", ["background"] : "white", ["overflowY"] : "auto", ["zIndex"] : "1001", ["boxShadow"] : "5px 0 25px rgba(0,0,0,0.2)" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "16px", ["background"] : "white", ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "10", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx(RadixThemesHeading,{size:"4"},"Navegaci\u00f3n"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_703bb00d69f5d7b8609ea879ff90df68,{},)),jsx(RadixThemesBox,{css:({ ["width"] : "100%" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "100vh", ["background"] : "#FFFFFF" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px", ["paddingTop"] : "18px", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx("img",{alt:"Logo de la universidad",css:({ ["width"] : "46px", ["height"] : "46px", ["objectFit"] : "contain", ["borderRadius"] : "10px", ["background"] : "white", ["padding"] : "4px", ["boxShadow"] : "0 2px 12px rgba(79,70,229,0.18)", ["flexShrink"] : "0" }),src:"/logo.png"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["letterSpacing"] : "-0.4px", ["background"] : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["lineHeight"] : "1.2" })},"S.G.T."),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#1E293B", ["letterSpacing"] : "0.04em", ["textTransform"] : "uppercase", ["lineHeight"] : "1.4" })},"Sistema de Gesti\u00f3n de Tesis"))),jsx(Flex_1d4cc71c503ca3ed411f03c49144a23a,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "14px", ["paddingInlineEnd"] : "14px", ["paddingTop"] : "20px", ["padding_bottom"] : ({ ["initial"] : "100px", ["lg"] : "28px" }), ["borderTop"] : "1px solid #E2E8F0", ["background"] : "#F8FAFC" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "11px", ["background"] : "linear-gradient(135deg, #3B82F6, #8B5CF6)", ["boxShadow"] : "0 2px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(Text_6bebc9904e958838795e941bee057153,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1", ["minWidth"] : "0" }),direction:"column",gap:"0"},jsx(Text_08489eda476db536626a0341f88d4fed,{},),jsx(Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1,{},))),jsx(Button_146d50e4ab9bc4bfece71b04cb47c93e,{},))))))))):(jsx(Fragment,{},))))
  )
}


function Fragment_47776cbe4d9770a3e0032e2f71407a6f () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)
const ref_layout_admin_root = useRef(null); refs["ref_layout_admin_root"] = ref_layout_admin_root;
const ref_layout_estudiante_root = useRef(null); refs["ref_layout_estudiante_root"] = ref_layout_estudiante_root;



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" }),id:"layout-admin-root",key:"layout-admin",ref:ref_layout_admin_root},jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["height"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesCard,{css:({ ["padding"] : "32px", ["maxWidth"] : "380px", ["borderRadius"] : "28px", ["boxShadow"] : "0 25px 50px -12px rgba(0, 0, 0, 0.15)", ["border"] : "1px solid #E2E8F0", ["background"] : "white" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"4"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "rgba(239, 68, 68, 0.08)", ["padding"] : "20px", ["borderRadius"] : "22px", ["marginBottom"] : "4" })},jsx(LucideMonitorOff,{css:({ ["color"] : "#EF4444" }),size:50},)),jsx(RadixThemesHeading,{css:({ ["color"] : "#1E293B", ["textAlign"] : "center" }),size:"5"},"Acceso Administrativo Restringido"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569", ["textAlign"] : "center", ["lineHeight"] : "1.6" }),size:"2",weight:"medium"},"Estimado Administrador, por motivos de seguridad y para garantizar una gesti\u00f3n \u00f3ptima de los datos, el panel de control est\u00e1 dise\u00f1ado para ser utilizado exclusivamente en dispositivos de pantalla grande."),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748B", ["textAlign"] : "center", ["italic"] : true }),size:"2"},"El uso de herramientas administrativas en pantallas peque\u00f1as puede generar errores visuales e incomodidad. Por favor, acceda desde su Laptop o PC de escritorio."),jsx(Button_5977b7afe692bf040c90733865003001,{},))))),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }) })},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesBox,{css:({ ["width"] : "285px", ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }), ["borderRight"] : "1px solid #E2E8F0", ["flexShrink"] : "0", ["overflow"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "100vh", ["background"] : "#FFFFFF" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px", ["paddingTop"] : "18px", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx("img",{alt:"Logo de la universidad",css:({ ["width"] : "46px", ["height"] : "46px", ["objectFit"] : "contain", ["borderRadius"] : "10px", ["background"] : "white", ["padding"] : "4px", ["boxShadow"] : "0 2px 12px rgba(79,70,229,0.18)", ["flexShrink"] : "0" }),src:"/logo.png"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["letterSpacing"] : "-0.4px", ["background"] : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["lineHeight"] : "1.2" })},"S.G.T."),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#1E293B", ["letterSpacing"] : "0.04em", ["textTransform"] : "uppercase", ["lineHeight"] : "1.4" })},"Sistema de Gesti\u00f3n de Tesis"))),jsx(Flex_1d4cc71c503ca3ed411f03c49144a23a,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "14px", ["paddingInlineEnd"] : "14px", ["paddingTop"] : "20px", ["padding_bottom"] : ({ ["initial"] : "100px", ["lg"] : "28px" }), ["borderTop"] : "1px solid #E2E8F0", ["background"] : "#F8FAFC" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "11px", ["background"] : "linear-gradient(135deg, #3B82F6, #8B5CF6)", ["boxShadow"] : "0 2px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(Text_6bebc9904e958838795e941bee057153,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1", ["minWidth"] : "0" }),direction:"column",gap:"0"},jsx(Text_08489eda476db536626a0341f88d4fed,{},),jsx(Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1,{},))),jsx(Button_146d50e4ab9bc4bfece71b04cb47c93e,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["flex"] : "1", ["overflowX"] : "hidden" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "12px 20px", ["background"] : "white", ["borderBottom"] : "1px solid #E2E8F0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) }),direction:"row",gap:"3"},jsx(Iconbutton_243cdc69ecd95808ec0f7766a4bb981e,{},),jsx("img",{css:({ ["width"] : "42px", ["height"] : "42px" }),src:"/logo.png"},),jsx(RadixThemesHeading,{css:({ ["color"] : "#3B82F6" }),size:"4"},"S.G.T."),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_b2690b771256b22e5d2daba59f06315f,{},)),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "24px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingTop"] : "28px", ["paddingInlineStart"] : "24px", ["paddingInlineEnd"] : "24px" }), ["paddingBottom"] : "40px", ["width"] : "100%", ["flex"] : "1", ["overflowX"] : "hidden" })},jsx(Flex_0fc48b6b41c7f8bd36879b99b4429e53,{},))),jsx(Fragment_9fdd3a6df977cd8529074381f51c11ae,{},)))))):(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" }),id:"layout-estudiante-root",key:"layout-student",ref:ref_layout_estudiante_root},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesBox,{css:({ ["width"] : "285px", ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }), ["borderRight"] : "1px solid #E2E8F0", ["flexShrink"] : "0", ["overflow"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "100vh", ["background"] : "#FFFFFF" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px", ["paddingTop"] : "18px", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx("img",{alt:"Logo de la universidad",css:({ ["width"] : "46px", ["height"] : "46px", ["objectFit"] : "contain", ["borderRadius"] : "10px", ["background"] : "white", ["padding"] : "4px", ["boxShadow"] : "0 2px 12px rgba(79,70,229,0.18)", ["flexShrink"] : "0" }),src:"/logo.png"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["letterSpacing"] : "-0.4px", ["background"] : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["lineHeight"] : "1.2" })},"S.G.T."),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#1E293B", ["letterSpacing"] : "0.04em", ["textTransform"] : "uppercase", ["lineHeight"] : "1.4" })},"Sistema de Gesti\u00f3n de Tesis"))),jsx(Flex_1d4cc71c503ca3ed411f03c49144a23a,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "14px", ["paddingInlineEnd"] : "14px", ["paddingTop"] : "20px", ["padding_bottom"] : ({ ["initial"] : "100px", ["lg"] : "28px" }), ["borderTop"] : "1px solid #E2E8F0", ["background"] : "#F8FAFC" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "11px", ["background"] : "linear-gradient(135deg, #3B82F6, #8B5CF6)", ["boxShadow"] : "0 2px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(Text_6bebc9904e958838795e941bee057153,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1", ["minWidth"] : "0" }),direction:"column",gap:"0"},jsx(Text_08489eda476db536626a0341f88d4fed,{},),jsx(Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1,{},))),jsx(Button_146d50e4ab9bc4bfece71b04cb47c93e,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["flex"] : "1", ["overflowX"] : "hidden" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "12px 20px", ["background"] : "white", ["borderBottom"] : "1px solid #E2E8F0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) }),direction:"row",gap:"3"},jsx(Iconbutton_243cdc69ecd95808ec0f7766a4bb981e,{},),jsx("img",{css:({ ["width"] : "42px", ["height"] : "42px" }),src:"/logo.png"},),jsx(RadixThemesHeading,{css:({ ["color"] : "#3B82F6" }),size:"4"},"S.G.T."),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_b2690b771256b22e5d2daba59f06315f,{},)),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "24px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingTop"] : "28px", ["paddingInlineStart"] : "24px", ["paddingInlineEnd"] : "24px" }), ["paddingBottom"] : "40px", ["width"] : "100%", ["flex"] : "1", ["overflowX"] : "hidden" })},jsx(Flex_0fc48b6b41c7f8bd36879b99b4429e53,{},))),jsx(Fragment_9fdd3a6df977cd8529074381f51c11ae,{},)))))))
  )
}


function Flex_b96460923f586151e7c85803c959a5af () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion.verificar_acceso", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100vw", ["height"] : "100vh" })},jsx(RadixThemesSpinner,{},))
  )
}


function Fragment_8b607f8146eb643e85aac5db31da2d02 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},(isTrue(reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.usuario_rx_state_)?(jsx(Fragment_47776cbe4d9770a3e0032e2f71407a6f,{},)):(jsx(Fragment,{},jsx(Flex_b96460923f586151e7c85803c959a5af,{},)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesTheme,{css:{...theme.styles.global[':root'], ...theme.styles.global.body},hasBackground:true},jsx(Fragment_8b607f8146eb643e85aac5db31da2d02,{},)),jsx("title",{},"SistemaTesis | Documentacion"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}