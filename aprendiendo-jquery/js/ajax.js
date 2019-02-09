$(document).ready(function(){


    //metodo LOAD nos permite hacer una peticion ajax por GET
        //$('#datos').load('https://reqres.in/');

    //GET Y POST

    $.get("https://reqres.in/api/users", {page: 3},function(response){
        response.data.forEach((element,index) =>{
            $('#datos').append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
            
    });
 

    $('#formulario').submit(function(e){
        e.preventDefault();

        var usuario = {
            name: $('#name').val(),
            email: $('#email').val()
        };
    
        /*
        {$.post($(this).attr("action"),usuario, function(response){
          console.log(response);
        }).done(function(){
            alert("usuario añadido correctamente");
        });}
        */
        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario");
            },
            success: function(response){
                console.log(response);
            },
            error:function(){
                console.log("Ocurrio un error");
            },
            timeout: 2000
        });
        return false;
    });

});