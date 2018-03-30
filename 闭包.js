function a(b){
    return function (c){
        return b+c;
    }
}
a(1)(2);
console.log(a);

a(1);
console.log(a);

let d=function (e){
    return function(f){
        return e+f;
    }
}()
d;
console.log(d);//返回结果被外界变量持有，就不销毁