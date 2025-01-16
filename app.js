import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildInvites],
});

const BOT_TOKEN = process.env.DISCORD_TOKEN;

client.once('ready', () => {
  console.log(`¡Bot iniciado como ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName, guild } = interaction;

  if (commandName === 'invitaciones') {
    try {
      const invites = await guild.invites.fetch();

      if (invites.size === 0) {
        await interaction.reply({
          content: 'No se encontraron invitaciones activas en este servidor.',
          ephemeral: true,
        });
        return;
      }

      // Ordenar invitaciones por usos en orden descendente
      const sortedInvites = invites.sort((a, b) => b.uses - a.uses).first(5);

      const inviteDetails = sortedInvites.map((invite) => {
        const inviterName = invite.inviter?.tag || 'Desconocido';
        return `Creado por: ${inviterName}\nEnlace: https://discord.gg/${invite.code}\nUsos: ${invite.uses}`;
      }).join('\n\n');

      await interaction.reply({
        content: `🏆 ** Ranking de las 5 invitaciones con más usos **🏆\n\n${inviteDetails}`,
        ephemeral: true,
      });
    } catch (error) {
      console.error('Error al obtener las invitaciones:', error);
      await interaction.reply({
        content: 'Hubo un error al intentar obtener las invitaciones.',
        ephemeral: true,
      });
    }
  }

  if (commandName === 'mis_invitaciones') {
    try {
      const invites = await guild.invites.fetch();

      const userInvites = invites.filter((invite) => invite.inviter?.id === interaction.user.id);

      if (userInvites.size === 0) {
        await interaction.reply({
          content: 'No has creado invitaciones en este servidor.',
          ephemeral: true,
        });
        return;
      }

      const userInviteDetails = userInvites.map((invite) => {
        return `Enlace: https://discord.gg/${invite.code}\nUsos: ${invite.uses}`;
      }).join('\n\n');

      await interaction.reply({
        content: `📜 **Tus invitaciones:**\n\n${userInviteDetails}`,
        ephemeral: true,
      });
    } catch (error) {
      console.error('Error al obtener las invitaciones del usuario:', error);
      await interaction.reply({
        content: 'Hubo un error al intentar obtener tus invitaciones.',
        ephemeral: true,
      });
    }
  }
});

client.login(BOT_TOKEN);
