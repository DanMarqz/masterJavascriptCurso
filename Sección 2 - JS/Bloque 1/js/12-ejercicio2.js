'use strict'

/*  Utilizanod un bucle, mostrar:
    La suma y la media de los numeros introducidos hasta introducir un número negativo y mostrar resultado
*/

var sum = 0;
var count = 0;

do{
  var num = parseInt(prompt('Introduce números hasta que introduzcas uno negativo',0));

  if(isNaN(num)){
    num = 0;

  }else if(num >= 0){
    //sum = sum + num; la siguiente es una forma resumida
    sum += num;
    count++;
  }

  console.log(sum);
  console.log('vez n'+count);

} while(num >= 0)

alert('La suma de todos los números es: '+ sum);
alert('La media de todos los números es: '+ (sum/count));