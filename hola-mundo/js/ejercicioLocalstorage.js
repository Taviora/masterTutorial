'use strict'

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit',function(){
    var titulo = document.querySelector("#addmovie").value;
    if(titulo.length >= 1){
        localStorage.setItem(titulo,titulo);
    }
    
});

var ul = document.querySelector("#peliculas-list");
for(var i in localStorage){
    console.log(localStorage);

    if(typeof localStorage[i] == 'string'){
        var li =  document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
    
}

var formulario2 = document.querySelector("#formdeletepeliculas");

formulario2.addEventListener('submit',function(){
    var titulo = document.querySelector("#deletemovie").value;
    if(titulo.length >= 1){
        localStorage.removeItem(titulo,titulo);
    }
    
});