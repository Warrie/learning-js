function formatDate(oDate, sFormation) {
    var obj={
        'yyyy':oDate.getFullYear(),
        'yy':(''+oDate.getFullYear()).slice(-2),
        'MM':('0'+(oDate.getMonth()+1)).slice(-2),
        'M':oDate.getMonth()+1,
        'dd':('0'+oDate.getDate()).slice(-2),
        'd':oDate.getDate(),
        'HH':('0'+oDate.getHours()).slice(-2),
        'H':oDate.getHours(),
        'hh':('0'+oDate.getHours()%12).slice(-2),
        'h':oDate.getHours()%12,
        'mm':('0'+oDate.getMinutes()).slice(-2),
        'm':oDate.getMinutes(),
        'ss':('0'+oDate.getSeconds()).slice(-2),
        's':oDate.getSeconds(),
        'w':['日', '一', '二', '三', '四', '五', '六'] [oDate.getDay()],
    }
    
    var res=sFormation.replace(/([a-z]+)/ig,function($1){
        return obj[$1];
    });
    return res;
}

console.log(formatDate(new Date(1409894060000), 'yy-M-dd h:m:ss 星期w'));