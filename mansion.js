const express = require('express');
const discordClient = require('./config/discord-config');

const markInstanceToUse = require('./managers/instances-manager');

discordClient.on('message', msg => {
    let users = msg.mentions.users;
    
    if (users.find((user) => user == discordClient.user)) {

        const [mention, targetOrder, desiredServer] = msg.content.split(' ');

        if(targetOrder === 'usando') {
            markInstanceToUse('verify', desiredServer)
        }


    }
});

