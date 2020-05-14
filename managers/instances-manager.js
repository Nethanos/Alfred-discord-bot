const Instance = require('../models/instance-model');

function markInstanceToUse(type, instanceName) {

    let instance = new Instance();

    instance.instanceName = instanceName;


}

module.exports = markInstanceToUse;
