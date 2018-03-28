'use strict';

var fs=require('fs'),
    url=require('url'),
    http=require('http'),
    path=require('path');

var root=path.resolve(process.argv[2]||'.');
console.log('statc root dir:'+root);

var server=http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    var filepath=path.join(root,pathname);
    fs.stat(filepath,function(err,stats){
        if(!err&&stats.isFile()){
            console.log('200'+req.url);
            res.writeHead(200);
            fs.createReadStream(filepath).pipe(res);
        }else if(!err&&stats.isDirectory){
            var newFilePath=path.join(filepath,'index.html');
            console.log('newFilePath: '+newFilePath);
            fs.readdir(filepath,function(err,files){
                // console.log('files: '+files)
                if(err){
                    res.end(err);
                }else if(files.includes('index.html')){
                    res.writeHead(200);
                    fs.createReadStream(newFilePath).pipe(res);
                }else if(files.includes('default.html')){
                    newFilePath=path.join(filepath,'default.html')
                    res.writeHead(200);
                    fs.createReadStream(newFilePath).pipe(res);
                }else{
                    res.writeHead(404);
                    res.end('404 Not Found');
                }
            })
        }
        else{
            console.log('404'+res.url);
            res.writeHead(404);
            res.end('404 Not Found');
        }
    })
});

server.listen(8080);
console.log('server is running at http://127.0.00.1:8080/');