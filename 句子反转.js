const readline=require('readline');
const r1=readline.createInterface({input:process.stdin,output:process.stdout});

r1.on('line',function(data){
    var str=data.trim();
    var str1=str.replace(/\s+/g,' ');
    var arr=str1.split(' ');
    console.log(arr.reverse().join(' '));
})