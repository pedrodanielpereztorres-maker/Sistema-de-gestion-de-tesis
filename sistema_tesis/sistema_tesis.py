from .paginas.perfil import pagina_perfil
import reflex as rx
from .paginas.inicio import pagina_inicio
from .paginas.login import pagina_login
from .paginas.boveda import pagina_boveda
from .paginas.estudiantes import pagina_estudiantes
from .paginas.documentacion import pagina_documentacion
from .paginas.mantenimiento import pagina_mantenimiento
from .paginas.reportes import pagina_reportes
from .database_manager import inicializar_infraestructura
from .estado.estado_autenticacion import EstadoAutenticacion


app = rx.App(
    theme=rx.theme(
        appearance="light",
        accent_color="indigo",
        gray_color="slate",
        radius="large",
        scaling="110%"
    ),
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    ],
    style={
        "font_family": "Inter, sans-serif",
    }
)

# Inicializar base de datos al arrancar
inicializar_infraestructura()

# Registrar rutas con protección de sesión. /login permanece pública.
app.add_page(pagina_inicio, route="/", on_load=EstadoAutenticacion.verificar_sesion)
app.add_page(pagina_login, route="/login")
app.add_page(pagina_boveda, route="/boveda", on_load=EstadoAutenticacion.verificar_sesion)
app.add_page(pagina_estudiantes, route="/estudiantes", on_load=EstadoAutenticacion.verificar_sesion_admin)
app.add_page(pagina_documentacion, route="/documentacion", on_load=EstadoAutenticacion.verificar_sesion)
# Páginas solo para administradores
app.add_page(pagina_mantenimiento, route="/mantenimiento", on_load=EstadoAutenticacion.verificar_sesion_admin)
app.add_page(pagina_perfil, route="/perfil", on_load=EstadoAutenticacion.verificar_sesion)
app.add_page(pagina_reportes, route="/reportes", on_load=EstadoAutenticacion.verificar_sesion_admin)
