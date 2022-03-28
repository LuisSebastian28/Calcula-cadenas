function cadena(palabra){
    var num = parseInt(palabra);
    var long = palabra.length;
    var sum=0;

    for(var i=0;i<=long;i++){
        if( i%2 === 0){
            sum = parseInt(palabra[i])+sum;
        }
    }
    
    num=sum;

    if(palabra == ""){
        num=0;
    }
    return num;
}

export default cadena;