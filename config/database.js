const mongoose = require('mongoose');

const config = require("./main");

const connection = mongoose.createConnection(config.mongoose.url, config.mongoose.options);

connection.on("error", function (error) { 
    console.log(error);

});


module.exports = connection;
