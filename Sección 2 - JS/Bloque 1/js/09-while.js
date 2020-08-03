'use strict'

//Bucle while
var year = 2005;
while(year > 1991){ //Mientras que
  //Ejecuta esto
  console.log('Estamos en el año: '+year);
  
  if(year == 2000){
    break;  //Corta ejecución del bucle
  }

  year--;
}

// Do while
var years = 30;
  do{
    alert("Sólo cuando sea diferente a 25");
    years--;
    console.log(years);
  }while(years != 25)