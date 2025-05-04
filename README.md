# Discord Bot Project

## Descripción
Este proyecto es un bot para Discord desarrollado en Python que permite visualizar invitaciones dentro de un servidor. Proporciona comandos para listar todas las invitaciones activas y obtener detalles específicos sobre las invitaciones creadas por usuarios.

## Características Principales
- **Listado de Invitaciones:** Muestra una lista de las 5 invitaciones más usadas del servidor, incluyendo el creador, el enlace y la cantidad de usos.
- **Mis Invitaciones:** Permite a un usuario ver las invitaciones que ha creado y detalles de su uso.
- **Invitaciones de Usuario:** Permite ver las invitaciones creadas por un usuario específico.

## Estructura del Proyecto
```plaintext
├── .env           -> Archivo para variables de entorno
├── app.py         -> Punto de entrada principal del bot
├── commands.py    -> Definición de los comandos slash
├── utils.py       -> Funciones auxiliares reutilizables
├── requirements.txt
├── README.md
└── .gitignore
```

## Configuración

### Requisitos
- Python 3.8 o superior
- discord.py 2.3.0 o superior
- python-dotenv
- aiohttp

### Instalación
1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```
2. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```

3. Crear y agrega tus credenciales al archivo `.env`:
   ```plaintext
   DISCORD_TOKEN=<TU_DISCORD_TOKEN>
   APP_ID=<TU_APP_ID>
   ```

### Ejecución del Bot
Inicia el bot con:
```bash
python app.py
```

## Comandos

### 1. /invites
**Descripción:** Muestra las 5 invitaciones más usadas del servidor.

**Respuesta:**
- Lista detallada de invitaciones, incluyendo:
  - Nombre del creador
  - Enlace de invitación
  - Cantidad de usos

**Uso:**
```plaintext
/invites
```

### 2. /my_invites
**Descripción:** Muestra todas las invitaciones creadas por el usuario que ejecuta el comando.

**Respuesta:**
- Detalles de las invitaciones creadas por el usuario:
  - Enlace de invitación
  - Cantidad de usos

**Uso:**
```plaintext
/my_invites
```

### 3. /user_invites
**Descripción:** Muestra todas las invitaciones creadas por un usuario específico.

**Respuesta:**
- Detalles de las invitaciones creadas por el usuario seleccionado:
  - Enlace de invitación
  - Cantidad de usos

**Uso:**
```plaintext
/user_invites @usuario
```

## Archivos del Proyecto

### app.py
Contiene la lógica principal del bot, incluyendo:
- Configuración del cliente de Discord
- Manejo de eventos
- Implementación de comandos slash
- Lógica de procesamiento de invitaciones

### commands.py
Define la estructura de los comandos slash:
- Configuración de nombres y descripciones
- Definición de opciones y parámetros
- Tipos de comandos

### utils.py
Proporciona funciones auxiliares como:
- Registro de comandos globales
- Manejo de errores
- Comunicación con la API de Discord

## Problemas Comunes

### 1. Error: `TokenInvalid`
- Verifica que el token en el archivo `.env` sea correcto.
- Asegúrate de que el bot esté activo en el portal de desarrolladores de Discord.

### 2. Comandos no aparecen en Discord
- El bot registrará los comandos automáticamente al iniciar.
- Asegúrate de que el bot tenga los permisos necesarios en el servidor.
- Verifica que el APP_ID en el archivo `.env` sea correcto.

### 3. Error al obtener invitaciones
- Verifica que el bot tenga el permiso "Manage Guild" en el servidor.
- Asegúrate de que el servidor permita la creación de invitaciones.
