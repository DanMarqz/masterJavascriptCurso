'use strict'

// Evento
// Un evento es una función que se ejecuta cuando sucede algo
// Eventos del ratón

window.addEventListener("load", () => {


  function cambiarColor(){
    console.log("Me has dado click!");
  
    var bg = boton.style.background
  
    if(bg == "green"){
      boton.style.background = "blue";
    } else{
      boton.style.background = "green";
    }
  
    boton.style.padding = "10px";
    boton.style.border = "none";
  
    return true;
  }
  
  // Click
  var boton = document.querySelector('#boton');
  
    boton.addEventListener('click',function(){
    cambiarColor();
    this.style.border = "10px solid black";
    console.log(this)
  });
  
  // Mouse over
  boton.addEventListener('mouseover',function(){
    boton.style.background = '#444'
    boton.style.color = '#fff';
    boton.style.border = "none";
  });
  
  // Mouse out
  boton.addEventListener('mouseout',function(){
    boton.style.background = '#fff';
    boton.style.color = '#444';
    boton.style.border = "none";
  });
  
  // Focus
  
  var input = document.querySelector("#campo_nombre");
  
  input.addEventListener('focus',function(){
    console.log("[Focus] Estás dentro del input");
  });
  
  
  // Blur
  input.addEventListener('blur',function(){
    console.log("[Blur] Estás fuera del input");
  });
  
  
  // Keydown
  input.addEventListener('keydown',function(event){
    console.log("[keyDown] Estás pulsando esta tecla " + String.fromCharCode(event.keyCode));
  });
  
  
  // KeyPress
  input.addEventListener('keypress',function(event){
    console.log("[keyPress] Tecla presionada: " + String.fromCharCode(event.keyCode));
  });
  
  
  // KeyUp
  input.addEventListener('keyup',function(event){
    console.log("[keyUp] Tecla soltada: " + String.fromCharCode(event.keyCode));
  });

});
