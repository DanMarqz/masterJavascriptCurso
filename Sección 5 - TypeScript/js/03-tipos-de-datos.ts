// Tipo de dato custom
type alfanumerico = string | number;

// String
let cadena: alfanumerico = 'Danielosky';

// Number
let numero: number = 12;

// Boolean
let verdadero_falso: boolean = true;

// Any
let cualquiera: any = 'hola';
cualquiera = 22;

// Arrays
var lenguajes: Array<string> = ['PHP','SQL','JavaScript','Java']

let years: any[] = [12,22,13,17,21,'Lol']

// let VS var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
  let numero1 = 44;
  var numero2 = 55;

  // Output: 44 y 55
  console.log(numero1, numero2);
}
// Output: 10 y 55
console.log(numero1, numero2)

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);