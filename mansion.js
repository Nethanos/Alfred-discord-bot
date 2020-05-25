const express = require('express');
const discordClient = require('./config/discord-config');
const { serverInstanceList, serverNameList } = require('./config/server-names');
const orderList = require('./config/known-orders');
const { saveUseRequest, whichIsInUse } = require('./managers/server-manager');
const showHelp = require('./managers/alfred-manager');
require('dotenv/config');


const application = express();


application.listen(process.env.PORT, () => {
    console.log(`Listening at ${process.env.PORT}`)
})


application.get('/', (req, res) => {
    res.json("Hello, Sir.");
})

discordClient.on('message', msg => {
    let users = msg.mentions.users;

    if (users.find((user) => user == discordClient.user)) {

        const [mention, targetOrder, desiredServer] = msg.content.split(' ');

        const desiredOrder = orderList.find(order => order === targetOrder);

        if (!desiredOrder) {
            msg.reply("Não compreendi o que o disse. Verifique se escreveu a ordem corretamente ou há espaços desnecessários na mensagem");
            return;
        }

        if (desiredOrder === 'which') {
            const validServerName = serverNameList.find(serverName => serverName == desiredServer);

            if (!validServerName) {
                msg.reply("Servidor não encontrado.")
                return;
            }
            whichIsInUse(msg, desiredServer);
            return;
        }

        if (desiredOrder === 'help') {
            showHelp(msg);
        }

        const validServerInstance = serverInstanceList.find(serverInstance => serverInstance === desiredServer);

        if (!validServerInstance) {
            msg.reply("Servidor não encontrado.")
            return;

        } else {

            if (desiredOrder === 'use') {
                saveUseRequest(desiredServer, msg, true);
            }

            if (desiredOrder === 'release') {
                saveUseRequest(desiredServer, msg, false);
            }

        }

    }
});

