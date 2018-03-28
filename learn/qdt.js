// var re=/^[a-zA-Z][a-zA-Z0-9_]{4,19}$/;

// var str='abcdefg';
// if(/efg/.test(str)){
//     str.substr(str.indexOf('efg'),3);
// }

// var number=[1,2,3,4,5];
// var obj={};
// console.log(Math.max.apply(obj,number))

var arr=[null,NaN,{},{q:1}];
console.log(arr.indexOf({q:1}))//NaN与{}都为-1，因为自身比较不相等，{}指针比较可以相等
console.log(arr[1]==arr[1])//false
console.log(arr[2]==arr[2])//true