import os
import aiohttp
from typing import List, Dict, Any

async def install_global_commands(app_id: str, commands: List[Dict[str, Any]]) -> None:
    """
    Register slash commands globally for the application.
    
    Args:
        app_id (str): Discord application ID
        commands (List[Dict[str, Any]]): List of commands to register
    """
    if not app_id or not commands:
        return

    url = f"https://discord.com/api/v10/applications/{app_id}/commands"
    
    async with aiohttp.ClientSession() as session:
        try:
            async with session.put(
                url,
                headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bot {os.getenv('DISCORD_TOKEN')}"
                },
                json=commands
            ) as response:
                if not response.ok:
                    text = await response.text()
                    raise Exception(f"Error registering commands: {text}")
                
                print("Commands registered globally")
        except Exception as error:
            print(f"Error: {error}")