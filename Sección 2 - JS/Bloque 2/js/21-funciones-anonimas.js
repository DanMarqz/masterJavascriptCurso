'use strict'

//Funciones anónimas
//Es una función que no tiene nombre

/*var pelicula = function(nombre){
  return "La película es: "+nombre;
}*/

//Función anónima y callback

function sumame(num1,num2, sumaYmuestra, sumaPorDos){
  var sumar = num1 + num2;
  
  sumaYmuestra(sumar);
  sumaPorDos(sumar);

  return sumar
}

// sumame (5,7, function(dato){
//   console.log("La suma es: ",dato);
//   },
//   function(dato){
//     console.log("La suma por dos es: ",(dato*2));
//   }
// )


//Función de flecha, si son 2 datos si es necesario colocar function(dato, otro_dato)
sumame (5,7, dato =>{
  console.log("La suma es: ",dato);
  },
  dato =>{
    console.log("La suma por dos es: ",(dato*2));
  }
)