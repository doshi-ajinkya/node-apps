var http = require('http');

var host = 'localhost';
var port = process.env.PORT || 3000;

var server = http.createServer(function(req,res){
    console.log(req.headers);

    res.writeHead(200,{"content-type":"text/html"});
    res.end("<h1>Hello World</h1>");
});

server.listen(port, function(){
    console.log("Server running on http://"+host+":"+port+"/");
});