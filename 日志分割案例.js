function split_log_row(row){
    let res=[];
    let temp=[];
    let newRow=row.replace(/\'([^\']+)\'/g,function(){
        temp.push(arguments[1]);
        return '_N_';
    });
    // console.log(newRow);
    let arr=newRow.replace(/\s+/g,' ').split(' ');
    let i=0;z
    arr.forEach(element => {
        if(element=='_N_'){
            res.push(temp[i++]);
        }else{
            res.push(element);
        }
    });
    return res;
}

let str="abc 'a b' '  ss'"
console.log(split_log_row(str))