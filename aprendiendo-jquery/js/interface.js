$(document).ready(function(){

    //mover elemento por la pantalla
    $('.elemento').draggable();

    //redimencionar los elementos en pantalla
    $('.elemento').resizable();

    //seleccionar elementos de una lista

    //$('.lista-seleccionable').selectable();

    //ordenar elementos como quiera

    $('.lista-seleccionable').sortable();

    //Drop, poner elementos en otro lado por movimiento(draggable)
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop:function(){
            console.log("has soltado algo dentro de area");
        }
    });

    //Efectos
    $('#mostrar').click(function(){
        $('.caja-efecto').toggle("shake", 4000);
    });

    //Tooltip
    $(document).tooltip();

    //Dialog
    $('#lanzar').click(function(){
        $('#popup').dialog();
    });

    //Datepicker
    $('#calendario').datepicker();

    //tabs
    $('#pestanas').tabs();
   

});