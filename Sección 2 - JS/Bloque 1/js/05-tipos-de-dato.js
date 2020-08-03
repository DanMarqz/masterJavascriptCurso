'use strict'
//Operadores
var num1 = 7;
var num2 = 12;

var resto = num1 % num2; //Resto
var div = num1 / num2; //Division
var mult = num1 * num2; //Multiplicacion
var res = num1 - num2; //Resta
var sum = num1 + num2; //Suma

console.log('El resultado de la operación es: '+ mult);

//Tipo de datos

var num_entero = 44;
var string = "Esto es una 'cadena' de texto";
var boolean = false; //true(1) or false(0)
var num_falso = "33.5";

//parseInt(), parseFloat() & Number() para pasar de string a numero
//String para pasar variables de cualquier tipo de dato a string
//typeOf() para saber el tipo de dato
console.log(typeof(num_entero));
console.log(typeof(boolean));
console.log(typeof(string));
console.log(typeof(num_falso));