'use strict'

/*Muestre todos los divisores de un número que introduce en prompt*/

var num = parseInt(prompt('Mete un número.',1));

for(var i = 1; i <= num; i++){
  if(num%i == 0){
    console.log('Divisor: '+i)
  }
}