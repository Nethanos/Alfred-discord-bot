const mongoose = require('mongoose');
require('dotenv/config');

const URI = `mongodb+srv://root:${process.env.MONGO_CLUSTER_PASS}@personal-cluster-waxbc.gcp.mongodb.net/test?retryWrites=true&w=majority` 

const dbConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}


mongoose.connect(URI, dbConfig);


module.exports = mongoose;
