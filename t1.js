// 给字符串，求大括号的数据
const readline =require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var pr=console.log;
var res=[];
// r1.on('line',function(data){
//     var re=/{(\w+)}/g;
//     data.replace(re,function($1,$2){
//         res.push($2);
//         console.log($2);
//     })
// })

r1.on('line',function(data){
    data.trim()
    for(let i=0;i<data.length;i++){
        var str='';
        if(data[i]=='{'){
            var j=i+1;
            for(;data[j]!='}';j++){
                str+=data[j];
            }
            if(str.length>0){
                res.push(str);
                pr(str);
            }
            i=j;
            str='';
        }
    }
})