const express = require('express');
var jwt = require('jsonwebtoken');
var AddressBook = require("../model/addressBookSchema");
const router = express.Router();


router.post('/addressBook/new', (req, res) => {
    console.log(req.body);
    
    var newAddressBook = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        homeNumber: req.body.homeNumber,
        mobileNumber: req.body.mobileNumber
    }
    
    AddressBook.create(newAddressBook, (err, newlyCreatedUser) => {
        if (err) {
            console.log(err);
            res.send(404);
        }
            
        res.send('OK');
    });
    
});

//TODO: Add post for create list address book items

router.get('/addressBook/list', (req, res) => {
    console.log(req.body);
    
    AddressBook.find({}, function (err, result) {
        if (err) 
            console.log(err);

        console.log(result);
        res.send(result);
      })
    
});

module.exports = router;