// string
var cadena = "Gustavo Solano";
// number
var numero = 13;
//booleano
var verdadero_falso = true;
//tipo de dato Any
var cualquiera = "hola";
//Array
var lenguajes = ["PHP", "JS", "TS", 12];
//otra forma de definir un array
var years = [12, 24, 22];
//LET vs VAR
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1 = 44;
    var numero2_1 = 55; //funciona dentro del bloque
    console.log(numero1, numero2_1);
}
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
