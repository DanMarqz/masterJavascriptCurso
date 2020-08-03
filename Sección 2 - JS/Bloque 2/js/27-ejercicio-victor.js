'use strict'

function mostrarArray(elementos,textoCustom = ""){
  document.write("<h1>Contenido del array: "+textoCustom+"</h1>");
  document.write("<ul>");
  numeros.forEach((elemento,index) => {
    document.write("<li>"+elemento+"</li>")
});
  document.write("</ul>");
}

//Pedir el número
// var numeros = new Array(6); Opción 1
var numeros = []; //Opción 2

for(var i = 0; i <= 5; i++){
  //numeros[i] = parseInt(prompt("Introduce un número",0)); Opción 1
  numeros.push(parseInt(prompt("Introduce un número",0))); //opción 2
}

//Mostrar en el cuerpo de la página
mostrarArray(numeros);

//Mostrar el array en la consola
console.log(numeros); 

//ordenar y mostrar
numeros.sort(function(a,b){return a-b}); //a-b ascendente - b-a descendente
mostrarArray(numeros, 'ordenados');

//invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');

//Contar indice - elementos de un array
document.write("<h1>El array tiene: "+numeros.length+" elementos</h1>");

// Busqueda
var busqueda = parseInt(prompt("Busca un numero",0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != 1){
  document.write("<h1>ENCONTRADO!</h1>");
  document.write("<hr><h1>Posición de la busqueda: "+posicion+"</h1>");
} else {
  document.write("<h1>NO ENCONTRADO!</h1>");
}