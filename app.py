import os
from dotenv import load_dotenv
import discord
from discord import app_commands
from commands import ALL_COMMANDS
from utils import install_global_commands

# Load environment variables
load_dotenv()

# Configure bot intents
intents = discord.Intents.default()
intents.guilds = True

class InvitesBot(discord.Client):
    def __init__(self):
        super().__init__(intents=intents)
        self.tree = app_commands.CommandTree(self)

    async def setup_hook(self):
        # Register commands globally on startup
        await install_global_commands(
            os.getenv('APP_ID'),
            ALL_COMMANDS
        )

client = InvitesBot()

@client.event
async def on_ready():
    print(f"Bot started as {client.user}!")

@client.tree.command(name="invites")
async def invites(interaction: discord.Interaction):
    """Show active invites from server."""
    try:
        invites = await interaction.guild.invites()

        if not invites:
            await interaction.response.send_message(
                "No active invites in this server.",
                ephemeral=True
            )
            return

        # Sort invites by uses in descending order
        sorted_invites = sorted(invites, key=lambda x: x.uses, reverse=True)[:5]

        invite_details = []
        for invite in sorted_invites:
            inviter_name = invite.inviter.name if invite.inviter else "Unknown"
            invite_details.append(
                f"Created by: {inviter_name}\n"
                f"URL: https://discord.gg/{invite.code}\n"
                f"Uses: {invite.uses}"
            )

        content = "🏆 **Top 5 most used invites**🏆\n\n" + "\n\n".join(invite_details)
        await interaction.response.send_message(content, ephemeral=True)

    except Exception as error:
        print(f"Error getting invites: {error}")
        await interaction.response.send_message(
            "There was an error while trying to get the invites.",
            ephemeral=True
        )

@client.tree.command(name="my_invites")
async def my_invites(interaction: discord.Interaction):
    """Show invites you've created."""
    try:
        invites = await interaction.guild.invites()
        user_invites = [inv for inv in invites if inv.inviter and inv.inviter.id == interaction.user.id]

        if not user_invites:
            await interaction.response.send_message(
                "You haven't created any invites in this server.",
                ephemeral=True
            )
            return

        invite_details = []
        for invite in user_invites:
            invite_details.append(
                f"URL: https://discord.gg/{invite.code}\n"
                f"Uses: {invite.uses}"
            )

        content = f"📜 **Your invites:**\n\n" + "\n\n".join(invite_details)
        await interaction.response.send_message(content, ephemeral=True)

    except Exception as error:
        print(f"Error getting user invites: {error}")
        await interaction.response.send_message(
            "There was an error while trying to get your invites.",
            ephemeral=True
        )

@client.tree.command(name="user_invites")
@app_commands.describe(user="The user whose invites you want to see")
async def user_invites(interaction: discord.Interaction, user: discord.User):
    """Show invites from a specific user."""
    try:
        invites = await interaction.guild.invites()
        target_invites = [inv for inv in invites if inv.inviter and inv.inviter.id == user.id]

        if not target_invites:
            await interaction.response.send_message(
                f"{user.name} hasn't created any invites in this server.",
                ephemeral=True
            )
            return

        invite_details = []
        for invite in target_invites:
            invite_details.append(
                f"URL: https://discord.gg/{invite.code}\n"
                f"Uses: {invite.uses}"
            )

        content = f"📜 **Invites created by {user.name}:**\n\n" + "\n\n".join(invite_details)
        await interaction.response.send_message(content, ephemeral=True)

    except Exception as error:
        print(f"Error getting user invites: {error}")
        await interaction.response.send_message(
            "There was an error while trying to get the invites.",
            ephemeral=True
        )

if __name__ == "__main__":
    client.run(os.getenv('DISCORD_TOKEN'))