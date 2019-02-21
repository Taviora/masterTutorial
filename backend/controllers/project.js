'use strict'

var Project = require('../models/project');
var fs = require('fs');
var path = require('path');

var controller = {
    home:function(req,res){
        return res.status(200).send({
            message: 'Soy la home'
        });
    },

    test:function(req,res){
        return res.status(200).send({
            message: 'Soy el metodo o accion test del controlador project'
        });
    },

    saveProject:function(req,res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.langs = params.langs;
        project.year = params.year;
        project.image = null;
        
        //guardar el document en mongo
        project.save((err,projectStored) =>{
            if(err) return res.status(500).send({ message: 'Error al guardar el documento'});

            if(!projectStored) return res.status(404).send({ message: 'No se ha podido guardar el documento'});

            return res.status(200).send({ project: projectStored });
        });

    },

    getProject: function(req,res){
        var projectId = req.params.id;

        //este if es solo si el parametro es opcional en la ruta del archivo rutas
        if( projectId == null) return res.status(404).send({ message: 'El documento no existe'});

        Project.findById(projectId, (err,project) => {

            if(err) return res.status(500).send({ message: 'Error al devolver los datos'});

            if(!project) return res.status(404).send({ message: 'No se puede eliminar ese proyecto'});

            return res.status(200).send({
                 project: project
            });
        });
    },

    getProjects: function(req,res){

        Project.find({}).sort('-year').exec((err,projects) => {

            if(err) return res.status(500).send({ message: 'Error al devolver los datos'});
             
            if(!projects) return res.status(404).send({ message: 'No hay proyectos que mostrar'});
        
            return res.status(200).send({
                projects
            });
        });
    },

    updateProject:function(req,res){
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId,update, {new:true}, (err,projectUpdated) => {

            if(err) return res.status(500).send({ message: 'Error al actualizar los datos'});
             
            if(!projectUpdated) return res.status(404).send({ message: 'No existe el proyecto para actualizar'});
        
            return res.status(200).send({
                projectUpdated
            });
        });

    },

    deleteProject:function(req,res){
        var projectId = req.params.id;

        Project.findByIdAndDelete(projectId,(err,projectRemoved) =>{

            if(err) return res.status(500).send({ message: 'No se ha podido borrar el proyecto'});
             
            if(!projectRemoved) return res.status(404).send({ message: 'No existe el proyecto para borrar'});
        
            return res.status(200).send({
                projectRemoved
            });

        });
        
    },

    uploadImage: function(req,res){
        var projectId = req.params.id;
        var fileName = 'archivo no subido...';

        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('/');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('.');
            var fileExt = extSplit[1];

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

                Project.findByIdAndUpdate(projectId,{image:fileName}, {new:true}, (err,projectUpdated) => {


                    if(err) return res.status(500).send({ message: 'La imagen no se ha subido'});
                    
                    if(!projectUpdated) return res.status(404).send({ message: 'El proyecto no existe'});
                
                    return res.status(200).send({
                        project:projectUpdated
                    });

                });

            }else{
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({
                        message: 'La extension no es valida'
                    })
                });
            }

        }else{
            return res.status(200).send({
                message: fileName
            });
        }


    },

    //metodo para retornar la imagen guardada en servidor
    getImageFile(req,res){

        var file = req.params.image;

        //ruta de la imagen
        var path_file = './uploads/'+file;

        fs.exists(path_file,(exists) =>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    message: 'No existe la imagen'
                });
            }
        });

    }

};

module.exports = controller;