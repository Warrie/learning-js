let name=1;
let obj={
    name:2,
    fn:function(){
        setTimeout(function(){//这个匿名函数的this指向window,setTimeout如果没有特殊指向，setInterval和setTimeout的回调函数中this的指向都是window。这是因为JS的定时器方法是定义在window下的。但是平时很多场景下，都需要修改this的指向。
            // console.log(this);
            console.log(this.name);
        })
    }    
}
let fn =obj.fn;
fn();
//首先fn()的调用者为window,所以执行的函数中this都是window


//2
let name=1;
let obj={
    name:2,
    fn:function(){
        setTimeout(()=>{//箭头函数没有this,要往上层函数找，找到属性fn的this，属性的this不是指向obj，指向调用的window
            console.log(this.name);
        })
    }    
}
let fn =obj.fn;
fn();

//3
let name=1;
let obj={
    name:2,
    fn:()=>{//也没有this,往上找,obj不算作用域，就找到了window作用域的this
        setTimeout(()=>{//没有this往上找
            console.log(this.name);
        })
    }    
}
let fn =obj.fn;
fn();