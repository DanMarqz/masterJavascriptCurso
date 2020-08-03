'use strict'

/*Hacer un programa:
  1.- Pida 6 números por pantalla y los meta en un array
  2.- Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
  3.- Ordenar y mostrarlo
  4.- Invertir su orden y mostrarlo
  5.- Mostrar cuántos elementos tiene el array
  6.- Búsquedade un valor introducido por el usuario, que nos diga si está en el array (true) y su indice
*/

function listar(array,ord){
  document.write(`<h4>Tu array ${ord} es el siguiente: </h4>`);
  document.write("<ul>");
  for(let num in array){
    document.write(`<li>${array[num]}</li>`)
  }
  document.write("</ul>");
}

var prmpt = prompt("Introduce 6 seguidos separados por espacios."); 
var arr = prmpt.split(" ");

if (arr.length == 6){

  document.write(`<h3>La longitud de tu array es de: ${arr.length} valores</h3>`);
  listar(arr,"");
  listar(arr.sort(),"con orden ascendente");
  listar(arr.reverse(),"con orden descendiente");
  listar(arr.lenght,"");
} else { 
  do{
    var prmpt = prompt("Introduce 6 seguidos separados por espacios.");
    var arr = prmpt.split(" ");
  }while(arr.length != 6);
  document.write(`<h3>La longitud de tu array es de: ${arr.length} valores</h3>`);
  listar(arr,"");
  listar(arr.sort(),"con orden ascendente");
  listar(arr.reverse(),"con orden descendiente");
  listar(arr.lenght,"");
}

console.log(arr.length);
console.log(arr);
console.log(arr.sort());
console.log(arr.reverse());
