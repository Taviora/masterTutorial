'use strict'

//Conexion con la base de datos MONGO
var mongoose = require('mongoose');
//exportarmos el app
var app = require('./app')
var port = 3700;

//Conexion con la base de datos MONGO
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
        .then(()=>{
            console.log("Conexion a la base de datos establecida satisfactoriamente...");

            //Creacion del servidor
            app.listen(port,() => {
                console.log("Servidor ejecutandose correctamente en la URL: localhost:3700");
            });
        })
        .catch(err => console.log(err));