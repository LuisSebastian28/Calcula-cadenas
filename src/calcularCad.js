
function cadena(cadena){
    let expReg = /\d/g; 
    var num=0;
    if(cadena == ""){
        num=0;
    }
    if(cadena.length == 1){
        num=parseInt(cadena);
    }

    if(cadena.length>1){
        for(var i=0;i<cadena.length;i++){
            if(expReg.test(cadena[i])){
                num=num+parseInt(cadena[i]);
            }
        }
    }

    return num;
}

export default cadena;