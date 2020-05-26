const mongoose = require('../config/database-config');
const {DiscordUserSchema} = require('./discord-user.model');

const Server = mongoose.model('Server', new mongoose.Schema({
  name: String,
  isInUse: Boolean,
  user: DiscordUserSchema
}));

module.exports = Server;