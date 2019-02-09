'use strict'

/*
que nos diga si un numero es par o impar
1. ventana que pida el numero
2. si metemos un numero no valido que vuelva a pedir el numero
*/

var numero = parseInt( prompt("Introduce un numero",0));

while(isNaN(numero)){

    numero = parseInt( prompt("Introduce un numero",0));
}

if(numero%2 == 0){

    alert("Es un numero par");

}else{
    alert("Es un numero impar");
}
