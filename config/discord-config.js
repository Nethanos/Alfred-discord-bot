const Discord = require('discord.js');
require('dotenv/config');



const discordClient = new Discord.Client();


discordClient.login(process.env.DISCORD_TOKEN)


module.exports = discordClient;
