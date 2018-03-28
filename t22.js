var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var line=-1;
var len=0;
var res=[];
var pr=console.log;
rl.on('line',function(data){
    if(line==-1){
        len=parseInt(data);
        line=1;
    }else{
        var inarr=data.split(' ');
        for(let i=0;i<inarr.length;i++){
            inarr[i]=parseFloat(inarr[i])
        }
        var total=0.0;
        for(let i=1;i<inarr.length;i++){
           total+=inarr[i]
        }
        var ave=total/inarr[0];
       
        var num=0;
        for(let i=1;i<inarr.length;i++){
            if(inarr[i]>ave){
                num++;
            }
        }
        // pr('111==='+num)
        res.push(num);

        len--
        if(len==0){
            console.log(res.join('\n'));
            line=-1;
            res=[];
        }
    }
})