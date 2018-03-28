var arr=[12,13,6,28,7,9]

function quick(arr){
    if(arr.length<2){//不用执行那些代码
        return arr;//返回原数组
    };
    var centerIndex=Math.floor(arr.length/2);
    var centerValue=arr.splice(centerIndex,1)[0];//splice得到截取的数组
    // 遍历剩余数组形成左右数组
    var leftArr=[],
        rightArr=[];
    for(var i=0;i<arr.length;i++){
        var cur=arr[i];
        cur<centerValue?leftArr.push(cur):rightArr.push(cur);
    }

    return quick(leftArr).concat(centerValue,quick(rightArr));//拼起来传出一个数组
}

console.log(quick(arr));