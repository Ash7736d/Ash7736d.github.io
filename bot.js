const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('messageCreate', (message) => {
  // Handle commands and interact with the backend server
});

client.login('MMTE4MTUyMTc0NDEyOTk3MDIyNg.G3Al5N.0pi9JX5Spl77GG25jZEpxZyrpvKGsiuSJobIsQ');
