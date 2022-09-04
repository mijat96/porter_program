const express = require('express');
const router = express.Router();

router.get('/Values/:id', (req, res) => {
    console.log(req.params);

    res.send({ message: 'Verifikovan' });      
});

module.exports = router;