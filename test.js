const database = require('./config/database-config');

const Server = require('./models/server-model');



async function loadDatabase() {

    for(let i = 1; i <=5; i++) {
        let name = `cte-verify0${i}`
        let isInUse = false;

        serverModel = new Server({ name, isInUse})

        console.log(serverModel);

        const response = await serverModel.save();

        console.log(response);

    }
}

loadDatabase();

