var m={
    id:'w2',
    e:{}
};
var load=function(a,b){

    // a.aa=111;//a是对m.e这个对象的引用，可以给对象加上属性，是对对象本身的炒作，若果重新赋值，那么相当于把指针指向别的对象，不再是对m.e的引用，也就改不了m.e                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    // a={ff:1};
    b.e={ff:1};

    return b.a;
}

var res=load(m.e,m);
console.log(m.e)