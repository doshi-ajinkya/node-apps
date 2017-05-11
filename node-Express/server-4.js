var express = require('express');
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var host = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end("Sending details of all the dishes");
})
.post(function(req,res,next){
    res.end("Added dish with name "+req.body.name+" and details "+req.body.description+" is added");
})
.delete(function(req,res,next){
    res.end("Deleted all the dishes");
});

dishRouter.route('/:dishID')
.all(function(req,res,next){
    res.writeHead(200,{"Content-Type":"text/plain"})
    next();
})
.get(function(req,res,next){
    res.end("Sending details of the dish with ID "+req.params.dishID);
})
.put(function(req,res,next){
    res.end("Updating the dish with ID "+req.params.dishID+" to name = "+req.body.name+" and details = "+req.body.description);
})
.delete(function(req,res,next){
    res.end("Deleting details of the dish with ID "+req.params.dishID);
});

app.use('/dishes',dishRouter);
app.use(express.static(__dirname+"/public"));

app.listen(port,host, function(){
    console.log("Server listening on http://"+host+":"+port+"/");
});