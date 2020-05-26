const database = require('./config/database-config');

const Server = require('./models/server.model');
const {DiscordUser} = require('./models/discord-user.model');
const {findServerByName, getServerByName} = require('./managers/server-manager');



async function loadDatabase() {

    for(let i = 1; i <=5; i++) {
        let name = `ar-verify0${i}`
        let isInUse = false;
        serverModel = new Server({ name, isInUse})

        console.log(serverModel);

        const response = await serverModel.save();

        console.log(response);

    }
}


loadDatabase();