function getUrlParam(sUrl, sKey) {
    var queryStr='';
    var obj={}; 
    if(sUrl.indexOf('?')==-1){//不带参数
        if(sKey){
            return ''
        }else{
            return obj;
        }
    }else{
        queryStr=sUrl.split('?')[1].split('#')[0];
        var queryArr=queryStr.split('&');
        queryArr.forEach(function(v,i,a){
            var arr=v.split('=');
            var key=arr[0];
            var value=arr[1];
            if(!obj.hasOwnProperty(key)){//不存在key
                obj[key]=value;
            }else{
                if(!Array.isArray(obj[key])){//不是数组
                    obj[key]=[obj[key]];//一个值变成数
                }
                obj[key].push(value);
            }
        })
    
        if(sKey){
            if(obj[sKey]){
                return obj[sKey];
            }else{
                return '';
            }
        }else{
            return obj;
        }
    }
}

