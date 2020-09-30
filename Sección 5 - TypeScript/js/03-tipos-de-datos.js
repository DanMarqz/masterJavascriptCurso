// String
var cadena = 'Danielosky';
// Number
var numero = 12;
// Boolean
var verdadero_falso = true;
// Any
var cualquiera = 'hola';
cualquiera = 22;
// Arrays
var lenguajes = ['PHP', 'SQL', 'JavaScript', 'Java'];
var years = [12, 22, 13, 17, 21, 'Lol'];
// let VS var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    // Output: 44 y 55
    console.log(numero1_1, numero2);
}
// Output: 10 y 55
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
