Array.prototype.uniq = function () {
    var res=[];
    var hasNaN=false;
    for(var i=0;i<this.length;i++){
        if(res.indexOf(this[i])==-1){
            if(this[i]!=this[i]){//是NaN
                if(!hasNaN){
                    res.push(this[i]);
                    hasNaN=true;
                }
            }else{
                res.push(this[i]);
            }
        }  
    }
    return res;
}

console.log([{},{},NaN,NaN,1].uniq());
console.log({}=={});
var arr=[{},{},NaN,NaN,1]
console.log(arr.indexOf(arr[2]))