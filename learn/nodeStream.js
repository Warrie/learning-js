'use strict';

var fs=require('fs');

var rs=fs.createReadStream('streamSample.txt','utf-8');
var cnt=0;
rs.on('data',function(chunk){
    console.log(cnt++);
    // console.log('data:',chunk);
});

rs.on('end',function(){
    console.log('END');
});

rs.on('error',function(err){
    console.log('err',err);
})