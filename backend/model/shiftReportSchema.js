var mongoose = require("mongoose");

var shiftReportSchema = new mongoose.Schema({
    tookOverShift: String,
    time: String,
    tookOverShiftCorrectCondition: Boolean,
    events: String,
    visitController: String,
    shift: String,
    daytimePatrol: String,
    nighttimePatrol: String,
    notes: String,
    extraordinaryEvent: String,
});

module.exports = mongoose.model("shiftReportSchema", shiftReportSchema);