const express = require('express');
var jwt = require('jsonwebtoken');
var User = require("../model/userSchema");
var ShiftReport = require("../model/shiftReportSchema");
const router = express.Router();

router.post('/shiftreport/new', (req, res) => {
    console.log(req.body);
    
    var newShiftReport = {
        tookOverShift: req.body.tookOverShift,
        time: req.body.time,
        tookOverShiftCorrectCondition: req.body.tookOverShiftCorrectCondition,
        events: req.body.events,
        visitController: req.body.visitController,
        shift: req.body.shift,
        daytimePatrol: req.body.daytimePatrol,
        nighttimePatrol: req.body.nighttimePatrol,
        notes: req.body.notes,
        extraordinaryEvent: req.body.extraordinaryEvent,
    }
    
    ShiftReport.create(newShiftReport, (err, newlyCreatedShiftReport) => {
        if (err) {
            console.log(err);
            res.send(404);
        }

        res.send(newlyCreatedShiftReport);
    });
    
});

router.post('/shiftreport/edit', (req, res) => {
    ShiftReport.findOneAndUpdate({ _id: req.body._id },
        {
            $set: {
                tookOverShift: req.body.tookOverShift,
                time: req.body.time,
                tookOverShiftCorrectCondition: req.body.tookOverShiftCorrectCondition,
                events: req.body.events,
                visitController: req.body.visitController,
                shift: req.body.shift,
                daytimePatrol: req.body.daytimePatrol,
                nighttimePatrol: req.body.nighttimePatrol,
                notes: req.body.notes,
                extraordinaryEvent: req.body.extraordinaryEvent,
            }
        },
        (err, editedShiftReport) => {
            if (err) {
                console.log(err);
                res.send(404);
            } 

            res.send(editedShiftReport);
        });
    
});

router.get('/shiftreport/list', (req, res) => {
    console.log(req.body);
    
    ShiftReport.find({}, function (err, result) {
        if (err) 
            console.log(err);

        console.log(result);
        res.send(result);
      })
    
});

module.exports = router;