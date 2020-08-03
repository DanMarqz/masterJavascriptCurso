'use strict'

// DOM - Document Object Model

//función para cambiar colores del fondo
function cambiaColor(color){
  caja.style.background= color;
}

//Conseguir elemtnos con ID en concreto -------------------------------------------------

// Agregar valores al documento HTML
//var caja = document.getElementById('micaja'); //Sin el innerHTML no agarra el valor dentro de las etiquetas

var caja = document.querySelector('#micaja'); //Sin nada la etiqueta, # para el ID, . para la clase, el query selector selecciona como si fuera CSS

caja.innerHTML = 'Texto en la caja desde JS'; //agrega texto a caja 
caja.style.background = '#333'; //agrega fondo a caja
caja.style.padding = '20px'; // agrega padding
caja.style.color = 'white'; //Cambia el color a white
//caja.className = 'hola hola2'; //Agrega clase al HTML

//Conseguir elementos por su etiqueta -------------------------------------------------
var todosLosDivs = document.getElementsByTagName('div'); //obtiene todos los elementos con la etiqueta div

// var contenidoEnTexto = todosLosDivs[2];//.textContent; // .textContent retorna el valor del contenido -- .innerHTML permite cambiar el valor dentro de la etiqueta
// contenidoEnTexto.innerHTML = 'Otro texto para segundo elemento'; 
// contenidoEnTexto.style.background = 'green'

console.log(todosLosDivs);

var seccion = document.querySelector('#miseccion'); // selecciona el id miseccion
var hr = document.createElement('hr') // y crea en el html una etiqueta hr

var valor;
for(valor in todosLosDivs){ //para el valor entre todos los divs
  console.log(todosLosDivs[valor]); //trae todas las etiquetas de los divs 
  if(typeof todosLosDivs[valor].textContent == 'string'){ //si el valor de todos los divs es un string
    var parrafo = document.createElement('p'); //vas a crear la etiqueta p
    var texto = document.createTextNode(todosLosDivs[valor].textContent); //y le vas a introducir el texto string que esta dentro del div
    parrafo.append(texto); //agrega a la etiqueta P el valor de texto que son todos los divs
    seccion.append(parrafo); //agrega a la etiqueta con id miseccion los valores de parrafos
  }
seccion.append(hr);
}

//Conseguir elementos por su clase ------------------------------------------------- traer varios elementos

var divsRojos = document.getElementsByClassName('rojo'); //selecciona todos los elementos con clase rojo
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = 'yellow';

var div; //establece un var div vacio
for(div in divsRojos){ // recorre los divs
    if(divsRojos[div].className == 'rojo'){ //si el nombre de la clase es igual a rojo
        divsRojos[div].style.background = 'red'; //le da un fondo rojo al div
    }
}

//querySelector ----------------------- para traer 1 solo elemento
var id = document.querySelector('#encabezado');
//console.log(id);

var claseRojo = document.querySelector('.rojo');
//console.log(claseRojo); //retorna el la primera clase rojo

var etiqueta = document.querySelector('div');
//console.log(etiqueta); // retorna la primera etiqueta div

//query selector all ================== https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll







