function namespace(oNamespace, sPackage) {
    var arr=sPackage.split('.');
    var j=oNamespace;
    
    for(var i=0;i<arr.length;i++){
        if(j.hasOwnProperty(arr[i])){
            //有属性就看是不是对象
            if(typeof j[arr[i]]!='object'){
                j[arr[i]]={};
            }
            //
        }else{//没有这个属性加上，也要往下移动
            j[arr[i]]={}
        }
        j=j[arr[i]];//往下移动
    }
    return oNamespace;
}

// console.log(namespace({a: {test: 1, b: 2}}, 'a.b.c.d'))
