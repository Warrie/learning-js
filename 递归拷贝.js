function deepClone(parent){
    let child={};
    for(let key in parent){
        if(parent.hasOwnProperty(key)){//是自带属性
            let val=parent[key];
            if(typeof val==='object'){//判断是否对象
                if(Object.prototype.toString.call(val)==='[object Object]'){//判断是否对象，[object,Array]是数组
                    //对象，需要递归拷贝
                    child[key]=deepClone(val)//把对象值栽深拷贝到这个key中
                }else{
                    child[key]=val.slice(0);
                }
            }else{//普通值直接赋值
                child[key]=val;
            }
        }
    }
    return child;
}

let obj1={name:1,q:{e:1}};
let obj2=deepClone(obj1);

console.log(obj1.q===obj2.q);