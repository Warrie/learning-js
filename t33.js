var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var pr=console.log;
rl.on('line',function(data){
    var obj={};
    
    var flag=0;
    for(let i=0;i<data.length;i++){
        if(data[i]=='T'||data[i]=='D'||data[i]=='W'){
            if(obj[data[i]]){
                obj[data[i]].a.push(parseInt(data[i-1]));
            }else{
                obj[data[i]]={v:data[i]};
                obj[data[i]].a=[];
                obj[data[i]].a.push(parseInt(data[i-1]));
            }
        }
    }
    var num=0;
    for(var k in obj){
        num++;
        var arr=obj[k].a.sort(function(a,b){return a-b});
        obj[k].m=new Array(9);
        for(let i=0;i<obj[k].m.length;i++){
            obj[k].m[i]=0;
        }
        for(let i=0;i<arr.length;i++){
                obj[k].m[arr[i]]++;
        }
    }

    if(num>2){
        pr('lose'); 
    }
    
});

function isThree(arr){
    var flag=-1;
    var total=arr.reduce(function(s,v,i,a){return s+v},0);
    if(total%3){
        return flag;
    }else{
        
    }
}
