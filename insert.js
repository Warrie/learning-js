var arr=[12,13,6,28,7,9];

function insert(arr){
    var handArr=[];
    handArr.push(arr[0]);

    for(var i=1;i<arr.length;i++){
        var cur=arr[i];
        for(var j=handArr.length-1;j>=0;j--){
            if(handArr[j]<cur){
                handArr.splice(j+1,0,cur);//从这个数开始删，插到前面
                break;
            }else if(j==0){
                handArr.unshift(cur);
            }
        }
    }

    return handArr;
}

console.log(insert(arr));