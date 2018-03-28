const readline=require('readline');
const r1=readline.createInterface({input:process.stdin,output:process.stdout});

var arr=[];
var len=0;
var line=-1,
    tree={},
    maxdeep=0;//高度又是一个只跟前一个有关的数据，动态规划，遍历填充tree
    // console.log(`len====${len}`)
r1.on('line',function(data){
    // console.log(`len=${len},line=${line}`)
    if(line==-1){
        len=+data-1;
        // console.log('l===='+len)
        line=1;
    }else{
        if(len>1){
            // console.log(111);
            var arr=data.trim().split(' ');
            var parent=arr[0],
                son=arr[1];
                console.log(`parent=${parent},son=${son}`)
            if(!tree[parent]){
                tree[parent]={deep:0,son:[son]};//不存在初始化
                console.log('=='+tree[parent].son);
            }else{
                tree[parent].son.push(son);
            }
            if(!tree[son]){
                tree[son]={deep:tree[parent].deep+1,son:[]}
                if(maxdeep<tree[son].deep){
                    maxdeep=tree[son].deep
                }
            }
            // console.log(`tree= ${tree}`)
           
        }else{
            console.log(maxdeep);
            maxdeep=0;
            line=-1;
            tree={};
        }
        len--;
    }
    
})