const readline=require('readline');
const r1=readline.createInterface({input:process.stdin,output:process.stdout});

r1.on('line',function(data){
    var arr=[];
    for(var i=0;i<data.length;i++){
        if(data[i].toUpperCase()=='W'){//万存1-9
            arr.push(Number(data[i]-1));
        }else if(data[i].toUpperCase()=='T'){//筒存11-19
            arr.push(Number(data[i]-1)+10);
        }else if(data[i].toUpperCase()=='B'){//筒存21-29
            arr.push(Number(data[i]-1)+20);
        }
    }
    arr.sort(function(a,b){
        return a-b;
    });//从小到大排序
    //分成连续子序列
    var reArr=[];
    
    var temp=[arr[0]];
    for(var j=1;j<arr.length;j++){
        if(arr[j]-a[j-1]<2){//与前一个连续
            temp.push(a[j]);
        }else{//不再连续
            reArr.push(temp);
            temp=[arr[j]];//不连续的这个从头开始
        }
    }

    var flag=true;
    reArr.forEach((v,i,a)=>{
        if(!isStatis(v)){
            //每个连续子序列判断是否满足
            flag=false;
            break;
        }
    });
    console.log(flag);

});

//判断是否符合条件1
function isStatis(arr){
    var flag=true;
    if(arr.length%3!=0){
        flag=false;
    }else{
        if(arr.length==3){//递归到只剩三个
            if(!(arr[0]==arr[1]&&arr[0]==arr[2])||!(arr[0]==arr[1]-1&&arr[1]==arr[2]-1)){
                flag=false;
            }
        }else{
            //最小的牌小于3个
            if(arr[2]>arr[0]){
                var a=arr[0];
                if(arr[1]==arr[0]){
                    
                }else{
                    var arr1=arr.slice(1).splice(arr.indexOf(a+1),1);
                    var arr1=arr1.splice(arr1.indexOf(a+2),1);
                }
            }else{
                flag=isStatis(arr.slice(3));
            }
        }        
    }
}
