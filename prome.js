var p1=new Promise(function(res,rej){
    setTimeout(function(){
        console.log(111);
        res();
    },1000)
})

console.log(222)