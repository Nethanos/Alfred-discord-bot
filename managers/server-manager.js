const Server = require('../models/server-model');


function saveUseRequest(serverName) {

    const serverRequested = getServerByName(serverName);

    if(serverRequested.isInUse){
        console.log("Servidor já está sendo usado.");
    }

    // const serverToUse = new Server({
    //     name: serverName,
    //     isInUse: true
    // });

    // serverToUse.save((err, response) => {
    //     if(err) return console.error(err);

    //     console.log(response);
    // })
}

async function getServerByName(serverName) {
    return await Server.findOne({name: serverName});

}


// saveUseRequest("t3pl-verify01");

getServerByName('t3pl-verify01')


module.exports = saveUseRequest;