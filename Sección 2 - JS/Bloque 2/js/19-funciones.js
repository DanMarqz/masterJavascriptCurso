'use strict'
//Funciones
//Es una agrupación reutilizable de un conjunto de instrucciones

function porConsola(num1,num2){
  console.log('Suma: '+ (num1+num2));
  console.log('Resta: '+ (num1-num2));
  console.log('Multiplicacion: '+ (num1*num2));
  console.log('Division: '+ (num1/num2));
  console.log("********************");
}

function porPantalla(num1,num2){
  document.write('Suma: '+ (num1+num2)+'<br>');
  document.write('Resta: '+ (num1-num2)+'<br>');
  document.write('Multiplicacion: '+ (num1*num2)+'<br>');
  document.write('Division: '+ (num1/num2)+'<br>');
  document.write("********************"+'<br>');
}

function calculadora(num1,num2,mostrar = false){
  // Conjunto de instrucciones a ejecutar
  
  if(mostrar == false){
    porConsola(num1,num2);
  } else {
    porPantalla(num1,num2);
  }
}
//Llamar la función

calculadora(1,4);
calculadora(2,5,true);
calculadora(9,4,true);
calculadora(3,5,true);
calculadora(9,45);
calculadora(56,3,true);
calculadora(2,9);