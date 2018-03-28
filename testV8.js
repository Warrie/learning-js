const readline =require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var obj={};
var line=-1;
var len=0;
var pr=console.log;
r1.on('line',function(data){
    
    if(line==-1){
        len=parseInt(data);//第一行长度
        pr(len)
        line=1;
    }else{
            pr(len)
            var inarr=data.split(' ');
            if(obj[inarr[0]]){
                obj[inarr[0]]+=parseInt(inarr[1]);
            }else{
                obj[inarr[0]]=parseInt(inarr[1])
                ;
            }
            len--;
            if(len==1){
            var res=sortByKey(obj,'k');
            for(let i=0;i<res.length;i++){
                console.log(res[i].join(' '));
            }
            line=-1;
            obj={};
            len=0;
        }
    }
});
function sortByKey(obj,key){
    var arr=[];
    for(var k in obj){
        arr.push([parseInt(k),obj[k]]);
    }
    return arr.sort(function(a,b){return a[0]-b[0]});
}