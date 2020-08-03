'use strict'

window.addEventListener('load', () => {
  
  function intervalo(){
    var tiempo = setInterval(() => {
      console.log("Set interval ejecutado");

      var encabezado = document.querySelector("h1");
      if(encabezado.style.fontSize == "60px"){
        encabezado.style.fontSize = "30px"
      }else{
        encabezado.style.fontSize = "60px"
      }

    }, 500);

    return tiempo;
  }

  var tiempo = intervalo();

  // Timers
  // var tiempo = setTimeout(() => { Timeout lo ejecuta 1 vez, interval en bucle

  var stop = document.querySelector("#stop");

  stop.addEventListener("click", () => {
    alert("Has detenido el intervalo que estaba en bucle.");
    clearInterval(tiempo);
  });

  var start = document.querySelector("#start");
  
  start.addEventListener("click", () => {
    alert("Has iniciado el intervalo en bucle.");
    intervalo()
  });

});