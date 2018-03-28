const readline=require('readline');
const r1=readline.createInterface({input:process.stdin,output:process.stdout});

var arr=[];
r1.on('line',function(data){
    arr.push(data);
    if(arr.length==2){
        var n=+arr[0];
        var num=arr[1].split(' ');
        console.log(num);
        num.sort(function(a,b){
            return parseInt(a+b)>parseInt(b+a)?false:true
        });//按照首字母字母排序,位数少的在前面
        var res='';
        for(var i=0;i<num.length;i++){
            res+=num[i];
        }
        console.log(res);
        arr=[];
    }
})