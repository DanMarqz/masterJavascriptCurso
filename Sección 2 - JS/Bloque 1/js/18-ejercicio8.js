'use strict'

/*Hacer una calculadora:
- Pida dos números por pantalla
- Si introducimos uno mal que vuelva a pedir
- En el body del html, en una alerta y por la consola el resultado de: Sumar, restar, multiplicar y dividir esa 2 cifras*/

var n1 = parseInt(prompt('Introduce primer número', 0));
var n2 = parseInt(prompt('Introduce segundo número', 0));

while(n1 < 0 || n2 < 0 || isNaN(n1) || isNaN(n2)){
  n1 = parseInt(prompt('Introduce primer número', 0));
  n2 = parseInt(prompt('Introduce segundo número', 0));
}

var resul = 'La suma es: '+(n1+n2)+'<br>'+
            'La resta es: '+(n1-n2)+'<br>'+
            'La multiplicación es: '+(n1*n2)+'<br>'+
            'El producto es: '+(n1/n2);

var res = 'La suma es: '+(n1+n2)+' \n'+
          'La resta es: '+(n1-n2)+' \n'+
          'La multiplicación es: '+(n1*n2)+' \n'+
          'El producto es: '+(n1/n2);

document.write(resul);
console.log(res);
alert(res);