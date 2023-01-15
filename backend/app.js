const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require('cors');
const app = express();
var server = http.createServer(app);
const postsRoute = require('./routes/posts');
const postsShiftReportRoute = require('./routes/postsShiftReport');
const postsAddressBook = require('./routes/postsAddressBook');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', postsRoute);
app.use('/api', postsShiftReportRoute);
app.use('/api', postsAddressBook);

const url = 'mongodb://127.0.0.1:27017/PorterData';
//mongoose.connect(url).catch(err => {console.log("Connection error: " + err)});

mongoose.connect(url).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

app.listen(52295, () => console.log('Server started on port 52295'));