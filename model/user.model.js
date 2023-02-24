
const mongoose = require('mongoose');
const connection = require("../config/database")

// User Schema
const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
});


const User = connection.model('User', UserSchema);

module.exports = User;