'use strict'
//Arrays, Arreglos o Matrices
//Colección de datos o tipós de datos

var nombre = "Daniel";
var nombres = ["Daniel","Carlos","Jose","Isis"];

var lenguajes = new Array("PHP","JS","Go","Java","Ruby","C#","C++","Python");

//console.log(nombres[0]);//Para elegir el dato dentro del array
//console.log(lenguajes.length); // Cuenta los elementos de un array

// var elemento = parseInt(prompt("¿Qué elemetno del array quieres?",0));
// if(elemento >= lenguajes.length){
//   alert(`Introduce un valor entre 0 y ${(lenguajes.length-1)}`);
// }else{
//   alert(`El lenguaje seleccionado es: ${lenguajes[elemento]}`);
// }

document.write(`<h1>Lenguajes de programación del 2018</h1>`);
document.write("<ul>");
/*for(var i = 0; i < lenguajes.length; i++){
  document.write(`<li>${lenguajes[i]}</li>`)
}*/

/*lenguajes.forEach((elemento, indice)=>{
  document.write("<li>"+indice+" "+elemento+"</li>");
});*/

for(let lang in lenguajes){
  document.write(`<li>${lenguajes[lang]}</li>`)
}
document.write("</ul>")

//busquedas
/*var busqueda = lenguajes.find(lenguaje => lenguaje == "Ruby"); //comprueba si el elemento existe dentro de un array
var busqueda_indice = lenguajes.findIndex(lenguaje => lenguaje == "Ruby"); //Retorna el número del indice del array*/

var precios = [10, 20, 50, 70, 23];
var busqueda = precios.some(price => price >= 70); //busca valores con alguna condición (Retorna boolean/ true or false)

console.log(busqueda);/home/daniel