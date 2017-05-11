var dishRouter = require('./Routes/dishRouter');
var promoRouter = require('./Routes/promoRouter');
var leaderRouter = require('./Routes/leaderRouter');
var http = require('http');
var morgan = require('morgan');
var express = require('express');

var host = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leadership',leaderRouter);
app.use(express.static(__dirname+"/public"));

app.listen(port,host, function(){
    console.log("Server listening on http://"+host+":"+port+"/");
});