import fetch from 'node-fetch';

export async function InstallGlobalCommands(appId, commands) {
  if (!appId || !commands) return;

  const url = `https://discord.com/api/v10/applications/${appId}/commands`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      },
      body: JSON.stringify(commands),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Error al registrar comandos: ${text}`);
    }

    console.log('Comandos registrados globalmente');
  } catch (error) {
    console.error(error);
  }
}
