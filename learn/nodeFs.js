'use strict';

var fs=require('fs');

// fs.readFile('sample.txt','utf-8',function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);//文本文件用utf-8编码,string
//         var buf=Buffer.from(data,'utf-8');
//         console.log(buf);
//         var text=buf.toString('utf-8');
//         console.log(text);
//     }
// });
// try{
//     var data=fs.readFileSync('sample.txt','utf-8');
//     console.log(data);
// }catch(err){
//     console.log(err);
// }

// console.log('开始了吗？')

// var jpg
// fs.readFile('5.jpg',function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//         console.log(data.length+'bytes');
        
//     }
// })

var data='你好输出文件';
fs.writeFile('output.txt',data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('写好了');
    }
});