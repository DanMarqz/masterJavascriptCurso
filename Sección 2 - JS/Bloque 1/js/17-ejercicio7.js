'use strict'

var num = parseInt(prompt('¿De qué número deseas la tabla',0));
document.write('<h1>La tabla de multiplicar del número: '+num+'</h1>');

for(var i=1;i <= 10; i++){
  document.write(i+' x '+num+' = '+(i*num)+'<br>');
}

//Todas las tablas de multiplicar

for(var c=1;c <= 10; c++){
  document.write('<h1>La tabla de multiplicar del número: '+c+'</h1>');
  for(var i=1;i <= 10; i++){
    document.write(i+' x '+c+' = '+(i*c)+'<br>');
  }
}