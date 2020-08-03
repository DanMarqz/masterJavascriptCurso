'use strict' // Activar el modo estricto para las buenas prácticas (Arroja error en las malas prácticas)

// Variables
// Es un contenedor de información

// Let: Permite definir variables limitando su añcamce al bloque, declaración u expresión donde se está usando
// Var: Define una variable global o local en una función sin importar el ámbito del bloque

var pais = 'Venezuela';
var continente = 'América del sur';
var antiguedad = 2020;

var pais_y_continente = pais+' - '+continente;

let prueba = 'hola';

pais = 'Francia';
continente = 'Europa';

console.log(pais,continente,antiguedad);
alert(pais_y_continente);
