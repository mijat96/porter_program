var mongoose = require("mongoose");

var addressBookSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    homeNumber: String,
    mobileNumber: String
});

module.exports = mongoose.model("addressBookSchema", addressBookSchema);