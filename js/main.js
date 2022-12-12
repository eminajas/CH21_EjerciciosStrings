//recorrer toda la cadema completa 
let nombre ="Abraham";
nombre = nombre.toUpperCase();
//una variabre que va a ser la trea y un contador final 
let letra = "";
let contFinal = 0;

for(let index = 0; index < nombre.length; index++){
    //solo recorro la cadena
    console.log(nombre.charAt(index));
    let contTemp = 1;//para que empiecen al mismo tiempo, inicializando en que letra voy
    for (let cont = index+1; cont < nombre.length; cont++) {
        //index+1 es para no empezar desde cero y ya funciona para comparar
        if (nombre.charAt(index) == nombre.charAt(cont)) { //si son iguales lo incremento en el elemento
            contTemp ++;//si son iguales aumento l contador
            //temp almacena las repetidas un for recorre la palabra y el otro compara
        }//cuando cont temp almacena cada letra por cada ciclo que se cumple
        if(contTemp>contFinal){ //por cada letra checa cuantas veces se almacenaron letras repetidas
            contTemp = contTemp;
            letra=nombre.charAt(index);
        } //si el contardor temporal es mayor al temporal final entonces ese es el mas grande
    }
    console.log(letra,contFinal);
}