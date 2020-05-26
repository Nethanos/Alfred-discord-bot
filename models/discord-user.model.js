const mongoose = require('../config/database-config')


const DiscordUserSchema = new mongoose.Schema({
    discordId: String,
    username: String
});

const DiscordUser = mongoose.model('DiscordUser', DiscordUserSchema);

module.exports = { DiscordUser, DiscordUserSchema};