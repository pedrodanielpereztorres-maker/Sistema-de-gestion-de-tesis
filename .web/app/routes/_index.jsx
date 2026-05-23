import {Fragment,useCallback,useContext,useEffect,useRef} from "react"
import {Badge as RadixThemesBadge,Box as RadixThemesBox,Button as RadixThemesButton,Card as RadixThemesCard,Flex as RadixThemesFlex,Grid as RadixThemesGrid,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Link as RadixThemesLink,Progress as RadixThemesProgress,Separator as RadixThemesSeparator,Spinner as RadixThemesSpinner,Text as RadixThemesText,Theme as RadixThemesTheme} from "@radix-ui/themes"
import theme from "$/utils/theme"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,applyEventActions,isTrue,refs} from "$/utils/state"
import {BarChartBig as LucideBarChartBig,BookPlus as LucideBookPlus,Building2 as LucideBuilding2,CalendarCheck as LucideCalendarCheck,CalendarDays as LucideCalendarDays,CheckCheck as LucideCheckCheck,CircleAlert as LucideCircleAlert,CircleCheck as LucideCircleCheck,CircleUserRound as LucideCircleUserRound,FileDown as LucideFileDown,FileText as LucideFileText,FileUp as LucideFileUp,GraduationCap as LucideGraduationCap,LayoutDashboard as LucideLayoutDashboard,Library as LucideLibrary,LogOut as LucideLogOut,Mail as LucideMail,MapPin as LucideMapPin,Menu as LucideMenu,MonitorOff as LucideMonitorOff,Phone as LucidePhone,RefreshCw as LucideRefreshCw,Settings2 as LucideSettings2,ShieldCheck as LucideShieldCheck,UserCheck as LucideUserCheck,UserMinus as LucideUserMinus,UserPlus as LucideUserPlus,Users as LucideUsers,X as LucideX} from "lucide-react"
import {Link as ReactRouterLink} from "react-router"
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


function Heading_00f28144869d9a8a596e493af7f7f8fb () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A" }),size:({ ["initial"] : "6", ["sm"] : "8" }),weight:"bold"},("Bienvenido, "+reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.nombre_usuario_rx_state_))
  )
}


function Button_756d78ec4911131d5e7acb8ec49784db () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b1e14f6cfc61d6a92c83cb94fb79fd12 = useCallback(((_e) => {(addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.cargar_estudiantes", ({  }), ({  })))], [_e], ({  })));(addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.cargar_tesis", ({  }), ({  })))], [_e], ({  })));}), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["color"] : "#312E81", ["backgroundColor"] : "#E0E7FF", ["border"] : "1px solid #C7D2FE", ["&:hover"] : ({ ["backgroundColor"] : "#C7D2FE" }) }),onClick:on_click_b1e14f6cfc61d6a92c83cb94fb79fd12,variant:"soft"},jsx(LucideRefreshCw,{size:16},),jsx(RadixThemesText,{as:"p",weight:"bold"},"Sincronizar"))
  )
}


function Text_0daf9e2f2108498cf4f415c0aa600fba () {
  const reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil = useContext(StateContexts.reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"4",weight:"bold"},reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil.tutor_nombre_rx_state_)
  )
}


function Text_b2256c877b2332f1c76191e9b78aa2e6 () {
  const reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil = useContext(StateContexts.reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"4",weight:"bold"},reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil.tutor_correo_rx_state_)
  )
}


function Text_e941699a73ea79473c3512c1e735f51f () {
  const reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil = useContext(StateContexts.reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"4",weight:"bold"},reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil.tutor_telefono_rx_state_)
  )
}


function Text_a15f28f9dbca1493b28afe583296f096 () {
  const reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil = useContext(StateContexts.reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"4",weight:"bold"},reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil.tutor_empresa_nombre_rx_state_)
  )
}


function Text_62c4add5b5b6222ffdddf9698073ea49 () {
  const reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil = useContext(StateContexts.reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"4",weight:"bold"},reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil.tutor_empresa_correo_rx_state_)
  )
}


function Text_0e59ad438f88aa5ea8e4316869bdbf13 () {
  const reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil = useContext(StateContexts.reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"4",weight:"bold"},reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil.tutor_empresa_telefono_rx_state_)
  )
}


function Text_eebd877fae8020255b3636d4577bf584 () {
  const reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil = useContext(StateContexts.reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"4",weight:"bold"},reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil.empresa_rx_state_)
  )
}


function Text_5775a9d775262c84283884bd51b2931b () {
  const reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil = useContext(StateContexts.reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"4",weight:"bold"},reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil.empresa_direccion_rx_state_)
  )
}


function Text_bec958d9c772e1ec208ef75b69d2e70f () {
  const reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil = useContext(StateContexts.reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"4",weight:"bold"},reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil.fecha_inicio_rx_state_)
  )
}


function Text_ec799d111121146860dbd550af6dcd98 () {
  const reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil = useContext(StateContexts.reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"4",weight:"bold"},reflex___state____state__sistema_tesis___paginas___perfil____estado_perfil.fecha_cierre_rx_state_)
  )
}


function Fragment_fc788e881505eb38ef65bc8654162eeb () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "estudiante"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["padding"] : "18px" }), ["@media screen and (min-width: 30em)"] : ({ ["padding"] : "24px" }), ["@media screen and (min-width: 48em)"] : ({ ["padding"] : "28px" }), ["background"] : "white", ["borderRadius"] : "18px", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1)", ["marginBottom"] : "8", ["width"] : "100%", ["overflowX"] : "auto" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "4" }),direction:"row",gap:"3"},jsx(LucideGraduationCap,{css:({ ["color"] : "#6366F1" }),size:22},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"4",weight:"bold"},"Mi Informaci\u00f3n de Pasant\u00eda"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesBadge,{color:"green",css:({ ["color"] : "#065F46", ["backgroundColor"] : "#D1FAE5", ["fontWeight"] : "800", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px" }),radius:"full",variant:"soft"},"En Curso")),jsx(RadixThemesGrid,{columns:({ ["initial"] : "1", ["sm"] : "1", ["md"] : "2", ["lg"] : "3" }),css:({ ["width"] : "100%" }),gap:"4"},jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 1px 2px rgba(0, 0, 0, 0.05)", ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["background"] : "white", ["border"] : "1.5px solid #6366F130", ["borderRadius"] : "10px" })},jsx(LucideUserCheck,{css:({ ["color"] : "#6366F1" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#475569", ["textTransform"] : "uppercase", ["letterSpacing"] : "0.05em" }),size:"2"},"Tutor Acad\u00e9mico"),jsx(Text_0daf9e2f2108498cf4f415c0aa600fba,{},)))),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 1px 2px rgba(0, 0, 0, 0.05)", ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["background"] : "white", ["border"] : "1.5px solid #8B5CF630", ["borderRadius"] : "10px" })},jsx(LucideMail,{css:({ ["color"] : "#8B5CF6" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#475569", ["textTransform"] : "uppercase", ["letterSpacing"] : "0.05em" }),size:"2"},"Correo Tutor Acad."),jsx(Text_b2256c877b2332f1c76191e9b78aa2e6,{},)))),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 1px 2px rgba(0, 0, 0, 0.05)", ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["background"] : "white", ["border"] : "1.5px solid #6366F130", ["borderRadius"] : "10px" })},jsx(LucidePhone,{css:({ ["color"] : "#6366F1" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#475569", ["textTransform"] : "uppercase", ["letterSpacing"] : "0.05em" }),size:"2"},"Tel\u00e9fono Tutor Acad."),jsx(Text_e941699a73ea79473c3512c1e735f51f,{},)))),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 1px 2px rgba(0, 0, 0, 0.05)", ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["background"] : "white", ["border"] : "1.5px solid #10B98130", ["borderRadius"] : "10px" })},jsx(LucideUserCheck,{css:({ ["color"] : "#10B981" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#475569", ["textTransform"] : "uppercase", ["letterSpacing"] : "0.05em" }),size:"2"},"Tutor Empresarial"),jsx(Text_a15f28f9dbca1493b28afe583296f096,{},)))),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 1px 2px rgba(0, 0, 0, 0.05)", ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["background"] : "white", ["border"] : "1.5px solid #10B98130", ["borderRadius"] : "10px" })},jsx(LucideMail,{css:({ ["color"] : "#10B981" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#475569", ["textTransform"] : "uppercase", ["letterSpacing"] : "0.05em" }),size:"2"},"Correo Tutor Emp."),jsx(Text_62c4add5b5b6222ffdddf9698073ea49,{},)))),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 1px 2px rgba(0, 0, 0, 0.05)", ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["background"] : "white", ["border"] : "1.5px solid #10B98130", ["borderRadius"] : "10px" })},jsx(LucidePhone,{css:({ ["color"] : "#10B981" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#475569", ["textTransform"] : "uppercase", ["letterSpacing"] : "0.05em" }),size:"2"},"Tel\u00e9fono Tutor Emp."),jsx(Text_0e59ad438f88aa5ea8e4316869bdbf13,{},)))),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 1px 2px rgba(0, 0, 0, 0.05)", ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["background"] : "white", ["border"] : "1.5px solid #0EA5E930", ["borderRadius"] : "10px" })},jsx(LucideBuilding2,{css:({ ["color"] : "#0EA5E9" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#475569", ["textTransform"] : "uppercase", ["letterSpacing"] : "0.05em" }),size:"2"},"Empresa Asignada"),jsx(Text_eebd877fae8020255b3636d4577bf584,{},)))),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 1px 2px rgba(0, 0, 0, 0.05)", ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["background"] : "white", ["border"] : "1.5px solid #0EA5E930", ["borderRadius"] : "10px" })},jsx(LucideMapPin,{css:({ ["color"] : "#0EA5E9" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#475569", ["textTransform"] : "uppercase", ["letterSpacing"] : "0.05em" }),size:"2"},"Direcci\u00f3n Empresa"),jsx(Text_5775a9d775262c84283884bd51b2931b,{},)))),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 1px 2px rgba(0, 0, 0, 0.05)", ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["background"] : "white", ["border"] : "1.5px solid #10B98130", ["borderRadius"] : "10px" })},jsx(LucideCalendarDays,{css:({ ["color"] : "#10B981" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#475569", ["textTransform"] : "uppercase", ["letterSpacing"] : "0.05em" }),size:"2"},"Fecha de Inicio"),jsx(Text_bec958d9c772e1ec208ef75b69d2e70f,{},)))),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 1px 2px rgba(0, 0, 0, 0.05)", ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["background"] : "white", ["border"] : "1.5px solid #F59E0B30", ["borderRadius"] : "10px" })},jsx(LucideCalendarCheck,{css:({ ["color"] : "#F59E0B" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#475569", ["textTransform"] : "uppercase", ["letterSpacing"] : "0.05em" }),size:"2"},"Fecha de Cierre"),jsx(Text_ec799d111121146860dbd550af6dcd98,{},)))),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["boxShadow"] : "0 1px 2px rgba(0, 0, 0, 0.05)", ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["background"] : "white", ["border"] : "1.5px solid #6366F130", ["borderRadius"] : "10px" })},jsx(LucideCheckCheck,{css:({ ["color"] : "#6366F1" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#475569", ["textTransform"] : "uppercase", ["letterSpacing"] : "0.05em" }),size:"2"},"Estado de Tr\u00e1mite"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"4",weight:"bold"},"Activo")))))))))):(jsx(Fragment,{},))))
  )
}


function Fragment_c1fbd51d8727a7702bde83a1c8bd3999 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesGrid,{columns:({ ["initial"] : "1", ["sm"] : "2", ["md"] : "4" }),css:({ ["width"] : "100%", ["marginBottom"] : "8" }),gap:"5"},jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["transition"] : "transform 0.2s ease, box-shadow 0.2s ease", ["cursor"] : "default", ["width"] : "100%", ["&:hover"] : ({ ["transform"] : "translateY(-4px)", ["boxShadow"] : "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }) }),size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "42px", ["height"] : "42px", ["background"] : "linear-gradient(135deg, #6366F1, #4338CA)", ["borderRadius"] : "10px", ["boxShadow"] : "0 4px 12px rgba(0, 0, 0, 0.12)" })},jsx(LucideUsers,{css:({ ["color"] : "white" }),size:22},)),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesBadge,{color:"gray",css:({ ["color"] : "#1E293B", ["backgroundColor"] : "#F1F5F9", ["fontWeight"] : "bold" }),radius:"full",variant:"soft"},"Actualizado")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["color"] : "#1E293B" }),size:"3"},"Total Estudiantes"),jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A" }),size:"8",weight:"bold"},"reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.total_estudiantes_rx_state_")))),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["transition"] : "transform 0.2s ease, box-shadow 0.2s ease", ["cursor"] : "default", ["width"] : "100%", ["&:hover"] : ({ ["transform"] : "translateY(-4px)", ["boxShadow"] : "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }) }),size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "42px", ["height"] : "42px", ["background"] : "linear-gradient(135deg, #10B981, #059669)", ["borderRadius"] : "10px", ["boxShadow"] : "0 4px 12px rgba(0, 0, 0, 0.12)" })},jsx(LucideGraduationCap,{css:({ ["color"] : "white" }),size:22},)),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesBadge,{color:"gray",css:({ ["color"] : "#1E293B", ["backgroundColor"] : "#F1F5F9", ["fontWeight"] : "bold" }),radius:"full",variant:"soft"},"Actualizado")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["color"] : "#1E293B" }),size:"3"},"En Pasant\u00eda"),jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A" }),size:"8",weight:"bold"},"reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.estudiantes_en_pasantia_rx_state_")))),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["transition"] : "transform 0.2s ease, box-shadow 0.2s ease", ["cursor"] : "default", ["width"] : "100%", ["&:hover"] : ({ ["transform"] : "translateY(-4px)", ["boxShadow"] : "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }) }),size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "42px", ["height"] : "42px", ["background"] : "linear-gradient(135deg, #F59E0B, #D97706)", ["borderRadius"] : "10px", ["boxShadow"] : "0 4px 12px rgba(0, 0, 0, 0.12)" })},jsx(LucideUserMinus,{css:({ ["color"] : "white" }),size:22},)),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesBadge,{color:"gray",css:({ ["color"] : "#1E293B", ["backgroundColor"] : "#F1F5F9", ["fontWeight"] : "bold" }),radius:"full",variant:"soft"},"Actualizado")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["color"] : "#1E293B" }),size:"3"},"Sin Pasant\u00eda"),jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A" }),size:"8",weight:"bold"},"reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.estudiantes_sin_pasantia_rx_state_")))),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0", ["transition"] : "transform 0.2s ease, box-shadow 0.2s ease", ["cursor"] : "default", ["width"] : "100%", ["&:hover"] : ({ ["transform"] : "translateY(-4px)", ["boxShadow"] : "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }) }),size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "42px", ["height"] : "42px", ["background"] : "linear-gradient(135deg, #8B5CF6, #7C3AED)", ["borderRadius"] : "10px", ["boxShadow"] : "0 4px 12px rgba(0, 0, 0, 0.12)" })},jsx(LucideLibrary,{css:({ ["color"] : "white" }),size:22},)),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesBadge,{color:"gray",css:({ ["color"] : "#1E293B", ["backgroundColor"] : "#F1F5F9", ["fontWeight"] : "bold" }),radius:"full",variant:"soft"},"Actualizado")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["color"] : "#1E293B" }),size:"3"},"B\u00f3veda (Tesis)"),jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A" }),size:"8",weight:"bold"},"reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.total_tesis_rx_state_")))))))):(jsx(Fragment,{},))))
  )
}


function Flex_2ea152144b9f45163585c98e9bcbae8d () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"0"},Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.lista_con_pasantia_rx_state_ ?? [],((estudiante_rx_state_,index_1e83b839f68291457d5c2fc11870da98)=>(jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["borderBottom"] : "1px solid #F1F5F9" }),direction:"row",key:index_1e83b839f68291457d5c2fc11870da98,gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "28px", ["height"] : "28px", ["borderRadius"] : "full", ["background"] : "linear-gradient(135deg, #6366F1 0%, #4338CA 100%)" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontWeight"] : "bold", ["fontSize"] : "11px" })},estudiante_rx_state_?.["nombre"]?.at?.(0))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},((estudiante_rx_state_?.["nombre"]+" ")+estudiante_rx_state_?.["apellido"])),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "12px", ["color"] : "#475569", ["fontWeight"] : "500" })},estudiante_rx_state_?.["carrera"])),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesBadge,{color:"gray",css:({ ["color"] : "#1E293B", ["backgroundColor"] : "#F1F5F9", ["fontWeight"] : "bold" }),radius:"large",variant:"soft"},estudiante_rx_state_?.["cedula"]))))))
  )
}


function Flex_d340f0988311cad239faa415e2f92761 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"0"},Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.lista_sin_pasantia_rx_state_ ?? [],((estudiante_rx_state_,index_1e83b839f68291457d5c2fc11870da98)=>(jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["borderBottom"] : "1px solid #F1F5F9" }),direction:"row",key:index_1e83b839f68291457d5c2fc11870da98,gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "28px", ["height"] : "28px", ["borderRadius"] : "full", ["background"] : "linear-gradient(135deg, #6366F1 0%, #4338CA 100%)" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontWeight"] : "bold", ["fontSize"] : "11px" })},estudiante_rx_state_?.["nombre"]?.at?.(0))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "700", ["color"] : "#0F172A" })},((estudiante_rx_state_?.["nombre"]+" ")+estudiante_rx_state_?.["apellido"])),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "12px", ["color"] : "#475569", ["fontWeight"] : "500" })},estudiante_rx_state_?.["carrera"])),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesBadge,{color:"gray",css:({ ["color"] : "#1E293B", ["backgroundColor"] : "#F1F5F9", ["fontWeight"] : "bold" }),radius:"large",variant:"soft"},estudiante_rx_state_?.["cedula"]))))))
  )
}


function Fragment_20fd1d9295e6db1b61ac5e4781e4e2f8 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesGrid,{columns:({ ["initial"] : "1", ["sm"] : "1", ["md"] : "1", ["lg"] : "2" }),css:({ ["width"] : "100%", ["marginBottom"] : "8" }),gap:"6"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "24px", ["background"] : "white", ["borderRadius"] : "20px", ["border"] : "1px solid #E2E8F0", ["width"] : "100%", ["height"] : "380px", ["overflowY"] : "auto" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginBottom"] : "2" }),direction:"row",gap:"2"},jsx(LucideCircleCheck,{css:({ ["color"] : "#10B981" }),size:20},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#0F172A" })},"Estudiantes en Pasant\u00eda")),jsx(Flex_2ea152144b9f45163585c98e9bcbae8d,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "24px", ["background"] : "white", ["borderRadius"] : "20px", ["border"] : "1px solid #E2E8F0", ["width"] : "100%", ["height"] : "380px", ["overflowY"] : "auto" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginBottom"] : "2" }),direction:"row",gap:"2"},jsx(LucideCircleAlert,{css:({ ["color"] : "#F59E0B" }),size:20},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#0F172A" })},"Pendientes de Pasant\u00eda")),jsx(Flex_d340f0988311cad239faa415e2f92761,{},))))):(jsx(Fragment,{},))))
  )
}


function Flex_5e27acba0946e0c6cbf57198251f9042 () {
  const reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginBottom"] : "4" }),direction:"row",gap:"2"},jsx(LucideGraduationCap,{css:({ ["color"] : "#6366F1" }),size:18},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B" }),size:"3",weight:"bold"},"Carga Acad\u00e9mica por Carrera")),Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_estudiante____estado_estudiante.estudiantes_por_carrera_rx_state_ ?? [],((c_rx_state_,index_be891f611b4c894706a15db9a4fac9bd)=>(jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",key:index_be891f611b4c894706a15db9a4fac9bd,gap:"2"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B", ["fontWeight"] : "600" }),size:"2"},c_rx_state_?.["nombre"]),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"2",weight:"bold"},"c_rx_state_?.[\"cantidad\"] alumnos")),jsx(RadixThemesProgress,{color:"indigo",css:({ ["background"] : "#EDF2F7", ["height"] : "9px", ["borderRadius"] : "10px", ["width"] : "100%" }),value:c_rx_state_?.["progreso"]},))))))
  )
}


function Fragment_9647be137a69aaa52827b490e9cd9079 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0" }),size:"3"},jsx(Flex_5e27acba0946e0c6cbf57198251f9042,{},)))):(jsx(Fragment,{},))))
  )
}


function Flex_7a1407278f2e58a77872896118e48151 () {
  const reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"1"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginBottom"] : "4" }),direction:"row",gap:"2"},jsx(LucideShieldCheck,{css:({ ["color"] : "#8B5CF6" }),size:18},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B" }),size:"3",weight:"bold"},"Estado de la B\u00f3veda")),Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_boveda____estado_boveda.balance_privacidad_tesis_rx_state_ ?? [],((b_rx_state_,index_74c4fd1586f3bfa0f171b1f923279e0f)=>(jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingTop"] : "8px", ["paddingBottom"] : "8px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",key:index_74c4fd1586f3bfa0f171b1f923279e0f,gap:"3"},jsx(RadixThemesBox,{css:({ ["width"] : "12px", ["height"] : "12px", ["borderRadius"] : "full", ["background"] : b_rx_state_?.["color"] })},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B", ["fontWeight"] : "500" }),size:"2"},b_rx_state_?.["tipo"]),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"3",weight:"bold"},"b_rx_state_?.[\"valor\"]"))))),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155", ["marginTop"] : "4", ["fontWeight"] : "500" }),size:"1"},"El administrador puede ver ambos estados, los estudiantes solo las p\u00fablicas."))
  )
}


function Fragment_1eed454b4a3e8db2c135f9f241f6ecfc () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0" }),size:"3"},jsx(Flex_7a1407278f2e58a77872896118e48151,{},)))):(jsx(Fragment,{},))))
  )
}


function Button_8d2b63e25c12f76ffffcb885423cc278 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f581824db00a58da955bed4aa265f9be = useCallback(((_e) => (addEvents([(ReflexEvent("_redirect", ({ ["path"] : "/estudiantes", ["external"] : false, ["popup"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["color"] : "#312E81", ["backgroundColor"] : "#E0E7FF", ["border"] : "1px solid #C7D2FE", ["width"] : "100%", ["&:hover"] : ({ ["backgroundColor"] : "#C7D2FE" }) }),onClick:on_click_f581824db00a58da955bed4aa265f9be,size:"3",variant:"soft"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideUserPlus,{size:18},),jsx(RadixThemesText,{as:"p",weight:"bold"},"Inscribir Estudiante")))
  )
}


function Fragment_534d3e4edc8d527bfa41556b5c8d9386 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(Button_8d2b63e25c12f76ffffcb885423cc278,{},))):(jsx(Fragment,{},))))
  )
}


function Button_483bb8487ea0aa720f83277a3bb39557 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9cb3568822de490c983991a36776a1cd = useCallback(((_e) => (addEvents([(ReflexEvent("_redirect", ({ ["path"] : "/boveda", ["external"] : false, ["popup"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"violet",css:({ ["color"] : "#4C1D95", ["backgroundColor"] : "#EDE9FE", ["border"] : "1px solid #DDD6FE", ["width"] : "100%", ["&:hover"] : ({ ["backgroundColor"] : "#DDD6FE" }) }),onClick:on_click_9cb3568822de490c983991a36776a1cd,size:"3",variant:"soft"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideBookPlus,{size:18},),jsx(RadixThemesText,{as:"p",weight:"bold"},"Nueva Tesis")))
  )
}


function Fragment_ec90dd117fe1c1e57ee1c07e13ea050e () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(Button_483bb8487ea0aa720f83277a3bb39557,{},))):(jsx(Fragment,{},))))
  )
}


function Button_fe3a5f126b04beed94d1d00e648d63a5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9cb3568822de490c983991a36776a1cd = useCallback(((_e) => (addEvents([(ReflexEvent("_redirect", ({ ["path"] : "/boveda", ["external"] : false, ["popup"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["color"] : "#312E81", ["backgroundColor"] : "#E0E7FF", ["border"] : "1px solid #C7D2FE", ["width"] : "100%", ["&:hover"] : ({ ["backgroundColor"] : "#C7D2FE" }) }),onClick:on_click_9cb3568822de490c983991a36776a1cd,size:"3",variant:"soft"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideLibrary,{size:18},),jsx(RadixThemesText,{as:"p",weight:"bold"},"Explorar B\u00f3veda")))
  )
}


function Button_ff4d68de169e14f425f08b414bf5c877 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_06b1d9efefdc869936b845d445a21493 = useCallback(((_e) => (addEvents([(ReflexEvent("_redirect", ({ ["path"] : "/documentacion", ["external"] : false, ["popup"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"blue",css:({ ["color"] : "#1E3A8A", ["backgroundColor"] : "#DBEAFE", ["border"] : "1px solid #BFDBFE", ["width"] : "100%", ["&:hover"] : ({ ["backgroundColor"] : "#BFDBFE" }) }),onClick:on_click_06b1d9efefdc869936b845d445a21493,size:"3",variant:"soft"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideFileUp,{size:18},),jsx(RadixThemesText,{as:"p",weight:"bold"},"Subir Gu\u00eda PDF")))
  )
}


function Button_28625bd50070bd3741cb25577854d71c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_06b1d9efefdc869936b845d445a21493 = useCallback(((_e) => (addEvents([(ReflexEvent("_redirect", ({ ["path"] : "/documentacion", ["external"] : false, ["popup"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"blue",css:({ ["color"] : "#1E3A8A", ["backgroundColor"] : "#DBEAFE", ["border"] : "1px solid #BFDBFE", ["width"] : "100%", ["&:hover"] : ({ ["backgroundColor"] : "#BFDBFE" }) }),onClick:on_click_06b1d9efefdc869936b845d445a21493,size:"3",variant:"soft"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideFileText,{size:18},),jsx(RadixThemesText,{as:"p",weight:"bold"},"Ver Documentaci\u00f3n")))
  )
}


function Fragment_baa680fc1c87247d3f3db47c51d360d1 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(Button_ff4d68de169e14f425f08b414bf5c877,{},))):(jsx(Fragment,{},jsx(Button_28625bd50070bd3741cb25577854d71c,{},)))))
  )
}


function Button_87fee8891918d31e08368cad2326e036 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_04dd9c459a66139083f035c7d7fc0b86 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.generar_reporte_estudiantes", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"green",css:({ ["color"] : "#064E3B", ["backgroundColor"] : "#D1FAE5", ["border"] : "1px solid #A7F3D0", ["width"] : "100%", ["&:hover"] : ({ ["backgroundColor"] : "#A7F3D0" }) }),onClick:on_click_04dd9c459a66139083f035c7d7fc0b86,size:"3",variant:"soft"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideFileDown,{size:18},),jsx(RadixThemesText,{as:"p",weight:"bold"},"Reporte General")))
  )
}


function Fragment_07d4cb8b6eb0b0c3aa1e8554e7484cd2 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(Button_87fee8891918d31e08368cad2326e036,{},))):(jsx(Fragment,{},))))
  )
}


function Grid_5657af5b22a40cf6bbf8b47e812af010 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(RadixThemesGrid,{columns:((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.()) ? "3" : "1"),css:({ ["width"] : "100%" }),gap:"5"},jsx(Fragment_9647be137a69aaa52827b490e9cd9079,{},),jsx(Fragment_1eed454b4a3e8db2c135f9f241f6ecfc,{},),jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["border"] : "1px solid #E2E8F0" }),size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["marginBottom"] : "4", ["color"] : "#1E293B" }),size:"3",weight:"bold"},"Acciones de Gesti\u00f3n"),jsx(Fragment_534d3e4edc8d527bfa41556b5c8d9386,{},),jsx(Fragment_ec90dd117fe1c1e57ee1c07e13ea050e,{},),jsx(Button_fe3a5f126b04beed94d1d00e648d63a5,{},),jsx(Fragment_baa680fc1c87247d3f3db47c51d360d1,{},),jsx(Fragment_07d4cb8b6eb0b0c3aa1e8554e7484cd2,{},))))
  )
}


function Flex_0d65be29450c615d6a9411f9ee98d3d7 () {
  
                useEffect(() => {
                    ((...args) => {(addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.cargar_estudiantes", ({  }), ({  })))], args, ({  })));(addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___paginas___perfil____estado_perfil.cargar_datos_iniciales", ({  }), ({  })))], args, ({  })));(addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_boveda____estado_boveda.cargar_tesis", ({  }), ({  })))], args, ({  })));(addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_documento____estado_documento.cargar_documentos", ({  }), ({  })))], args, ({  })));})()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["maxWidth"] : "1200px", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto", ["@media screen and (min-width: 0)"] : ({ ["padding"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["padding"] : "20px" }), ["@media screen and (min-width: 48em)"] : ({ ["padding"] : "24px" }), ["@media screen and (min-width: 62em)"] : ({ ["padding"] : "24px" }) }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:({ ["initial"] : "start", ["sm"] : "center" }),css:({ ["width"] : "100%", ["marginBottom"] : "8" }),direction:({ ["initial"] : "column", ["sm"] : "row" }),justify:"between",gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(Heading_00f28144869d9a8a596e493af7f7f8fb,{},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155" }),size:"3"},"Panel central de control y seguimiento acad\u00e9mico")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Button_756d78ec4911131d5e7acb8ec49784db,{},)),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch", ["height"] : "1rem" })},),jsx(Fragment_fc788e881505eb38ef65bc8654162eeb,{},),jsx(Fragment_c1fbd51d8727a7702bde83a1c8bd3999,{},),jsx(Fragment_20fd1d9295e6db1b61ac5e4781e4e2f8,{},),jsx(Grid_5657af5b22a40cf6bbf8b47e812af010,{},))
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


function Fragment_5691566a71e9d185fc1239ca47c9311d () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)
const ref_layout_admin_root = useRef(null); refs["ref_layout_admin_root"] = ref_layout_admin_root;
const ref_layout_estudiante_root = useRef(null); refs["ref_layout_estudiante_root"] = ref_layout_estudiante_root;



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" }),id:"layout-admin-root",key:"layout-admin",ref:ref_layout_admin_root},jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["height"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesCard,{css:({ ["padding"] : "32px", ["maxWidth"] : "380px", ["borderRadius"] : "28px", ["boxShadow"] : "0 25px 50px -12px rgba(0, 0, 0, 0.15)", ["border"] : "1px solid #E2E8F0", ["background"] : "white" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"4"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "rgba(239, 68, 68, 0.08)", ["padding"] : "20px", ["borderRadius"] : "22px", ["marginBottom"] : "4" })},jsx(LucideMonitorOff,{css:({ ["color"] : "#EF4444" }),size:50},)),jsx(RadixThemesHeading,{css:({ ["color"] : "#1E293B", ["textAlign"] : "center" }),size:"5"},"Acceso Administrativo Restringido"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569", ["textAlign"] : "center", ["lineHeight"] : "1.6" }),size:"2",weight:"medium"},"Estimado Administrador, por motivos de seguridad y para garantizar una gesti\u00f3n \u00f3ptima de los datos, el panel de control est\u00e1 dise\u00f1ado para ser utilizado exclusivamente en dispositivos de pantalla grande."),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748B", ["textAlign"] : "center", ["italic"] : true }),size:"2"},"El uso de herramientas administrativas en pantallas peque\u00f1as puede generar errores visuales e incomodidad. Por favor, acceda desde su Laptop o PC de escritorio."),jsx(Button_5977b7afe692bf040c90733865003001,{},))))),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }) })},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesBox,{css:({ ["width"] : "285px", ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }), ["borderRight"] : "1px solid #E2E8F0", ["flexShrink"] : "0", ["overflow"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "100vh", ["background"] : "#FFFFFF" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px", ["paddingTop"] : "18px", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx("img",{alt:"Logo de la universidad",css:({ ["width"] : "46px", ["height"] : "46px", ["objectFit"] : "contain", ["borderRadius"] : "10px", ["background"] : "white", ["padding"] : "4px", ["boxShadow"] : "0 2px 12px rgba(79,70,229,0.18)", ["flexShrink"] : "0" }),src:"/logo.png"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["letterSpacing"] : "-0.4px", ["background"] : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["lineHeight"] : "1.2" })},"S.G.T."),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#1E293B", ["letterSpacing"] : "0.04em", ["textTransform"] : "uppercase", ["lineHeight"] : "1.4" })},"Sistema de Gesti\u00f3n de Tesis"))),jsx(Flex_1d4cc71c503ca3ed411f03c49144a23a,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "14px", ["paddingInlineEnd"] : "14px", ["paddingTop"] : "20px", ["padding_bottom"] : ({ ["initial"] : "100px", ["lg"] : "28px" }), ["borderTop"] : "1px solid #E2E8F0", ["background"] : "#F8FAFC" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "11px", ["background"] : "linear-gradient(135deg, #3B82F6, #8B5CF6)", ["boxShadow"] : "0 2px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(Text_6bebc9904e958838795e941bee057153,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1", ["minWidth"] : "0" }),direction:"column",gap:"0"},jsx(Text_08489eda476db536626a0341f88d4fed,{},),jsx(Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1,{},))),jsx(Button_146d50e4ab9bc4bfece71b04cb47c93e,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["flex"] : "1", ["overflowX"] : "hidden" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "12px 20px", ["background"] : "white", ["borderBottom"] : "1px solid #E2E8F0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) }),direction:"row",gap:"3"},jsx(Iconbutton_243cdc69ecd95808ec0f7766a4bb981e,{},),jsx("img",{css:({ ["width"] : "42px", ["height"] : "42px" }),src:"/logo.png"},),jsx(RadixThemesHeading,{css:({ ["color"] : "#3B82F6" }),size:"4"},"S.G.T."),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_b2690b771256b22e5d2daba59f06315f,{},)),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "24px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingTop"] : "28px", ["paddingInlineStart"] : "24px", ["paddingInlineEnd"] : "24px" }), ["paddingBottom"] : "40px", ["width"] : "100%", ["flex"] : "1", ["overflowX"] : "hidden" })},jsx(Flex_0d65be29450c615d6a9411f9ee98d3d7,{},))),jsx(Fragment_9fdd3a6df977cd8529074381f51c11ae,{},)))))):(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" }),id:"layout-estudiante-root",key:"layout-student",ref:ref_layout_estudiante_root},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesBox,{css:({ ["width"] : "285px", ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }), ["borderRight"] : "1px solid #E2E8F0", ["flexShrink"] : "0", ["overflow"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "100vh", ["background"] : "#FFFFFF" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px", ["paddingTop"] : "18px", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx("img",{alt:"Logo de la universidad",css:({ ["width"] : "46px", ["height"] : "46px", ["objectFit"] : "contain", ["borderRadius"] : "10px", ["background"] : "white", ["padding"] : "4px", ["boxShadow"] : "0 2px 12px rgba(79,70,229,0.18)", ["flexShrink"] : "0" }),src:"/logo.png"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["letterSpacing"] : "-0.4px", ["background"] : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["lineHeight"] : "1.2" })},"S.G.T."),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#1E293B", ["letterSpacing"] : "0.04em", ["textTransform"] : "uppercase", ["lineHeight"] : "1.4" })},"Sistema de Gesti\u00f3n de Tesis"))),jsx(Flex_1d4cc71c503ca3ed411f03c49144a23a,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "14px", ["paddingInlineEnd"] : "14px", ["paddingTop"] : "20px", ["padding_bottom"] : ({ ["initial"] : "100px", ["lg"] : "28px" }), ["borderTop"] : "1px solid #E2E8F0", ["background"] : "#F8FAFC" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "11px", ["background"] : "linear-gradient(135deg, #3B82F6, #8B5CF6)", ["boxShadow"] : "0 2px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(Text_6bebc9904e958838795e941bee057153,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1", ["minWidth"] : "0" }),direction:"column",gap:"0"},jsx(Text_08489eda476db536626a0341f88d4fed,{},),jsx(Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1,{},))),jsx(Button_146d50e4ab9bc4bfece71b04cb47c93e,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["flex"] : "1", ["overflowX"] : "hidden" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "12px 20px", ["background"] : "white", ["borderBottom"] : "1px solid #E2E8F0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) }),direction:"row",gap:"3"},jsx(Iconbutton_243cdc69ecd95808ec0f7766a4bb981e,{},),jsx("img",{css:({ ["width"] : "42px", ["height"] : "42px" }),src:"/logo.png"},),jsx(RadixThemesHeading,{css:({ ["color"] : "#3B82F6" }),size:"4"},"S.G.T."),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_b2690b771256b22e5d2daba59f06315f,{},)),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "24px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingTop"] : "28px", ["paddingInlineStart"] : "24px", ["paddingInlineEnd"] : "24px" }), ["paddingBottom"] : "40px", ["width"] : "100%", ["flex"] : "1", ["overflowX"] : "hidden" })},jsx(Flex_0d65be29450c615d6a9411f9ee98d3d7,{},))),jsx(Fragment_9fdd3a6df977cd8529074381f51c11ae,{},)))))))
  )
}


function Flex_2163cc7078a85b3a9860d8f4ff26eb01 () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion.verificar_acceso", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100vw", ["height"] : "100vh", ["backgroundColor"] : "white" })},jsx(RadixThemesSpinner,{css:({ ["color"] : "indigo" }),size:"3"},))
  )
}


function Fragment_2fe61e11d292aecb0921e3531e679e1a () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},(isTrue(reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.usuario_rx_state_)?(jsx(Fragment_5691566a71e9d185fc1239ca47c9311d,{},)):(jsx(Fragment,{},jsx(Flex_2163cc7078a85b3a9860d8f4ff26eb01,{},)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesTheme,{css:{...theme.styles.global[':root'], ...theme.styles.global.body},hasBackground:true},jsx(Fragment_2fe61e11d292aecb0921e3531e679e1a,{},)),jsx("title",{},"SistemaTesis | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}