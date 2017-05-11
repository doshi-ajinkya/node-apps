var express = require('express');
var http = require('http');
var morgan = require('morgan');

var host = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));

app.use(express.static(__dirname+"/public"));

app.listen(port,host, function(){
    console.log("Server listening on http://"+host+":"+port+"/");
});