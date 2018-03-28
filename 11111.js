var arr;//将n条绳子的长度存入数组
var n;
var m;

function canDiv(x){
    var cnt=0;
    for(var i=0;i<arr.length;i++){
        cnt+=pareseInt(arr[i]/x);
    }
    return cnt>=m;//可以划分为m段
}

var l=0.0,r=1000000.0;
while(r-l>=1){//精确到整数，只要两端差小于1即可
    var mid=(L+R)/2;
    if(canDiv(mid)){
        l=mid;
    }else{
        r=mid;
    }
}
console.log(Math.floor(l));//输出右端点的整数部门

