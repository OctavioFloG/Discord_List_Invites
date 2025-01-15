import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';

const INVITACIONES_COMMAND = {
  name: 'invitaciones',
  description: 'Muestra las invitaciones activas del servidor con sus detalles.',
  type: 1, // Comando de tipo slash
};

const MIS_INVITACIONES_COMMAND = {
  name: 'mis_invitaciones',
  description: 'Muestra las invitaciones que has creado.',
  type: 1, // Comando de tipo slash
};

// Lista de todos los comandos a registrar
const ALL_COMMANDS = [INVITACIONES_COMMAND, MIS_INVITACIONES_COMMAND];

// Registra los comandos globalmente
InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
