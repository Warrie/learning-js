//字符数排序
const readline =require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var pr=console.log;


r1.on('line',function(data){
    var obj={};
    var res=[];
    for(let i=0;i<data.length;i++){
        if(!obj[data[i]]){
            obj[data[i]]=1;
        }else{
            obj[data[i]]++
        }
    }
    pr(obj)
    for(var k in obj){
        res.push({k:k,v:obj[k]});
    }
    res=sortByValue(res,'v');
    pr(res);
    for(let i=0;i<res.length;i++){
        pr(res[i].k+'='+res[i].v);
    }
});

function sortByValue(arr,v){
    for(let i=arr.length-1;i>0;i--){
        for(let j=0;j<i;j++){
            if(arr[j][v]>arr[j+1][v]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}