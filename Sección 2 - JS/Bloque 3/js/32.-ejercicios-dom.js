'use strict'

window.addEventListener('load', () => {
  console.log("Dom cargado!!");

  var formulario = document.querySelector("#formulario");
  var box_dashed = document.querySelector(".dashed");
  box_dashed.style.display = "none";

  formulario.addEventListener('submit', () => {
    console.log("Evento submit capturado.");

    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var edad = parseInt(document.querySelector('#edad').value);

    if(nombre.trim() == null || nombre.trim().length == 0){
      alert("El nombre no es válido.")
      document.querySelector("#error_nombre").innerHTML = "El nombre no es válido";
      return false;
    }else{
      document.querySelector("#error_nombre").style.display = "none";
    }

    if(apellido.trim() == null || apellido.trim().length == 0){
      alert("El apellido no es válido.")
      document.querySelector("#error_apellido").innerHTML = "El apellido no es válido";
      return false;
    }else{
      document.querySelector("#error_apellido").style.display = "none";
    }

    if(edad == null || edad <= 0 || isNaN(edad)){
      alert("La edad no es válida.")
      document.querySelector("#error_edad").innerHTML = "El nombre no es válido";
      return false;
    }else{
      document.querySelector("#error_edad").style.display = "none";
    }

    box_dashed.style.display = "block";

    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellido = document.querySelector("#p_apellido span");
    var p_edad = document.querySelector("#p_edad span");

    p_nombre.innerHTML = nombre;
    p_apellido.innerHTML = apellido;
    p_edad.innerHTML = edad;

    // var datos_usuario = [nombre, apellido, edad];
    // var indice;
    // for(indice in datos_usuario){
    //   var parrafo = document.createElement("p");
    //   parrafo.append(datos_usuario[indice]);
    //   box_dashed.append(parrafo);
    // }
  });

});