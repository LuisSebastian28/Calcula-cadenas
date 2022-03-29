function cadena(cadena){
    var num=0;
    if(cadena == ""){
        num=0;
    }
    if(cadena.length == 1){
        num=parseInt(cadena);
    }

    if(cadena.length>1){
        for(var i=0;i<cadena.length;i++){
            if(cadena[i]!=","){
                num=parseInt(cadena[i])+num;
            }
        }
    }

    return num;
}

export default cadena;