'use strict'

//switch

var edad = 66;
var mensaje = "";


switch(edad){
    case 18:
        mensaje = "Cumpliste la mayoria de edad";
    break;   
    case 25:
        mensaje = "Ya eres adulto";
    break;  
    case 40:
    mensaje = "Crisis de los cuarenta";
    break;  
    default:
    mensaje ="Tu edad es neutra";
    break;
}

console.log(mensaje);