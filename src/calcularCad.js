function cadena(palabra){
    var num = parseInt(palabra);
    const long = palabra.length;
    var sum=0;

    for(var i=0;i<long;i++){
        sum = parseInt(palabra)+sum;
    }

    num=sum;

    if(palabra == ""){
        num=0;
    }
    return num;
}

export default cadena;