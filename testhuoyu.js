function test(a,b){
    var c=a||b;
    console.log("|||||||||",c);
    var d=a&&b;
    console.log("&&&&&&&&&",d);
}
test(3<2,'hhhh');