$(document).ready(function(){
 
    //MouseOVER Y MouseOUT
    var caja = $('#caja');

  /*
    caja.mouseover(function(){
        $(this).css("background","green");
    });

    caja.mouseout(function(){
        $(this).css("background","white");
    });
  */

    function cambiaVerde(){
        $(this).css("background","green");
    };

    function cambiaRojo(){
        $(this).css("background","red");
    };

    //Hover
    caja.hover(cambiaVerde,cambiaRojo);

    //Click, Doble click
    caja.click(function(){
        $(this).css("background","blue")
                .css("color","white");
    });

    caja.dblclick(function(){
        $(this).css("background","white")
                .css("color","red");
    });

    //Focus y Blur
    var nombre =  $('#nombre');
    var datos = $('#datos');

    nombre.focus(function(){
        $(this).css("border","2px solid green");
    });
   
    nombre.blur(function(){
        $(this).css("border","2px solid red");

        datos.text( $(this).val()).show();
    });

    //MouseDown y MouseUp
    datos.mousedown(function(){
        $(this).css("border-color","green");
    });

    datos.mouseup(function(){
        $(this).css("border-color","black");
    });

    //MouseMove //captura el movimiento del raton

    $(document).mousemove(function(){
        var sigueme = $('#sigueme');
        $('body').css("cursor","none");
        sigueme.css("left",event.clientX)
                .css("top",event.clientY);
    });




});