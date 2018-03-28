function rgb2hex(sRGB) {
    var re=/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/;
    return sRGB.replace(re,function($0,$1,$2,$3){
        return '#'+toHex($1)+toHex($2)+toHex($3);
    });
    function toHex(str){
        return ('0'+(+(str)).toString(16)).slice(-2);
    }
   
}


console.log((255).toString(16));
console.log(parseInt(255,16));
    
   console.log(rgb2hex('rgb(255, 255 ,  255)'));