'use strict'

// Localstorage

// Comprobar si el navegador es compatible:
if(typeof(Storage) !== 'undefined'){
  console.log("Localstorage disponible");
} else{
  console.log("Localstorage no disponible");
}

// Guardar datos en el localstorage
localStorage.setItem("titulo","Curso de Symfony");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
  nombre: "Daniel Marquez",
  email: "danie@marquez.com",
  web: "danielmarquez.com"
};
// Para guardar objetos JSON en localstorage hay que guardarlos como string con Stringify
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
// Con JSON.parse pasa el objeto de String a objeto JSON nuevamente
console.log(userjs);
document.querySelector("#datos").append(userjs.web + " - " + userjs.nombre);

localStorage.clear();


