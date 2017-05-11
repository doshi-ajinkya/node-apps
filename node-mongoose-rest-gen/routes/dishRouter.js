var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Dishes = require('../models/dishes');

var app = express();

app.use(morgan('dev'));

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get(function(req,res,next){
    Dishes.find({},function(err, dishes){
            if(err) throw err;
            res.json(dishes);
        });
})
.post(function(req,res,next){
    Dishes.create(req.body,
    function(err,dish){
        if(err) throw err;
        console.log("Dish Created!");
        var id = dish._id;
        res.writeHead(201,{'Content-Type':'text/plain'});
        res.end("Added the dish with ID: "+id);
    });
})
.delete(function(req,res,next){
    Dishes.remove({},function(err,result){
        if(err) throw err;
        res.json(result);
    });
});

dishRouter.route('/:dishID')
.get(function(req,res,next){
    Dishes.findById(req.params.dishID,function(err, dishes){
            if(err) throw err;
            res.json(dishes);
    });
})
.put(function(req,res,next){
    Dishes.findByIdAndUpdate(req.params.dishID,{
                $set : req.body
            },  
            {
                new: true
            },function(err, dish){
                if(err) throw err;
                console.log('Updated Dish!');
                res.json(dish);
            });
})
.delete(function(req,res,next){
    Dishes.findByIdAndRemove(req.params.dishID,function(err,result){
        if(err) throw err;
        res.json(result);
    });
});

dishRouter.route('/:dishID/comments')
.get(function(req,res,next){
    Dishes.findById(req.params.dishID,function(err, dishes){
            if(err) throw err;
            res.json(dishes.comments);
    });
})
.post(function(req,res,next){
    Dishes.findById(req.params.dishID,function(err, dishes){
            if(err) throw err;
            dishes.comments.push(req.body);
            dishes.save(function(err,dish){
                if(err) throw err;
                console.log("Added Comments!");
                res.json(dish);
            });
    });
})
.delete(function(req,res,next){
   Dishes.findById(req.params.dishID,function(err, dishes){
            if(err) throw err;
            for(var i = (dishes.comments.length-1);i>=0;i--){
                dishes.comments.id(dishes.comments[i]._id).remove();
            }
            dishes.save(function(err,dish){
                if(err) throw err;
                console.log("Deleted Comments!");
                res.writeHead(200,{'Content-Type':"text/plain"});
                res.end("Deleted all comments of dish with ID: "+req.params.dishID);
            });
    }); 
});

dishRouter.route('/:dishID/comments/:commentID')
.get(function(req,res,next){
    Dishes.findById(req.params.dishID,function(err, dishes){
            if(err) throw err;
            res.json(dishes.comments.id(req.params.commentID));
    });
})
.put(function(req,res,next){
    Dishes.findById(req.params.dishID,function(err, dishes){
            if(err) throw err;
            dishes.comments.id(req.params.commentID).remove();
            dishes.comments.push(req.body);
            dishes.save(function(err,dish){
                if(err) throw err;
                console.log("Updated Comments!");
                res.json(dish);
            });
    });
})
.delete(function(req,res,next){
   Dishes.findById(req.params.dishID,function(err, dishes){
            if(err) throw err;
            dishes.comments.id(req.params.commentID).remove();

            dishes.save(function(err,dish){
                if(err) throw err;
                console.log("Deleted Comment!");
                res.json(dish);
            });
    }); 
});
app.use('/dishes',dishRouter);
app.use(express.static(__dirname+"/public"));
module.exports = dishRouter;