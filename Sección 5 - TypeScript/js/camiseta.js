// Clase (Molde del objeto)
// Debe llamarse igual que el fichero
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.color = 'Rojo';
camiseta.modelo = 'Manga Larga';
camiseta.marca = 'Nike';
camiseta.talla = 'M';
camiseta.precio = 25;
var playera = new Camiseta();
playera.color = 'Rojo';
playera.modelo = 'Manga Larga';
playera.marca = 'Nike';
playera.talla = 'M';
playera.precio = 15;
console.log(camiseta, playera);
