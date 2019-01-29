'use strict'

//Eventos de raton

//usando onClick()
//var boton = document.querySelector("#boton");

function cambiarColor(){
    console.log("me has dado clcik");

    var bg = boton.style.background;

    if(bg == "green"){

        boton.style.background = "red";
    

    }else{
        boton.style.background = "green";
    }

    boton.style.padding ="10px";
    boton.style.border ="1px solid #ccc";
    
    return true;
}

//click
//es mas limpio el codigo porque puedo encapsular todo el codigo js en un fichero
//javascript
var boton = document.querySelector("#boton");

boton.addEventListener('click', function(){
    cambiarColor();
    this.style.border ="10px solid black"
});

//mouse over
boton.addEventListener('mouseover',function(){
    boton.style.background = "#ccc";
});

//mouse out
boton.addEventListener('mouseout',function(){
    boton.style.background = "blue";
});


//EVENTOS DE TECLADO Y FOCO

//focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus',function(){
    console.log("Estas haciendo focus dentro del input");
});


//blur
var input = document.querySelector("#campo_nombre");
input.addEventListener('blur',function(){
    console.log("Estas blur fuera del input");
});

//keydown
var input = document.querySelector("#campo_nombre");
input.addEventListener('keydown',function(event){
    console.log("Estas pulsando esta tecla",String.fromCharCode(event.keyCode));
});

//keypress
var input = document.querySelector("#campo_nombre");
input.addEventListener('keypress',function(event){
    console.log("Presionaste esta tecla",String.fromCharCode(event.keyCode));
});

//keyup
var input = document.querySelector("#campo_nombre");
input.addEventListener('keyup',function(event){
    console.log("Soltaste esta tecla",String.fromCharCode(event.keyCode));
});