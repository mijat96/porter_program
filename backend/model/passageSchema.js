var mongoose = require("mongoose");

var passageSchema = new mongoose.Schema({
    shift: String,
    plateNumber: String,
    inTime: Date,
    outTime: Date,
    typeInMaterial: String,
    typeOutMaterial: String,
    remark: String,
    ban: String,
    driverName: String,
    driverSurname: String,
    serialNumber: Number,
    idCardOrPassportNumber: Number,
    workers: String,
    vehicles: String,
});

module.exports = mongoose.model("passageSchema", passageSchema);