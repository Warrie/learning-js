var e=arguments[0];//获取传入dom元素
var i=e;
var res=[];
while(i.tagName!=html){
    if(i.id){
        res.unshift('#'+i.id);
    }else if(i.className){
        var str=i.className.replace(/\s+/g,'.');
        if(str[0]=='.'){
            res.unshift(str);
        }else{
            res.unshift('.'+str);
        }
    }else{
        res.unshift(i.tagName);
    }
    i=i.parentNode;
}
res.unshift('html');
return res.join(' ');