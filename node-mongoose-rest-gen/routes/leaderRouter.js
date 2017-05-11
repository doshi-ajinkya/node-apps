var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));

var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end("Sending details of all leaders");
})
.post(function(req,res,next){
    res.end("Added leader with name "+req.body.name+" and details "+req.body.description+" is added");
})
.delete(function(req,res,next){
    res.end("Deleted all leaders");
});

leaderRouter.route('/:leaderID')
.all(function(req,res,next){
    res.writeHead(200,{"Content-Type":"text/plain"})
    next();
})
.get(function(req,res,next){
    res.end("Sending details of the leader with ID "+req.params.leaderID);
})
.put(function(req,res,next){
    res.end("Updating the leader with ID "+req.params.leaderID+" to name = "+req.body.name+" and details = "+req.body.description);
})
.delete(function(req,res,next){
    res.end("Deleting details of the leader with ID "+req.params.leaderID);
});

app.use('/leadership',leaderRouter);
module.exports = leaderRouter;