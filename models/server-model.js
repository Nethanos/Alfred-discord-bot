const mongoose = require('../config/database-config')

const serverSchema = new mongoose.Schema({
    name: String,
    isInUse: Boolean
  });

const Server = mongoose.model('Server', serverSchema);

module.exports = Server;