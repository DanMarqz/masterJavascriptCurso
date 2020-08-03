'use strict'
//Condicional if
//SI A es igual a B entonces haz algo

/*Operadores relacionales:
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto !=
*/
/* Operadores lógicos:
    AND: &&
    OR:||
    NOT: !
*/

// Prueba 1
var age1 = 10;
var age2 = 12;
//Si pasa esto
if(age1 > age2){
  console.log("Edad 1 es mayor que edad 2")  //Ejecuta esto
}else{ //Si no, ejecuta esto
  console.log("La edad 1 es inferior")
}

// Prueba 2 
var edad = 10;
var nombre = 'Danielosky';
if(edad >= 18){ //Es mayor de edad
  console.log(nombre+' es mayor de edad porque tiene: '+edad+' años.');
  if(edad <= 33){
    console.log('Todavía eres millenial.');
  } else if(edad >= 70){
    console.log('Eres anciano.');
  } else {
    console.log('Ya no eres millenial.');
  }
} else { //Es menor de edad
  console.log(nombre+' es menor de edad porque tiene: '+edad+' años.');
}

// Prueba 3: NOT
var year = 2018;

if(year != 2016){
  console.log('El año no es 2016, realmente es: '+year);
}
// Prueba 4: AND
if(year >= 2000 && year <= 2020){
  console.log('Estamos en la era actual');
}else{
  console.log('Estamos en la era post-moderna');
}
// Prueba 5: OR
if(year == 2008 || (year >= 2018 && year == 2028)){ // Dentro del if se puede colocar () a la condición más importante
  console.log('El año acaba en 8');
} else {
  console.log('Año no registrado');
}