$(document).ready(function(){
    
    reloadLink();

    $('#add_button').click(function(){
        $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>');
        $('#add_link').val(' ');//poner el campo vacio de nuevo 
        reloadLink();
    });




   
});

function reloadLink(){

    $('a').each(function(index){
        var that = $(this);
        var enlace =that.attr("href");

        //modificar el enlace añadiendo atributos
        //that.attr('target','_blank')

        that.text(enlace);
    });

}
