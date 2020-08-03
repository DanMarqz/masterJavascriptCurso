'use strict'

//Array multidimensional

var categorias = ['Acción','Terror','Comedia'];
var peliculas = ['La verdad duele','La vida es bella','Gran Torino'];

categorias.sort(); //orden descendente
console.log(categorias);

categorias.reverse(); //orden ascendente
console.log(categorias);

var cine = [categorias,peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

// var elemento = "";

// do{ 
//   elemento = prompt("Introuce tu pelicula");
//   peliculas.push(elemento); //Introduce un elemento al array
// } while(elemento != 'ACABAR');

// peliculas.pop(); //eliminar último elemento del array
// peliculas[0] = undefined; //establece el array 0 en undefined

/*var indice = peliculas.indexOf('Gran Torino'); //indexOf busca dentro del indice
if(indice >-1){
  peliculas.splice(indice, 1);
} */

//Cambiar array-string y viceversa

// var arrstr = peliculas.join(); //transforma un array en string
// var cadena = 'texto1,texto2,texto3';
// var cadena_array = cadena.split(","); //Cambia un string en array el elemento es definir como estar separados

