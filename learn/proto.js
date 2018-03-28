function Student(props){
    this.name=props.name||'Unnamed';
}
Student.prototype.hello=function(){
    console.log('hello, '+this.name+'!');
}

function PrimaryStudent(props){
    Student.call(this,props);
    this.grade=props.grade||1;
}
function F(){

}
F.prototype=Student.prototype;
PrimaryStudent.prototype=new F();
PrimaryStudent.prototype.constructor=PrimaryStudent;

var ps=new PrimaryStudent({name:'xiaom',grade:3});
ps.hello();