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

  if (commandName === 'invites') {
    try {
      const invites = await guild.invites.fetch();

      if (invites.size === 0) {
        await interaction.reply({
          content: 'No active invites in this server.',
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
        content: `🏆 ** Top 5 most used invitations **🏆\n\n${inviteDetails}`,
        ephemeral: true,
      });
    } catch (error) {
      console.error('Error trying to get invitations:', error);
      await interaction.reply({
        content: 'There was an error while trying to obtain the invitations.',
        ephemeral: true,
      });
    }
  }

  if (commandName === 'my_invites') {
    try {
      const invites = await guild.invites.fetch();

      const userInvites = invites.filter((invite) => invite.inviter?.id === interaction.user.id);

      if (userInvites.size === 0) {
        await interaction.reply({
          content: 'You\'ve not created invitations on this server.',
          ephemeral: true,
        });
        return;
      }

      const userInviteDetails = userInvites.map((invite) => {
        return `Enlace: https://discord.gg/${invite.code}\nUsos: ${invite.uses}`;
      }).join('\n\n');

      await interaction.reply({
        content: `📜 **Your invites:**\n\n${userInviteDetails}`,
        ephemeral: true,
      });
    } catch (error) {
      console.error('Error when getting user invitations:', error);
      await interaction.reply({
        content: 'There was an error trying to get your invitations.',
        ephemeral: true,
      });
    }
  }
});

client.login(BOT_TOKEN);
