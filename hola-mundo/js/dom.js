'use strict'

//DOM -> documento object model

function cambiaColor(color){
   caja.style.background = color;


}
// conseguir elementos con un ID concreto


var caja = document.getElementById("micaja");

caja.innerHTML = "Gustavo Solano Jimenez en la caja";
caja.style.background = "red";
caja.style.padding ="20px";
caja.style.color = "white";
caja.className = "hola";

//conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");

var hr = document.createElement("hr");

//todosLosDivs.forEach((valor,indice) => {

var valor; 

for(valor in todosLosDivs){

   if(typeof todosLosDivs[valor].textContent == 'string'){
   var parrafo = document.createElement("p");
   var texto = document.createTextNode(todosLosDivs[valor].textContent);
   parrafo.append(texto);
   document.querySelector('#miseccion').appendChild(parrafo);
   }
}

seccion.append(hr);
//});

/*var contenidoTexto = todosLosDivs[2];
contenidoTexto.innerHTML = "Soy el rey Leon";
contenidoTexto.style.background = "red";
console.log(todosLosDivs);
console.log(contenidoTexto);
*/


//conseguir elementos por su clase css

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
var div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
    
        divsRojos[div].style.background = "red";

    }
  
}




//console.log(caja);
