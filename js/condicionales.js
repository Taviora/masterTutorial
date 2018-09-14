'use strict'

//condicional if
//si A es igual o otra condicion como > ,< a B entonces has alguna acción

var edad1 = 30;
var edad2 =12;
//si esto se cumple
if(edad1 > edad2){
    //ejecuta esto
    console.log("edad uno es mayor que edad dos");
}else{
    console.log("Edad uno es menor que edad dos");
}
/*
//operadores relacionales
   Mayor: >
   Menor: <
   Mayor o igual: >=
   Menor o igual: <=
   Igual: ==
   Distinto: !=
*/
var edad = 78;
var nombre = "Gustavo Solano";

if(edad>=18){
  //es mayor de edad
  console.log(nombre+" tiene "+edad+" años, es mayor de edad");
     
  if(edad <= 33){
   console.log("Todavia eres millenial");
  }else if(edad>=70){
    console.log("Eres adulto mayor");
  }else{
    console.log("Ya no eres millenial");
  }
}else{
    //es menor de edad
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}