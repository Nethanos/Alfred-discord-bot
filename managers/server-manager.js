const Server = require('../models/server.model');
const {DiscordUser} = require('../models/discord-user.model');


const successFulRequestMessage = "Servidor marcado para uso. Quando terminar, por favor, use o comando release nomeDoServidor!";

const successFulReleaseMessage = "O servidor está liberado para uso! Obrigado por lembrar de liberar!";

const serverInUseMessage = "Servidor já está em uso.";

const serverNotInUse = "O servidor não está marcado para uso!";

const notYourServer = "Você não pode dar release em um servidor que não está usando!";


async function saveUseRequest(serverName, discordMessage, desiredOrder, author) {

    const serverRequested = await getServerByName(serverName);

    desiredOrder ? setToUse(serverRequested, discordMessage, author) : setToRelease(serverRequested, discordMessage, author);

}

async function whichIsInUse(discordMessage, serverName) {
    const response = await findServerByName(serverName); 
      if(response.length === 0) {
        discordMessage.reply(`Nenhum verify do ${serverName} está marcado para uso no momento!`);
        return;
      }
       const usedServerNames = [];

       let message = `Os servidores em uso do **${serverName.toUpperCase()}** são: \n`;

       let serverMessages = '';

      response.map(server => {
        serverMessages += ` \`${server.name} usado por ${server.user.username}\` \n`;
      });

      discordMessage.reply(message += serverMessages);
    }




function getServerByName(serverName) {
    return Server.findOne({ name: serverName });
}


function findServerByName(serverName) {
    const regex = new RegExp(serverName, "i");
    return Server.find({name: regex, isInUse: true});
}

function updateServer(serverRequested, desiredOrder, author) {
    
    serverRequested.isInUse = desiredOrder;
    if(author){
        const user = new DiscordUser({discordId: author.id, username: author.username});

        user.discordId = author.id;
    
        user.username = author.username;
        serverRequested.user = author;
    }

    return serverRequested.save();
}


async function setToUse(serverRequested, discordMessage, author) {

    if (serverRequested.isInUse) {
        discordMessage.reply(serverInUseMessage);
        return;
    }

    const response = await updateServer(serverRequested, true, author);

    if (!response.errors) {
        discordMessage.reply(successFulRequestMessage);
    }   

}


async function setToRelease(serverRequested, discordMessage, author) {

    if (!serverRequested.isInUse) {
        discordMessage.reply(serverNotInUse);
        return;
    } else if(serverRequested.user.username != author.user.username) {
        discordMessage.reply(notYourServer);
        return;
    }

    const response = await updateServer(serverRequested, false);

    if (!response.errors) {
        discordMessage.reply(successFulReleaseMessage);
    }

}

module.exports = { saveUseRequest, whichIsInUse, findServerByName, getServerByName };