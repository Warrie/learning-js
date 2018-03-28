var readline = require('readline');
var r1 = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
var line = -1;
var len = 0;
var arr = [];
var obj = {};
 
r1.on('line',function(input){
    console.log(`len=${len},line=${line}`)
    input = parseInt(input);
    if(line == -1){
        line = 1;
        len = input;
        arr = [];
        obj = {};
    }else{
        if(!obj[input]){
            obj[input] = 1;
            arr.push(input);
        }
        if(len === 1){
            console.log(arr.sort(function(a,b){return a-b;}).join("\n"));
            line = -1
        }
        len--;
    }
})