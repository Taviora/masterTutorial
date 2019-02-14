// string

let cadena: string = "Gustavo Solano";

//variable con valor multiple se declara "string | number" y acepta ambos tipos

//variable personalizada
type letrasonumeros = string | number;

// number
let numero: number = 13;

//booleano
let verdadero_falso: boolean = true;

//tipo de dato Any
let cualquiera: any = "hola";

//Array
var lenguajes: Array<any> = ["PHP","JS","TS",12];

//otra forma de definir un array
let years: number[] = [12,24,22];

//LET vs VAR

var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){

    var numero1 = 44;
    let numero2 = 55;//funciona dentro del bloque

    console.log(numero1,numero2);
}
console.log(numero1,numero2);

console.log(cadena,numero,verdadero_falso,cualquiera,lenguajes,years);