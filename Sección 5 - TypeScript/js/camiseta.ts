// Interface
interface CamisetaBase{
  setColor(color);
  getColor();
}

// Decorador
function estampar(logo: string){
  return function(target: Function){
    target.prototype.estampacion = function():void{
      console.log('Camiseta estampada con logo de: '+ logo);
    }
  }
}


// Clase (Molde del objeto)
  // Debe llamarse igual que el fichero
@estampar('Petare Barrio de Pakistan')
class Camiseta implements CamisetaBase{
  // Propiedades (Características del objeto) public Propiedad: tipo de propiedad
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;
  // Cuando instancie la clase va a tener disponible todas las propiedades para modificar, cambiar los valores...
  constructor(color, modelo, marca, talla, precio){
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
  }

  // Métodos (funciones o acciones del objeto)
  public setColor(color){
    this.color = color;
  }

  public getColor(){
    return this.color
  }

}

// Clase hija para heredar

class Sudadera extends Camiseta{
  public capucha: boolean;

  setCapucha(capucha: boolean){
    this.capucha = capucha;
  }

  getCapucha():boolean{
    return this.capucha;
  }
}

var camiseta = new Camiseta('asdf','fasd','fasdf','fasd',12);
console.log(camiseta);
camiseta.estampacion();

var sudadera_nike = new Sudadera('Rojo','Algodón','Nike','S',40);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor('Gris');
console.log(sudadera_nike);