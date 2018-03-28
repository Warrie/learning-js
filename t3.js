//函数调用
const readline =require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var pr=console.log;
var line=-1;
var len=0;
var obj={}
r1.on('line',function(data){
    pr(len);
    var inarr=data.split(' ');
    if(line==-1){
        len=inarr[0];
        line=1;
    }else{
        obj[inarr[0]]={
            child:inarr.slice(1),
            flag:0
        }
        len--;
        if(len==0){}
    }
    if(len==0){
            pr(obj);
            prRes(obj);
            line=-1;
            obj={};
    }
});
function prRes(obj){
    for(var k in obj){
        if(obj[k].child.length>0){
            obj[k].child.forEach(element => {
                if(obj[element]){
                    obj[element].flag=1;
                }
            });

        }
    }
    for(var k in obj){
        if(obj[k].flag==0){
            if(k!='0'){
                pr(k);
            }
            
        }
    }

}