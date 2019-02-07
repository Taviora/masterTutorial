$(document).ready(function(){
      
    //selector de ID
    $("#rojo").css("background","red")
                .css("color","white");

    $("#amarillo").css("background","yellow")
                 .css("color","green");

    $("#verde").css("background","green")
                 .css("color","white");

    //selectores de clases

    var mi_clase = $(".zebra");
    

    $(".sin_borde").click(function(){
        console.log("click dado");
        $(this).addClass('zebra');
    });

    //selectores de etiqueta
    var parrafos = $('p').css("cursor","pointer");
    parrafos.click(function(){

        var that = $(this);
        if(!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }
       
    });

    //selectores de atributos
    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue');

    //otras cosas con los selectores
    //$('p,a').addClass('margen-superior');

    //metodos FIND Y PARENT
    
    var busqueda = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title="Google"]');
    console.log(busqueda);


});
