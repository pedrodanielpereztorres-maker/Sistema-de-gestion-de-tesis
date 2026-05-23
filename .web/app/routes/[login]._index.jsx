import {Fragment,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Card as RadixThemesCard,Flex as RadixThemesFlex,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Text as RadixThemesText,TextField as RadixThemesTextField,Theme as RadixThemesTheme} from "@radix-ui/themes"
import theme from "$/utils/theme"
import {GraduationCap as LucideGraduationCap} from "lucide-react"
import {DynamicIcon} from "lucide-react/dynamic.mjs"
import DebounceInput from "react-debounce-input"
import {ColorModeContext,EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,applyEventActions,isNotNullOrUndefined,refs} from "$/utils/state"
import {Toaster,toast} from "sonner"
import {jsx} from "@emotion/react"




function Debounceinput_c4cdb34fb56c373a7319da6b6cfabc06 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2c7ce04fbb8da5f2c296789fe17247d8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion.fijar_entrada_usuario", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["background"] : "white", ["border"] : "1.6px solid #94A3B8", ["color"] : "black", ["fontSize"] : "15px", ["fontWeight"] : "bold", ["boxShadow"] : "inset 0 1px 3px rgba(15,23,42,0.12)", ["&::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["width"] : "100%", ["&:focus"] : ({ ["borderColor"] : "#4338CA", ["boxShadow"] : "0 0 0 3px rgba(99,102,241,0.22)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#6366F1" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_2c7ce04fbb8da5f2c296789fe17247d8,placeholder:"ejemplo@correo.com",size:"3",value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.entrada_usuario_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.entrada_usuario_rx_state_ : ""),variant:"classic"},)
  )
}


function Debounceinput_490c5c797224ff5a6ce11bdfd9bf9064 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_efbb482720e11679c99d424b8e371b0d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion.fijar_entrada_contrasena", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["background"] : "white", ["border"] : "1.6px solid #94A3B8", ["color"] : "black", ["fontSize"] : "15px", ["fontWeight"] : "bold", ["paddingRight"] : "45px", ["boxShadow"] : "inset 0 1px 3px rgba(15,23,42,0.12)", ["&::placeholder"] : ({ ["color"] : "#000000", ["opacity"] : "1", ["fontWeight"] : "bold" }), ["width"] : "100%", ["&:focus"] : ({ ["borderColor"] : "#4338CA", ["boxShadow"] : "0 0 0 3px rgba(99,102,241,0.22)", ["outline"] : "none" }), ["&:hover"] : ({ ["borderColor"] : "#6366F1" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_efbb482720e11679c99d424b8e371b0d,placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",size:"3",type:(reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.mostrar_contrasena_rx_state_ ? "text" : "password"),value:(isNotNullOrUndefined(reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.entrada_contrasena_rx_state_) ? reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.entrada_contrasena_rx_state_ : ""),variant:"classic"},)
  )
}


function Dynamicicon_037e54241b770b6f36d81d1daaf10307 () {
  const reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion = useContext(StateContexts.reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion)



  return (
    jsx(DynamicIcon,{name:(reflex___state____state__sistema_tesis___estado___estado_autenticacion____estado_autenticacion.mostrar_contrasena_rx_state_ ? "eye-off" : "eye").replaceAll("_", "-"),size:18},)
  )
}


function Iconbutton_925ba3de9e2e805885907f4f11a61bc3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_03150cf534150ed67bdc29344e26e2c1 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion.alternar_mostrar_contrasena", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{color:"gray",css:({ ["padding"] : "6px", ["position"] : "absolute", ["right"] : "10px", ["top"] : "0", ["height"] : "100%", ["display"] : "flex", ["alignItems"] : "center", ["zIndex"] : "10", ["cursor"] : "pointer", ["&:hover"] : ({ ["background"] : "transparent", ["opacity"] : "0.7" }) }),onClick:on_click_03150cf534150ed67bdc29344e26e2c1,variant:"ghost"},jsx(Dynamicicon_037e54241b770b6f36d81d1daaf10307,{},))
  )
}


function Button_4c6cc91f1e3873eb783854a56f79291c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_cd83fd6705404dbcede6083640988162 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sistema_tesis___estado___estado_autenticacion____estado_autenticacion.iniciar_sesion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["width"] : "100%", ["marginTop"] : "2" }),onClick:on_click_cd83fd6705404dbcede6083640988162,size:"3"},"Iniciar Sesi\u00f3n")
  )
}


function Toaster_11b04b7ca7e917be1c8df8032e226c05 () {
  const { resolvedColorMode } = useContext(ColorModeContext)
refs['__toast'] = toast


  return (
    jsx(Toaster,{closeButton:false,expand:true,position:"bottom-right",richColors:true,theme:resolvedColorMode},)
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesTheme,{css:{...theme.styles.global[':root'], ...theme.styles.global.body},hasBackground:true},jsx(RadixThemesBox,{css:({ ["background"] : "white", ["width"] : "100%", ["height"] : "100vh", ["position"] : "relative" })},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["height"] : "100vh" })},jsx(RadixThemesCard,{css:({ ["background"] : "#FFFFFF", ["opacity"] : "1", ["width"] : "100%", ["maxWidth"] : "400px", ["boxShadow"] : "lg" }),size:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"4"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["marginBottom"] : "4" })},jsx(LucideGraduationCap,{css:({ ["color"] : "var(--indigo-9)" }),size:48},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["marginBottom"] : "4" })},jsx(RadixThemesHeading,{align:"center",css:({ ["color"] : "#0F172A" }),size:"6",weight:"bold"},"Bienvenido")),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["marginBottom"] : "4" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B", ["marginBottom"] : "4", ["fontWeight"] : "500" }),size:"2"},"Sistema de Gesti\u00f3n de Tesis")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B" }),size:"2",weight:"bold"},"Usuario"),jsx(Debounceinput_c4cdb34fb56c373a7319da6b6cfabc06,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1E293B" }),size:"2",weight:"bold"},"Contrase\u00f1a"),jsx(RadixThemesBox,{css:({ ["position"] : "relative", ["width"] : "100%" })},jsx(Debounceinput_490c5c797224ff5a6ce11bdfd9bf9064,{},),jsx(Iconbutton_925ba3de9e2e805885907f4f11a61bc3,{},))),jsx(Button_4c6cc91f1e3873eb783854a56f79291c,{},),jsx(Toaster_11b04b7ca7e917be1c8df8032e226c05,{},)))),jsx("img",{css:({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100px", ["opacity"] : "0.6" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "130px", ["opacity"] : "0.4" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "160px", ["opacity"] : "0.3" }), ["objectFit"] : "contain", ["position"] : "fixed", ["bottom"] : "0px", ["right"] : "0px", ["filter"] : "drop-shadow(0 2px 4px rgba(0,0,0,0.05))", ["transition"] : "all 0.4s ease-in-out", ["&:hover"] : ({ ["opacity"] : "0.9", ["transform"] : "scale(1.05)" }), ["zIndex"] : "10" }),src:"/logo.png"},))),jsx("title",{},"SistemaTesis | Login"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}