var express = require('express');
var app = express();
var path = require('path');
var port = 3000;

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/moment', express.static(__dirname + '/node_modules/moment/min'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function () {
  console.log('Server is running on localhost:' + port);
});