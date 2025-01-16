import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';

const INVITACIONES_COMMAND = {
  name: 'invites',
  description: 'Show active invites from server.',
  type: 1, // Comando de tipo slash
};

const MIS_INVITACIONES_COMMAND = {
  name: 'my_invites',
  description: 'Show invites you\'ve created.',
  type: 1, // Comando de tipo slash
};

// Lista de todos los comandos a registrar
const ALL_COMMANDS = [INVITACIONES_COMMAND, MIS_INVITACIONES_COMMAND];

// Registra los comandos globalmente
InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
