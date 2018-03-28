function getUser(uc){
    console.log(`真正进入getU执行`);
    var p1=new Promise((resolve,reject)=>{
        console.log(`getU的异步开始...`);
        setTimeout(()=>{
            resolve( [1,2,3]);
            console.log(`getu异步结束，改状态resolve`);
        },1000);
    });
    // 等完城后执行回调函数
    p1.then((res)=>{
        console.log(`getU异步状态更新，调用回调函数...`);
        uc(res);
    })   
}
function getMovie(mc){
    console.log(`真正执行getM...`);
    var p1=new Promise((resolve,rej)=>{
        console.log(`getM异步开始`);
        setTimeout(()=>{
            resolve(310);
            console.log(`getM异步结束，resolve...`);
        },1000);
    });
    // 等完城后执行回调函数
    p1.then((res)=>{
        console.log(`getMresolve后调用回调函数...参数${res}`);
        mc(res);
    })   
}
function bookM(uid,mid,bc){
    console.log(`预订真正执行...`);
    var p1=new Promise((resolve,rej)=>{
        console.log(`预订开始异步`);
        setTimeout(()=>{
            resolve('预订成功！');
            console.log(`预订异步完，resolve...`);
        },1000);
    });
    // 等完城后执行回调函数
    p1.then((res)=>{
        console.log(`预订resolve后调用回调，参数${res}`);
        bc(res);
    }) 
}
function book(){
    console.log(`开始book.....`);
    var p1=new Promise(function(resolve,reject){
        getUser(function(userId){
            console.log(`getUser调用回调函数返回${userId}`);
            resolve(userId);
            console.log(`p1user--resolve`);
        });
    });
    var p2=new Promise(function(resolve,reject){
        
        getMovie(function(res){
            console.log(`getMovie调用回调函数返回${res}`);
            resolve(res);
            console.log(`p2movie--resolve`);
        })
    });
    return Promise.all([p1,p2]).then((uid,mid)=>{
        console.log(`p1,p2全部结束,进入总的回调函数，传入userid=${uid},movie=${mid}`)
        var p3=new Promise((resolve,reject)=>{
            console.log(`开始进行预订函数的pro`)
            bookM(uid,mid,function(res){
                console.log(`预订函数结束的回调，传入的结果为${res}`)
                resolve(res);
                console.log(`最后的p3状态改完`)
            })
        });

        return p3;    
    })
}

book().then((res)=>{console.log(res)});
