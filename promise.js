function timeout(ms){
    console.log('in time')
    return new Promise((resolve)=>{
        console.log('in resolve')
        resolve();
        // setTimeout(resolve,ms);
    })
}

timeout(2000).then(()=>{
    console.log('done');
})
// timeout(2000);

var getJSON=function(url){
    var p= new Promise(function(resolve,reject){
        var client=new XMLHttpRequest();
        clinet.open('get',url);
        client.onreadystatechange=handle;
        client.send();

        //什么时候resolve？
        function handle()
        {
            if(this.status===200){
                resolve(this.response);
            }else{
                reject(new Error(this.stausText));
            }
        }    
    });

    return p;
}

getJSON('/posts.json').then(function(json){
    consolelog(json);
})