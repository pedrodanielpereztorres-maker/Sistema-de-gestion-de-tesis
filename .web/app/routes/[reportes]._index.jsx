import {Fragment,useCallback,useContext,useEffect,useRef} from "react"
import {Badge as RadixThemesBadge,Box as RadixThemesBox,Button as RadixThemesButton,Card as RadixThemesCard,Flex as RadixThemesFlex,Grid as RadixThemesGrid,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Link as RadixThemesLink,Progress as RadixThemesProgress,Separator as RadixThemesSeparator,Text as RadixThemesText,Theme as RadixThemesTheme} from "@radix-ui/themes"
import theme from "$/utils/theme"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,applyEventActions,isTrue,refs} from "$/utils/state"
import {BarChartBig as LucideBarChartBig,Book as LucideBook,Building as LucideBuilding,Building2 as LucideBuilding2,CircleCheck as LucideCircleCheck,CircleUserRound as LucideCircleUserRound,Clock as LucideClock,CloudDownload as LucideCloudDownload,Download as LucideDownload,FileSpreadsheet as LucideFileSpreadsheet,FileText as LucideFileText,GraduationCap as LucideGraduationCap,LayoutDashboard as LucideLayoutDashboard,Library as LucideLibrary,LogOut as LucideLogOut,Mail as LucideMail,Menu as LucideMenu,MonitorOff as LucideMonitorOff,Phone as LucidePhone,Plus as LucidePlus,Settings2 as LucideSettings2,User as LucideUser,UserCheck as LucideUserCheck,Users as LucideUsers,X as LucideX} from "lucide-react"
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


function Button_a3a3e6df44be65efe97368e995191b7e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_04dd9c459a66139083f035c7d7fc0b86 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.generar_reporte_estudiantes", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["cursor"] : "pointer", ["boxShadow"] : "0 4px 12px rgba(99,102,241,0.3)" }),onClick:on_click_04dd9c459a66139083f035c7d7fc0b86,size:"3",variant:"solid"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucidePlus,{size:18},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700" })},"Descargar Estudiantes (CSV)")))
  )
}


function Button_054d9d8a8142eaff491919aa60e2821b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_43da56915cb691fb820fa9e40ca313b7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_reportes____estado_reportes.exportar_empresas_excel", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"green",css:({ ["width"] : "100%", ["cursor"] : "pointer", ["marginTop"] : "2" }),onClick:on_click_43da56915cb691fb820fa9e40ca313b7,variant:"soft"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideDownload,{size:16},),jsx(RadixThemesText,{as:"p"},"Generar Archivo")))
  )
}


function Button_fb8096129a622d638173244e0691a630 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_e0df7430f492121ff650c85bb7f24f3d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_reportes____estado_reportes.exportar_empresas_pdf", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"red",css:({ ["width"] : "100%", ["cursor"] : "pointer", ["marginTop"] : "2" }),onClick:on_click_e0df7430f492121ff650c85bb7f24f3d,variant:"soft"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideDownload,{size:16},),jsx(RadixThemesText,{as:"p"},"Generar Archivo")))
  )
}


function Button_fb7a9dbbddf62de3141983c163df6bf0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_04dd9c459a66139083f035c7d7fc0b86 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_estudiante____estado_estudiante.generar_reporte_estudiantes", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["width"] : "100%", ["cursor"] : "pointer", ["marginTop"] : "2" }),onClick:on_click_04dd9c459a66139083f035c7d7fc0b86,variant:"soft"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideDownload,{size:16},),jsx(RadixThemesText,{as:"p"},"Generar Archivo")))
  )
}


function Button_b1c650c15eeb86423b06ee0fe844f11e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_64b4c62240a56018d8c3fa6736049450 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_reportes____estado_reportes.exportar_tesis_csv", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"amber",css:({ ["width"] : "100%", ["cursor"] : "pointer", ["marginTop"] : "2" }),onClick:on_click_64b4c62240a56018d8c3fa6736049450,variant:"soft"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideDownload,{size:16},),jsx(RadixThemesText,{as:"p"},"Generar Archivo")))
  )
}


function Heading_991e3aa00c1315b2b68f5d679084607a () {
  const reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes)



  return (
    jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A" }),size:"7",weight:"bold"},(JSON.stringify(reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes.resumen_global_rx_state_?.["total_estudiantes"])))
  )
}


function Heading_61672c646b3e9faae9304d9c25f55abf () {
  const reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes)



  return (
    jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A" }),size:"7",weight:"bold"},(JSON.stringify(reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes.resumen_global_rx_state_?.["con_pasantia"])))
  )
}


function Heading_c31530c00200cb1a051221f7e616e991 () {
  const reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes)



  return (
    jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A" }),size:"7",weight:"bold"},(JSON.stringify(reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes.resumen_global_rx_state_?.["sin_pasantia"])))
  )
}


function Heading_ac9befd10bb90f767afa0e8e946175c3 () {
  const reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes)



  return (
    jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A" }),size:"7",weight:"bold"},(JSON.stringify(reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes.resumen_global_rx_state_?.["total_tesis"])))
  )
}


function Flex_5d7037fbe2193b49adbc4d12313c18e5 () {
  const reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"1"},Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes.estadisticas_carreras_rx_state_ ?? [],((item_rx_state_,index_8bb062406b47dfbc1fd1e833144c02f0)=>(jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingTop"] : "8px", ["paddingBottom"] : "8px", ["borderBottom"] : "1px solid #CBD5E1" }),direction:"row",key:index_8bb062406b47dfbc1fd1e833144c02f0,gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["flex"] : "1", ["color"] : "#334155" }),size:"2"},item_rx_state_?.["nombre"]),jsx(RadixThemesProgress,{color:"indigo",css:({ ["width"] : "50%" }),value:item_rx_state_?.["progreso"]},),jsx(RadixThemesText,{as:"p",css:({ ["width"] : "30px", ["textAlign"] : "right" }),size:"2",weight:"bold"},(JSON.stringify(item_rx_state_?.["cantidad"]))))))))
  )
}


function Flex_3edf7701f2ed74860482c0b9e9f12402 () {
  const reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"1"},Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes.mejores_tutores_rx_state_ ?? [],((item_rx_state_,index_563849c657bc4ac8128f96fe56e3ec8e)=>(jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["borderBottom"] : "1px solid #CBD5E1" }),direction:"row",key:index_563849c657bc4ac8128f96fe56e3ec8e,gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "24px", ["height"] : "24px", ["background"] : "#F1F5F9", ["borderRadius"] : "full" })},jsx(LucideUser,{size:14},)),jsx(RadixThemesText,{as:"p",css:({ ["flex"] : "1", ["color"] : "#334155" }),size:"2"},item_rx_state_?.["nombre"]),jsx(RadixThemesBadge,{color:"blue"},((JSON.stringify(item_rx_state_?.["cantidad"]))+" alumnos")))))))
  )
}


function Grid_3c11ec2168d0282d86cc7e234e818501 () {
  const reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes)



  return (
    jsx(RadixThemesGrid,{columns:({ ["initial"] : "1", ["sm"] : "2", ["md"] : "3", ["lg"] : "4" }),css:({ ["width"] : "100%" }),gap:"4"},Array.prototype.map.call(reflex___state____state__sistema_tesis___estado___estado_reportes____estado_reportes.mejores_empresas_rx_state_ ?? [],((item_rx_state_,index_4fa167d5ea3a05f20a2cfc3b2da57a9d)=>(jsx(RadixThemesCard,{key:index_4fa167d5ea3a05f20a2cfc3b2da57a9d,size:"2"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(LucideBuilding,{css:({ ["color"] : "#6366F1" }),size:18},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A", ["noOfLines"] : 1 }),size:"3",weight:"bold"},item_rx_state_?.["nombre"])),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"1"},jsx(LucideMail,{css:({ ["color"] : "#64748B" }),size:12},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748B" }),size:"1"},item_rx_state_?.["correo"])),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"1"},jsx(LucidePhone,{css:({ ["color"] : "#64748B" }),size:12},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748B" }),size:"1"},item_rx_state_?.["telefono"]))),jsx(RadixThemesBadge,{color:"indigo",radius:"full",variant:"surface"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideUsers,{size:14},),jsx(RadixThemesText,{as:"p"},((JSON.stringify(item_rx_state_?.["cantidad"]))+" pasantes"))))))))))
  )
}


function Box_d88812fc29041b0f70a812b4d9040a5f () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_reportes____estado_reportes.cargar_reportes", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesBox,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["@media screen and (min-width: 0)"] : ({ ["padding"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["padding"] : "20px" }), ["@media screen and (min-width: 48em)"] : ({ ["padding"] : "24px" }), ["@media screen and (min-width: 62em)"] : ({ ["padding"] : "24px" }), ["width"] : "100%" }),direction:"column",gap:"6"},jsx(RadixThemesFlex,{align:({ ["initial"] : "start", ["sm"] : "center" }),css:({ ["width"] : "100%", ["paddingBottom"] : "16px", ["borderBottom"] : "1px solid #E2E8F0", ["marginBottom"] : "28px" }),direction:({ ["initial"] : "column", ["sm"] : "row" }),justify:"between",gap:({ ["initial"] : "4", ["sm"] : "0" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesHeading,{css:({ ["color"] : "#0F172A", ["letterSpacing"] : "-0.02em" }),size:({ ["initial"] : "7", ["sm"] : "8" }),weight:"bold"},"Anal\u00edtica y Reportes"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B", ["fontSize"] : "13px", ["fontWeight"] : "500" })},"Panel de gesti\u00f3n y monitoreo acad\u00e9mico")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Fragment,{},(true?(jsx(Fragment,{},jsx(Button_a3a3e6df44be65efe97368e995191b7e,{},))):(jsx(Fragment,{},))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "2" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "36px", ["height"] : "36px", ["background"] : "#6366F1", ["borderRadius"] : "8px" })},jsx(LucideCloudDownload,{css:({ ["color"] : "white" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#0F172A" }),size:"4"},"Centro de Exportaci\u00f3n de Datos"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155" }),size:"2"},"Genera archivos f\u00edsicos para tr\u00e1mites administrativos.")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesBadge,{variant:"outline"},"Corte: 22/05/2026")),jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "24px", ["background"] : "white", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "16px", ["boxShadow"] : "0 4px 6px -1px rgba(0,0,0,0.05)" })},jsx(RadixThemesGrid,{columns:({ ["initial"] : "1", ["sm"] : "2", ["md"] : "4" }),css:({ ["width"] : "100%" }),gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "16px", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px", ["background"] : "#F8FAFC" }),direction:"column",gap:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "36px", ["height"] : "36px", ["borderRadius"] : "10px", ["background"] : "var(--green-9)" })},jsx(LucideFileSpreadsheet,{css:({ ["color"] : "white" }),size:18},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"2",weight:"bold"},"Empresas (CSV)"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155", ["lineHeight"] : "1.2" }),size:"1"},"Listado detallado de aliados estrat\u00e9gicos."))),jsx(Button_054d9d8a8142eaff491919aa60e2821b,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "16px", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px", ["background"] : "#F8FAFC" }),direction:"column",gap:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "36px", ["height"] : "36px", ["borderRadius"] : "10px", ["background"] : "var(--red-9)" })},jsx(LucideFileText,{css:({ ["color"] : "white" }),size:18},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"2",weight:"bold"},"Empresas (PDF)"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155", ["lineHeight"] : "1.2" }),size:"1"},"Formato PDF listo para imprimir."))),jsx(Button_fb8096129a622d638173244e0691a630,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "16px", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px", ["background"] : "#F8FAFC" }),direction:"column",gap:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "36px", ["height"] : "36px", ["borderRadius"] : "10px", ["background"] : "var(--indigo-9)" })},jsx(LucideUsers,{css:({ ["color"] : "white" }),size:18},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"2",weight:"bold"},"Estudiantes (CSV)"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155", ["lineHeight"] : "1.2" }),size:"1"},"Estado actual de todos los alumnos."))),jsx(Button_fb7a9dbbddf62de3141983c163df6bf0,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "16px", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px", ["background"] : "#F8FAFC" }),direction:"column",gap:"2"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "36px", ["height"] : "36px", ["borderRadius"] : "10px", ["background"] : "var(--amber-9)" })},jsx(LucideLibrary,{css:({ ["color"] : "white" }),size:18},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A" }),size:"2",weight:"bold"},"B\u00f3veda (CSV)"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155", ["lineHeight"] : "1.2" }),size:"1"},"Listado de trabajos de grado registrados."))),jsx(Button_b1c650c15eeb86423b06ee0fe844f11e,{},))))),jsx(RadixThemesGrid,{columns:({ ["initial"] : "1", ["sm"] : "2", ["md"] : "4" }),css:({ ["width"] : "100%", ["marginBottom"] : "6" }),gap:"4"},jsx(RadixThemesCard,{css:({ ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"start",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "48px", ["height"] : "48px", ["borderRadius"] : "12px", ["background"] : "var(--indigo-3)", ["color"] : "var(--indigo-9)", ["marginRight"] : "4" })},jsx(LucideUsers,{size:24},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155" }),size:"2",weight:"medium"},"Estudiantes Totales"),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"2"},jsx(Heading_991e3aa00c1315b2b68f5d679084607a,{},),jsx(RadixThemesBadge,{color:"indigo",radius:"full",size:"1",variant:"soft"},"Activo"))))),jsx(RadixThemesCard,{css:({ ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"start",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "48px", ["height"] : "48px", ["borderRadius"] : "12px", ["background"] : "var(--green-3)", ["color"] : "var(--green-9)", ["marginRight"] : "4" })},jsx(LucideCircleCheck,{size:24},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155" }),size:"2",weight:"medium"},"En Pasant\u00eda"),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"2"},jsx(Heading_61672c646b3e9faae9304d9c25f55abf,{},),jsx(RadixThemesBadge,{color:"green",radius:"full",size:"1",variant:"soft"},"Activo"))))),jsx(RadixThemesCard,{css:({ ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"start",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "48px", ["height"] : "48px", ["borderRadius"] : "12px", ["background"] : "var(--amber-3)", ["color"] : "var(--amber-9)", ["marginRight"] : "4" })},jsx(LucideClock,{size:24},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155" }),size:"2",weight:"medium"},"Pendientes"),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"2"},jsx(Heading_c31530c00200cb1a051221f7e616e991,{},),jsx(RadixThemesBadge,{color:"amber",radius:"full",size:"1",variant:"soft"},"Activo"))))),jsx(RadixThemesCard,{css:({ ["width"] : "100%" }),size:"2"},jsx(RadixThemesFlex,{align:"start",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "48px", ["height"] : "48px", ["borderRadius"] : "12px", ["background"] : "var(--blue-3)", ["color"] : "var(--blue-9)", ["marginRight"] : "4" })},jsx(LucideBook,{size:24},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155" }),size:"2",weight:"medium"},"Tesis Registradas"),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"2"},jsx(Heading_ac9befd10bb90f767afa0e8e946175c3,{},),jsx(RadixThemesBadge,{color:"blue",radius:"full",size:"1",variant:"soft"},"Activo")))))),jsx(RadixThemesGrid,{columns:({ ["initial"] : "1", ["lg"] : "2" }),css:({ ["width"] : "100%", ["marginBottom"] : "6" }),gap:"6"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "2" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "36px", ["height"] : "36px", ["background"] : "#6366F1", ["borderRadius"] : "8px" })},jsx(LucideGraduationCap,{css:({ ["color"] : "white" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#0F172A" }),size:"4"},"Distribuci\u00f3n por Carreras"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155" }),size:"2"},"Visualizaci\u00f3n del volumen de estudiantes activos por cada programa acad\u00e9mico.")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesBadge,{variant:"outline"},"Corte: 22/05/2026")),jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "24px", ["background"] : "white", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "16px", ["boxShadow"] : "0 4px 6px -1px rgba(0,0,0,0.05)" })},jsx(Flex_5d7037fbe2193b49adbc4d12313c18e5,{},))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "2" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "36px", ["height"] : "36px", ["background"] : "#6366F1", ["borderRadius"] : "8px" })},jsx(LucideUserCheck,{css:({ ["color"] : "white" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#0F172A" }),size:"4"},"Top 5 Tutores Acad\u00e9micos"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155" }),size:"2"},"Ranking de tutores con mayor carga de tutor\u00edas en el periodo actual.")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesBadge,{variant:"outline"},"Corte: 22/05/2026")),jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "24px", ["background"] : "white", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "16px", ["boxShadow"] : "0 4px 6px -1px rgba(0,0,0,0.05)" })},jsx(Flex_3edf7701f2ed74860482c0b9e9f12402,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["marginBottom"] : "2" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "36px", ["height"] : "36px", ["background"] : "#6366F1", ["borderRadius"] : "8px" })},jsx(LucideBuilding2,{css:({ ["color"] : "white" }),size:20},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "800", ["color"] : "#0F172A" }),size:"4"},"Ranking de Vinculaci\u00f3n Empresarial"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#334155" }),size:"2"},"Entidades receptoras ordenadas por n\u00famero de pasantes asignados.")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesBadge,{variant:"outline"},"Corte: 22/05/2026")),jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["padding"] : "24px", ["background"] : "white", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "16px", ["boxShadow"] : "0 4px 6px -1px rgba(0,0,0,0.05)" })},jsx(Grid_3c11ec2168d0282d86cc7e234e818501,{},)))))
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


function Fragment_04bf386e88e3f53b5f7f5e1c9f560836 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)
const ref_layout_admin_root = useRef(null); refs["ref_layout_admin_root"] = ref_layout_admin_root;
const ref_layout_estudiante_root = useRef(null); refs["ref_layout_estudiante_root"] = ref_layout_estudiante_root;



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" }),id:"layout-admin-root",key:"layout-admin",ref:ref_layout_admin_root},jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["height"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesCard,{css:({ ["padding"] : "32px", ["maxWidth"] : "380px", ["borderRadius"] : "28px", ["boxShadow"] : "0 25px 50px -12px rgba(0, 0, 0, 0.15)", ["border"] : "1px solid #E2E8F0", ["background"] : "white" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"4"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "rgba(239, 68, 68, 0.08)", ["padding"] : "20px", ["borderRadius"] : "22px", ["marginBottom"] : "4" })},jsx(LucideMonitorOff,{css:({ ["color"] : "#EF4444" }),size:50},)),jsx(RadixThemesHeading,{css:({ ["color"] : "#1E293B", ["textAlign"] : "center" }),size:"5"},"Acceso Administrativo Restringido"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569", ["textAlign"] : "center", ["lineHeight"] : "1.6" }),size:"2",weight:"medium"},"Estimado Administrador, por motivos de seguridad y para garantizar una gesti\u00f3n \u00f3ptima de los datos, el panel de control est\u00e1 dise\u00f1ado para ser utilizado exclusivamente en dispositivos de pantalla grande."),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748B", ["textAlign"] : "center", ["italic"] : true }),size:"2"},"El uso de herramientas administrativas en pantallas peque\u00f1as puede generar errores visuales e incomodidad. Por favor, acceda desde su Laptop o PC de escritorio."),jsx(Button_5977b7afe692bf040c90733865003001,{},))))),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }) })},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesBox,{css:({ ["width"] : "285px", ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }), ["borderRight"] : "1px solid #E2E8F0", ["flexShrink"] : "0", ["overflow"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "100vh", ["background"] : "#FFFFFF" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px", ["paddingTop"] : "18px", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx("img",{alt:"Logo de la universidad",css:({ ["width"] : "46px", ["height"] : "46px", ["objectFit"] : "contain", ["borderRadius"] : "10px", ["background"] : "white", ["padding"] : "4px", ["boxShadow"] : "0 2px 12px rgba(79,70,229,0.18)", ["flexShrink"] : "0" }),src:"/logo.png"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["letterSpacing"] : "-0.4px", ["background"] : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["lineHeight"] : "1.2" })},"S.G.T."),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#1E293B", ["letterSpacing"] : "0.04em", ["textTransform"] : "uppercase", ["lineHeight"] : "1.4" })},"Sistema de Gesti\u00f3n de Tesis"))),jsx(Flex_1d4cc71c503ca3ed411f03c49144a23a,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "14px", ["paddingInlineEnd"] : "14px", ["paddingTop"] : "20px", ["padding_bottom"] : ({ ["initial"] : "100px", ["lg"] : "28px" }), ["borderTop"] : "1px solid #E2E8F0", ["background"] : "#F8FAFC" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "11px", ["background"] : "linear-gradient(135deg, #3B82F6, #8B5CF6)", ["boxShadow"] : "0 2px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(Text_6bebc9904e958838795e941bee057153,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1", ["minWidth"] : "0" }),direction:"column",gap:"0"},jsx(Text_08489eda476db536626a0341f88d4fed,{},),jsx(Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1,{},))),jsx(Button_146d50e4ab9bc4bfece71b04cb47c93e,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["flex"] : "1", ["overflowX"] : "hidden" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "12px 20px", ["background"] : "white", ["borderBottom"] : "1px solid #E2E8F0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) }),direction:"row",gap:"3"},jsx(Iconbutton_243cdc69ecd95808ec0f7766a4bb981e,{},),jsx("img",{css:({ ["width"] : "42px", ["height"] : "42px" }),src:"/logo.png"},),jsx(RadixThemesHeading,{css:({ ["color"] : "#3B82F6" }),size:"4"},"S.G.T."),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_b2690b771256b22e5d2daba59f06315f,{},)),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "24px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingTop"] : "28px", ["paddingInlineStart"] : "24px", ["paddingInlineEnd"] : "24px" }), ["paddingBottom"] : "40px", ["width"] : "100%", ["flex"] : "1", ["overflowX"] : "hidden" })},jsx(Box_d88812fc29041b0f70a812b4d9040a5f,{},))),jsx(Fragment_9fdd3a6df977cd8529074381f51c11ae,{},)))))):(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" }),id:"layout-estudiante-root",key:"layout-student",ref:ref_layout_estudiante_root},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "#F8FAFC" })},jsx(RadixThemesBox,{css:({ ["width"] : "285px", ["height"] : "100vh", ["position"] : "sticky", ["top"] : "0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "flex" }), ["borderRight"] : "1px solid #E2E8F0", ["flexShrink"] : "0", ["overflow"] : "hidden" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "100vh", ["background"] : "#FFFFFF" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px", ["paddingTop"] : "18px", ["paddingBottom"] : "18px", ["borderBottom"] : "1px solid #E2E8F0" }),direction:"row",gap:"3"},jsx("img",{alt:"Logo de la universidad",css:({ ["width"] : "46px", ["height"] : "46px", ["objectFit"] : "contain", ["borderRadius"] : "10px", ["background"] : "white", ["padding"] : "4px", ["boxShadow"] : "0 2px 12px rgba(79,70,229,0.18)", ["flexShrink"] : "0" }),src:"/logo.png"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"0"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "800", ["letterSpacing"] : "-0.4px", ["background"] : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["lineHeight"] : "1.2" })},"S.G.T."),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#1E293B", ["letterSpacing"] : "0.04em", ["textTransform"] : "uppercase", ["lineHeight"] : "1.4" })},"Sistema de Gesti\u00f3n de Tesis"))),jsx(Flex_1d4cc71c503ca3ed411f03c49144a23a,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "14px", ["paddingInlineEnd"] : "14px", ["paddingTop"] : "20px", ["padding_bottom"] : ({ ["initial"] : "100px", ["lg"] : "28px" }), ["borderTop"] : "1px solid #E2E8F0", ["background"] : "#F8FAFC" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "40px", ["height"] : "40px", ["borderRadius"] : "11px", ["background"] : "linear-gradient(135deg, #3B82F6, #8B5CF6)", ["boxShadow"] : "0 2px 10px rgba(99,102,241,0.30)", ["flexShrink"] : "0" })},jsx(Text_6bebc9904e958838795e941bee057153,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flex"] : "1", ["minWidth"] : "0" }),direction:"column",gap:"0"},jsx(Text_08489eda476db536626a0341f88d4fed,{},),jsx(Text_18d07c8e15b30b5a1d7a4b63d5cf7fb1,{},))),jsx(Button_146d50e4ab9bc4bfece71b04cb47c93e,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["flex"] : "1", ["overflowX"] : "hidden" }),direction:"column",gap:"0"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "12px 20px", ["background"] : "white", ["borderBottom"] : "1px solid #E2E8F0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) }),direction:"row",gap:"3"},jsx(Iconbutton_243cdc69ecd95808ec0f7766a4bb981e,{},),jsx("img",{css:({ ["width"] : "42px", ["height"] : "42px" }),src:"/logo.png"},),jsx(RadixThemesHeading,{css:({ ["color"] : "#3B82F6" }),size:"4"},"S.G.T."),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Iconbutton_b2690b771256b22e5d2daba59f06315f,{},)),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "16px", ["paddingInlineEnd"] : "16px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "24px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingTop"] : "28px", ["paddingInlineStart"] : "24px", ["paddingInlineEnd"] : "24px" }), ["paddingBottom"] : "40px", ["width"] : "100%", ["flex"] : "1", ["overflowX"] : "hidden" })},jsx(Box_d88812fc29041b0f70a812b4d9040a5f,{},))),jsx(Fragment_9fdd3a6df977cd8529074381f51c11ae,{},)))))))
  )
}


function Fragment_b825a7ad281a18e7e77cf785539d4dbc () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(Fragment,{},((reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.rol_usuario_rx_state_?.valueOf?.() === "administrador"?.valueOf?.())?(jsx(Fragment_04bf386e88e3f53b5f7f5e1c9f560836,{},)):(jsx(Fragment,{},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100vw", ["height"] : "100vh" })},jsx(RadixThemesHeading,{},"Acceso denegado"))))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesTheme,{css:{...theme.styles.global[':root'], ...theme.styles.global.body},hasBackground:true},jsx(Fragment_b825a7ad281a18e7e77cf785539d4dbc,{},)),jsx("title",{},"SistemaTesis | Reportes"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}