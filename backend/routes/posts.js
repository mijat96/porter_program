const express = require('express');
var User = require("../model/userSchema");
var Passage = require("../model/passageSchema");
const router = express.Router();

router.get('/Values/:id', (req, res) => {
    console.log(req.params);

    res.send({ message: 'Verifikovan' });      
});

router.post('/account/register', (req, res) => {
    console.log(req.body);
    
    var newUser = {
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }
    
    User.create(newUser, (err, newlyCreatedUser) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(newlyCreatedUser);
            res.send('OK');
        }
    });
    
});

router.post('/passage/new', (req, res) => {
    console.log(req.body);
    
    var newPassage = {
        shift: req.body.shift,
        plateNumber: req.body.plateNumber,
        inTime: req.body.inTime,
        outTime: req.body.outTime,
        typeInMaterial: req.body.typeInMaterial,
        typeOutMaterial: req.body.typeOutMaterial,
        remark: req.body.remark,
        ban: req.body.ban,
        driverName: req.body.driverName,
        driverSurname: req.body.driverSurname
    }
    
    Passage.create(newPassage, (err, newlyCreatedPassage) => {
        if (err) {
            console.log(err);
        } else {
            res.send(newlyCreatedPassage);
        }
    });
    
});

router.post('/passage/edit', (req, res) => {
    console.log(req.body.id);
    Passage.findOneAndUpdate({ id: req.body.id },
        {
            $set: {
                shift: req.body.shift, plateNumber: req.body.plateNumber, inTime: req.body.inTime,
                outTime: req.body.outTime, typeInMaterial: req.body.typeInMaterial, 
                typeOutMaterial: req.body.typeOutMaterial, remark: req.body.remark, ban: req.body.ban,
                driverName: req.body.driverName, driverSurname: req.body.driverSurname
            }
        },
        (err, editedPassage) => {
            if (err) {
                console.log(err);
            } else {
                res.send(editedPassage);
            }
        });
    
});

module.exports = router;