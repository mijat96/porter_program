const express = require('express');
var jwt = require('jsonwebtoken');
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
        email: req.body.email,
        role: req.body.role
    }
    
    User.create(newUser, (err, newlyCreatedUser) => {
        if (err) {
            console.log(err);
            res.send(404);
        }
            
        res.send('OK');
    });
    
});

router.post('/account/login', (req, res) => {

    User.findOne({ username: req.body.username }, (err, loggedUser) => {
        if (err) {
            console.log(err);
            res.send(404);
        }

        try{
            if (loggedUser.password == req.body.password) {
                console.log(req.body.password)
                jwt.sign({ user: loggedUser.username, role: loggedUser.role }, 'secretkey', (err, token) => {
                    res.json({token});
                });
            }    
        }catch(e){
            console.log(e);
            res.send(501);
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
            res.send(404);
        }

        res.send(newlyCreatedPassage);
    });
    
});

router.post('/passage/edit', (req, res) => {
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
                res.send(404);
            } 

            res.send(editedPassage);
        });
    
});

router.get('/passage/list', (req, res) => {
    console.log(req.body);
    
    Passage.find({}, function (err, result) {
        if (err) 
            console.log(err);

        console.log(result);
        res.send(result);
      })
    
});

module.exports = router;