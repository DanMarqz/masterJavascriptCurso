export class Cereal{
  /*
  public nombre: string;
  public marca: string;
  public cantidad: number;
  public precio: number;
  public stock: boolean;

  constructor(nombre, marca, cantidad, precio, stock){
    this.nombre = nombre;
    this.marca = marca;
    this.cantidad = cantidad;
    this.precio = precio;
    this.stock = stock;
  }
  */
  // Resumido con .ts
  constructor(
    public nombre: string,
    public color: string,
    public marca: string,
    public cantidad: number,
    public precio: number,
    public stock: boolean
  ){}
}