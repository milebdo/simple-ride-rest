/**
 * main api application
 * @author ismail <is.tmdg86@gmail.com>
 */

var express = require('express');
var app = express();
var db = require('./configs/db');
global.__root   = __dirname + '/'; 

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

var AuthController = require(__root + 'controllers/AuthController');
app.use('/api/auth', AuthController);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = app