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

client.login('MTE4MTUyMTc0NDEyOTk3MDIyNg.G_xvXf.XPRaYiCqlfFHe8W51iN5bKhU2j7oqtklPm30W8');
