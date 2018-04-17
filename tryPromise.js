// new Promise((resolve,reject)=>{
//     throw new Error('bug!!!');
// }).catch(err=>{
//     console.log(err);
// })


// let p1=new Promise(function (resolve, reject) {
//     throw new Error('悲剧了，又出 bug 了');
//     });
//     p1.catch(function(err){
//     console.log(err);
//     });

Promise.reject(new Error("什么鬼"));