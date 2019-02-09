'use strict'

//transformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso de javascript";
var texto2 = "Es un buen curso";

 var dato = numero.toString();
     dato = texto1.toUpperCase();
     dato = texto2.toLowerCase();
 console.log(dato);

 //calcular longitud de un texto

 var nombre = "Gustavo Solano Jimenez";
     nombre = ["Hola", "Adios"];
 console.log(nombre.length)

 //concatenar -->unir textos

//var textoTotal = texto1 +" "+ texto2;

var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);

//Busqueda de texto

var busqueda = texto1.indexOf("curso");

console.log(busqueda);