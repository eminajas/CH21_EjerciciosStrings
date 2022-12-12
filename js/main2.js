/*
function invertirCadena(cad){
    let cadena = "Laura Aline";
    for (var i = cad.length - 1; i >= 0; i--) { 
        cadena += cad[i];
    }
    return cadena;
}*/
/*
//recorrer toda la cadema completa 
let nombre ="Abraham";
let almecen = "";
for(let index = nombre.length; index > -1; index--){
    //solo recorro la cadena
    console.log(nombre.charAt(index));
    almecen = almecen+nombre.charAt(index)
}
console.log(almecen);
*/


let nombre2 = "EMMANUEL";

function invertido(nombre) {
    
}

function resves(str){
    let tmpStr="";
    for (let indice = str.length-1; indice >-1;indice--){
        tmpStr +=str.charAt
    }
    return tmpStr;
}

/*

function palindromo(str){
    let tmpStr2="";
    for (let indice = str.length-1; indice >-1 ; indice--){
        tmpStr2 +=str.charAt;
        if(tmpStr2 == str){
            return "Es un palindromo";
        }else {
            return "no es un palindromo";
    }

}
}*/
//veriicar que es un palindromo
function resves2(str){
    let tmpStr="";
    for (let indice = str.length-1; indice >-1;indice--){
        tmpStr +=str.charAt
    }
    return tmpStr;
}
function esPalindromo(str){
    str = str.toLowerCase();
    str = str.replaceAll(" ", "");
    if (resves2(str)==str) 
        return true;
    return false;
}

//otro palindromo