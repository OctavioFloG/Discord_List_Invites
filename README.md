# Discord Bot Project

## Descripción
Este proyecto es un bot para Discord que permite visualizar invitaciones dentro de un servidor. Proporciona comandos para listar todas las invitaciones activas y obtener detalles específicos sobre las invitaciones creadas por el usuario que ejecuta el comando.

## Características Principales
- **Listado de Invitaciones:** Muestra una lista de todas las invitaciones activas del servidor, incluyendo el creador, el enlace y la cantidad de usos.
- **Mis Invitaciones:** Permite a un usuario ver las invitaciones que ha creado y detalles de su actividad.

## Estructura del Proyecto
```plaintext
├── examples    -> Ejemplos de códigos específicos para funciones del bot
│   ├── app.js  -> Código terminado para referencia
│   ├── button.js
│   ├── command.js
│   ├── modal.js
│   └── selectMenu.js
├── .env -> Archivo para variables de entorno
├── app.js      -> Punto de entrada principal del bot
├── commands.js -> Configuración de los comandos slash
├── game.js     -> Lógica específica para juegos (no usado en este bot)
├── utils.js    -> Funciones auxiliares reutilizables
├── package.json
├── README.md
└── .gitignore
```

## Configuración

### Requisitos
- Node.js v20.18.0 o superior
- Discord.js v14.17.3

### Instalación
1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

4. Crear y agrega tus credenciales al archivo `.env`:
   ```plaintext
   DISCORD_TOKEN=<TU_DISCORD_TOKEN>
   APP_ID=<TU_APP_ID>
   PUBLIC_KEY=<TU_PUBLIC_KEY>
   ```

### Registro de Comandos
Registra los comandos slash con el siguiente comando:
```bash
npm run register
```

### Ejecución del Bot
Inicia el bot con:
```bash
npm run start
```

### Ejecución del Bot en modo desarrollador
Inicia el bot con:
```bash
npm run dev
```
Esto hará correr el nodemon y actualizará el bot cada vez que detecte un cambio

## Comandos

### 1. /listar_invitaciones
**Descripción:** Muestra una lista de todas las invitaciones activas del servidor.

**Respuesta:**
- Lista detallada de invitaciones, incluyendo:
  - Nombre del creador
  - Enlace de invitación
  - Usos actuales

**Uso:**
```plaintext
/listar_invitaciones
```

### 2. /mis_invitaciones
**Descripción:** Muestra todas las invitaciones creadas por el usuario que ejecuta el comando.

**Respuesta:**
- Detalles de las invitaciones creadas por el usuario:
  - Enlace de invitación
  - Usos actuales

**Uso:**
```plaintext
/mis_invitaciones
```

## Utils.js
Este archivo contiene funciones auxiliares como:
- Registro de comandos globales o específicos de servidores.
- Formateo de detalles de invitaciones.
- Manejo de errores.

## Problemas Comunes

### 1. Error: `TokenInvalid`
- Asegúrate de que el token en el archivo `.env` sea correcto.

### 2. Comandos no aparecen en Discord
- Asegúrate de haber ejecutado `npm run register`.
- Verifica que el bot tenga los permisos adecuados en el servidor.
