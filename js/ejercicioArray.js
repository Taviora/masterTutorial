'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra
   y su indice (se valorara el uso de funciones)
*/

function mostrarArray(elementos, textoCustom=""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento,index) => {
        document.write("<li>"+elemento+"</li>")
    });
    document.write("</ul>");
}
//Pedir numeros
var numeros = [];

for(var i = 0; i <= 5; i++){
   //numeros[i] = parseInt(prompt("Introduce un numero",0));
   numeros.push( parseInt(prompt("Introduce un numero",0)));
}

//mostrar en el cuerpo de la pagina
mostrarArray(numeros);

//Mostrar array en la consola
console.log(numeros);

//ordenarlo y mostrarlo

//numeros.sort();//ordanado alfabeticamente
numeros.sort(function(a,b){return a-b});//ordenado numericamente
mostrarArray(numeros, 'Array ordenado');

//invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'Revertido');

//cuantos elementos tiene el array 
document.write("<h1>El array tiene: "+numeros.length+" elementos</h1>");

//busqueda de un elemento
var busqueda = parseInt(prompt("Busca un numero",0));

var posicion = numeros.findIndex(numero => numero==busqueda);

if(posicion && posicion != -1){
    document.write("<h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1>");
}else{
    document.write("<h1>No encontrado</h1");
}

