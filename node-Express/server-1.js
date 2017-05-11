var express = require('express');
var http = require('http');

var host = 'localhost';
var port = 3000;

var app = express();

app.use(function(req, res, next){
    console.log(req.headers);

    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>Hello World</h1>');
});

var server = http.createServer(app);

server.listen(port, host, function(){
    console.log('Server running on http://'+host+':'+port+"/");
});