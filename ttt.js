const readline=require('readline');
const r1=readline.createInterface({input:process.stdin,output:process.stdout});

var arr=[];
r1.on('line',function(data){
    arr.push(data);
    if(arr.length==2){
        var n=+arr[0];
        var num=arr[1].split(' ');
        num.sort();//按照首字母字母排序
        console.log(num);
        var res='';
        for(var i=num.length-1;i>=0;i--){
            res+=num[i];
        }
        console.log(res);
        arr=[];
    }
})