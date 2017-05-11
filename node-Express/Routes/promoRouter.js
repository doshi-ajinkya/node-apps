var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));

var promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end("Sending details of all promotions");
})
.post(function(req,res,next){
    res.end("Added promotion with name "+req.body.name+" and details "+req.body.description+" is added");
})
.delete(function(req,res,next){
    res.end("Deleted all promotions");
});

promoRouter.route('/:promoID')
.all(function(req,res,next){
    res.writeHead(200,{"Content-Type":"text/plain"})
    next();
})
.get(function(req,res,next){
    res.end("Sending details of the promotion with ID "+req.params.promoID);
})
.put(function(req,res,next){
    res.end("Updating the promotion with ID "+req.params.promoID+" to name = "+req.body.name+" and details = "+req.body.description);
})
.delete(function(req,res,next){
    res.end("Deleting details of the promotion with ID "+req.params.promoID);
});

app.use('/promotions',promoRouter);
module.exports = promoRouter;