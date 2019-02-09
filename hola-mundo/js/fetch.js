'use strict'

//fetch y peticiones a servicios / apis rest

var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_usuario = document.querySelector("#usuario1");

//metodo fecth ingresa a un servicio remoto y 
//los convierte a json para poder manipularlos

getUsuarios()
    .then(data => data.json())
    .then(data => {
        
        listadoUsuarios(data);

        
        return getInfo();
    })
    .then(data => {
        console.log(data);
        div_profesor.innerHTML = data;
        return getUsuario2();
    })
    .then(data => data.json())
    .then(usuario1 => {
        mostrarUsuario(usuario1);

        
    })
    .catch(error =>{
        console.log(error);
    })
    

function getUsuarios(){

    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getUsuario2(){
    return fetch('https://jsonplaceholder.typicode.com/users/1');
}

function getInfo(){
    
    var profesor = {
        nombre: 'Gustavo',
        apellidos: 'Solano',
        correo: 'gus20solji@gmail.com'
    };

    return new Promise((resolve,reject)=> {   

        var profesor_string = "";
        
        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string' || profesor_string == ' ')return reject('error');

        
            return resolve(profesor_string);
        },3000);
        

       

    })

    

}
function listadoUsuarios(usuarios) {

    usuarios.map((user,i)=>{
        let nombre = document.createElement('h3');
        nombre.innerHTML = i + "- "+ user.name 

        //enviamos la informacion al div
        div_usuarios.appendChild(nombre);

        //ocultar el span de loading
        document.querySelector(".loading").style.display = 'none';
    });
        
}

function mostrarUsuario(user) {

    
        let nombre = document.createElement('h4');
        nombre.innerHTML = "El primer usuario es:" + " "+  user.name 

        //enviamos la informacion al div
        div_usuario.appendChild(nombre);

        //ocultar el span de loading
        document.querySelector(".loading2").style.display = 'none';
  
        
}