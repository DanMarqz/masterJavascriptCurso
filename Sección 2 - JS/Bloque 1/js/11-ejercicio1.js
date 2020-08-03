'use strict'

//Hacer un programa que pida dos números y que diga cual es el mayor, menor y si son iguales.
//Si los números no son un número o son menores o iguales a 0, vuelva a pedir datos

var n1 = parseInt(prompt('Favor de introducir un número mayor a 0: ',0));
var n2 = parseInt(prompt('Favor de introducir otro número  mayor a 0: ',0));

while(n1 <= 0 || n2 <= 0 || isNaN(n1) || isNaN(n2)){
  var n1 = parseInt(prompt('Favor de introducir un número mayor a 0: ',0));
  var n2 = parseInt(prompt('Favor de introducir otro número  mayor a 0: ',0));
}

if(n1 > n2){
  alert('El número '+n1+' es mayor');
  alert('El número '+n2+' es menor');
} else if(n1 < n2){
  alert('El número '+n2+' es mayor');
  alert('El número '+n1+' es menor');
} else if(n1 == n2){
  alert('Ambos números son iguales!');
} else {
  alert('No ha introducido ningún número.')
}