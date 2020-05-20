const Server = require('../models/server-model');


const successFulRequestMessage = "Servidor marcado para uso. Quando terminar, por favor, use o comando release nomeDoServidor!";

const successFulReleaseMessage = "O servidor está liberado para uso! Obrigado por lembrar de liberar!";

const serverInUseMessage = "Servidor já está em uso.";

const serverNotInUse = "O servidor não está marcado para uso!";


async function saveUseRequest(serverName, discordMessage, desiredOrder) {

    const serverRequested = await getServerByName(serverName);

    desiredOrder ? setToUse(serverRequested, discordMessage) : setToRelease(serverRequested, discordMessage);

}

async function whichIsInUse(discordMessage, serverName) {
    const response = await findServerByName(serverName); 
      if(response.length === 0) {
        discordMessage.reply(`Nenhum verify do ${serverName} está marcado para uso no momento!`)
      }
}


function getServerByName(serverName) {
    return Server.findOne({ name: serverName });
}


function findServerByName(serverName) {
    const regex = new RegExp(serverName, "i");
    return Server.find({name: regex, isInUse: true});
}

function updateServer(serverRequested, desiredOrder) {
    return serverRequested.updateOne({ $set: { isInUse: desiredOrder } });
}


async function setToUse(serverRequested, discordMessage) {

    if (serverRequested.isInUse) {
        discordMessage.reply(serverInUseMessage);
        return;
    }

    const response = await updateServer(serverRequested, true);

    if (response.ok) {
        discordMessage.reply(successFulRequestMessage);
    }

}


async function setToRelease(serverRequested, discordMessage) {

    if (!serverRequested.isInUse) {
        discordMessage.reply(serverNotInUse);
        return;
    }

    const response = await updateServer(serverRequested, false);

    if (response.ok) {
        discordMessage.reply(successFulReleaseMessage);
    }

}

module.exports = { saveUseRequest, whichIsInUse };