const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require('cors');
const app = express();
var server = http.createServer(app);
const postsRoute = require('./routes/posts');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', postsRoute);

const url = 'mongodb://localhost:27017/PorterData';
mongoose.connect(url).catch(err => {console.log("Connection error: " + err)});


app.listen(52295, () => console.log('Server started on port 52295'));