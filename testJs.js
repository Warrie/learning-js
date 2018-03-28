const readline =require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var print=console.log;
var inputArr = [];
r1.on('line',function(input){
    inputArr.push(input);
    print(inputArr[0]);
    print(+inputArr[0]);
    print('111');
    print(typeof(+inputArr[0]));
    inputArr=[];
});
var a=111;
print(a)