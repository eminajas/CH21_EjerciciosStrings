

let btnEnviar = document.getElementById("btnEnviar");
btnEnviar =document.addEventListener("click",function(event){
    event.preventDefault();

    let exampleForControlInput1 = document.getElementById("exampleForControlInput1");
    let exampleForControlTextarea1 = document.getElementById("exampleForControlTextarea1");
    let alertError = document.getElementById("alertError");
    alertError.style.display="none";
    //value del tex area tengo los 20 carecteres o mas

 if (exampleForControlTextarea1.value.trim().length < 20){//el trim para eliminar espacios
    alertError.innerHTML = "El mensaje debe contener 20 carcteres o mas";
    alertError.style.display="block";
 }
})