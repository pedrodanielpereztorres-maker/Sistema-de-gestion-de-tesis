import reflex as rx
import os
from reflex.plugins.sitemap import SitemapPlugin
from dotenv import load_dotenv

load_dotenv()

USUARIO_BD = os.getenv("DB_USER")
CLAVE_BD = os.getenv("DB_PASSWORD")
HOST_BD = os.getenv("DB_HOST")
PUERTO_BD = os.getenv("DB_PORT")
NOMBRE_BD = os.getenv("DB_NAME")

URL_BASE_DATOS = f"postgresql+psycopg2://{USUARIO_BD}:{CLAVE_BD}@{HOST_BD}:{PUERTO_BD}/{NOMBRE_BD}"

config = rx.Config(
    app_name="sistema_tesis",
    env=rx.Env.PROD,
    db_url=URL_BASE_DATOS,
    disable_plugins=[SitemapPlugin],
)
