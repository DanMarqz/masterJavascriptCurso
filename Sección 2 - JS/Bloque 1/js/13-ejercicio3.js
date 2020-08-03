'use strict'

/* Hacer un programa que muestre todos los números entre dos números introducidos por el usuario
*/

var n1 = parseInt(prompt('introduce el primer número', 0));
var n2 = parseInt(prompt('introduce el primer número', 0));

document.write('<h1>De '+n1+' a '+n2+' están estos números:</h1>');
for(var i = n1; i <= n2; i++){
  document.write(i+'<br>');
}
