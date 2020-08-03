'use strict'
// Let: Permite definir variables limitando su añcamce al bloque, declaración u expresión donde se está usando
// Var: Define una variable global o local en una función sin importar el ámbito del bloque

// Prueba con var
var num = 40;
console.log(num); //valor 40

if(true){
  var num = 50;
  console.log(num); //valor 50
}
console.log(num);

// Prueba con let
var text = 'Curso JS'
console.log(text); // Retorna "

if(true){
  let text = 'Curso Laravel 5'; // Retorna Laravel 5
  console.log(text);
}
console.log(text); // Retorna JS