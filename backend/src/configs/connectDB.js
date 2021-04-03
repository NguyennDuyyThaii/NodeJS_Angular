const mongoose = require('mongoose');
const bluebird = require('bluebird');

let connectDB = () => {
    mongoose.Promise = bluebird;

    let URI = "mongodb://localhost:27017/node_angular";
    return mongoose.connect(URI, { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true });
}
module.exports = connectDB