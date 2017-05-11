var express = require('express');
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var host = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

app.all("/dishes",function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
});

app.get("/dishes",function(req,res,next){
    res.end("Sending details of all the dishes");
});

app.post("/dishes",function(req,res,next){
    res.end("Added dish with name "+req.body.name+" and details "+req.body.description+" is added");
});

app.delete("/dishes",function(req,res,next){
    res.end("Deleted all the dishes");
});

app.get("/dishes/:dishID",function(req,res,next){
    res.end("Sending details of the dish with ID "+req.params.dishID);
});

app.put("/dishes/:dishID",function(req,res,next){
    res.end("Updating the dish with ID "+req.params.dishID+" to name = "+req.body.name+" and details = "+req.body.description);
});

app.delete("/dishes/:dishID",function(req,res,next){
    res.end("Deleting details of the dish with ID "+req.params.dishID);
});

app.use(express.static(__dirname+"/public"));

app.listen(port,host, function(){
    console.log("Server listening on http://"+host+":"+port+"/");
});