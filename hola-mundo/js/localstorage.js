'use strict'

//Localstorage

//comprobar disponibilidad del localstorage
if(typeof(Storage) !== 'undefined'){
   
    console.log("localstorage disponible");

}else{

    console.log("local storage no dispobible");
}

//guardar datos
localStorage.setItem("titulo","Curso de javascript");

//recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//guardar objetos
var usuario = {
    nombre: "Gustavo Solano",
    email: "gus20solji@gmail.com",
    edad: 24
};

//se convierte el objeto a un json string con JSON.stringify
localStorage.setItem("usuario",JSON.stringify(usuario));

//recuperar objeto

var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#peliculas").append(" "+userjs.nombre);

//borrar la memoria del localstorage
localStorage.removeItem("usuario");

//borrar todo el contenido
localStorage.clear();