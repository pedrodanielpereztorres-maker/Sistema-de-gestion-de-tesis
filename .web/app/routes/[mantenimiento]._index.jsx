import {Fragment,useCallback,useContext,useEffect,useRef} from "react"
import {Badge as RadixThemesBadge,Box as RadixThemesBox,Button as RadixThemesButton,Card as RadixThemesCard,Flex as RadixThemesFlex,Grid as RadixThemesGrid,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Link as RadixThemesLink,Select as RadixThemesSelect,Separator as RadixThemesSeparator,Table as RadixThemesTable,Tabs as RadixThemesTabs,Text as RadixThemesText,TextField as RadixThemesTextField,Theme as RadixThemesTheme} from "@radix-ui/themes"
import theme from "$/utils/theme"
import {ColorModeContext,EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,applyEventActions,isNotNullOrUndefined,isTrue,refs} from "$/utils/state"
import {BarChartBig as LucideBarChartBig,CircleUserRound as LucideCircleUserRound,FileText as LucideFileText,GraduationCap as LucideGraduationCap,Info as LucideInfo,LayoutDashboard as LucideLayoutDashboard,Library as LucideLibrary,Lock as LucideLock,LogOut as LucideLogOut,Menu as LucideMenu,MonitorOff as LucideMonitorOff,Pencil as LucidePencil,Plus as LucidePlus,Search as LucideSearch,Settings2 as LucideSettings2,ShieldAlert as LucideShieldAlert,ShieldCheck as LucideShieldCheck,ShieldPlus as LucideShieldPlus,Trash2 as LucideTrash2,UserPlus as LucideUserPlus,Users as LucideUsers,X as LucideX} from "lucide-react"
import {DynamicIcon} from "lucide-react/dynamic.mjs"
import {Link as ReactRouterLink} from "react-router"
import DebounceInput from "react-debounce-input"
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


function Debounceinput_222fd2b56acc0b8d45287c7e5f96f193 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_dc2a6be8ee2a5497ed65dad86dfeae5e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_busqueda_usuarios", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["backgroundColor"] : "white", ["border"] : "1px solid #CBD5E1", ["color"] : "black", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["& input::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["paddingLeft"] : "36px", ["width"] : "240px", ["background"] : "white", ["&:focus"] : ({ ["borderColor"] : "#6366F1", ["boxShadow"] : "0 0 0 3px rgba(99,102,241,0.15)", ["outline"] : "none" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_dc2a6be8ee2a5497ed65dad86dfeae5e,placeholder:"Buscar usuario...",radius:"large",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.busqueda_usuarios_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.busqueda_usuarios_rx_state_ : ""),variant:"classic"},)
  )
}


function Button_4411b55eb091dcb8f036a6608b2da73d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_54682f81c8ec2b7a770594ceaefb16be = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.abrir_modal_usuario", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["color"] : "white", ["boxShadow"] : "0 4px 12px rgba(99,102,241,0.25)", ["cursor"] : "pointer", ["&:hover"] : ({ ["opacity"] : 0.9, ["transform"] : "translateY(-1px)", ["boxShadow"] : "0 6px 16px rgba(99,102,241,0.35)" }), ["transition"] : "all 0.2s" }),onClick:on_click_54682f81c8ec2b7a770594ceaefb16be,radius:"large",size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideUserPlus,{size:18},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "600" })},"Nuevo Usuario")))
  )
}


function Table__body_f0c68678b4d1ff67216889394fec79e5 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesTable.Body,{},Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.usuarios_filtrados_rx_state_ ?? [],((user_rx_state_,index_29b625685b00c0412d11f18902955501)=>(jsx(RadixThemesTable.Row,{css:({ ["&:hover"] : ({ ["background"] : "#F8FAFC" }), ["transition"] : "background 0.2s" }),key:index_29b625685b00c0412d11f18902955501},jsx(RadixThemesTable.Cell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "32px", ["height"] : "32px", ["borderRadius"] : "full", ["flexShrink"] : "0", ["background"] : ((user_rx_state_?.["rol"]?.valueOf?.() === "Administrador"?.valueOf?.()) ? "#4F46E5" : "#059669") })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontWeight"] : "bold", ["fontSize"] : "14px", ["textTransform"] : "uppercase" })},user_rx_state_?.["nombre"]?.at?.(0))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "600", ["fontSize"] : "13px", ["color"] : "#0F172A" })},((user_rx_state_?.["nombre"]+" ")+user_rx_state_?.["apellido"])),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["color"] : "#64748B" })},user_rx_state_?.["rol"])))),jsx(RadixThemesTable.Cell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B", ["fontWeight"] : "500", ["fontSize"] : "14px" })},user_rx_state_?.["correo"])),jsx(RadixThemesTable.Cell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" })},jsx(RadixThemesBadge,{color:((user_rx_state_?.["rol"]?.valueOf?.() === "Administrador"?.valueOf?.()) ? "indigo" : "green"),css:({ ["color"] : ((user_rx_state_?.["rol"]?.valueOf?.() === "Administrador"?.valueOf?.()) ? "#3730A3" : "#065F46"), ["backgroundColor"] : ((user_rx_state_?.["rol"]?.valueOf?.() === "Administrador"?.valueOf?.()) ? "#E0E7FF" : "#D1FAE5"), ["fontWeight"] : "bold", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px" }),radius:"full",size:"2",variant:"soft"},user_rx_state_?.["rol"])),jsx(RadixThemesTable.Cell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesBadge,{color:(user_rx_state_?.["esta_activo"] ? "green" : "gray"),css:({ ["fontWeight"] : "bold" }),radius:"full",variant:"soft"},(user_rx_state_?.["esta_activo"] ? "ACTIVO" : "INACTIVO")),jsx(RadixThemesIconButton,{color:(user_rx_state_?.["esta_activo"] ? "red" : "green"),css:({ ["padding"] : "6px", ["cursor"] : ((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.usuario_rx_state_?.["id"]?.valueOf?.() === user_rx_state_?.["id"]?.valueOf?.()) ? "not-allowed" : "pointer") }),disabled:((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.usuario_rx_state_?.["id"]?.valueOf?.() === user_rx_state_?.["id"]?.valueOf?.()) ? true : false),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.alternar_estado_usuario", ({ ["id_usuario"] : user_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),size:"2",title:((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.usuario_rx_state_?.["id"]?.valueOf?.() === user_rx_state_?.["id"]?.valueOf?.()) ? "No puedes desactivar tu propia cuenta" : (user_rx_state_?.["esta_activo"] ? "Desactivar Cuenta" : "Activar Cuenta")),variant:"ghost"},jsx(DynamicIcon,{name:(user_rx_state_?.["esta_activo"] ? "lock" : "unlock").replaceAll("_", "-"),size:24},)))))))))
  )
}


function Debounceinput_ae516eb8b24d9e9db537fb9c605bb798 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_55b4b66c20b476cffa5316ad36fcd290 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_busqueda_tutores", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["backgroundColor"] : "white", ["border"] : "1px solid #CBD5E1", ["color"] : "black", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["& input::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["paddingLeft"] : "36px", ["width"] : "240px", ["background"] : "white", ["&:focus"] : ({ ["borderColor"] : "#6366F1", ["boxShadow"] : "0 0 0 3px rgba(99,102,241,0.15)", ["outline"] : "none" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_55b4b66c20b476cffa5316ad36fcd290,placeholder:"Buscar tutor...",radius:"large",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.busqueda_tutores_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.busqueda_tutores_rx_state_ : ""),variant:"classic"},)
  )
}


function Button_59026253a78b496a5ed8c5554a694564 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_fde48b26426ce0bac0e09a9b9aba23e0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.abrir_modal_tutor", ({ ["editar"] : false, ["tutor"] : null }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["color"] : "white", ["boxShadow"] : "0 4px 12px rgba(99,102,241,0.25)", ["cursor"] : "pointer", ["&:hover"] : ({ ["opacity"] : 0.9, ["transform"] : "translateY(-1px)", ["boxShadow"] : "0 6px 16px rgba(99,102,241,0.35)" }), ["transition"] : "all 0.2s" }),onClick:on_click_fde48b26426ce0bac0e09a9b9aba23e0,radius:"large",size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideUserPlus,{size:18},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "600" })},"Nuevo Tutor")))
  )
}


function Table__body_31d53de3ecba932b12457dfec541d01d () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesTable.Body,{},Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.tutores_filtrados_rx_state_ ?? [],((tutor_rx_state_,index_c1faf4b80f95e5b41637ab3400fa701f)=>(jsx(RadixThemesTable.Row,{css:({ ["&:hover"] : ({ ["background"] : "rgba(0,0,0,0.02)" }), ["transition"] : "background 0.15s" }),key:index_c1faf4b80f95e5b41637ab3400fa701f},jsx(RadixThemesTable.Cell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A", ["fontWeight"] : "700", ["fontSize"] : "14px" })},tutor_rx_state_?.["nombre"])),jsx(RadixThemesTable.Cell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A", ["fontWeight"] : "600", ["fontSize"] : "14px" })},tutor_rx_state_?.["especialidad"])),jsx(RadixThemesTable.Cell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A", ["fontWeight"] : "600", ["fontSize"] : "14px" })},tutor_rx_state_?.["correo"])),jsx(RadixThemesTable.Cell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A", ["fontWeight"] : "600", ["fontSize"] : "14px" })},tutor_rx_state_?.["telefono"])),jsx(RadixThemesTable.Cell,{},jsx(RadixThemesBadge,{color:(tutor_rx_state_?.["activo"] ? "blue" : "gray"),css:({ ["color"] : (tutor_rx_state_?.["activo"] ? "#1E40AF" : "#1E293B"), ["backgroundColor"] : (tutor_rx_state_?.["activo"] ? "#DBEAFE" : "#F1F5F9"), ["fontWeight"] : "bold", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px" }),radius:"full",size:"2",variant:"soft"},(tutor_rx_state_?.["activo"] ? "DISPONIBLE" : "INACTIVO"))),jsx(RadixThemesTable.Cell,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"2"},jsx(RadixThemesIconButton,{color:"amber",css:({ ["padding"] : "6px", ["cursor"] : "pointer" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.abrir_modal_tutor", ({ ["editar"] : true, ["tutor"] : tutor_rx_state_ }), ({  })))], [_e], ({  })))),radius:"full",size:"2",title:"Editar",variant:"solid"},jsx(LucidePencil,{size:24},)),jsx(Fragment,{},(tutor_rx_state_?.["tiene_movimientos"]?(jsx(Fragment,{},jsx(RadixThemesIconButton,{color:(tutor_rx_state_?.["activo"] ? "orange" : "green"),css:({ ["padding"] : "6px", ["cursor"] : "pointer" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.alternar_estado_tutor", ({ ["id_tutor"] : tutor_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),radius:"full",size:"2",title:(tutor_rx_state_?.["activo"] ? "Desactivar (Tiene historial)" : "Reactivar"),variant:"solid"},jsx(DynamicIcon,{name:(tutor_rx_state_?.["activo"] ? "power-off" : "power").replaceAll("_", "-"),size:24},)))):(jsx(Fragment,{},jsx(RadixThemesIconButton,{color:"red",css:({ ["padding"] : "6px", ["cursor"] : "pointer" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.eliminar_tutor", ({ ["id_tutor"] : tutor_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),radius:"full",size:"2",title:"Eliminar Definitivamente",variant:"solid"},jsx(LucideTrash2,{size:24},)))))))))))))
  )
}


function Debounceinput_5ab16cd72b591d47bd6de960ed186c37 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_aceac1beda66aabb09f5f9fe2e89ce26 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_busqueda_roles", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["backgroundColor"] : "white", ["border"] : "1px solid #CBD5E1", ["color"] : "black", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["& input::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["paddingLeft"] : "36px", ["width"] : "240px", ["background"] : "white", ["&:focus"] : ({ ["borderColor"] : "#6366F1", ["boxShadow"] : "0 0 0 3px rgba(99,102,241,0.15)", ["outline"] : "none" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_aceac1beda66aabb09f5f9fe2e89ce26,placeholder:"Buscar rol...",radius:"large",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.busqueda_roles_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.busqueda_roles_rx_state_ : ""),variant:"classic"},)
  )
}


function Button_f3c475de9f4436315ab5f89af80bffce () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_a8e119cdf4a77e0c9aaeb6ddc3ce5145 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.abrir_modal_rol", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["color"] : "white", ["boxShadow"] : "0 4px 12px rgba(99,102,241,0.25)", ["cursor"] : "pointer", ["&:hover"] : ({ ["opacity"] : 0.9, ["transform"] : "translateY(-1px)", ["boxShadow"] : "0 6px 16px rgba(99,102,241,0.35)" }), ["transition"] : "all 0.2s" }),onClick:on_click_a8e119cdf4a77e0c9aaeb6ddc3ce5145,radius:"large",size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideShieldPlus,{size:18},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "600" })},"Crear Rol")))
  )
}


function Table__body_4025375710e7d98913e269db7063aa58 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesTable.Body,{},Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.roles_filtrados_rx_state_ ?? [],((rol_rx_state_,index_9b6af5fee8f0aa5f9d22c91cc804e85b)=>(jsx(RadixThemesTable.Row,{css:({ ["&:hover"] : ({ ["background"] : "rgba(0,0,0,0.02)" }), ["transition"] : "background 0.15s" }),key:index_9b6af5fee8f0aa5f9d22c91cc804e85b},jsx(RadixThemesTable.Cell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B", ["fontWeight"] : "500", ["fontSize"] : "14px" })},rol_rx_state_?.["nombre"])),jsx(RadixThemesTable.Cell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569", ["fontWeight"] : "500", ["fontSize"] : "14px" })},rol_rx_state_?.["descripcion"])),jsx(RadixThemesTable.Cell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesIconButton,{color:"red",css:({ ["padding"] : "6px", ["cursor"] : "pointer" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.abrir_confirmacion_rol", ({ ["id_rol"] : rol_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),radius:"full",size:"2",title:"Eliminar Rol",variant:"solid"},jsx(LucideTrash2,{size:24},)))))))))
  )
}


function Debounceinput_c0d5d73b4a7a1eb95976a5bac261351b () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_d8b14434191a3b194fa672284dc44113 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_busqueda_carreras", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["backgroundColor"] : "white", ["border"] : "1px solid #CBD5E1", ["color"] : "black", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["& input::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["paddingLeft"] : "36px", ["width"] : "240px", ["background"] : "white", ["&:focus"] : ({ ["borderColor"] : "#6366F1", ["boxShadow"] : "0 0 0 3px rgba(99,102,241,0.15)", ["outline"] : "none" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_d8b14434191a3b194fa672284dc44113,placeholder:"Buscar carrera...",radius:"large",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.busqueda_carreras_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.busqueda_carreras_rx_state_ : ""),variant:"classic"},)
  )
}


function Button_5147abaed890e539318203eef951227e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f34f1dab4b1ed26df0a80046920d14e5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.abrir_modal_carrera", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["color"] : "white", ["boxShadow"] : "0 4px 12px rgba(99,102,241,0.25)", ["cursor"] : "pointer", ["&:hover"] : ({ ["opacity"] : 0.9, ["transform"] : "translateY(-1px)", ["boxShadow"] : "0 6px 16px rgba(99,102,241,0.35)" }), ["transition"] : "all 0.2s" }),onClick:on_click_f34f1dab4b1ed26df0a80046920d14e5,radius:"large",size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucidePlus,{size:18},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "600" })},"Nueva Carrera")))
  )
}


function Table__body_245d138b3a36eba35ad175424ed06ce3 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesTable.Body,{},Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.carreras_filtradas_rx_state_ ?? [],((carrera_rx_state_,index_813dcec9b075f39e62df2e3a51ac6043)=>(jsx(RadixThemesTable.Row,{key:index_813dcec9b075f39e62df2e3a51ac6043},jsx(RadixThemesTable.Cell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A", ["fontWeight"] : "700", ["fontSize"] : "14px" })},carrera_rx_state_?.["nombre"])),jsx(RadixThemesTable.Cell,{},jsx(RadixThemesBadge,{color:(carrera_rx_state_?.["esta_activa"] ? "indigo" : "gray"),css:({ ["fontWeight"] : "bold" }),radius:"full",variant:"soft"},(carrera_rx_state_?.["esta_activa"] ? "ACTIVA" : "INACTIVA"))),jsx(RadixThemesTable.Cell,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"2"},jsx(RadixThemesButton,{color:"blue",onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.abrir_modal_carrera", ({ ["editar"] : true, ["carrera"] : carrera_rx_state_ }), ({  })))], [_e], ({  })))),size:"2",variant:"solid"},jsx(LucidePencil,{size:16},),"Editar"),jsx(Fragment,{},(carrera_rx_state_?.["tiene_movimientos"]?(jsx(Fragment,{},jsx(RadixThemesButton,{color:(carrera_rx_state_?.["esta_activa"] ? "orange" : "green"),css:({ ["title"] : "Esta carrera tiene registros y solo puede desactivarse." }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.alternar_estado_carrera", ({ ["id_carrera"] : carrera_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),size:"2",variant:"solid"},jsx(DynamicIcon,{name:(carrera_rx_state_?.["esta_activa"] ? "power-off" : "power").replaceAll("_", "-"),size:16},),(carrera_rx_state_?.["esta_activa"] ? "Desactivar" : "Activar")))):(jsx(Fragment,{},jsx(RadixThemesButton,{color:"red",onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.eliminar_carrera", ({ ["id_carrera"] : carrera_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),size:"2",variant:"solid"},jsx(LucideTrash2,{size:16},),"Eliminar"))))))))))))
  )
}


function Box_dc1a696f97de5e1d50bccecbc6ad69f6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4bb8d4517df9c0819eb67555d4db729d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_modal_usuario", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["inset"] : "0", ["background"] : "rgba(10,10,30,0.5)", ["backdropFilter"] : "blur(4px)", ["zIndex"] : "200" }),onClick:on_click_4bb8d4517df9c0819eb67555d4db729d},)
  )
}


function Iconbutton_ff9b9a5f18d08905012c730fd1550a3d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4bb8d4517df9c0819eb67555d4db729d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_modal_usuario", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{color:"gray",css:({ ["padding"] : "6px", ["cursor"] : "pointer" }),onClick:on_click_4bb8d4517df9c0819eb67555d4db729d,variant:"ghost"},jsx(LucideX,{size:18},))
  )
}


function Text_c30ff5d94df786fda9e87a44bdbb4aa6 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_cedula_rx_state_)
  )
}


function Debounceinput_69fcf4580fbd610356cde5ba7f7ebec3 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_49659a943e97a9b76dccdb420bfbe425 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_u_cedula", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_49659a943e97a9b76dccdb420bfbe425,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_cedula_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_cedula_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_51a5a76f388125079dae12b87ab7e352 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_nombre_rx_state_)
  )
}


function Debounceinput_8e6caf7ba320d4ed2cda81396feaf337 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_d1c9c04a73c19944a6fafc969feb06fe = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_u_nombre", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_d1c9c04a73c19944a6fafc969feb06fe,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_nombre_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_nombre_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_5701c230ad413560604ca5415514913d () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_apellido_rx_state_)
  )
}


function Debounceinput_b30814dec5efff6752221d08712b5e76 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_d5422e75abc27dff62a53a9247250b96 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_u_apellido", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_d5422e75abc27dff62a53a9247250b96,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_apellido_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_apellido_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_befc9d6490d32487ca92acc4b7197e6b () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_correo_rx_state_)
  )
}


function Debounceinput_edb36c345de9ba65bc17ca28b1ac22bd () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_aadd895041c72c1ade44a6adaec16cad = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_u_correo", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_aadd895041c72c1ade44a6adaec16cad,radius:"large",size:"3",type:"email",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_correo_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_correo_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_a541dc48d62d7e8f585907f195b98c0f () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_clave_rx_state_)
  )
}


function Debounceinput_a71aa973847f3af30ea54ee4006e54d5 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_cdd6b1c8410027692ad189b1fefefa43 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_u_clave", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_cdd6b1c8410027692ad189b1fefefa43,radius:"large",size:"3",type:"password",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_clave_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.u_clave_rx_state_ : ""),variant:"classic"},)
  )
}


function Select__group_301f206ce6b771a1142744faf60d43c5 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesSelect.Group,{},"",Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.nombres_roles_rx_state_ ?? [],((item_rx_state_,index_0d039201bc63b7e42b67c92685f4966c)=>(jsx(RadixThemesSelect.Item,{key:index_0d039201bc63b7e42b67c92685f4966c,value:item_rx_state_},item_rx_state_)))))
  )
}


function Select__root_a54d0ef844f8caf5666fb6c7a4e1c28c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_dd1b44b72cdb82a66c5050d0dbcb31c4 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_u_rol", ({ ["val"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesSelect.Root,{css:({ ["backgroundColor"] : "#F8FAFC", ["border"] : "1.5px solid #64748B", ["color"] : "black", ["fontSize"] : "15px", ["fontWeight"] : "600" }),onValueChange:on_change_dd1b44b72cdb82a66c5050d0dbcb31c4,size:"3"},jsx(RadixThemesSelect.Trigger,{css:({ ["width"] : "100%" }),radius:"large",variant:"classic"},),jsx(RadixThemesSelect.Content,{},jsx(Select__group_301f206ce6b771a1142744faf60d43c5,{},)))
  )
}


function Button_30797874d6c11cf265d7ebf99775a4f3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4bb8d4517df9c0819eb67555d4db729d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_modal_usuario", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",onClick:on_click_4bb8d4517df9c0819eb67555d4db729d,radius:"large",variant:"soft"},"Cancelar")
  )
}


function Button_e4e5a12a6c62c188ec422be4449633d9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_83a7c6ef670df4f218e4f61ea165ed90 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.guardar_usuario", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 4px 12px rgba(99,102,241,0.3)" }),onClick:on_click_83a7c6ef670df4f218e4f61ea165ed90,radius:"large",variant:"solid"},"Crear Cuenta")
  )
}


function Box_bb5bfb471d9eb0c6fc60cfa7ef03a98e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_79bf22e01d0e443e6583c80d78747fce = useCallback(((_e) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => null), ["callback"] : null }), ({ ["stopPropagation"] : true })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["padding"] : "24px", ["background"] : "white", ["borderRadius"] : "16px", ["boxShadow"] : "0 25px 50px -12px rgba(0,0,0,0.25)", ["width"] : "550px", ["zIndex"] : "210", ["position"] : "fixed", ["top"] : "50%", ["left"] : "50%", ["transform"] : "translate(-50%, -50%)" }),onClick:on_click_79bf22e01d0e443e6583c80d78747fce},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"5"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "24px", ["paddingBottom"] : "20px", ["borderBottom"] : "1px solid #CBD5E1" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "44px", ["height"] : "44px", ["borderRadius"] : "12px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 4px 10px rgba(99,102,241,0.3)" })},jsx(LucideUserPlus,{css:({ ["color"] : "white" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "18px", ["fontWeight"] : "800", ["color"] : "#1E293B" })},"Nuevo Usuario"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#334155" })},"Registra un nuevo usuario en el sistema")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_ff9b9a5f18d08905012c730fd1550a3d,{},)),jsx(RadixThemesGrid,{columns:"1",css:({ ["width"] : "100%" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"C\u00e9dula de Identidad"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_c30ff5d94df786fda9e87a44bdbb4aa6,{},)))):(jsx(Fragment,{},jsx(Debounceinput_69fcf4580fbd610356cde5ba7f7ebec3,{},))))))),jsx(RadixThemesGrid,{columns:"2",css:({ ["width"] : "100%" }),gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Nombre"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_51a5a76f388125079dae12b87ab7e352,{},)))):(jsx(Fragment,{},jsx(Debounceinput_8e6caf7ba320d4ed2cda81396feaf337,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Apellido"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_5701c230ad413560604ca5415514913d,{},)))):(jsx(Fragment,{},jsx(Debounceinput_b30814dec5efff6752221d08712b5e76,{},))))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Correo"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_befc9d6490d32487ca92acc4b7197e6b,{},)))):(jsx(Fragment,{},jsx(Debounceinput_edb36c345de9ba65bc17ca28b1ac22bd,{},)))))),jsx(RadixThemesGrid,{columns:"2",css:({ ["width"] : "100%" }),gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Contrase\u00f1a"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_a541dc48d62d7e8f585907f195b98c0f,{},)))):(jsx(Fragment,{},jsx(Debounceinput_a71aa973847f3af30ea54ee4006e54d5,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "600", ["color"] : "#0F172A" })},"Rol Asignado"),jsx(Select__root_a54d0ef844f8caf5666fb6c7a4e1c28c,{},))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["marginTop"] : "24px", ["paddingTop"] : "20px", ["borderTop"] : "1px solid #CBD5E1" }),direction:"row",justify:"end",gap:"3"},jsx(Button_30797874d6c11cf265d7ebf99775a4f3,{},),jsx(Button_e4e5a12a6c62c188ec422be4449633d9,{},))))
  )
}


function Fragment_04a5026c7841962d6c03c7fcf19a62af () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.modal_usuario_abierto_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(Box_dc1a696f97de5e1d50bccecbc6ad69f6,{},),jsx(Box_bb5bfb471d9eb0c6fc60cfa7ef03a98e,{},)))):(jsx(Fragment,{},))))
  )
}


function Box_79e41e8a984a4460fc3d667b8aeaa458 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f3ffa60ae0706cbf78a820018150e6a5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_modal_tutor", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["inset"] : "0", ["background"] : "rgba(10,10,30,0.5)", ["backdropFilter"] : "blur(4px)", ["zIndex"] : "200" }),onClick:on_click_f3ffa60ae0706cbf78a820018150e6a5},)
  )
}


function Text_40fa76e98303a94af0313fa7025e397f () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "18px", ["fontWeight"] : "800", ["color"] : "#1E293B" })},(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_en_edicion_rx_state_ ? "Editar Tutor" : "Nuevo Tutor"))
  )
}


function Iconbutton_22886209ac25a9a15ec5c603042587a6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f3ffa60ae0706cbf78a820018150e6a5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_modal_tutor", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{color:"gray",css:({ ["padding"] : "6px", ["cursor"] : "pointer" }),onClick:on_click_f3ffa60ae0706cbf78a820018150e6a5,variant:"ghost"},jsx(LucideX,{size:18},))
  )
}


function Text_cedc4f75426f7d05a0b48554db5b77e0 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_cedula_rx_state_)
  )
}


function Debounceinput_d3ef611bc97bb5a1d5bf2bd19c1dd28a () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_e35cec6ec2ce38dafddd64c8ebdcc263 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_t_cedula", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const on_blur_8fb12f7bb6cf4f98fea1e623fff38f95 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cargar_datos_usuario_tutor", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onBlur:on_blur_8fb12f7bb6cf4f98fea1e623fff38f95,onChange:on_change_e35cec6ec2ce38dafddd64c8ebdcc263,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_cedula_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_cedula_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_ee72596a9fdbec94d21624d5aa680b0f () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_nombre_rx_state_)
  )
}


function Debounceinput_82a3f949fb521d45711113ea36744910 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_57615ca2cf9ac04b1917870c478a92c1 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_t_nombre", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_57615ca2cf9ac04b1917870c478a92c1,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_nombre_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_nombre_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_47839c2aec610019f7927039399bfc84 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_correo_rx_state_)
  )
}


function Debounceinput_5379aedca4613339b27f1ab50f6dc5ca () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_4d2e00de5e94b3a0ed5f23d2c70d7d03 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_t_correo", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_4d2e00de5e94b3a0ed5f23d2c70d7d03,radius:"large",size:"3",type:"email",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_correo_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_correo_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_1788c69db8fa6d1a1e5f5dea67a8fcb8 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_telefono_rx_state_)
  )
}


function Debounceinput_fe7f789b6dd635c945da70a1aaac4612 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_d4136a3cd5362a216262853d68bb2391 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_t_telefono", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_d4136a3cd5362a216262853d68bb2391,radius:"large",size:"3",type:"tel",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_telefono_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_telefono_rx_state_ : ""),variant:"classic"},)
  )
}


function Select__group_ddc08920ef574c452ec081078e181b09 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesSelect.Group,{},"",Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.carreras_nombres_rx_state_ ?? [],((item_rx_state_,index_0d039201bc63b7e42b67c92685f4966c)=>(jsx(RadixThemesSelect.Item,{key:index_0d039201bc63b7e42b67c92685f4966c,value:item_rx_state_},item_rx_state_)))))
  )
}


function Select__root_d8119353a18a42e7393de0cd96a6f13e () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_c7175cdb94f108542b143d40d60aa913 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_t_carrera", ({ ["val"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesSelect.Root,{css:({ ["backgroundColor"] : "#F8FAFC", ["border"] : "1.5px solid #64748B", ["color"] : "black", ["fontSize"] : "15px", ["fontWeight"] : "600" }),onValueChange:on_change_c7175cdb94f108542b143d40d60aa913,size:"3",value:reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_carrera_rx_state_},jsx(RadixThemesSelect.Trigger,{css:({ ["width"] : "100%" }),placeholder:"Seleccione una carrera",radius:"large",variant:"classic"},),jsx(RadixThemesSelect.Content,{},jsx(Select__group_ddc08920ef574c452ec081078e181b09,{},)))
  )
}


function Text_0d7721d92e6e5f29bdcb365b6204b99f () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_especialidad_rx_state_)
  )
}


function Debounceinput_3be4438cdab8a95a29093dc3faef0d27 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_08d339ae814b79534999c89571eebe66 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_t_especialidad", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_08d339ae814b79534999c89571eebe66,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_especialidad_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.t_especialidad_rx_state_ : ""),variant:"classic"},)
  )
}


function Button_d15341886a967b40037e4b570fc691a5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f3ffa60ae0706cbf78a820018150e6a5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_modal_tutor", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",onClick:on_click_f3ffa60ae0706cbf78a820018150e6a5,radius:"large",variant:"soft"},"Cancelar")
  )
}


function Button_cdcd681f905cb88b9fa412b9528921cf () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_e042c45157955fc1afa3a2c4ea1d443e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.guardar_tutor", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 4px 12px rgba(99,102,241,0.3)" }),onClick:on_click_e042c45157955fc1afa3a2c4ea1d443e,radius:"large",variant:"solid"},"Guardar Datos")
  )
}


function Box_4a98616b422e23766c5be6acbcbb292a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_79bf22e01d0e443e6583c80d78747fce = useCallback(((_e) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => null), ["callback"] : null }), ({ ["stopPropagation"] : true })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["padding"] : "24px", ["background"] : "white", ["borderRadius"] : "16px", ["boxShadow"] : "0 25px 50px -12px rgba(0,0,0,0.25)", ["width"] : "500px", ["zIndex"] : "210", ["position"] : "fixed", ["top"] : "50%", ["left"] : "50%", ["transform"] : "translate(-50%, -50%)" }),onClick:on_click_79bf22e01d0e443e6583c80d78747fce},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"5"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "24px", ["paddingBottom"] : "20px", ["borderBottom"] : "1px solid #CBD5E1" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "44px", ["height"] : "44px", ["borderRadius"] : "12px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 4px 10px rgba(99,102,241,0.3)" })},jsx(LucideGraduationCap,{css:({ ["color"] : "white" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(Text_40fa76e98303a94af0313fa7025e397f,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#334155" })},"Gestiona la informaci\u00f3n del personal acad\u00e9mico")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_22886209ac25a9a15ec5c603042587a6,{},)),jsx(RadixThemesGrid,{columns:"2",css:({ ["width"] : "100%" }),gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"C\u00e9dula"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_cedc4f75426f7d05a0b48554db5b77e0,{},)))):(jsx(Fragment,{},jsx(Debounceinput_d3ef611bc97bb5a1d5bf2bd19c1dd28a,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Nombre Completo"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_ee72596a9fdbec94d21624d5aa680b0f,{},)))):(jsx(Fragment,{},jsx(Debounceinput_82a3f949fb521d45711113ea36744910,{},))))))),jsx(RadixThemesGrid,{columns:"2",css:({ ["width"] : "100%" }),gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Correo Electr\u00f3nico"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_47839c2aec610019f7927039399bfc84,{},)))):(jsx(Fragment,{},jsx(Debounceinput_5379aedca4613339b27f1ab50f6dc5ca,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Tel\u00e9fono"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_1788c69db8fa6d1a1e5f5dea67a8fcb8,{},)))):(jsx(Fragment,{},jsx(Debounceinput_fe7f789b6dd635c945da70a1aaac4612,{},))))))),jsx(RadixThemesGrid,{columns:"2",css:({ ["width"] : "100%" }),gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "600", ["color"] : "#0F172A" })},"Carrera"),jsx(Select__root_d8119353a18a42e7393de0cd96a6f13e,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Especialidad"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_0d7721d92e6e5f29bdcb365b6204b99f,{},)))):(jsx(Fragment,{},jsx(Debounceinput_3be4438cdab8a95a29093dc3faef0d27,{},))))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["marginTop"] : "24px", ["paddingTop"] : "20px", ["borderTop"] : "1px solid #CBD5E1" }),direction:"row",justify:"end",gap:"3"},jsx(Button_d15341886a967b40037e4b570fc691a5,{},),jsx(Button_cdcd681f905cb88b9fa412b9528921cf,{},))))
  )
}


function Fragment_4a6ad4f664991ecd514feb2513f0529e () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.modal_tutor_abierto_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(Box_79e41e8a984a4460fc3d667b8aeaa458,{},),jsx(Box_4a98616b422e23766c5be6acbcbb292a,{},)))):(jsx(Fragment,{},))))
  )
}


function Box_129c77474a72a345ad23f26bb5fc20ed () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_03d105c0a0493bd383cec841919e1af5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_modal_rol", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["inset"] : "0", ["background"] : "rgba(10,10,30,0.5)", ["backdropFilter"] : "blur(4px)", ["zIndex"] : "200" }),onClick:on_click_03d105c0a0493bd383cec841919e1af5},)
  )
}


function Iconbutton_64cfd4e01cf341f5f16d1761406fd0c6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_03d105c0a0493bd383cec841919e1af5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_modal_rol", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{color:"gray",css:({ ["padding"] : "6px", ["cursor"] : "pointer" }),onClick:on_click_03d105c0a0493bd383cec841919e1af5,variant:"ghost"},jsx(LucideX,{size:18},))
  )
}


function Text_386068b9b0a81ea079e18e139f0c6de2 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.r_nombre_rx_state_)
  )
}


function Debounceinput_2c24d2ac94a066be5f9a06ee1eb98bcc () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_500c3c76bcf205be50d9b8ed105ffea1 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_r_nombre", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_500c3c76bcf205be50d9b8ed105ffea1,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.r_nombre_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.r_nombre_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_4aa23e7ef1b4beb27432e218d2f51e09 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.r_descripcion_rx_state_)
  )
}


function Debounceinput_23d945461486387c0baffd7b2c2a53df () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_3c7058fa7c43aa1e9afbb97f8d68f525 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_r_descripcion", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_3c7058fa7c43aa1e9afbb97f8d68f525,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.r_descripcion_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.r_descripcion_rx_state_ : ""),variant:"classic"},)
  )
}


function Button_246651be288b2c0830e398f7dcf29eb4 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_03d105c0a0493bd383cec841919e1af5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_modal_rol", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",onClick:on_click_03d105c0a0493bd383cec841919e1af5,radius:"large",variant:"soft"},"Cancelar")
  )
}


function Button_ed784ee34be137222250c3b8f72f68b5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_c8116ad8f381dbe8a5ca2828a02e5a7e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.guardar_rol", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 4px 12px rgba(99,102,241,0.3)" }),onClick:on_click_c8116ad8f381dbe8a5ca2828a02e5a7e,radius:"large",variant:"solid"},"Guardar Rol")
  )
}


function Box_6704a73c61469758bc4b1e3563a6c2e3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_79bf22e01d0e443e6583c80d78747fce = useCallback(((_e) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => null), ["callback"] : null }), ({ ["stopPropagation"] : true })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["padding"] : "24px", ["background"] : "white", ["borderRadius"] : "16px", ["boxShadow"] : "0 25px 50px -12px rgba(0,0,0,0.25)", ["width"] : "450px", ["zIndex"] : "210", ["position"] : "fixed", ["top"] : "50%", ["left"] : "50%", ["transform"] : "translate(-50%, -50%)" }),onClick:on_click_79bf22e01d0e443e6583c80d78747fce},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"5"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "24px", ["paddingBottom"] : "20px", ["borderBottom"] : "1px solid #CBD5E1" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "44px", ["height"] : "44px", ["borderRadius"] : "12px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 4px 10px rgba(99,102,241,0.3)" })},jsx(LucideShieldCheck,{css:({ ["color"] : "white" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "18px", ["fontWeight"] : "800", ["color"] : "#1E293B" })},"Nuevo Rol"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#334155" })},"Define nuevos niveles de acceso")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_64cfd4e01cf341f5f16d1761406fd0c6,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Nombre del Rol"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_386068b9b0a81ea079e18e139f0c6de2,{},)))):(jsx(Fragment,{},jsx(Debounceinput_2c24d2ac94a066be5f9a06ee1eb98bcc,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Descripci\u00f3n"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_4aa23e7ef1b4beb27432e218d2f51e09,{},)))):(jsx(Fragment,{},jsx(Debounceinput_23d945461486387c0baffd7b2c2a53df,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["marginTop"] : "24px", ["paddingTop"] : "20px", ["borderTop"] : "1px solid #CBD5E1" }),direction:"row",justify:"end",gap:"3"},jsx(Button_246651be288b2c0830e398f7dcf29eb4,{},),jsx(Button_ed784ee34be137222250c3b8f72f68b5,{},))))
  )
}


function Fragment_0efc38df0698067fc504e2bf34be6bc3 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.modal_rol_abierto_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(Box_129c77474a72a345ad23f26bb5fc20ed,{},),jsx(Box_6704a73c61469758bc4b1e3563a6c2e3,{},)))):(jsx(Fragment,{},))))
  )
}


function Box_be2fd31fee178fcaeebb11750b325550 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_160e7fd582650a62d351d72715d1daf0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_confirmacion_rol", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["inset"] : "0", ["background"] : "rgba(10,10,30,0.5)", ["backdropFilter"] : "blur(4px)", ["zIndex"] : "200" }),onClick:on_click_160e7fd582650a62d351d72715d1daf0},)
  )
}


function Iconbutton_500197c29955a0fbea147e68ba9180d1 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_160e7fd582650a62d351d72715d1daf0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_confirmacion_rol", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{color:"gray",css:({ ["padding"] : "6px", ["cursor"] : "pointer" }),onClick:on_click_160e7fd582650a62d351d72715d1daf0,variant:"ghost"},jsx(LucideX,{size:18},))
  )
}


function Text_df25e5f3c7bf3e09556c40b77ea1c47b () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.password_confirmacion_rx_state_)
  )
}


function Debounceinput_5ab5db983e69d6c26f2cc4634a31199c () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_4217d2d83a06ad94e5a0aa8d24ae0d65 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_password_confirmacion", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_4217d2d83a06ad94e5a0aa8d24ae0d65,radius:"large",size:"3",type:"password",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.password_confirmacion_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.password_confirmacion_rx_state_ : ""),variant:"classic"},)
  )
}


function Button_2098df642ae864c6a0fdb1f18e1ad260 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_160e7fd582650a62d351d72715d1daf0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_confirmacion_rol", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",onClick:on_click_160e7fd582650a62d351d72715d1daf0,radius:"large",variant:"soft"},"Cancelar")
  )
}


function Button_f75a9a823c305f70a6199f34ef88a9bd () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_324c655fc949b0542fc18e2a1dd25891 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.confirmar_eliminar_rol", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"red",css:({ ["boxShadow"] : "0 4px 12px rgba(239,68,68,0.3)" }),onClick:on_click_324c655fc949b0542fc18e2a1dd25891,radius:"large",variant:"solid"},"Eliminar Definitivamente")
  )
}


function Box_9c7e5410260974ca6745f6aa8b86a969 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_79bf22e01d0e443e6583c80d78747fce = useCallback(((_e) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => null), ["callback"] : null }), ({ ["stopPropagation"] : true })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["padding"] : "24px", ["background"] : "white", ["borderRadius"] : "16px", ["boxShadow"] : "0 25px 50px -12px rgba(0,0,0,0.25)", ["width"] : "450px", ["zIndex"] : "210", ["position"] : "fixed", ["top"] : "50%", ["left"] : "50%", ["transform"] : "translate(-50%, -50%)" }),onClick:on_click_79bf22e01d0e443e6583c80d78747fce},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"5"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "24px", ["paddingBottom"] : "20px", ["borderBottom"] : "1px solid #CBD5E1" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "44px", ["height"] : "44px", ["borderRadius"] : "12px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 4px 10px rgba(99,102,241,0.3)" })},jsx(LucideShieldAlert,{css:({ ["color"] : "white" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "18px", ["fontWeight"] : "800", ["color"] : "#1E293B" })},"Confirmar Eliminaci\u00f3n"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#334155" })},"Esta acci\u00f3n requiere autorizaci\u00f3n")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_500197c29955a0fbea147e68ba9180d1,{},)),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155", ["fontSize"] : "13px", ["fontWeight"] : "500" })},"Para eliminar este rol, confirme su contrase\u00f1a de administrador:"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Contrase\u00f1a del Administrador"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_df25e5f3c7bf3e09556c40b77ea1c47b,{},)))):(jsx(Fragment,{},jsx(Debounceinput_5ab5db983e69d6c26f2cc4634a31199c,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["marginTop"] : "24px", ["paddingTop"] : "20px", ["borderTop"] : "1px solid #CBD5E1" }),direction:"row",justify:"end",gap:"3"},jsx(Button_2098df642ae864c6a0fdb1f18e1ad260,{},),jsx(Button_f75a9a823c305f70a6199f34ef88a9bd,{},))))
  )
}


function Fragment_cc4c7fdf9ee25694452e24c2af36fc3b () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.modal_confirmar_rol_abierto_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(Box_be2fd31fee178fcaeebb11750b325550,{},),jsx(Box_9c7e5410260974ca6745f6aa8b86a969,{},)))):(jsx(Fragment,{},))))
  )
}


function Toaster_11b04b7ca7e917be1c8df8032e226c05 () {
  const { resolvedColorMode } = useContext(ColorModeContext)
refs['__toast'] = toast


  return (
    jsx(Toaster,{closeButton:false,expand:true,position:"bottom-right",richColors:true,theme:resolvedColorMode},)
  )
}


function Box_c3a5d768f0468cb13efda6e0a8fa9561 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4271d9c4552f080581281e638059d072 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_modal_carrera", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["inset"] : "0", ["background"] : "rgba(10,10,30,0.5)", ["backdropFilter"] : "blur(4px)", ["zIndex"] : "200" }),onClick:on_click_4271d9c4552f080581281e638059d072},)
  )
}


function Text_a68cea7485a99c8f1aa94d562bc4e9c7 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "18px", ["fontWeight"] : "800", ["color"] : "#1E293B" })},(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.c_en_edicion_rx_state_ ? "Editar Carrera" : "Nueva Carrera"))
  )
}


function Iconbutton_05fca158a1f901d862a7dcc4aa92a93d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4271d9c4552f080581281e638059d072 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_modal_carrera", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{color:"gray",css:({ ["padding"] : "6px", ["cursor"] : "pointer" }),onClick:on_click_4271d9c4552f080581281e638059d072,variant:"ghost"},jsx(LucideX,{size:18},))
  )
}


function Text_f0aa9cd081b7569409cd6d32cc622653 () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.c_nombre_rx_state_)
  )
}


function Debounceinput_fd3f6d0c9a4c2612dc8f7e0538debb6c () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_d2e3d75a0dca4998eecf5260940b9cf6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.fijar_c_nombre", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_d2e3d75a0dca4998eecf5260940b9cf6,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.c_nombre_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.c_nombre_rx_state_ : ""),variant:"classic"},)
  )
}


function Button_e5b03b9d0433173ec9f14e3884af251b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4271d9c4552f080581281e638059d072 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cerrar_modal_carrera", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",onClick:on_click_4271d9c4552f080581281e638059d072,radius:"large",variant:"soft"},"Cancelar")
  )
}


function Button_b91a6bb62861eb6eefee924bb87af706 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)

const on_click_d20128fd0ce03b5069fb9f05b34de646 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.guardar_carrera", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 4px 12px rgba(99,102,241,0.3)" }),onClick:on_click_d20128fd0ce03b5069fb9f05b34de646,radius:"large",variant:"solid"},(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.c_en_edicion_rx_state_ ? "Guardar Cambios" : "Crear Carrera"))
  )
}


function Box_067f11233b5fd4a2d0a0f3bdb7bb7903 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_79bf22e01d0e443e6583c80d78747fce = useCallback(((_e) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => null), ["callback"] : null }), ({ ["stopPropagation"] : true })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["padding"] : "24px", ["background"] : "white", ["borderRadius"] : "16px", ["boxShadow"] : "0 25px 50px -12px rgba(0,0,0,0.25)", ["width"] : "450px", ["zIndex"] : "210", ["position"] : "fixed", ["top"] : "50%", ["left"] : "50%", ["transform"] : "translate(-50%, -50%)" }),onClick:on_click_79bf22e01d0e443e6583c80d78747fce},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"5"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "24px", ["paddingBottom"] : "20px", ["borderBottom"] : "1px solid #CBD5E1" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "44px", ["height"] : "44px", ["borderRadius"] : "12px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 4px 10px rgba(99,102,241,0.3)" })},jsx(LucideGraduationCap,{css:({ ["color"] : "white" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(Text_a68cea7485a99c8f1aa94d562bc4e9c7,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#334155" })},"Gestiona las carreras universitarias")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_05fca158a1f901d862a7dcc4aa92a93d,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Nombre de la Carrera"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_f0aa9cd081b7569409cd6d32cc622653,{},)))):(jsx(Fragment,{},jsx(Debounceinput_fd3f6d0c9a4c2612dc8f7e0538debb6c,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["marginTop"] : "24px", ["paddingTop"] : "20px", ["borderTop"] : "1px solid #CBD5E1" }),direction:"row",justify:"end",gap:"3"},jsx(Button_e5b03b9d0433173ec9f14e3884af251b,{},),jsx(Button_b91a6bb62861eb6eefee924bb87af706,{},))))
  )
}


function Fragment_16b227a9104bb1b70bd30b78fe3b93db () {
  const reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.modal_carrera_abierto_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(Box_c3a5d768f0468cb13efda6e0a8fa9561,{},),jsx(Box_067f11233b5fd4a2d0a0f3bdb7bb7903,{},)))):(jsx(Fragment,{},))))
  )
}


function Flex_27e38c8b451d377427fd347488dfc340 () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_mantenimiento____estado_mantenimiento.cargar_datos", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["padding"] : "20px" }), ["@media screen and (min-width: 30em)"] : ({ ["padding"] : "28px" }), ["@media screen and (min-width: 48em)"] : ({ ["padding"] : "28px" }), ["@media screen and (min-width: 62em)"] : ({ ["padding"] : "36px" }), ["maxWidth"] : "1200px" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:({ ["initial"] : "start", ["sm"] : "center" }),css:({ ["width"] : "100%", ["paddingBottom"] : "16px", ["borderBottom"] : "1px solid #E2E8F0", ["marginBottom"] : "28px" }),direction:({ ["initial"] : "column", ["sm"] : "row" }),justify:"between",gap:({ ["initial"] : "4", ["sm"] : "0" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A", ["letterSpacing"] : "-0.02em" }),size:({ ["initial"] : "7", ["sm"] : "8" }),weight:"bold"},"Mantenimiento del Sistema"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B", ["fontSize"] : "13px", ["fontWeight"] : "500" })},"Panel de gesti\u00f3n y monitoreo acad\u00e9mico")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesButton,{color:"indigo",css:({ ["cursor"] : "pointer", ["boxShadow"] : "0 4px 12px rgba(99,102,241,0.3)" }),size:"3",variant:"solid"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucidePlus,{size:18},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700" })},""))))):(jsx(Fragment,{},))))),jsx(RadixThemesTabs.Root,{css:({ ["&[data-orientation='vertical']"] : ({ ["display"] : "flex" }), ["marginTop"] : "20px", ["width"] : "100%" }),defaultValue:"usuarios"},jsx(RadixThemesTabs.List,{css:({ ["&[data-orientation='vertical']"] : ({ ["display"] : "block", ["boxShadow"] : "inset -1px 0 0 0 var(--gray-a5)" }), ["background"] : "transparent", ["borderBottom"] : "2px solid #CBD5E1", ["width"] : "100%" })},jsx(RadixThemesTabs.Trigger,{css:({ ["&[data-orientation='vertical']"] : ({ ["width"] : "100%" }), ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["color"] : "#334155", ["&:active"] : ({ ["color"] : "#6366F1", ["background"] : "white", ["borderBottom"] : "2px solid #6366F1", ["fontWeight"] : "700" }) }),value:"usuarios"},"Usuarios"),jsx(RadixThemesTabs.Trigger,{css:({ ["&[data-orientation='vertical']"] : ({ ["width"] : "100%" }), ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["color"] : "#334155", ["&:active"] : ({ ["color"] : "#6366F1", ["background"] : "white", ["borderBottom"] : "2px solid #6366F1", ["fontWeight"] : "700" }) }),value:"tutores"},"Tutores Acad\u00e9micos"),jsx(RadixThemesTabs.Trigger,{css:({ ["&[data-orientation='vertical']"] : ({ ["width"] : "100%" }), ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["color"] : "#334155", ["&:active"] : ({ ["color"] : "#6366F1", ["background"] : "white", ["borderBottom"] : "2px solid #6366F1", ["fontWeight"] : "700" }) }),value:"roles"},"Roles y Permisos"),jsx(RadixThemesTabs.Trigger,{css:({ ["&[data-orientation='vertical']"] : ({ ["width"] : "100%" }), ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["color"] : "#334155", ["&:active"] : ({ ["color"] : "#6366F1", ["background"] : "white", ["borderBottom"] : "2px solid #6366F1", ["fontWeight"] : "700" }) }),value:"carreras"},"Carreras")),jsx(RadixThemesBox,{css:({ ["paddingTop"] : "32px", ["width"] : "100%" })},jsx(RadixThemesTabs.Content,{css:({ ["&[data-orientation='vertical']"] : ({ ["width"] : "100%", ["margin"] : null }) }),value:"usuarios"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "20px", ["paddingBottom"] : "20px", ["borderBottom"] : "1px solid #CBD5E1" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#1E293B", ["fontSize"] : "18px", ["letterSpacing"] : "-0.01em" })},"Cuentas de Acceso"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155", ["fontSize"] : "12px", ["fontWeight"] : "500" })},"Administraci\u00f3n y gesti\u00f3n de registros")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesBox,{css:({ ["position"] : "relative" })},jsx(LucideSearch,{css:({ ["color"] : "#000000", ["position"] : "absolute", ["left"] : "12px", ["top"] : "50%", ["transform"] : "translateY(-50%)", ["zIndex"] : "1" }),size:15},),jsx(Debounceinput_222fd2b56acc0b8d45287c7e5f96f193,{},)),jsx(Button_4411b55eb091dcb8f036a6608b2da73d,{},))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "14px", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", ["overflowX"] : "auto", ["width"] : "100%" })},jsx(RadixThemesTable.Root,{css:({ ["width"] : "100%" }),variant:"surface"},jsx(RadixThemesTable.Header,{},jsx(RadixThemesTable.Row,{},jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Usuario")),jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Correo Electr\u00f3nico")),jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Rol Asignado")),jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Estado / Acci\u00f3n")))),jsx(Table__body_f0c68678b4d1ff67216889394fec79e5,{},))))),jsx(RadixThemesTabs.Content,{css:({ ["&[data-orientation='vertical']"] : ({ ["width"] : "100%", ["margin"] : null }) }),value:"tutores"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "20px", ["paddingBottom"] : "20px", ["borderBottom"] : "1px solid #CBD5E1" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#1E293B", ["fontSize"] : "18px", ["letterSpacing"] : "-0.01em" })},"Tutores Acad\u00e9micos"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155", ["fontSize"] : "12px", ["fontWeight"] : "500" })},"Administraci\u00f3n y gesti\u00f3n de registros")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesBox,{css:({ ["position"] : "relative" })},jsx(LucideSearch,{css:({ ["color"] : "#000000", ["position"] : "absolute", ["left"] : "12px", ["top"] : "50%", ["transform"] : "translateY(-50%)", ["zIndex"] : "1" }),size:15},),jsx(Debounceinput_ae516eb8b24d9e9db537fb9c605bb798,{},)),jsx(Button_59026253a78b496a5ed8c5554a694564,{},))),jsx(RadixThemesBox,{css:({ ["padding"] : "10px 16px", ["background"] : "#EFF6FF", ["border"] : "1px solid #BFDBFE", ["borderRadius"] : "10px", ["width"] : "100%", ["marginBottom"] : "16px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"2"},jsx(LucideInfo,{css:({ ["color"] : "#3B82F6" }),size:14},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "12px", ["color"] : "#3B82F6" })},"Los tutores con tesis asignadas no pueden eliminarse, solo desactivarse."))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "14px", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", ["overflowX"] : "auto", ["width"] : "100%" })},jsx(RadixThemesTable.Root,{css:({ ["width"] : "100%" }),variant:"surface"},jsx(RadixThemesTable.Header,{},jsx(RadixThemesTable.Row,{},jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Nombre")),jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Especialidad")),jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Correo")),jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Tel\u00e9fono")),jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Estado")),jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Acciones")))),jsx(Table__body_31d53de3ecba932b12457dfec541d01d,{},))))),jsx(RadixThemesTabs.Content,{css:({ ["&[data-orientation='vertical']"] : ({ ["width"] : "100%", ["margin"] : null }) }),value:"roles"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"4"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "20px", ["paddingBottom"] : "20px", ["borderBottom"] : "1px solid #CBD5E1" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#1E293B", ["fontSize"] : "18px", ["letterSpacing"] : "-0.01em" })},"Roles y Permisos"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155", ["fontSize"] : "12px", ["fontWeight"] : "500" })},"Administraci\u00f3n y gesti\u00f3n de registros")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesBox,{css:({ ["position"] : "relative" })},jsx(LucideSearch,{css:({ ["color"] : "#000000", ["position"] : "absolute", ["left"] : "12px", ["top"] : "50%", ["transform"] : "translateY(-50%)", ["zIndex"] : "1" }),size:15},),jsx(Debounceinput_5ab16cd72b591d47bd6de960ed186c37,{},)),jsx(Button_f3c475de9f4436315ab5f89af80bffce,{},))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "14px", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", ["overflowX"] : "auto", ["width"] : "100%" })},jsx(RadixThemesTable.Root,{css:({ ["width"] : "100%" }),variant:"surface"},jsx(RadixThemesTable.Header,{},jsx(RadixThemesTable.Row,{},jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Rol")),jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Descripci\u00f3n")),jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Acciones")))),jsx(Table__body_4025375710e7d98913e269db7063aa58,{},))))),jsx(RadixThemesTabs.Content,{css:({ ["&[data-orientation='vertical']"] : ({ ["width"] : "100%", ["margin"] : null }) }),value:"carreras"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "20px", ["paddingBottom"] : "20px", ["borderBottom"] : "1px solid #CBD5E1" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#1E293B", ["fontSize"] : "18px", ["letterSpacing"] : "-0.01em" })},"Carreras Universitarias"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155", ["fontSize"] : "12px", ["fontWeight"] : "500" })},"Administraci\u00f3n y gesti\u00f3n de registros")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesBox,{css:({ ["position"] : "relative" })},jsx(LucideSearch,{css:({ ["color"] : "#000000", ["position"] : "absolute", ["left"] : "12px", ["top"] : "50%", ["transform"] : "translateY(-50%)", ["zIndex"] : "1" }),size:15},),jsx(Debounceinput_c0d5d73b4a7a1eb95976a5bac261351b,{},)),jsx(Button_5147abaed890e539318203eef951227e,{},))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "14px", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", ["overflowX"] : "auto", ["width"] : "100%" })},jsx(RadixThemesTable.Root,{css:({ ["width"] : "100%" }),variant:"surface"},jsx(RadixThemesTable.Header,{},jsx(RadixThemesTable.Row,{},jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Nombre")),jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Tiene Registros")),jsx(RadixThemesTable.ColumnHeaderCell,{css:({ ["paddingTop"] : "16px", ["paddingBottom"] : "16px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["background"] : "#F1F5F9", ["textTransform"] : "uppercase", ["borderBottom"] : "2px solid #CBD5E1" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "11px", ["color"] : "#475569", ["letterSpacing"] : "0.05em" })},"Acciones")))),jsx(Table__body_245d138b3a36eba35ad175424ed06ce3,{},))))))),jsx(Fragment_04a5026c7841962d6c03c7fcf19a62af,{},),jsx(Fragment_4a6ad4f664991ecd514feb2513f0529e,{},),jsx(Fragment_0efc38df0698067fc504e2bf34be6bc3,{},),jsx(Fragment_cc4c7fdf9ee25694452e24c2af36fc3b,{},),jsx(Toaster_11b04b7ca7e917be1c8df8032e226c05,{},),jsx(Fragment_16b227a9104bb1b70bd30b78fe3b93db,{},))
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


function Fragment_6511b97de670414263a5173421ac8651 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)
const ref_layout_admin_root = useRef(null); refs["ref_layout_admin_root"] = ref_layout_admin_root;
const ref_layout_estudiante_root = useRef(null); refs["ref_layout_estudiante_root"] = ref_layout_estudiante_root;



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" }),id:"layout-admin-root",key:"layout-admin",ref:ref_layout_admin_root},jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["height"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesCard,{css:({ ["padding"] : "32px", ["maxWidth"] : "380px", ["borderRadius"] : "28px", ["boxShadow"] : "0 25px 50px -12px rgba(0, 0, 0, 0.15)", ["border"] : "1px solid #E2E8F0", ["background"] : "white" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"4"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "rgba(239, 68, 68, 0.08)", ["padding"] : "20px", ["borderRadius"] : "22px", ["marginBottom"] : "4" })},jsx(LucideMonitorOff,{css:({ ["color"] : "#EF4444" }),size:50},)),jsx(RadixThemesHeading,{css:({ ["color"] : "#1E293B", ["textAlign"] : "center" }),size:"5"},"Acceso Administrativo Restringido"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569", ["textAlign"] : "center", ["lineHeight"] : "1.6" }),size:"2",weight:"medium"},"Estimado Administrador, por motivos de seguridad y para garantizar una gesti\u00f3n \u00f3ptima de los datos, el panel de control est\u00e1 dise\u00f1ado para ser utilizado exclusivamente en dispositivos de pantalla grande."),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748B", ["textAlign"] : "center", ["italic"] : true }),size:"2"},"El uso de herramientas administrativas en pantallas peque\u00f1as puede generar errores visuales e incomodidad. Por favor, acceda desde su Laptop o PC de escritorio."),jsx(Button_5977b7afe692bf040c90733865003001,{},))))),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }) })},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesBox,{css:({ ["width"] : "285px", ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }), ["borderRight"] : "1px solid #E2E8F0", ["flexShrink"] : "0", ["overflow"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "100vh", ["background"] : "#FFFFFF" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px", ["paddingTop"] : "18px", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx("img",{alt:"Logo de la universidad",css:({ ["width"] : "46px", ["height"] : "46px", ["objectFit"] : "contain", ["borderRadius"] : "10px", ["background"] : "white", ["padding"] : "4px", ["boxShadow"] : "0 2px 12px rgba(79,70,229,0.18)", ["flexShrink"] : "0" }),src:"/logo.png"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["letterSpacing"] : "-0.4px", ["background"] : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["lineHeight"] : "1.2" })},"S.G.T."),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#1E293B", ["letterSpacing"] : "0.04em", ["textTransform"] : "uppercase", ["lineHeight"] : "1.4" })},"Sistema de Gesti\u00f3n de Tesis"))),jsx(Flex_1d4cc71c503ca3ed411f03c49144a23a,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "14px", ["paddingInlineEnd"] : "14px", ["paddingTop"] : "20px", ["padding_bottom"] : ({ ["initial"] : "100px", ["lg"] : "28px" }), ["borderTop"] : "1px solid #E2E8F0", ["background"] : "#F8FAFC" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "11px", ["background"] : "linear-gradient(135deg, #3B82F6, #8B5CF6)", ["boxShadow"] : "0 2px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(Text_6bebc9904e958838795e941bee057153,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1", ["minWidth"] : "0" }),direction:"column",gap:"0"},jsx(Text_08489eda476db536626a0341f88d4fed,{},),jsx(Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1,{},))),jsx(Button_146d50e4ab9bc4bfece71b04cb47c93e,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["flex"] : "1", ["overflowX"] : "hidden" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "12px 20px", ["background"] : "white", ["borderBottom"] : "1px solid #E2E8F0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) }),direction:"row",gap:"3"},jsx(Iconbutton_243cdc69ecd95808ec0f7766a4bb981e,{},),jsx("img",{css:({ ["width"] : "42px", ["height"] : "42px" }),src:"/logo.png"},),jsx(RadixThemesHeading,{css:({ ["color"] : "#3B82F6" }),size:"4"},"S.G.T."),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_b2690b771256b22e5d2daba59f06315f,{},)),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "24px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingTop"] : "28px", ["paddingInlineStart"] : "24px", ["paddingInlineEnd"] : "24px" }), ["paddingBottom"] : "40px", ["width"] : "100%", ["flex"] : "1", ["overflowX"] : "hidden" })},jsx(Flex_27e38c8b451d377427fd347488dfc340,{},))),jsx(Fragment_9fdd3a6df977cd8529074381f51c11ae,{},)))))):(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" }),id:"layout-estudiante-root",key:"layout-student",ref:ref_layout_estudiante_root},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesBox,{css:({ ["width"] : "285px", ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }), ["borderRight"] : "1px solid #E2E8F0", ["flexShrink"] : "0", ["overflow"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "100vh", ["background"] : "#FFFFFF" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px", ["paddingTop"] : "18px", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx("img",{alt:"Logo de la universidad",css:({ ["width"] : "46px", ["height"] : "46px", ["objectFit"] : "contain", ["borderRadius"] : "10px", ["background"] : "white", ["padding"] : "4px", ["boxShadow"] : "0 2px 12px rgba(79,70,229,0.18)", ["flexShrink"] : "0" }),src:"/logo.png"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["letterSpacing"] : "-0.4px", ["background"] : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["lineHeight"] : "1.2" })},"S.G.T."),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#1E293B", ["letterSpacing"] : "0.04em", ["textTransform"] : "uppercase", ["lineHeight"] : "1.4" })},"Sistema de Gesti\u00f3n de Tesis"))),jsx(Flex_1d4cc71c503ca3ed411f03c49144a23a,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "14px", ["paddingInlineEnd"] : "14px", ["paddingTop"] : "20px", ["padding_bottom"] : ({ ["initial"] : "100px", ["lg"] : "28px" }), ["borderTop"] : "1px solid #E2E8F0", ["background"] : "#F8FAFC" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "11px", ["background"] : "linear-gradient(135deg, #3B82F6, #8B5CF6)", ["boxShadow"] : "0 2px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(Text_6bebc9904e958838795e941bee057153,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1", ["minWidth"] : "0" }),direction:"column",gap:"0"},jsx(Text_08489eda476db536626a0341f88d4fed,{},),jsx(Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1,{},))),jsx(Button_146d50e4ab9bc4bfece71b04cb47c93e,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["flex"] : "1", ["overflowX"] : "hidden" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "12px 20px", ["background"] : "white", ["borderBottom"] : "1px solid #E2E8F0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) }),direction:"row",gap:"3"},jsx(Iconbutton_243cdc69ecd95808ec0f7766a4bb981e,{},),jsx("img",{css:({ ["width"] : "42px", ["height"] : "42px" }),src:"/logo.png"},),jsx(RadixThemesHeading,{css:({ ["color"] : "#3B82F6" }),size:"4"},"S.G.T."),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_b2690b771256b22e5d2daba59f06315f,{},)),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "24px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingTop"] : "28px", ["paddingInlineStart"] : "24px", ["paddingInlineEnd"] : "24px" }), ["paddingBottom"] : "40px", ["width"] : "100%", ["flex"] : "1", ["overflowX"] : "hidden" })},jsx(Flex_27e38c8b451d377427fd347488dfc340,{},))),jsx(Fragment_9fdd3a6df977cd8529074381f51c11ae,{},)))))))
  )
}


function Fragment_b9050a7fd1cf161d3dc1d16f9b257603 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment_6511b97de670414263a5173421ac8651,{},)):(jsx(Fragment,{},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100vw", ["height"] : "100vh", ["backgroundColor"] : "#F8F9FF" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(LucideLock,{css:({ ["color"] : "#475569" }),size:48},),jsx(RadixThemesHeading,{css:({ ["color"] : "#1E293B" }),size:"6"},"Acceso Restringido"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155" })},"Solo los administradores pueden ver esta p\u00e1gina."),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},jsx(RadixThemesButton,{},"Volver al Inicio")))))))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesTheme,{css:{...theme.styles.global[':root'], ...theme.styles.global.body},hasBackground:true},jsx(Fragment_b9050a7fd1cf161d3dc1d16f9b257603,{},)),jsx("title",{},"SistemaTesis | Mantenimiento"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}