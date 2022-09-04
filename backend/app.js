const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors');
const app = express();
var server = http.createServer(app);
const postsRoute = require('./routes/posts');
app.use('/api', postsRoute);

app.listen(52295, () => console.log('Server started on port 52295'));