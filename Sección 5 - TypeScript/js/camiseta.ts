// Clase (Molde del objeto)
  // Debe llamarse igual que el fichero
class Camiseta{
  // Propiedades (Características del objeto) public Propiedad: tipo de propiedad
  public color: string;
  public modelo: string;
  public marca: string;
  public talla: string;
  public precio: number;
    // Cuando instancie la clase va a tener disponible todas las propiedades para modificar, cambiar los valores...
  
  // Métodos (funciones o acciones del objeto)


}

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

console.log(camiseta,playera);