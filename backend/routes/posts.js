const express = require('express');
var User = require("../model/userSchema");
const router = express.Router();

router.get('/Values/:id', (req, res) => {
    console.log(req.params);

    res.send({ message: 'Verifikovan' });      
});


//Registracija korisnika
router.post('/Account/Register', (req, res) => {
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

module.exports = router;