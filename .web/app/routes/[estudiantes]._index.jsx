import {Fragment,useCallback,useContext,useEffect,useRef} from "react"
import {Badge as RadixThemesBadge,Box as RadixThemesBox,Button as RadixThemesButton,Card as RadixThemesCard,Checkbox as RadixThemesCheckbox,Flex as RadixThemesFlex,Grid as RadixThemesGrid,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Link as RadixThemesLink,ScrollArea as RadixThemesScrollArea,Select as RadixThemesSelect,Separator as RadixThemesSeparator,Spinner as RadixThemesSpinner,Table as RadixThemesTable,Text as RadixThemesText,TextField as RadixThemesTextField,Theme as RadixThemesTheme} from "@radix-ui/themes"
import theme from "$/utils/theme"
import {ColorModeContext,EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,applyEventActions,isNotNullOrUndefined,isTrue,refs} from "$/utils/state"
import {BarChartBig as LucideBarChartBig,Building2 as LucideBuilding2,CircleUserRound as LucideCircleUserRound,CircleX as LucideCircleX,FileText as LucideFileText,GraduationCap as LucideGraduationCap,LayoutDashboard as LucideLayoutDashboard,Library as LucideLibrary,LogOut as LucideLogOut,Menu as LucideMenu,MonitorOff as LucideMonitorOff,Plus as LucidePlus,Settings2 as LucideSettings2,TriangleAlert as LucideTriangleAlert,User as LucideUser,UserCheck as LucideUserCheck,UserPlus as LucideUserPlus,Users as LucideUsers,X as LucideX} from "lucide-react"
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


function Button_255e73ab0bd68a5de2785fb3ebe5b1b9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_3c01cd4fc5c0234f516df009ca2b7f58 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.abrir_modal", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["cursor"] : "pointer", ["boxShadow"] : "0 4px 12px rgba(99,102,241,0.3)" }),onClick:on_click_3c01cd4fc5c0234f516df009ca2b7f58,size:"3",variant:"solid"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucidePlus,{size:18},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700" })},"A\u00f1adir Estudiante")))
  )
}


function Button_46ab309cc2fda6694f6cb2c2de6fd924 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_a6abdf8a76de07af43bd2dbfd0397774 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.pagina_anterior", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{disabled:(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.pagina_actual_rx_state_ <= 1),onClick:on_click_a6abdf8a76de07af43bd2dbfd0397774},"Anterior")
  )
}


function Text_2fd44050aa80e671fe2e170ff508541c () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesText,{as:"p"},"P\u00e1gina ",reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.pagina_actual_rx_state_," de ",reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.total_paginas_rx_state_)
  )
}


function Button_057aec22fbc9252e4336a1c4f1138cc6 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_169f91c0b240a89884d654917b53d671 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.pagina_siguiente", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{disabled:(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.pagina_actual_rx_state_ >= reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.total_paginas_rx_state_),onClick:on_click_169f91c0b240a89884d654917b53d671},"Siguiente")
  )
}


function Fragment_4651b4167d254068cfc97cc3c8284525 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.lista_estudiantes_rx_state_.length?.valueOf?.() === 0?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["borderRadius"] : "16px", ["border"] : "1px solid #E2E8F0", ["background"] : "white", ["boxShadow"] : "0 1px 4px rgba(0,0,0,0.06)", ["overflow"] : "hidden", ["width"] : "100%" })},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesText,{as:"p"},"Sin estudiantes registrados"))))):(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["borderRadius"] : "16px", ["border"] : "1px solid #E2E8F0", ["background"] : "white", ["boxShadow"] : "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(99,102,241,0.04)", ["overflow"] : "hidden", ["width"] : "100%" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesScrollArea,{css:({ ["width"] : "100%" }),scrollbars:"horizontal",type:"hover"},jsx(RadixThemesTable.Root,{css:({ ["width"] : "100%" }),variant:"ghost"},jsx(RadixThemesTable.Header,{},),jsx(RadixThemesTable.Body,{},))),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["padding"] : "12px 16px" }),direction:"row",justify:"end",gap:"4"},jsx(Button_46ab309cc2fda6694f6cb2c2de6fd924,{},),jsx(Text_2fd44050aa80e671fe2e170ff508541c,{},),jsx(Button_057aec22fbc9252e4336a1c4f1138cc6,{},))))))))
  )
}


function Box_d672f0710d6d531fdd4b51999e2947dd () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_14e54ad41dd9d9c2662131af2c791513 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.cerrar_modal", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "0", ["width"] : "100vw", ["height"] : "100vh", ["background"] : "rgba(10, 10, 30, 0.55)", ["backdropFilter"] : "blur(4px)", ["zIndex"] : "100" }),onClick:on_click_14e54ad41dd9d9c2662131af2c791513},)
  )
}


function Text_a87f7d41dfdeb1fdcb2fa881653eb6df () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "19px", ["fontWeight"] : "800", ["color"] : "#0F172A", ["letterSpacing"] : "-0.3px", ["lineHeight"] : "1.2" })},(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.en_edicion_rx_state_ ? "Editar Estudiante" : "Registrar Estudiante"))
  )
}


function Iconbutton_b5f6d4728c5b198e33c85d3d170d069a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_14e54ad41dd9d9c2662131af2c791513 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.cerrar_modal", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{color:"gray",css:({ ["padding"] : "6px", ["borderRadius"] : "10px", ["cursor"] : "pointer", ["&:hover"] : ({ ["background"] : "rgba(239,68,68,0.10)", ["color"] : "#EF4444" }), ["transition"] : "all 0.15s ease" }),onClick:on_click_14e54ad41dd9d9c2662131af2c791513,size:"2",variant:"ghost"},jsx(LucideX,{css:({ ["strokeWidth"] : 2 }),size:24},))
  )
}


function Debounceinput_217191a81e0799ea8be3a672ab1399c2 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_fde8917f1904ee2fab8c525f9d6b9740 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_cedula", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const on_blur_b1034a82da1f57edd29d0908266910ee = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.cargar_datos_usuario", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["background"] : "#FFFFFF", ["border"] : "1.5px solid #CBD5E1", ["color"] : "#0F172A", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["cursor"] : (reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.en_edicion_rx_state_ ? "not-allowed" : "text"), ["&::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["width"] : "100%", ["&:focus"] : ({ ["borderColor"] : "#6366F1", ["boxShadow"] : "0 0 0 3px rgba(99,102,241,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#A5B4FC" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onBlur:on_blur_b1034a82da1f57edd29d0908266910ee,onChange:on_change_fde8917f1904ee2fab8c525f9d6b9740,placeholder:"C\u00e9dula de Identidad",radius:"large",readOnly:(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.en_edicion_rx_state_ ? true : false),size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.cedula_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.cedula_rx_state_ : "")},)
  )
}


function Text_2be4f8679e5fb9aeebad55c7915ad5f7 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.nombre_rx_state_)
  )
}


function Debounceinput_ba63c30dc82864f0f1e29ea0630ac468 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2a21a50f4f937d5e18d4122c856d991c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_nombre", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_2a21a50f4f937d5e18d4122c856d991c,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.nombre_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.nombre_rx_state_ : ""),variant:"classic"},)
  )
}


function Fragment_01b2b3df52b06d9623fc2a1e3af695f1 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.usuario_encontrado_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_2be4f8679e5fb9aeebad55c7915ad5f7,{},)))):(jsx(Fragment,{},jsx(Debounceinput_ba63c30dc82864f0f1e29ea0630ac468,{},)))))
  )
}


function Text_d71b74498a4afc196012455569e8bb1a () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.apellido_rx_state_)
  )
}


function Debounceinput_cceafe650348e84f527dc5fbc8e737db () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_67b378cc05494a80e3adc3297b3a1b17 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_apellido", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_67b378cc05494a80e3adc3297b3a1b17,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.apellido_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.apellido_rx_state_ : ""),variant:"classic"},)
  )
}


function Fragment_14b8fe76ec02a8b1b49773622d383672 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.usuario_encontrado_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_d71b74498a4afc196012455569e8bb1a,{},)))):(jsx(Fragment,{},jsx(Debounceinput_cceafe650348e84f527dc5fbc8e737db,{},)))))
  )
}


function Text_bd85606ff6d10ca2f697bc60081b7758 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.telefono_personal_rx_state_)
  )
}


function Debounceinput_6674b95ccdd46a245a0497005ec10b84 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_86b2680d5476b7d993535e5212de9838 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_telefono_personal", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_86b2680d5476b7d993535e5212de9838,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.telefono_personal_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.telefono_personal_rx_state_ : ""),variant:"classic"},)
  )
}


function Select__group_0b48645269144b274673cdeca3c2e007 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesSelect.Group,{},"",Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.carreras_disponibles_rx_state_ ?? [],((item_rx_state_,index_0d039201bc63b7e42b67c92685f4966c)=>(jsx(RadixThemesSelect.Item,{key:index_0d039201bc63b7e42b67c92685f4966c,value:item_rx_state_},item_rx_state_)))))
  )
}


function Select__root_4dc0d65166a94314254ebffb41e071f4 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_f4ff62a4e294939593e9f4a0b30554ee = useCallback(((_ev_0) => {(addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_carrera", ({ ["val"] : _ev_0 }), ({  })))], [_ev_0], ({  })));(addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.cargar_tutores_por_carrera", ({ ["carrera"] : _ev_0 }), ({  })))], [_ev_0], ({  })));}), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesSelect.Root,{css:({ ["backgroundColor"] : "#F8FAFC", ["color"] : "#0F172A", ["border"] : "1.5px solid #64748B", ["fontSize"] : "15px", ["fontWeight"] : "600" }),onValueChange:on_change_f4ff62a4e294939593e9f4a0b30554ee,size:"3",value:reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.carrera_rx_state_},jsx(RadixThemesSelect.Trigger,{css:({ ["width"] : "100%" }),placeholder:"Selecciona una carrera",radius:"large",variant:"classic"},),jsx(RadixThemesSelect.Content,{},jsx(Select__group_0b48645269144b274673cdeca3c2e007,{},)))
  )
}


function Text_2486faaeffc9b29a8554e43b28cc9523 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.periodo_inicio_rx_state_)
  )
}


function Debounceinput_19afc4b759804fd32fcd42eaade0be7d () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_31db4b769979e5e1122f09c316ec7b00 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_periodo_inicio", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_31db4b769979e5e1122f09c316ec7b00,radius:"large",size:"3",type:"date",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.periodo_inicio_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.periodo_inicio_rx_state_ : ""),variant:"classic"},)
  )
}


function Fragment_4daa73874c0ded56bbbcae59b7fffd81 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.en_edicion_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_2486faaeffc9b29a8554e43b28cc9523,{},)))):(jsx(Fragment,{},jsx(Debounceinput_19afc4b759804fd32fcd42eaade0be7d,{},)))))
  )
}


function Text_bd71d0e4d7d171403f0d69ce315b5088 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.periodo_cierre_rx_state_)
  )
}


function Debounceinput_b2cc5a9ecf92b304df2723f9522e4d84 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_7c2e6c4ace8ddf72d2612147ae907de8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_periodo_cierre", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_7c2e6c4ace8ddf72d2612147ae907de8,radius:"large",size:"3",type:"date",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.periodo_cierre_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.periodo_cierre_rx_state_ : ""),variant:"classic"},)
  )
}


function Checkbox_89b2b36370f3379a78fefbf5bf5223ff () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2d63b87ea70b0dbeeb3e24efe4b17d89 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_haciendo_tesis", ({ ["val"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesCheckbox,{checked:reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.haciendo_tesis_rx_state_,color:"indigo",onCheckedChange:on_change_2d63b87ea70b0dbeeb3e24efe4b17d89,size:"2"},)
  )
}


function Select__group_1959c7525e827531cdf29b6f5804382d () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesSelect.Group,{},"",Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.tutores_disponibles_rx_state_ ?? [],((item_rx_state_,index_0d039201bc63b7e42b67c92685f4966c)=>(jsx(RadixThemesSelect.Item,{key:index_0d039201bc63b7e42b67c92685f4966c,value:item_rx_state_},item_rx_state_)))))
  )
}


function Select__root_52a06181095a32f677fd1a3c7c33aebd () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_ae786009f285718156b394744b9e6633 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_tutor_academico_seleccionado", ({ ["val"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesSelect.Root,{css:({ ["backgroundColor"] : "#F8FAFC", ["color"] : "#0F172A", ["border"] : "1.5px solid #64748B", ["fontSize"] : "15px", ["fontWeight"] : "600" }),onValueChange:on_change_ae786009f285718156b394744b9e6633,size:"3",value:reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.tutor_academico_seleccionado_rx_state_},jsx(RadixThemesSelect.Trigger,{css:({ ["width"] : "100%" }),placeholder:"Selecciona un tutor acad\u00e9mico",radius:"large",variant:"classic"},),jsx(RadixThemesSelect.Content,{},jsx(Select__group_1959c7525e827531cdf29b6f5804382d,{},)))
  )
}


function Fragment_91b7fd0792c7ca44bedce03244235655 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.haciendo_tesis_rx_state_?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "600", ["color"] : "#0F172A" })},"Seleccionar Tutor Acad\u00e9mico"),jsx(Select__root_52a06181095a32f677fd1a3c7c33aebd,{},)))):(jsx(Fragment,{},))))
  )
}


function Text_7eae75818b4119d49b8a6a72878e8c80 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.nombre_empresa_rx_state_)
  )
}


function Debounceinput_dc7443fefd0ad8849e948f94163c2b5d () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_50ff7be383ab40a0544cb227ec5b0ec0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_nombre_empresa", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_50ff7be383ab40a0544cb227ec5b0ec0,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.nombre_empresa_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.nombre_empresa_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_22fdea812c59e87a052970516de645ca () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.direccion_empresa_rx_state_)
  )
}


function Debounceinput_540c666d72cb4c9b167fac75f618e1cd () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_24128d7b526191d37250286eec3f0ff3 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_direccion_empresa", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_24128d7b526191d37250286eec3f0ff3,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.direccion_empresa_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.direccion_empresa_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_de9acd7e35d3782625fd847291766a38 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.tutor_empresa_rx_state_)
  )
}


function Debounceinput_15a425fc0ccd0f77d381604b8ca6f2bb () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_6d680259577b604ba26148d46610035e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_tutor_empresa", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_6d680259577b604ba26148d46610035e,radius:"large",size:"3",type:"text",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.tutor_empresa_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.tutor_empresa_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_3c9c129b702d1570ca6f534c1f5b7a13 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.correo_empresa_rx_state_)
  )
}


function Debounceinput_a989c2ec42fd01fb26e3d74821cb54e6 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_8c9af7b928393cd28e567ef641817763 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_correo_empresa", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_8c9af7b928393cd28e567ef641817763,radius:"large",size:"3",type:"email",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.correo_empresa_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.correo_empresa_rx_state_ : ""),variant:"classic"},)
  )
}


function Text_c80dec264655a0c59732a7b055caec41 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13.5px", ["fontWeight"] : "600", ["color"] : "#1E293B" })},reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.telefono_empresa_rx_state_)
  )
}


function Debounceinput_171eae080b09bd69799cf27f62d4f1d2 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_c4f3242b46c03a5c648c684cd089e677 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_telefono_empresa", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #CBD5E1", ["fontSize"] : "13.5px", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#94A3B8", ["opacity"] : "0.8", ["fontWeight"] : "500" }), ["width"] : "100%", ["background"] : "white", ["color"] : "black", ["&:focus"] : ({ ["borderColor"] : "#3B82F6", ["boxShadow"] : "0 0 0 3px rgba(59,130,246,0.15)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#60A5FA" }), ["transition"] : "border-color 0.15s ease, box-shadow 0.15s ease" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_c4f3242b46c03a5c648c684cd089e677,radius:"large",size:"3",type:"tel",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.telefono_empresa_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.telefono_empresa_rx_state_ : ""),variant:"classic"},)
  )
}


function Button_e770975d3dfc7e944576fbcc70f120ad () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_14e54ad41dd9d9c2662131af2c791513 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.cerrar_modal", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",css:({ ["color"] : "#0F172A", ["backgroundColor"] : "#F1F5F9", ["border"] : "1.5px solid #94A3B8", ["fontWeight"] : "700", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#E2E8F0" }), ["transition"] : "all 0.15s ease" }),onClick:on_click_14e54ad41dd9d9c2662131af2c791513,radius:"large",size:"3",variant:"soft"},jsx(LucideCircleX,{css:({ ["strokeWidth"] : 1.8 }),size:15},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "600" })},"Cancelar"))
  )
}


function Text_bb9f368e7585743f45ecc5f09a306467 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700" })},(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.en_edicion_rx_state_ ? "Guardar Cambios" : "Registrar Estudiante"))
  )
}


function Button_93d9a8e2978e0f688352b4cf5c64d25a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_30d2d674db9ef2c221435a33264a9977 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.guardar_estudiante", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["cursor"] : "pointer", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 4px 14px rgba(99,102,241,0.30)", ["&:hover"] : ({ ["boxShadow"] : "0 6px 20px rgba(99,102,241,0.40)", ["transform"] : "translateY(-1px)" }), ["transition"] : "all 0.15s ease" }),onClick:on_click_30d2d674db9ef2c221435a33264a9977,radius:"large",size:"3",variant:"solid"},jsx(LucideUserCheck,{css:({ ["strokeWidth"] : 2 }),size:15},),jsx(Text_bb9f368e7585743f45ecc5f09a306467,{},))
  )
}


function Box_28feba349097cf4af664c760ea66f8b7 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_79bf22e01d0e443e6583c80d78747fce = useCallback(((_e) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => null), ["callback"] : null }), ({ ["stopPropagation"] : true })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "24px", ["padding"] : "36px", ["width"] : "920px", ["maxWidth"] : "96vw", ["maxHeight"] : "95vh", ["overflowY"] : "auto", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 25px 50px -12px rgba(0,0,0,0.25)" }),onClick:on_click_79bf22e01d0e443e6583c80d78747fce},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingBottom"] : "10px" }),direction:"column",gap:"5"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingBottom"] : "20px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"4"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "44px", ["height"] : "44px", ["borderRadius"] : "13px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["boxShadow"] : "0 4px 14px rgba(99,102,241,0.35)", ["flexShrink"] : "0" })},jsx(LucideUserPlus,{css:({ ["strokeWidth"] : 1.8, ["color"] : "white" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(Text_a87f7d41dfdeb1fdcb2fa881653eb6df,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "12.5px", ["fontWeight"] : "400", ["color"] : "#475569" })},"Completa todos los campos para a\u00f1adir un nuevo estudiante.")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_b5f6d4728c5b198e33c85d3d170d069a,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "20px", ["borderRadius"] : "14px", ["background"] : "white", ["border"] : "1.5px solid #E2E8F0", ["borderLeft"] : "4px solid #6366F1", ["boxShadow"] : "0 1px 3px rgba(0,0,0,0.04)" }),direction:"column",gap:"4"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "28px", ["height"] : "28px", ["borderRadius"] : "8px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["flexShrink"] : "0" })},jsx(LucideUser,{css:({ ["strokeWidth"] : 2, ["color"] : "white" }),size:14},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "12px", ["fontWeight"] : "700", ["color"] : "#0F172A", ["letterSpacing"] : "0.06em", ["textTransform"] : "uppercase" })},"Informaci\u00f3n Personal"),jsx(RadixThemesBox,{css:({ ["flex"] : "1", ["height"] : "1px", ["background"] : "linear-gradient(90deg, rgba(99,102,241,0.20), transparent)" })},)),jsx(RadixThemesGrid,{columns:"2",css:({ ["width"] : "100%" }),gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "600", ["color"] : "#0F172A" })},"C\u00e9dula de Identidad"),jsx(Debounceinput_217191a81e0799ea8be3a672ab1399c2,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Nombres"),jsx(Fragment_01b2b3df52b06d9623fc2a1e3af695f1,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Apellidos"),jsx(Fragment_14b8fe76ec02a8b1b49773622d383672,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Tel\u00e9fono Estudiante"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_bd85606ff6d10ca2f697bc60081b7758,{},)))):(jsx(Fragment,{},jsx(Debounceinput_6674b95ccdd46a245a0497005ec10b84,{},)))))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "20px", ["borderRadius"] : "14px", ["background"] : "white", ["border"] : "1.5px solid #E2E8F0", ["borderLeft"] : "4px solid #6366F1", ["boxShadow"] : "0 1px 3px rgba(0,0,0,0.04)" }),direction:"column",gap:"4"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "28px", ["height"] : "28px", ["borderRadius"] : "8px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["flexShrink"] : "0" })},jsx(LucideGraduationCap,{css:({ ["strokeWidth"] : 2, ["color"] : "white" }),size:14},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "12px", ["fontWeight"] : "700", ["color"] : "#0F172A", ["letterSpacing"] : "0.06em", ["textTransform"] : "uppercase" })},"Detalles Acad\u00e9micos"),jsx(RadixThemesBox,{css:({ ["flex"] : "1", ["height"] : "1px", ["background"] : "linear-gradient(90deg, rgba(99,102,241,0.20), transparent)" })},)),jsx(RadixThemesGrid,{columns:"3",css:({ ["width"] : "100%" }),gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "600", ["color"] : "#0F172A" })},"Carrera"),jsx(Select__root_4dc0d65166a94314254ebffb41e071f4,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Per\u00edodo de Inicio"),jsx(Fragment_4daa73874c0ded56bbbcae59b7fffd81,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Per\u00edodo de Cierre"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_bd71d0e4d7d171403f0d69ce315b5088,{},)))):(jsx(Fragment,{},jsx(Debounceinput_b2cc5a9ecf92b304df2723f9522e4d84,{},))))))),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["paddingTop"] : "8px", ["paddingBottom"] : "8px" }),direction:"row",gap:"2"},jsx(RadixThemesText,{as:"label",size:"2"},jsx(RadixThemesFlex,{gap:"2"},jsx(Checkbox_89b2b36370f3379a78fefbf5bf5223ff,{},),"")),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#0F172A", ["fontSize"] : "13.5px" })},"El estudiante est\u00e1 haciendo tesis")),jsx(Fragment_91b7fd0792c7ca44bedce03244235655,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "20px", ["borderRadius"] : "14px", ["background"] : "white", ["border"] : "1.5px solid #E2E8F0", ["borderLeft"] : "4px solid #6366F1", ["boxShadow"] : "0 1px 3px rgba(0,0,0,0.04)" }),direction:"column",gap:"4"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "28px", ["height"] : "28px", ["borderRadius"] : "8px", ["background"] : "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)", ["flexShrink"] : "0" })},jsx(LucideBuilding2,{css:({ ["strokeWidth"] : 2, ["color"] : "white" }),size:14},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "12px", ["fontWeight"] : "700", ["color"] : "#0F172A", ["letterSpacing"] : "0.06em", ["textTransform"] : "uppercase" })},"Empresa / Pr\u00e1cticas"),jsx(RadixThemesBox,{css:({ ["flex"] : "1", ["height"] : "1px", ["background"] : "linear-gradient(90deg, rgba(99,102,241,0.20), transparent)" })},)),jsx(RadixThemesGrid,{columns:"2",css:({ ["width"] : "100%" }),gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Nombre de la Empresa"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_7eae75818b4119d49b8a6a72878e8c80,{},)))):(jsx(Fragment,{},jsx(Debounceinput_dc7443fefd0ad8849e948f94163c2b5d,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Direcci\u00f3n de la Empresa"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_22fdea812c59e87a052970516de645ca,{},)))):(jsx(Fragment,{},jsx(Debounceinput_540c666d72cb4c9b167fac75f618e1cd,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Tutor Empresarial"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_de9acd7e35d3782625fd847291766a38,{},)))):(jsx(Fragment,{},jsx(Debounceinput_15a425fc0ccd0f77d381604b8ca6f2bb,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Correo de Contacto"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_3c9c129b702d1570ca6f534c1f5b7a13,{},)))):(jsx(Fragment,{},jsx(Debounceinput_a989c2ec42fd01fb26e3d74821cb54e6,{},)))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},"Tel\u00e9fono"),jsx(Fragment,{},(false?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "10px 14px", ["background"] : "#FFFFFF", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px" })},jsx(Text_c80dec264655a0c59732a7b055caec41,{},)))):(jsx(Fragment,{},jsx(Debounceinput_171eae080b09bd69799cf27f62d4f1d2,{},)))))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingTop"] : "20px", ["borderTop"] : "1px solid #E2E8F0" }),direction:"row",justify:"end",gap:"3"},jsx(Button_e770975d3dfc7e944576fbcc70f120ad,{},),jsx(Button_93d9a8e2978e0f688352b4cf5c64d25a,{},))))
  )
}


function Fragment_7017f261a1f7ad4b047f1841475a1a2c () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.mostrar_modal_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(Box_d672f0710d6d531fdd4b51999e2947dd,{},),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["position"] : "fixed", ["top"] : "0", ["left"] : "0", ["width"] : "100vw", ["height"] : "100vh", ["zIndex"] : "200" })},jsx(Box_28feba349097cf4af664c760ea66f8b7,{},))))):(jsx(Fragment,{},))))
  )
}


function Box_701f2f604b75206fbfc458cfce7b4fd7 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_c42340db23592214da7361fd9077412b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.cerrar_modal_confirmacion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["inset"] : "0", ["background"] : "rgba(0,0,0,0.5)", ["backdropFilter"] : "blur(4px)", ["zIndex"] : "400" }),onClick:on_click_c42340db23592214da7361fd9077412b},)
  )
}


function Textfield__root_8e6919adf4d3c6b43af445ccfab73542 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_9429f7cab9c1fcd7a0578f7d03bfbff1 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.fijar_password_confirmacion", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesTextField.Root,{css:({ ["border"] : "1.5px solid #64748B", ["fontWeight"] : "bold", ["&::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["width"] : "100%" }),onChange:on_change_9429f7cab9c1fcd7a0578f7d03bfbff1,placeholder:"Contrase\u00f1a de Administrador",type:"password"},)
  )
}


function Button_bd76e2145eaa0a40456e8d063e2a51ad () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_c42340db23592214da7361fd9077412b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.cerrar_modal_confirmacion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",onClick:on_click_c42340db23592214da7361fd9077412b,variant:"soft"},"Cancelar")
  )
}


function Button_afcbff9a94802369df57f9b97cd217bb () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_a9a6313e786e7e83423ea552e88ddaf0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.confirmar_eliminacion_estudiante", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"red",onClick:on_click_a9a6313e786e7e83423ea552e88ddaf0},"Confirmar Acci\u00f3n")
  )
}


function Fragment_ec8cea9c1d5355e64b6f1a2014ac0e25 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(Fragment,{},(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.mostrar_modal_confirmacion_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(Box_701f2f604b75206fbfc458cfce7b4fd7,{},),jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "50%", ["left"] : "50%", ["transform"] : "translate(-50%, -50%)", ["background"] : "white", ["padding"] : "28px", ["borderRadius"] : "16px", ["width"] : "400px", ["zIndex"] : "410", ["boxShadow"] : "0 20px 25px -5px rgba(0,0,0,0.1)" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"4"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideTriangleAlert,{css:({ ["color"] : "#EF4444" }),size:24},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B" }),size:"4",weight:"bold"},"Confirmar Eliminaci\u00f3n")),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569" }),size:"2"},"Esta acci\u00f3n desactivar\u00e1 al estudiante y su cuenta de acceso. Ingrese su contrase\u00f1a de administrador para confirmar."),jsx(Textfield__root_8e6919adf4d3c6b43af445ccfab73542,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",justify:"end",gap:"3"},jsx(Button_bd76e2145eaa0a40456e8d063e2a51ad,{},),jsx(Button_afcbff9a94802369df57f9b97cd217bb,{},))))))):(jsx(Fragment,{},))))
  )
}


function Toaster_11b04b7ca7e917be1c8df8032e226c05 () {
  const { resolvedColorMode } = useContext(ColorModeContext)
refs['__toast'] = toast


  return (
    jsx(Toaster,{closeButton:false,expand:true,position:"bottom-right",richColors:true,theme:resolvedColorMode},)
  )
}


function Flex_a4419894d8bec42ac63b66c9721c9927 () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.cargar_estudiantes", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["padding"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["padding"] : "20px" }), ["@media screen and (min-width: 48em)"] : ({ ["padding"] : "24px" }), ["@media screen and (min-width: 62em)"] : ({ ["padding"] : "24px" }) }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:({ ["initial"] : "start", ["sm"] : "center" }),css:({ ["width"] : "100%", ["paddingBottom"] : "16px", ["borderBottom"] : "1px solid #E2E8F0", ["marginBottom"] : "28px" }),direction:({ ["initial"] : "column", ["sm"] : "row" }),justify:"between",gap:({ ["initial"] : "4", ["sm"] : "0" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A", ["letterSpacing"] : "-0.02em" }),size:({ ["initial"] : "7", ["sm"] : "8" }),weight:"bold"},"Estudiantes en Pasant\u00edas Profesionales"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B", ["fontSize"] : "13px", ["fontWeight"] : "500" })},"Panel de gesti\u00f3n y monitoreo acad\u00e9mico")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Fragment,{},(true?(jsx(Fragment,{},jsx(Button_255e73ab0bd68a5de2785fb3ebe5b1b9,{},))):(jsx(Fragment,{},))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(Fragment_4651b4167d254068cfc97cc3c8284525,{},)),jsx(Fragment_7017f261a1f7ad4b047f1841475a1a2c,{},),jsx(Fragment_ec8cea9c1d5355e64b6f1a2014ac0e25,{},),jsx(Toaster_11b04b7ca7e917be1c8df8032e226c05,{},))
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


function Fragment_87b20e19c4778dbb2b30692c6f32bf10 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)
const ref_layout_admin_root = useRef(null); refs["ref_layout_admin_root"] = ref_layout_admin_root;
const ref_layout_estudiante_root = useRef(null); refs["ref_layout_estudiante_root"] = ref_layout_estudiante_root;



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" }),id:"layout-admin-root",key:"layout-admin",ref:ref_layout_admin_root},jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["height"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesCard,{css:({ ["padding"] : "32px", ["maxWidth"] : "380px", ["borderRadius"] : "28px", ["boxShadow"] : "0 25px 50px -12px rgba(0, 0, 0, 0.15)", ["border"] : "1px solid #E2E8F0", ["background"] : "white" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"4"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "rgba(239, 68, 68, 0.08)", ["padding"] : "20px", ["borderRadius"] : "22px", ["marginBottom"] : "4" })},jsx(LucideMonitorOff,{css:({ ["color"] : "#EF4444" }),size:50},)),jsx(RadixThemesHeading,{css:({ ["color"] : "#1E293B", ["textAlign"] : "center" }),size:"5"},"Acceso Administrativo Restringido"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569", ["textAlign"] : "center", ["lineHeight"] : "1.6" }),size:"2",weight:"medium"},"Estimado Administrador, por motivos de seguridad y para garantizar una gesti\u00f3n \u00f3ptima de los datos, el panel de control est\u00e1 dise\u00f1ado para ser utilizado exclusivamente en dispositivos de pantalla grande."),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748B", ["textAlign"] : "center", ["italic"] : true }),size:"2"},"El uso de herramientas administrativas en pantallas peque\u00f1as puede generar errores visuales e incomodidad. Por favor, acceda desde su Laptop o PC de escritorio."),jsx(Button_5977b7afe692bf040c90733865003001,{},))))),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }) })},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesBox,{css:({ ["width"] : "285px", ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }), ["borderRight"] : "1px solid #E2E8F0", ["flexShrink"] : "0", ["overflow"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "100vh", ["background"] : "#FFFFFF" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px", ["paddingTop"] : "18px", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx("img",{alt:"Logo de la universidad",css:({ ["width"] : "46px", ["height"] : "46px", ["objectFit"] : "contain", ["borderRadius"] : "10px", ["background"] : "white", ["padding"] : "4px", ["boxShadow"] : "0 2px 12px rgba(79,70,229,0.18)", ["flexShrink"] : "0" }),src:"/logo.png"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["letterSpacing"] : "-0.4px", ["background"] : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["lineHeight"] : "1.2" })},"S.G.T."),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#1E293B", ["letterSpacing"] : "0.04em", ["textTransform"] : "uppercase", ["lineHeight"] : "1.4" })},"Sistema de Gesti\u00f3n de Tesis"))),jsx(Flex_1d4cc71c503ca3ed411f03c49144a23a,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "14px", ["paddingInlineEnd"] : "14px", ["paddingTop"] : "20px", ["padding_bottom"] : ({ ["initial"] : "100px", ["lg"] : "28px" }), ["borderTop"] : "1px solid #E2E8F0", ["background"] : "#F8FAFC" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "11px", ["background"] : "linear-gradient(135deg, #3B82F6, #8B5CF6)", ["boxShadow"] : "0 2px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(Text_6bebc9904e958838795e941bee057153,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1", ["minWidth"] : "0" }),direction:"column",gap:"0"},jsx(Text_08489eda476db536626a0341f88d4fed,{},),jsx(Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1,{},))),jsx(Button_146d50e4ab9bc4bfece71b04cb47c93e,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["flex"] : "1", ["overflowX"] : "hidden" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "12px 20px", ["background"] : "white", ["borderBottom"] : "1px solid #E2E8F0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) }),direction:"row",gap:"3"},jsx(Iconbutton_243cdc69ecd95808ec0f7766a4bb981e,{},),jsx("img",{css:({ ["width"] : "42px", ["height"] : "42px" }),src:"/logo.png"},),jsx(RadixThemesHeading,{css:({ ["color"] : "#3B82F6" }),size:"4"},"S.G.T."),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_b2690b771256b22e5d2daba59f06315f,{},)),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "24px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingTop"] : "28px", ["paddingInlineStart"] : "24px", ["paddingInlineEnd"] : "24px" }), ["paddingBottom"] : "40px", ["width"] : "100%", ["flex"] : "1", ["overflowX"] : "hidden" })},jsx(Flex_a4419894d8bec42ac63b66c9721c9927,{},))),jsx(Fragment_9fdd3a6df977cd8529074381f51c11ae,{},)))))):(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" }),id:"layout-estudiante-root",key:"layout-student",ref:ref_layout_estudiante_root},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesBox,{css:({ ["width"] : "285px", ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }), ["borderRight"] : "1px solid #E2E8F0", ["flexShrink"] : "0", ["overflow"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "100vh", ["background"] : "#FFFFFF" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px", ["paddingTop"] : "18px", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx("img",{alt:"Logo de la universidad",css:({ ["width"] : "46px", ["height"] : "46px", ["objectFit"] : "contain", ["borderRadius"] : "10px", ["background"] : "white", ["padding"] : "4px", ["boxShadow"] : "0 2px 12px rgba(79,70,229,0.18)", ["flexShrink"] : "0" }),src:"/logo.png"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["letterSpacing"] : "-0.4px", ["background"] : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["lineHeight"] : "1.2" })},"S.G.T."),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#1E293B", ["letterSpacing"] : "0.04em", ["textTransform"] : "uppercase", ["lineHeight"] : "1.4" })},"Sistema de Gesti\u00f3n de Tesis"))),jsx(Flex_1d4cc71c503ca3ed411f03c49144a23a,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "14px", ["paddingInlineEnd"] : "14px", ["paddingTop"] : "20px", ["padding_bottom"] : ({ ["initial"] : "100px", ["lg"] : "28px" }), ["borderTop"] : "1px solid #E2E8F0", ["background"] : "#F8FAFC" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "11px", ["background"] : "linear-gradient(135deg, #3B82F6, #8B5CF6)", ["boxShadow"] : "0 2px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(Text_6bebc9904e958838795e941bee057153,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1", ["minWidth"] : "0" }),direction:"column",gap:"0"},jsx(Text_08489eda476db536626a0341f88d4fed,{},),jsx(Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1,{},))),jsx(Button_146d50e4ab9bc4bfece71b04cb47c93e,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["flex"] : "1", ["overflowX"] : "hidden" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "12px 20px", ["background"] : "white", ["borderBottom"] : "1px solid #E2E8F0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) }),direction:"row",gap:"3"},jsx(Iconbutton_243cdc69ecd95808ec0f7766a4bb981e,{},),jsx("img",{css:({ ["width"] : "42px", ["height"] : "42px" }),src:"/logo.png"},),jsx(RadixThemesHeading,{css:({ ["color"] : "#3B82F6" }),size:"4"},"S.G.T."),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_b2690b771256b22e5d2daba59f06315f,{},)),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "24px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingTop"] : "28px", ["paddingInlineStart"] : "24px", ["paddingInlineEnd"] : "24px" }), ["paddingBottom"] : "40px", ["width"] : "100%", ["flex"] : "1", ["overflowX"] : "hidden" })},jsx(Flex_a4419894d8bec42ac63b66c9721c9927,{},))),jsx(Fragment_9fdd3a6df977cd8529074381f51c11ae,{},)))))))
  )
}


function Flex_50150e935ae92cb7d8271c613d8817e2 () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion.verificar_acceso", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100vw", ["height"] : "100vh", ["backgroundColor"] : "#F8F9FF" })},jsx(RadixThemesSpinner,{css:({ ["color"] : "indigo" }),size:"3"},))
  )
}


function Fragment_363fdcb19bff3f9d9473d05eb7fbabd4 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},(isTrue(reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.usuario_rx_state_)?(jsx(Fragment_87b20e19c4778dbb2b30692c6f32bf10,{},)):(jsx(Fragment,{},jsx(Flex_50150e935ae92cb7d8271c613d8817e2,{},)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesTheme,{css:{...theme.styles.global[':root'], ...theme.styles.global.body},hasBackground:true},jsx(Fragment_363fdcb19bff3f9d9473d05eb7fbabd4,{},)),jsx("title",{},"SistemaTesis | Estudiantes"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}