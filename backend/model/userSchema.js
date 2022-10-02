var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    surname: String,
    email: String
});

module.exports = mongoose.model("userSchema", userSchema);