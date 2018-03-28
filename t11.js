var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

rl.on('line',function(data){
    // var inarr=data.split('.');
    // for(let i=0;i<inarr.length;i++){
    //     inarr[i]=inarr[i].trim();
    //     inarr[i]=inarr[i].charAt(0).toUpperCase()+inarr[i].substring(1);
    // }
    // var str=inarr.join('. ')
    // var len=str.length;
    
    
    // console.log(str.substring(0,len-1));



    // var arr=[];
    // var str='';
    // for(let i=0;i<data.length;i++){
    //     if(data[i]!='.'){
    //         str+=data[i];
    //     }else{
    //         str+='.';
    //         arr.push(str[0].toUpperCase()+str.substring(1));
    //         str='';
    //     }
    // }
    // console.log(arr.join(' '));

    // data=data.trim()
    var str='';
    var flag=0;
    var isF=1;
    for(let i=0;i<data.length;i++){
        if(data[i]=='.'){
            flag=1;
        }
        
        if(isF&&data[i]>='a'&&data[i]<='z'){
            str+=data[i].toUpperCase();
            isF=0;
        }else if(isF){
            str+=data[i];
        }
        else{
            if(flag==0){str+=data[i];}
            else{
                if(data[i]>='a'&&data[i]<='z'){
                    str+=data[i].toUpperCase();
                    flag=0; 
                }else{
                    str+=data[i]
                }
            }
        }
        

    }
    console.log(str);

});