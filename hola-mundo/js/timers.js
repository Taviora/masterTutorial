'use strict'

window.addEventListener('load',function(){

//timers

function intervalo(){

    var tiempo = setInterval(function(){

        console.log("Set interval ejecutando");
    
        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "30px";
        }else{
            encabezado.style.fontSize = "50px";
        }
        
     }, 1000);

     return tiempo;

}

 var tiempo = intervalo();
 
 var stop = this.document.querySelector("#stop");

 stop.addEventListener("click",function(){
     alert("Has parado el invervalo en bucle");
    clearInterval(tiempo);
 });

 var start = this.document.querySelector("#start");

 start.addEventListener("click",function(){
     alert("Has iniciado el invervalo en bucle");
     intervalo();
 });

});