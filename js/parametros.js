'use strict'

//uso de parametros en las funciones

/*
function calculadora(numero1,numero2){

    //conjunto de instrucciones a ejecutar

    console.log ("Suma:" + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicacion: "+ (numero1*numero2));
    console.log("Division: "+ (numero1/numero2) );
    console.log("*************************************")


    return "Hola soy la calculadora";

}
*/

//invocacion o llamado de la funcion
//calculadora(12,8);
//calculadora(98,2);

/*
for(var i=1; i<=10; i++){

    calculadora(i,8);
}
*/

//parametros opcionales

/*
function calculadora(numero1,numero2,mostrar = false){

    //conjunto de instrucciones a ejecutar
   
     if(mostrar == false){

        console.log ("Suma:" + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("Multiplicacion: "+ (numero1*numero2));
        console.log("Division: "+ (numero1/numero2) );
        console.log("*************************************")

     }else{

        document.write ("Suma:" + (numero1+numero2)+"<br>");
        document.write("Resta: " + (numero1-numero2)+"<br>");
        document.write("Multiplicacion: "+ (numero1*numero2)+"<br>");
        document.write("Division: "+ (numero1/numero2)+"<br>" );
        document.write("*************************************"+"<br>")

     }
    


    return "Hola soy la calculadora";

}
*/

//invocaciones con parametros opcionales
//calculadora(1,4);
//calculadora(2,5,true);


//funciones dentro de otras

function porConsola(numero1,numero2){
    console.log ("Suma:" + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicacion: "+ (numero1*numero2));
    console.log("Division: "+ (numero1/numero2) );
    console.log("*************************************")

}

function porPantalla(numero1,numero2){

    document.write ("Suma:" + (numero1+numero2)+"<br>");
    document.write("Resta: " + (numero1-numero2)+"<br>");
    document.write("Multiplicacion: "+ (numero1*numero2)+"<br>");
    document.write("Division: "+ (numero1/numero2)+"<br>" );
    document.write("*************************************"+"<br>")

}

function calculadora(numero1,numero2,mostrar = false){

    //conjunto de instrucciones a ejecutar
   
     if(mostrar == false){
    
         porConsola(numero1,numero2);

     }else{

       porPantalla(numero1,numero2);

     }
    


    return true;

}

//invocaciones funciones dentro de otras
calculadora(1,4);
calculadora(2,5,true);
calculadora(3,9,true);
calculadora(8,2);