var http = require('http');
var fs = require('fs');
var path = require('path');

var host = 'localhost';
var port = 3000;

var server = http.createServer(function(req,res){
    console.log('Request for '+req.url+' by method '+req.method);
    if(req.method=='GET'){
        var fileUrl;
        
        if(req.url=='/') fileUrl='/index.html';
        else fileUrl=req.url;

        var filePath = path.resolve('./public'+fileUrl);
        var fileExt = path.extname(filePath);

        if(fileExt == '.html'){
            fs.exists(filePath, function(exists){
                    if(!exists){
                        res.writeHead(404,{'content-type':'text/html'});
                        res.end('<h1>Error 404: '+fileUrl+' not found<h1>');
                        return;
                    }
                    res.writeHead(200,{'content-type':'text/html'})
                    fs.createReadStream(filePath).pipe(res);
                });
            }
            else{
                res.writeHead(404,{'content-type':'text/html'});
                res.end('<h1>Error 404: '+fileUrl+' not a HTML file</h1>');
            }
        }
        else{
                res.writeHead(404,{'content-type':'text/html'});
                res.end('<h1>Error 404: '+req.method+' not supported</h1>');
        }
});

server.listen(port, host, function(){
    console.log("Server running on http://"+host+":"+port+"/");
});