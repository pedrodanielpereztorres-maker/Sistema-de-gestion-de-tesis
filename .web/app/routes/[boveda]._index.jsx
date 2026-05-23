import {Fragment,useCallback,useContext,useEffect,useRef} from "react"
import {Badge as RadixThemesBadge,Box as RadixThemesBox,Button as RadixThemesButton,Card as RadixThemesCard,Checkbox as RadixThemesCheckbox,Flex as RadixThemesFlex,Grid as RadixThemesGrid,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Link as RadixThemesLink,Select as RadixThemesSelect,Separator as RadixThemesSeparator,Spinner as RadixThemesSpinner,Text as RadixThemesText,TextArea as RadixThemesTextArea,TextField as RadixThemesTextField,Theme as RadixThemesTheme} from "@radix-ui/themes"
import theme from "$/utils/theme"
import {ColorModeContext,EventLoopContext,StateContexts,UploadFilesContext} from "$/utils/context"
import {ReflexEvent,applyEventActions,isNotNullOrUndefined,isTrue,refs} from "$/utils/state"
import {Ban as LucideBan,BarChartBig as LucideBarChartBig,BookMarked as LucideBookMarked,BookOpen as LucideBookOpen,BookPlus as LucideBookPlus,Building2 as LucideBuilding2,Check as LucideCheck,CircleUserRound as LucideCircleUserRound,Download as LucideDownload,Eye as LucideEye,FileCheck as LucideFileCheck,FileSpreadsheet as LucideFileSpreadsheet,FileText as LucideFileText,FileUp as LucideFileUp,LayoutDashboard as LucideLayoutDashboard,Library as LucideLibrary,LogOut as LucideLogOut,Menu as LucideMenu,MonitorOff as LucideMonitorOff,Pencil as LucidePencil,Plus as LucidePlus,RotateCcw as LucideRotateCcw,Search as LucideSearch,Settings2 as LucideSettings2,Trash2 as LucideTrash2,TriangleAlert as LucideTriangleAlert,Upload as LucideUpload,User as LucideUser,UserCheck as LucideUserCheck,Users as LucideUsers,X as LucideX} from "lucide-react"
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


function Button_e5f5cd4206befb291aaed95b7a2b4642 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4c7138afc7f0b4734ff16a75fb552a76 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.abrir_modal", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["cursor"] : "pointer", ["boxShadow"] : "0 4px 12px rgba(99,102,241,0.3)" }),onClick:on_click_4c7138afc7f0b4734ff16a75fb552a76,size:"3",variant:"solid"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucidePlus,{size:18},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700" })},"Registrar Nueva Tesis")))
  )
}


function Debounceinput_dcc2bff7858d072ef78262855b32c55b () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_071163f0650ce3088e7a3721a9091530 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.fijar_busqueda_dinamica", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["paddingLeft"] : "42px", ["backgroundColor"] : "white", ["border"] : "1.5px solid #94A3B8", ["color"] : "#0F172A", ["fontSize"] : "15px", ["fontWeight"] : "500", ["&::placeholder"] : ({ ["color"] : "#64748B", ["opacity"] : "1" }), ["&:focus"] : ({ ["borderColor"] : "#6366F1" }), ["&:hover"] : ({ ["borderColor"] : "#6366F1" }), ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_071163f0650ce3088e7a3721a9091530,placeholder:"Buscar por t\u00edtulo, estudiante o c\u00e9dula...",radius:"large",size:"3",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.busqueda_dinamica_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.busqueda_dinamica_rx_state_ : ""),variant:"classic"},)
  )
}


function Select__group_ca57a4e0862ddd14f036e0c96d4d0bf5 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(RadixThemesSelect.Group,{},"",Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.opciones_carreras_rx_state_ ?? [],((item_rx_state_,index_0d039201bc63b7e42b67c92685f4966c)=>(jsx(RadixThemesSelect.Item,{key:index_0d039201bc63b7e42b67c92685f4966c,value:item_rx_state_},item_rx_state_)))))
  )
}


function Select__root_4746b9bbe44e109d254f54a8cc3fa949 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_6e28e8f4aab4929719ae85598eae4011 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.fijar_filtro_carrera", ({ ["val"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesSelect.Root,{css:({ ["backgroundColor"] : "#F8FAFC", ["color"] : "#0F172A", ["border"] : "1.5px solid #64748B", ["fontSize"] : "15px", ["fontWeight"] : "600", ["cursor"] : "pointer", ["&:hover"] : ({ ["borderColor"] : "#6366F1" }) }),onValueChange:on_change_6e28e8f4aab4929719ae85598eae4011,size:"3",value:reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.filtro_carrera_rx_state_},jsx(RadixThemesSelect.Trigger,{css:({ ["width"] : ({ ["initial"] : "100%", ["md"] : "240px" }) }),placeholder:"Todas las carreras",radius:"large",variant:"classic"},),jsx(RadixThemesSelect.Content,{},jsx(Select__group_ca57a4e0862ddd14f036e0c96d4d0bf5,{},)))
  )
}


function Button_9906c8ecf21ce243c9839635285fa2b7 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_82df5775de3a7688c54bec44c3ffbde9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.limpiar_filtros", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",css:({ ["cursor"] : "pointer" }),onClick:on_click_82df5775de3a7688c54bec44c3ffbde9,size:"2",variant:"soft"},jsx(LucideRotateCcw,{size:14},),"Limpiar")
  )
}


function Fragment_dd83875bfa2bea98ace6c7c395d40961 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(Fragment,{},((!((reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.busqueda_dinamica_rx_state_?.valueOf?.() === ""?.valueOf?.())) || (!((reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.filtro_carrera_rx_state_?.valueOf?.() === ""?.valueOf?.())) && !((reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.filtro_carrera_rx_state_?.valueOf?.() === "Todas las carreras"?.valueOf?.()))))?(jsx(Fragment,{},jsx(Button_9906c8ecf21ce243c9839635285fa2b7,{},))):(jsx(Fragment,{},))))
  )
}


function Button_520d815a94fe5e9942807ec1ce2cb87f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2b3cbb74c2d63d8e034f8624e67aee7c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.generar_reporte_tesis", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"green",css:({ ["cursor"] : "pointer" }),onClick:on_click_2b3cbb74c2d63d8e034f8624e67aee7c,size:"2",variant:"soft"},jsx(LucideFileSpreadsheet,{size:14},),"Descargar Reporte")
  )
}


function Fragment_eff75d90553b79314c7d434ed10186a2 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(Button_520d815a94fe5e9942807ec1ce2cb87f,{},))):(jsx(Fragment,{},))))
  )
}


function Text_d5b2ae1f028a61108ab1521421946235 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)
const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "15px", ["fontWeight"] : "700", ["color"] : "#1E293B" })},((JSON.stringify(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.tesis_a_mostrar_rx_state_.length))+((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.()) ? " resultados" : " disponibles")))
  )
}


function Grid_672a1d1bc3f5a9eed1f01a7b5573f6e5 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)
const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesGrid,{columns:({ ["initial"] : "1", ["sm"] : "2", ["md"] : "2", ["lg"] : "3" }),css:({ ["width"] : "100%" }),gap:"5"},Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.tesis_a_mostrar_rx_state_ ?? [],((tesis_rx_state_,index_21a25ea130b11eddb8552244447e6279)=>(jsx(RadixThemesBox,{key:index_21a25ea130b11eddb8552244447e6279},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["height"] : "100%", ["padding"] : "24px", ["borderRadius"] : "16px", ["background"] : "white", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 1px 4px rgba(0,0,0,0.06)", ["&:hover"] : ({ ["transform"] : "translateY(-4px)", ["boxShadow"] : "0 12px 28px rgba(99,102,241,0.14), 0 4px 10px rgba(0,0,0,0.06)", ["borderColor"] : "rgba(99,102,241,0.25)" }), ["transition"] : "all 0.22s cubic-bezier(0.4, 0, 0.2, 1)" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "44px", ["height"] : "44px", ["borderRadius"] : "12px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 3px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "18px", ["fontWeight"] : "800", ["color"] : "white", ["textTransform"] : "uppercase" })},tesis_rx_state_?.["nombre_estudiante"]?.at?.(0))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["color"] : "#0F172A", ["noOfLines"] : 1 })},((tesis_rx_state_?.["nombre_estudiante"]+" ")+tesis_rx_state_?.["apellido_estudiante"])),jsx(Fragment,{},(tesis_rx_state_?.["publico"]?(jsx(Fragment,{},jsx(RadixThemesBadge,{color:"green",css:({ ["color"] : "#065F46", ["backgroundColor"] : "#D1FAE5", ["border"] : "1px solid #A7F3D0", ["fontWeight"] : "bold", ["fontSize"] : "11px" }),radius:"full",variant:"soft"},"P\u00fablica"))):(jsx(Fragment,{},jsx(RadixThemesBadge,{color:"gray",css:({ ["color"] : "#1E293B", ["backgroundColor"] : "#F1F5F9", ["border"] : "1px solid #E2E8F0", ["fontWeight"] : "bold", ["fontSize"] : "11px" }),radius:"full",variant:"soft"},"Privada")))))),jsx(RadixThemesBadge,{color:"indigo",css:({ ["color"] : "#3730A3", ["backgroundColor"] : "#E0E7FF", ["border"] : "1px solid #C7D2FE", ["fontSize"] : "12px", ["fontWeight"] : "700", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px" }),radius:"full",variant:"soft"},tesis_rx_state_?.["carrera"])),jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["borderLeft"] : "4px solid #6366F1", ["paddingLeft"] : "14px", ["marginTop"] : "2", ["marginBottom"] : "2" })},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "15px", ["fontWeight"] : "700", ["color"] : "#0F172A", ["lineHeight"] : "1.4", ["noOfLines"] : 3 })},tesis_rx_state_?.["titulo"])),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingTop"] : "14px", ["borderTop"] : "1px solid #E2E8F0" }),direction:"column",gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"1"},jsx(LucideUser,{css:({ ["color"] : "#6366F1", ["strokeWidth"] : 2.5 }),size:15},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "800", ["color"] : "#334155", ["textTransform"] : "uppercase" })},"Tutor Acad\u00e9mico")),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "600", ["color"] : "#0F172A", ["noOfLines"] : 1 })},tesis_rx_state_?.["tutor_academico"])),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"1"},jsx(LucideUserCheck,{css:({ ["color"] : "#10B981", ["strokeWidth"] : 2.5 }),size:15},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "800", ["color"] : "#334155", ["textTransform"] : "uppercase" })},"Tutor Empresarial")),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "600", ["color"] : "#0F172A", ["noOfLines"] : 1 })},tesis_rx_state_?.["tutor_empresa"])),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"1"},jsx(LucideBuilding2,{css:({ ["color"] : "#0EA5E9", ["strokeWidth"] : 2.5 }),size:15},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "800", ["color"] : "#334155", ["textTransform"] : "uppercase" })},"Empresa")),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "600", ["color"] : "#0F172A", ["noOfLines"] : 1 })},tesis_rx_state_?.["nombre_empresa"]))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingTop"] : "12px" }),direction:"row",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["textDecoration"] : "none", ["flex"] : "1", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{target:(true ? "_blank" : ""),to:(!((tesis_rx_state_?.["url"]?.valueOf?.() === ""?.valueOf?.())) ? (tesis_rx_state_?.["url"]+"#toolbar=0") : "#")},jsx(RadixThemesButton,{color:"indigo",css:({ ["fontWeight"] : "bold", ["cursor"] : "pointer", ["border"] : "1px solid rgba(99,102,241,0.2)", ["width"] : "100%", ["&:hover"] : ({ ["backgroundColor"] : "#E0E7FF", ["transform"] : "translateY(-1px)" }) }),size:"3",variant:"surface"},jsx(LucideEye,{size:18},),"Visualizar"))),jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesButton,{color:"blue",css:({ ["fontWeight"] : "bold", ["cursor"] : "pointer", ["flex"] : "1", ["&:hover"] : ({ ["transform"] : "translateY(-1px)", ["boxShadow"] : "lg" }) }),onClick:((_e) => (addEvents([(ReflexEvent("_download", ({ ["url"] : tesis_rx_state_?.["url"], ["filename"] : ("Tesis_"+tesis_rx_state_?.["cedula_estudiante"]+".pdf"), ["data"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))),size:"3",variant:"solid"},jsx(LucideDownload,{size:18},),"Descargar"))):(jsx(Fragment,{},))))),jsx(Fragment,{},(((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.()) || (reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.usuario_rx_state_?.["id"]?.valueOf?.() === tesis_rx_state_?.["usuario_id"]?.valueOf?.()))?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingTop"] : "12px" }),direction:"row",gap:"3"},jsx(RadixThemesIconButton,{color:"blue",css:({ ["padding"] : "6px", ["color"] : "#1E3A8A", ["backgroundColor"] : "#DBEAFE", ["border"] : "1px solid #BFDBFE", ["fontWeight"] : "bold", ["&:hover"] : ({ ["backgroundColor"] : "#BFDBFE", ["transform"] : "scale(1.02)" }), ["flex"] : "1" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.abrir_modal_edicion", ({ ["tesis_id"] : tesis_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),size:"3",variant:"soft"},jsx(LucidePencil,{size:36},),"Editar"),jsx(RadixThemesIconButton,{color:"red",css:({ ["padding"] : "6px", ["color"] : "#B91C1C", ["backgroundColor"] : "#FEE2E2", ["border"] : "1px solid #FECACA", ["fontWeight"] : "bold", ["&:hover"] : ({ ["backgroundColor"] : "#FECACA", ["transform"] : "scale(1.02)" }), ["flex"] : "1" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.abrir_modal_confirmacion", ({ ["tesis_id"] : tesis_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),size:"3",variant:"soft"},jsx(LucideTrash2,{size:36},),"Eliminar")))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))))))))
  )
}


function Fragment_f5e658f3a1f9825b20ee762fe92089de () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.tesis_a_mostrar_rx_state_.length?.valueOf?.() === 0?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["paddingTop"] : "80px", ["paddingBottom"] : "80px", ["width"] : "100%" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingBottom"] : "10px" }),direction:({ ["initial"] : "column", ["md"] : "row" }),gap:"4"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "96px", ["height"] : "96px", ["borderRadius"] : "24px", ["background"] : "rgba(99,102,241,0.06)", ["border"] : "1.5px dashed rgba(99,102,241,0.22)" })},jsx(LucideBookOpen,{css:({ ["color"] : "rgba(99,102,241,0.35)", ["strokeWidth"] : 1.3 }),size:48},)),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "17px", ["fontWeight"] : "700", ["color"] : "#334155", ["textAlign"] : "center" })},"La b\u00f3veda est\u00e1 vac\u00eda"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["color"] : "#334155", ["textAlign"] : "center" })},"Registra la primera tesis usando el bot\u00f3n de arriba.")))))):(jsx(Fragment,{},jsx(Grid_672a1d1bc3f5a9eed1f01a7b5573f6e5,{},)))))
  )
}


function Box_7619f777465e4e3b04e19fef1a1728c8 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f3fac146529413cc754ea3dd80f3ce21 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.cerrar_modal", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "0", ["left"] : "0", ["width"] : "100vw", ["height"] : "100vh", ["background"] : "rgba(10,10,30,0.55)", ["backdropFilter"] : "blur(3px)", ["zIndex"] : "100" }),onClick:on_click_f3fac146529413cc754ea3dd80f3ce21},)
  )
}


function Text_66c88b5f2295e0a1aa9030a8209756ef () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "18px", ["fontWeight"] : "800", ["color"] : "#0F172A", ["letterSpacing"] : "-0.3px" })},(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.en_edicion_rx_state_ ? "Editar Tesis" : "Registrar Nueva Tesis"))
  )
}


function Text_a2aa78ec1176caa629a233300f78ce8d () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "12.5px", ["color"] : "#1E293B" })},(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.en_edicion_rx_state_ ? "Actualice la informaci\u00f3n del trabajo de grado." : "Ingrese la c\u00e9dula para vincular al autor."))
  )
}


function Iconbutton_16e2a728f1e0296010b6bc8b812e6994 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f3fac146529413cc754ea3dd80f3ce21 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.cerrar_modal", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{color:"gray",css:({ ["padding"] : "6px", ["borderRadius"] : "9px", ["cursor"] : "pointer", ["&:hover"] : ({ ["background"] : "rgba(239,68,68,0.10)", ["color"] : "#EF4444" }), ["transition"] : "all 0.15s ease" }),onClick:on_click_f3fac146529413cc754ea3dd80f3ce21,size:"2",variant:"ghost"},jsx(LucideX,{css:({ ["strokeWidth"] : 2 }),size:24},))
  )
}


function Debounceinput_0cc938dd2bc07119bf5d13f2357fd34e () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_aaf9d04cc5c3be24f2aa32c273137b98 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.fijar_cedula_busqueda", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["paddingLeft"] : "42px", ["paddingRight"] : "10px", ["backgroundColor"] : "white", ["border"] : "1.5px solid #CBD5E1", ["color"] : "black", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#64748B", ["opacity"] : "1" }), ["width"] : "100%", ["&:focus"] : ({ ["borderColor"] : "#6366F1", ["boxShadow"] : "0 0 0 3px rgba(99,102,241,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#A5B4FC" }), ["transition"] : "border-color 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_aaf9d04cc5c3be24f2aa32c273137b98,placeholder:"C\u00e9dula del estudiante...",radius:"large",size:"3",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.cedula_busqueda_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.cedula_busqueda_rx_state_ : ""),variant:"classic"},)
  )
}


function Button_a96fe645334f69500c2d70fe2203c037 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_7f3a708cc9ea836914b691b9f4e6fcc9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.buscar_estudiante", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["cursor"] : "pointer", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 3px 10px rgba(99,102,241,0.25)", ["&:hover"] : ({ ["boxShadow"] : "0 5px 16px rgba(99,102,241,0.35)" }), ["transition"] : "all 0.15s ease" }),onClick:on_click_7f3a708cc9ea836914b691b9f4e6fcc9,radius:"large",size:"3"},jsx(LucideSearch,{css:({ ["strokeWidth"] : 2 }),size:15},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "600" })},"Buscar"))
  )
}


function Text_ea00d55dfc169e07812b20381cbb9d61 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},((reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.nombre_encontrado_rx_state_+" ")+reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.apellido_encontrado_rx_state_))
  )
}


function Textfield__root_c6fab1c3b0848b0f2400982274385965 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(RadixThemesTextField.Root,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(((reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.nombre_encontrado_rx_state_+" ")+reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.apellido_encontrado_rx_state_)) ? ((reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.nombre_encontrado_rx_state_+" ")+reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.apellido_encontrado_rx_state_) : ""),variant:"classic"},)
  )
}


function Text_6656b21429cc8a4b3a4c2c444dbe2045 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.carrera_encontrada_rx_state_)
  )
}


function Textfield__root_20105fcedaeac5cd54e54f681c709e80 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(RadixThemesTextField.Root,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.carrera_encontrada_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.carrera_encontrada_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_e41d3248fbd299dc8622d7b975f45b6c () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.tutor_academico_encontrado_rx_state_)
  )
}


function Textfield__root_b00fef783e0d81caa126f4d4605444b9 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(RadixThemesTextField.Root,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.tutor_academico_encontrado_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.tutor_academico_encontrado_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_66e3f63050412b8883853f816b39260a () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.empresa_encontrada_rx_state_)
  )
}


function Textfield__root_94eb110f845004b871e6d3a2daf9dad5 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(RadixThemesTextField.Root,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.empresa_encontrada_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.empresa_encontrada_rx_state_ : ""),variant:"classic"},)
  )
}


function Debounceinput_446d08b1786e04ad4156eb6344ab2e17 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_efe5db8db5cd85b405945eb2026bcffc = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.fijar_titulo_tesis", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["minHeight"] : "125px", ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["resize"] : "none", ["color"] : "black", ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextArea,onChange:on_change_efe5db8db5cd85b405945eb2026bcffc,placeholder:"Ingrese el t\u00edtulo completo...",value:reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.titulo_tesis_rx_state_},)
  )
}


function Checkbox_14a67cf216d0e62d4a02a380fa10ba2d () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_5b3daca6cdcfa98e236d74c58f5b2d27 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.fijar_hacer_publico", ({ ["val"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesCheckbox,{checked:reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.hacer_publico_rx_state_,color:"indigo",onCheckedChange:on_change_5b3daca6cdcfa98e236d74c58f5b2d27,size:"2"},)
  )
}


function Flex_2f76be196f27bbedc12f80a93d60e21e () {
  const [filesById, setFilesById] = useContext(UploadFilesContext);



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},Array.prototype.map.call((filesById["upload_tesis"] ? filesById["upload_tesis"].map((f) => f.name) : []) ?? [],((f_rx_state_,index_97b2b10b230a30288ac892f55141dc29)=>(jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "#0F172A", ["noOfLines"] : 1 }),key:index_97b2b10b230a30288ac892f55141dc29,size:"3"},f_rx_state_)))),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B" }),size:"2"},"Nuevo archivo listo para subir"))
  )
}


function Button_36247d38b09f058ee638d8b18ad79596 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_667ce66cd664ac0e847b9bfc5759ffdc = useCallback(((_e) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => (refs["__clear_selected_files"]("upload_tesis"))), ["callback"] : null }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"red",css:({ ["cursor"] : "pointer" }),onClick:on_click_667ce66cd664ac0e847b9bfc5759ffdc,size:"2",variant:"soft"},jsx(LucideTrash2,{size:16},),"Quitar")
  )
}


function Comp_e4f9ecdd2699d6ef6a3536692183ae81 () {
  const ref_upload_tesis = useRef(null); refs["ref_upload_tesis"] = ref_upload_tesis;
const [addEvents, connectErrors] = useContext(EventLoopContext);
const [filesById, setFilesById] = useContext(UploadFilesContext);
const on_drop_2021dd6c6049014bf7781f6038834039 = useCallback(((_ev_0) => ((e => setFilesById(filesById => {
    const updatedFilesById = Object.assign({}, filesById);
    updatedFilesById["upload_tesis"] = e;
    return updatedFilesById;
  })
    )(_ev_0))), [addEvents, ReflexEvent, filesById, setFilesById])
const on_drop_rejected_2fcedbdc0771e7617b4270e2d1ac8cc9 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => (refs['__toast']?.["error"]("", ({ ["title"] : "Files not Accepted", ["description"] : _ev_0.map(((osizayzf) => (osizayzf?.["file"]?.["path"]+": "+osizayzf?.["errors"].map(((wnkiegyk) => wnkiegyk?.["message"])).join(", ")))).join("\n\n"), ["closeButton"] : true, ["style"] : ({ ["whiteSpace"] : "pre-line" }) })))), ["callback"] : null }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const { getRootProps: xdvxrcsn, getInputProps: udaxihhe, isDragActive: bacghqta} = useDropzone(({ ["maxFiles"] : 1, ["accept"] : ({ ["application/pdf"] : [".pdf"] }), ["multiple"] : true, ["id"] : "upload_tesis", ["onDrop"] : on_drop_2021dd6c6049014bf7781f6038834039, ["onDropRejected"] : on_drop_rejected_2fcedbdc0771e7617b4270e2d1ac8cc9 }));
const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(Fragment,{},jsx("div",{className:"rx-Upload",css:({ ["border"] : "2px dashed #CBD5E1", ["padding"] : "20px", ["borderRadius"] : "12px", ["background"] : "#F8FAFC", ["width"] : "100%", ["&:hover"] : ({ ["borderColor"] : "#6366F1", ["background"] : "rgba(99,102,241,0.02)" }), ["transition"] : "all 0.2s ease", ["cursor"] : "pointer", ["textAlign"] : "center" }),id:"upload_tesis",ref:ref_upload_tesis,...xdvxrcsn()},jsx("input",{type:"file",...udaxihhe()},),jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.en_edicion_rx_state_ && !((reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.ruta_archivo_actual_rx_state_?.valueOf?.() === ""?.valueOf?.())))?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "48px", ["height"] : "48px", ["background"] : "rgba(99,102,241,0.1)", ["borderRadius"] : "10px" })},jsx(LucideFileText,{css:({ ["color"] : "#6366F1" }),size:24},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1" }),direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "#0F172A", ["noOfLines"] : 1 }),size:"3"},reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.ruta_archivo_actual_rx_state_.split("/")?.at?.(-1)),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B" }),size:"2"},"Archivo actual (Haz clic para cambiar)")),jsx(LucideUpload,{css:({ ["color"] : "#6366F1", ["opacity"] : 0.6 }),size:18},)))):(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"2"},jsx(LucideFileUp,{css:({ ["color"] : "#94A3B8" }),size:24},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748B", ["fontSize"] : "13px" })},"Arrastra el PDF de la tesis o haz clic"))))))))
  )
}


function Fragment_dde58c96b3fd26df0858c6c834c0243e () {
  const [filesById, setFilesById] = useContext(UploadFilesContext);



  return (
    jsx(Fragment,{},(isTrue((filesById["upload_tesis"] ? filesById["upload_tesis"].map((f) => f.name) : []))?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "16px", ["border"] : "1.5px solid #6366F1", ["borderRadius"] : "12px", ["background"] : "rgba(99,102,241,0.03)" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "48px", ["height"] : "48px", ["background"] : "rgba(99,102,241,0.1)", ["borderRadius"] : "10px" })},jsx(LucideFileCheck,{css:({ ["color"] : "#6366F1" }),size:24},)),jsx(Flex_2f76be196f27bbedc12f80a93d60e21e,{},),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Button_36247d38b09f058ee638d8b18ad79596,{},)))):(jsx(Fragment,{},jsx(Comp_e4f9ecdd2699d6ef6a3536692183ae81,{},)))))
  )
}


function Button_5f5eec9817fd7a363d01d571edf50648 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f3fac146529413cc754ea3dd80f3ce21 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.cerrar_modal", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",css:({ ["color"] : "#0F172A", ["backgroundColor"] : "#F1F5F9", ["border"] : "1.5px solid #94A3B8", ["fontWeight"] : "700", ["cursor"] : "pointer", ["flex"] : ({ ["initial"] : "1", ["sm"] : "none" }), ["&:hover"] : ({ ["backgroundColor"] : "#E2E8F0" }), ["transition"] : "all 0.15s ease" }),onClick:on_click_f3fac146529413cc754ea3dd80f3ce21,radius:"large",size:"3",variant:"soft"},jsx(LucideBan,{css:({ ["strokeWidth"] : 1.8 }),size:14},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "600" })},"Cancelar"))
  )
}


function Text_fdbae829bfc4ed460e55d489170d37f9 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700" })},(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.en_edicion_rx_state_ ? "Guardar Cambios" : "Registrar Tesis"))
  )
}


function Button_6e25f71edfdb22064aa51656f5c609f0 () {
  const [filesById, setFilesById] = useContext(UploadFilesContext);
const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_eb07db18bf2ba71c32524dda847eb21e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.registrar_tesis", ({ ["files"] : filesById?.["upload_tesis"], ["archivos"] : filesById?.["upload_tesis"], ["upload_param_name"] : "archivos", ["upload_id"] : "upload_tesis", ["extra_headers"] : ({  }) }), ({  }), "uploadFiles"))], [_e], ({  })))), [addEvents, ReflexEvent, filesById, setFilesById, filesById, setFilesById])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["flex"] : ({ ["initial"] : "1", ["sm"] : "none" }), ["cursor"] : "pointer", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 4px 14px rgba(99,102,241,0.28)", ["&:hover"] : ({ ["boxShadow"] : "0 6px 20px rgba(99,102,241,0.40)", ["transform"] : "translateY(-1px)" }), ["transition"] : "all 0.15s ease" }),loading:reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.procesando_rx_state_,onClick:on_click_eb07db18bf2ba71c32524dda847eb21e,radius:"large",size:"3"},jsx(LucideCheck,{css:({ ["strokeWidth"] : 2 }),size:14},),jsx(Text_fdbae829bfc4ed460e55d489170d37f9,{},))
  )
}


function Flex_8aca8ec7888c574d344b5e6831fc97d8 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_79bf22e01d0e443e6583c80d78747fce = useCallback(((_e) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => null), ["callback"] : null }), ({ ["stopPropagation"] : true })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "white", ["borderRadius"] : "22px", ["padding"] : "32px", ["width"] : "840px", ["maxWidth"] : "96vw", ["zIndex"] : "200", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 25px 50px -12px rgba(0, 0, 0, 0.25)", ["marginTop"] : "40px", ["marginBottom"] : "40px" }),onClick:on_click_79bf22e01d0e443e6583c80d78747fce},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingBottom"] : "5px" }),direction:"column",gap:"5"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"4"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "44px", ["height"] : "44px", ["borderRadius"] : "13px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 4px 14px rgba(99,102,241,0.35)", ["flexShrink"] : "0" })},jsx(LucideBookPlus,{css:({ ["strokeWidth"] : 1.8, ["color"] : "white" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(Text_66c88b5f2295e0a1aa9030a8209756ef,{},),jsx(Text_a2aa78ec1176caa629a233300f78ce8d,{},)),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_16e2a728f1e0296010b6bc8b812e6994,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["&::-webkit-scrollbar"] : ({ ["width"] : "6px" }), ["&::-webkit-scrollbar-thumb"] : ({ ["background"] : "#CBD5E1", ["borderRadius"] : "10px" }), ["maxHeight"] : "60vh", ["overflowY"] : "auto", ["paddingRight"] : "10px", ["width"] : "100%" }),direction:"column",gap:"5"},jsx(RadixThemesFlex,{align:"center",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesBox,{css:({ ["position"] : "relative", ["flex"] : "1" })},jsx(LucideSearch,{css:({ ["color"] : "#475569", ["strokeWidth"] : 2, ["position"] : "absolute", ["left"] : "13px", ["top"] : "50%", ["transform"] : "translateY(-50%)", ["zIndex"] : "1", ["pointerEvents"] : "none" }),size:15},),jsx(Debounceinput_0cc938dd2bc07119bf5d13f2357fd34e,{},)),jsx(Button_a96fe645334f69500c2d70fe2203c037,{},)),jsx(RadixThemesGrid,{columns:({ ["initial"] : "1", ["lg"] : "2" }),css:({ ["width"] : "100%" }),gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["height"] : "100%", ["width"] : "100%", ["padding"] : "22px", ["borderRadius"] : "14px", ["background"] : "white", ["border"] : "1.5px solid #E2E8F0", ["borderLeft"] : "4px solid #6366F1", ["boxShadow"] : "0 2px 4px rgba(0,0,0,0.02)" }),direction:"column",gap:"4"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "26px", ["height"] : "26px", ["borderRadius"] : "7px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["flexShrink"] : "0" })},jsx(LucideUser,{css:({ ["strokeWidth"] : 2, ["color"] : "white" }),size:13},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "700", ["color"] : "#1E293B", ["letterSpacing"] : "0.07em", ["textTransform"] : "uppercase" })},"Autor"),jsx(RadixThemesBox,{css:({ ["flex"] : "1", ["height"] : "1px", ["background"] : "linear-gradient(90deg, rgba(99,102,241,0.20), transparent)" })},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Nombre Completo"),jsx(Fragment,{},(true?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_ea00d55dfc169e07812b20381cbb9d61,{},)))):(jsx(Fragment,{},jsx(Textfield__root_c6fab1c3b0848b0f2400982274385965,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Carrera"),jsx(Fragment,{},(true?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_6656b21429cc8a4b3a4c2c444dbe2045,{},)))):(jsx(Fragment,{},jsx(Textfield__root_20105fcedaeac5cd54e54f681c709e80,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Tutor Acad\u00e9mico"),jsx(Fragment,{},(true?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_e41d3248fbd299dc8622d7b975f45b6c,{},)))):(jsx(Fragment,{},jsx(Textfield__root_b00fef783e0d81caa126f4d4605444b9,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Empresa"),jsx(Fragment,{},(true?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_66e3f63050412b8883853f816b39260a,{},)))):(jsx(Fragment,{},jsx(Textfield__root_94eb110f845004b871e6d3a2daf9dad5,{},)))))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["height"] : "100%", ["width"] : "100%", ["padding"] : "22px", ["borderRadius"] : "14px", ["background"] : "white", ["border"] : "1.5px solid #E2E8F0", ["borderLeft"] : "4px solid #6366F1", ["boxShadow"] : "0 2px 4px rgba(0,0,0,0.02)" }),direction:"column",gap:"4"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "26px", ["height"] : "26px", ["borderRadius"] : "7px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["flexShrink"] : "0" })},jsx(LucideFileText,{css:({ ["strokeWidth"] : 2, ["color"] : "white" }),size:13},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "700", ["color"] : "#1E293B", ["letterSpacing"] : "0.07em", ["textTransform"] : "uppercase" })},"Trabajo de Grado"),jsx(RadixThemesBox,{css:({ ["flex"] : "1", ["height"] : "1px", ["background"] : "linear-gradient(90deg, rgba(99,102,241,0.20), transparent)" })},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "600", ["color"] : "#0F172A" })},"T\u00edtulo de la Tesis"),jsx(Debounceinput_446d08b1786e04ad4156eb6344ab2e17,{},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["padding"] : "12px", ["background"] : "rgba(99,102,241,0.04)", ["borderRadius"] : "10px", ["width"] : "100%" }),direction:"row",gap:"2"},jsx(RadixThemesText,{as:"label",size:"2"},jsx(RadixThemesFlex,{gap:"2"},jsx(Checkbox_14a67cf216d0e62d4a02a380fa10ba2d,{},),"")),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "600" })},"Hacer p\u00fablica en la biblioteca digital"))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "22px", ["borderRadius"] : "14px", ["background"] : "white", ["border"] : "1.5px solid #E2E8F0", ["borderLeft"] : "4px solid #6366F1", ["boxShadow"] : "0 2px 4px rgba(0,0,0,0.02)" }),direction:"column",gap:"4"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "26px", ["height"] : "26px", ["borderRadius"] : "7px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["flexShrink"] : "0" })},jsx(LucideUpload,{css:({ ["strokeWidth"] : 2, ["color"] : "white" }),size:13},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "700", ["color"] : "#1E293B", ["letterSpacing"] : "0.07em", ["textTransform"] : "uppercase" })},"Archivo de la Tesis"),jsx(RadixThemesBox,{css:({ ["flex"] : "1", ["height"] : "1px", ["background"] : "linear-gradient(90deg, rgba(99,102,241,0.20), transparent)" })},)),jsx(Fragment_dde58c96b3fd26df0858c6c834c0243e,{},))),jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["flexDirection"] : "row", ["paddingTop"] : "18px", ["borderTop"] : "1px solid #E2E8F0" }),justify:"between",gap:"3"},jsx(Button_5f5eec9817fd7a363d01d571edf50648,{},),jsx(Button_6e25f71edfdb22064aa51656f5c609f0,{},))))
  )
}


function Fragment_8dc5922887187c54456cab12273e4311 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.mostrar_modal_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["display"] : "flex", ["alignItems"] : "start", ["justifyContent"] : "center", ["position"] : "fixed", ["inset"] : "0", ["zIndex"] : "200", ["overflowY"] : "auto" })},jsx(Box_7619f777465e4e3b04e19fef1a1728c8,{},),jsx(Flex_8aca8ec7888c574d344b5e6831fc97d8,{},)))):(jsx(Fragment,{},))))
  )
}


function Box_8513e0fe161c7a318545746bec81185c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2343e08ee8fde55b1e8b5dfacb845b18 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.cerrar_modal_confirmacion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["inset"] : "0", ["background"] : "rgba(10,10,30,0.6)", ["backdropFilter"] : "blur(4px)", ["zIndex"] : "300" }),onClick:on_click_2343e08ee8fde55b1e8b5dfacb845b18},)
  )
}


function Textfield__root_853868bcb02621f35bafda590705b944 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_8e50340dbba1299aad5485fcb716f621 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.fijar_password_confirmacion", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesTextField.Root,{css:({ ["border"] : "1.5px solid #64748B", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["width"] : "100%" }),onChange:on_change_8e50340dbba1299aad5485fcb716f621,placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",size:"3",type:"password",variant:"classic"},)
  )
}


function Button_f6a58e0617844dcb191c9cc56abd60ff () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2343e08ee8fde55b1e8b5dfacb845b18 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.cerrar_modal_confirmacion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",css:({ ["cursor"] : "pointer" }),onClick:on_click_2343e08ee8fde55b1e8b5dfacb845b18,size:"3",variant:"soft"},"Cancelar")
  )
}


function Button_3fa5fcf07dc86e3b0f4874a848744110 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9c36be7ce98597a1b513c72edd33c11a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.confirmar_eliminacion_tesis", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"red",css:({ ["cursor"] : "pointer" }),onClick:on_click_9c36be7ce98597a1b513c72edd33c11a,size:"3",variant:"solid"},"Eliminar Definitivamente")
  )
}


function Fragment_767bd2545f1f794110c545e3a1edc0cf () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.mostrar_modal_confirmacion_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(Box_8513e0fe161c7a318545746bec81185c,{},),jsx(RadixThemesBox,{css:({ ["padding"] : "32px", ["background"] : "white", ["borderRadius"] : "20px", ["width"] : "480px", ["maxWidth"] : "94vw", ["position"] : "fixed", ["top"] : "50%", ["left"] : "50%", ["transform"] : "translate(-50%, -50%)", ["zIndex"] : "310", ["boxShadow"] : "0 25px 50px -12px rgba(0,0,0,0.25)" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"5"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["borderBottom"] : "1px solid #E2E8F0", ["paddingBottom"] : "16px" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "44px", ["height"] : "44px", ["borderRadius"] : "12px", ["background"] : "linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)", ["boxShadow"] : "0 4px 12px rgba(239,68,68,0.3)" })},jsx(LucideTriangleAlert,{css:({ ["color"] : "white", ["strokeWidth"] : 2.5 }),size:22},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"4",weight:"bold"},"Confirmar Eliminaci\u00f3n"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#B91C1C", ["fontWeight"] : "700" }),size:"1"},"Esta acci\u00f3n es irreversible"))),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155", ["lineHeight"] : "1.5" }),size:"2"},"Por motivos de seguridad, debe ingresar su contrase\u00f1a para confirmar que desea eliminar permanentemente este trabajo de grado."),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B" }),size:"2",weight:"bold"},"Su Contrase\u00f1a"),jsx(Textfield__root_853868bcb02621f35bafda590705b944,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingTop"] : "12px" }),direction:"row",justify:"end",gap:"3"},jsx(Button_f6a58e0617844dcb191c9cc56abd60ff,{},),jsx(Button_3fa5fcf07dc86e3b0f4874a848744110,{},))))))):(jsx(Fragment,{},))))
  )
}


function Toaster_11b04b7ca7e917be1c8df8032e226c05 () {
  const { resolvedColorMode } = useContext(ColorModeContext)
refs['__toast'] = toast


  return (
    jsx(Toaster,{closeButton:false,expand:true,position:"bottom-right",richColors:true,theme:resolvedColorMode},)
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


function Fragment_74817ed8191fba881081c38437c2a3a4 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)
const ref_layout_admin_root = useRef(null); refs["ref_layout_admin_root"] = ref_layout_admin_root;
const ref_layout_estudiante_root = useRef(null); refs["ref_layout_estudiante_root"] = ref_layout_estudiante_root;



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" }),id:"layout-admin-root",key:"layout-admin",ref:ref_layout_admin_root},jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["height"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesCard,{css:({ ["padding"] : "32px", ["maxWidth"] : "380px", ["borderRadius"] : "28px", ["boxShadow"] : "0 25px 50px -12px rgba(0, 0, 0, 0.15)", ["border"] : "1px solid #E2E8F0", ["background"] : "white" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"4"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "rgba(239, 68, 68, 0.08)", ["padding"] : "20px", ["borderRadius"] : "22px", ["marginBottom"] : "4" })},jsx(LucideMonitorOff,{css:({ ["color"] : "#EF4444" }),size:50},)),jsx(RadixThemesHeading,{css:({ ["color"] : "#1E293B", ["textAlign"] : "center" }),size:"5"},"Acceso Administrativo Restringido"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569", ["textAlign"] : "center", ["lineHeight"] : "1.6" }),size:"2",weight:"medium"},"Estimado Administrador, por motivos de seguridad y para garantizar una gesti\u00f3n \u00f3ptima de los datos, el panel de control est\u00e1 dise\u00f1ado para ser utilizado exclusivamente en dispositivos de pantalla grande."),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748B", ["textAlign"] : "center", ["italic"] : true }),size:"2"},"El uso de herramientas administrativas en pantallas peque\u00f1as puede generar errores visuales e incomodidad. Por favor, acceda desde su Laptop o PC de escritorio."),jsx(Button_5977b7afe692bf040c90733865003001,{},))))),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }) })},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesBox,{css:({ ["width"] : "285px", ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }), ["borderRight"] : "1px solid #E2E8F0", ["flexShrink"] : "0", ["overflow"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "100vh", ["background"] : "#FFFFFF" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px", ["paddingTop"] : "18px", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx("img",{alt:"Logo de la universidad",css:({ ["width"] : "46px", ["height"] : "46px", ["objectFit"] : "contain", ["borderRadius"] : "10px", ["background"] : "white", ["padding"] : "4px", ["boxShadow"] : "0 2px 12px rgba(79,70,229,0.18)", ["flexShrink"] : "0" }),src:"/logo.png"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["letterSpacing"] : "-0.4px", ["background"] : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["lineHeight"] : "1.2" })},"S.G.T."),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#1E293B", ["letterSpacing"] : "0.04em", ["textTransform"] : "uppercase", ["lineHeight"] : "1.4" })},"Sistema de Gesti\u00f3n de Tesis"))),jsx(Flex_1d4cc71c503ca3ed411f03c49144a23a,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "14px", ["paddingInlineEnd"] : "14px", ["paddingTop"] : "20px", ["padding_bottom"] : ({ ["initial"] : "100px", ["lg"] : "28px" }), ["borderTop"] : "1px solid #E2E8F0", ["background"] : "#F8FAFC" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "11px", ["background"] : "linear-gradient(135deg, #3B82F6, #8B5CF6)", ["boxShadow"] : "0 2px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(Text_6bebc9904e958838795e941bee057153,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1", ["minWidth"] : "0" }),direction:"column",gap:"0"},jsx(Text_08489eda476db536626a0341f88d4fed,{},),jsx(Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1,{},))),jsx(Button_146d50e4ab9bc4bfece71b04cb47c93e,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["flex"] : "1", ["overflowX"] : "hidden" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "12px 20px", ["background"] : "white", ["borderBottom"] : "1px solid #E2E8F0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) }),direction:"row",gap:"3"},jsx(Iconbutton_243cdc69ecd95808ec0f7766a4bb981e,{},),jsx("img",{css:({ ["width"] : "42px", ["height"] : "42px" }),src:"/logo.png"},),jsx(RadixThemesHeading,{css:({ ["color"] : "#3B82F6" }),size:"4"},"S.G.T."),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_b2690b771256b22e5d2daba59f06315f,{},)),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "24px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingTop"] : "28px", ["paddingInlineStart"] : "24px", ["paddingInlineEnd"] : "24px" }), ["paddingBottom"] : "40px", ["width"] : "100%", ["flex"] : "1", ["overflowX"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["@media screen and (min-width: 0)"] : ({ ["padding"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["padding"] : "20px" }), ["@media screen and (min-width: 48em)"] : ({ ["padding"] : "24px" }), ["@media screen and (min-width: 62em)"] : ({ ["padding"] : "24px" }), ["width"] : "100%" }),direction:"column",gap:"5"},jsx(RadixThemesFlex,{align:({ ["initial"] : "start", ["sm"] : "center" }),css:({ ["width"] : "100%", ["paddingBottom"] : "16px", ["borderBottom"] : "1px solid #E2E8F0", ["marginBottom"] : "28px" }),direction:({ ["initial"] : "column", ["sm"] : "row" }),justify:"between",gap:({ ["initial"] : "4", ["sm"] : "0" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A", ["letterSpacing"] : "-0.02em" }),size:({ ["initial"] : "7", ["sm"] : "8" }),weight:"bold"},"B\u00f3veda de Tesis"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B", ["fontSize"] : "13px", ["fontWeight"] : "500" })},"Panel de gesti\u00f3n y monitoreo acad\u00e9mico")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Fragment,{},(true?(jsx(Fragment,{},jsx(Button_e5f5cd4206befb291aaed95b7a2b4642,{},))):(jsx(Fragment,{},))))),jsx(RadixThemesBox,{css:({ ["position"] : "relative", ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "640px" }), ["marginBottom"] : "8px" })},jsx(LucideSearch,{css:({ ["color"] : "#64748B", ["position"] : "absolute", ["left"] : "14px", ["top"] : "50%", ["transform"] : "translateY(-50%)", ["zIndex"] : "1" }),size:16},),jsx(Debounceinput_dcc2bff7858d072ef78262855b32c55b,{},)),jsx(RadixThemesFlex,{align:"center",css:({ ["width"] : "100%", ["paddingBottom"] : "10px" }),direction:({ ["initial"] : "column", ["md"] : "row" }),gap:"4"},jsx(Select__root_4746b9bbe44e109d254f54a8cc3fa949,{},),jsx(Fragment_dd83875bfa2bea98ace6c7c395d40961,{},),jsx(Fragment_eff75d90553b79314c7d434ed10186a2,{},),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"2"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "28px", ["height"] : "28px", ["borderRadius"] : "8px", ["background"] : "white", ["border"] : "1px solid #E2E8F0" })},jsx(LucideBookMarked,{css:({ ["color"] : "#6366F1", ["strokeWidth"] : 2 }),size:14},)),jsx(Text_d5b2ae1f028a61108ab1521421946235,{},))),jsx(Fragment_f5e658f3a1f9825b20ee762fe92089de,{},),jsx(Fragment_8dc5922887187c54456cab12273e4311,{},),jsx(Fragment_767bd2545f1f794110c545e3a1edc0cf,{},),jsx(Toaster_11b04b7ca7e917be1c8df8032e226c05,{},)))),jsx(Fragment_9fdd3a6df977cd8529074381f51c11ae,{},)))))):(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" }),id:"layout-estudiante-root",key:"layout-student",ref:ref_layout_estudiante_root},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesBox,{css:({ ["width"] : "285px", ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }), ["borderRight"] : "1px solid #E2E8F0", ["flexShrink"] : "0", ["overflow"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "100vh", ["background"] : "#FFFFFF" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px", ["paddingTop"] : "18px", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx("img",{alt:"Logo de la universidad",css:({ ["width"] : "46px", ["height"] : "46px", ["objectFit"] : "contain", ["borderRadius"] : "10px", ["background"] : "white", ["padding"] : "4px", ["boxShadow"] : "0 2px 12px rgba(79,70,229,0.18)", ["flexShrink"] : "0" }),src:"/logo.png"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["letterSpacing"] : "-0.4px", ["background"] : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["lineHeight"] : "1.2" })},"S.G.T."),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#1E293B", ["letterSpacing"] : "0.04em", ["textTransform"] : "uppercase", ["lineHeight"] : "1.4" })},"Sistema de Gesti\u00f3n de Tesis"))),jsx(Flex_1d4cc71c503ca3ed411f03c49144a23a,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "14px", ["paddingInlineEnd"] : "14px", ["paddingTop"] : "20px", ["padding_bottom"] : ({ ["initial"] : "100px", ["lg"] : "28px" }), ["borderTop"] : "1px solid #E2E8F0", ["background"] : "#F8FAFC" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "11px", ["background"] : "linear-gradient(135deg, #3B82F6, #8B5CF6)", ["boxShadow"] : "0 2px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(Text_6bebc9904e958838795e941bee057153,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1", ["minWidth"] : "0" }),direction:"column",gap:"0"},jsx(Text_08489eda476db536626a0341f88d4fed,{},),jsx(Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1,{},))),jsx(Button_146d50e4ab9bc4bfece71b04cb47c93e,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["flex"] : "1", ["overflowX"] : "hidden" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "12px 20px", ["background"] : "white", ["borderBottom"] : "1px solid #E2E8F0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) }),direction:"row",gap:"3"},jsx(Iconbutton_243cdc69ecd95808ec0f7766a4bb981e,{},),jsx("img",{css:({ ["width"] : "42px", ["height"] : "42px" }),src:"/logo.png"},),jsx(RadixThemesHeading,{css:({ ["color"] : "#3B82F6" }),size:"4"},"S.G.T."),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_b2690b771256b22e5d2daba59f06315f,{},)),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "24px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingTop"] : "28px", ["paddingInlineStart"] : "24px", ["paddingInlineEnd"] : "24px" }), ["paddingBottom"] : "40px", ["width"] : "100%", ["flex"] : "1", ["overflowX"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["@media screen and (min-width: 0)"] : ({ ["padding"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["padding"] : "20px" }), ["@media screen and (min-width: 48em)"] : ({ ["padding"] : "24px" }), ["@media screen and (min-width: 62em)"] : ({ ["padding"] : "24px" }), ["width"] : "100%" }),direction:"column",gap:"5"},jsx(RadixThemesFlex,{align:({ ["initial"] : "start", ["sm"] : "center" }),css:({ ["width"] : "100%", ["paddingBottom"] : "16px", ["borderBottom"] : "1px solid #E2E8F0", ["marginBottom"] : "28px" }),direction:({ ["initial"] : "column", ["sm"] : "row" }),justify:"between",gap:({ ["initial"] : "4", ["sm"] : "0" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A", ["letterSpacing"] : "-0.02em" }),size:({ ["initial"] : "7", ["sm"] : "8" }),weight:"bold"},"B\u00f3veda de Tesis"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B", ["fontSize"] : "13px", ["fontWeight"] : "500" })},"Panel de gesti\u00f3n y monitoreo acad\u00e9mico")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Fragment,{},(true?(jsx(Fragment,{},jsx(Button_e5f5cd4206befb291aaed95b7a2b4642,{},))):(jsx(Fragment,{},))))),jsx(RadixThemesBox,{css:({ ["position"] : "relative", ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "640px" }), ["marginBottom"] : "8px" })},jsx(LucideSearch,{css:({ ["color"] : "#64748B", ["position"] : "absolute", ["left"] : "14px", ["top"] : "50%", ["transform"] : "translateY(-50%)", ["zIndex"] : "1" }),size:16},),jsx(Debounceinput_dcc2bff7858d072ef78262855b32c55b,{},)),jsx(RadixThemesFlex,{align:"center",css:({ ["width"] : "100%", ["paddingBottom"] : "10px" }),direction:({ ["initial"] : "column", ["md"] : "row" }),gap:"4"},jsx(Select__root_4746b9bbe44e109d254f54a8cc3fa949,{},),jsx(Fragment_dd83875bfa2bea98ace6c7c395d40961,{},),jsx(Fragment_eff75d90553b79314c7d434ed10186a2,{},),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"2"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "28px", ["height"] : "28px", ["borderRadius"] : "8px", ["background"] : "white", ["border"] : "1px solid #E2E8F0" })},jsx(LucideBookMarked,{css:({ ["color"] : "#6366F1", ["strokeWidth"] : 2 }),size:14},)),jsx(Text_d5b2ae1f028a61108ab1521421946235,{},))),jsx(Fragment_f5e658f3a1f9825b20ee762fe92089de,{},),jsx(Fragment_8dc5922887187c54456cab12273e4311,{},),jsx(Fragment_767bd2545f1f794110c545e3a1edc0cf,{},),jsx(Toaster_11b04b7ca7e917be1c8df8032e226c05,{},)))),jsx(Fragment_9fdd3a6df977cd8529074381f51c11ae,{},)))))))
  )
}


function Flex_dfd67985950fddff7c2e27f5a3387a0f () {
  
                useEffect(() => {
                    ((...args) => {(addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion.verificar_acceso", ({  }), ({  })))], args, ({  })));(addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.cargar_tesis", ({  }), ({  })))], args, ({  })));})()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100vw", ["height"] : "100vh" })},jsx(RadixThemesSpinner,{css:({ ["color"] : "indigo" }),size:"3"},))
  )
}


function Fragment_39f9a59ca3e3bdba5e7c05677a8d1ac2 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},(isTrue(reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.usuario_rx_state_)?(jsx(Fragment_74817ed8191fba881081c38437c2a3a4,{},)):(jsx(Fragment,{},jsx(Flex_dfd67985950fddff7c2e27f5a3387a0f,{},)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesTheme,{css:{...theme.styles.global[':root'], ...theme.styles.global.body},hasBackground:true},jsx(Fragment_39f9a59ca3e3bdba5e7c05677a8d1ac2,{},)),jsx("title",{},"SistemaTesis | Boveda"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}