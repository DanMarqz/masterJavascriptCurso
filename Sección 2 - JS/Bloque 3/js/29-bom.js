'use strict'

// BOM - Browser Object Model

function getBom(){
  // console.log("Anchura: " + window.innerWidth; muestra el valor en px de la ventana interna
  console.log("Anchura: " + screen.width); // muestra el valor de la pantalla en px
  console.log("Altura: " + screen.height); // muestra el valor de la pantalla en px
  // console.log("Altura: " + window.innerHeight); muestra el valor en px de la ventana interna
  console.log(window.location.href); // muestra la url actual
}

function redirect(url){
  window.location.href = url;
}

function openWindow(url){
  window.open(url,"","width=400,height=300");
}

getBom();