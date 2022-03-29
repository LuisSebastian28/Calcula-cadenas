function cadena(cadena){
    var num=0;
    var aux="";
    if(cadena == ""){
        num=0;
    }
    if(cadena.length == 1){
        num=parseInt(cadena);
    }

    if(cadena.length>1){
        for(var i=0;i<cadena.length;i++){
            if((cadena[i]!=",")&&(cadena[i]!="-")){
                num=num+parseInt(cadena[i]);
            }
        }
    }

    return num;
}

export default cadena;