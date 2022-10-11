var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    surname: String,
    email: String,
    role: String,
});

module.exports = mongoose.model("userSchema", userSchema);