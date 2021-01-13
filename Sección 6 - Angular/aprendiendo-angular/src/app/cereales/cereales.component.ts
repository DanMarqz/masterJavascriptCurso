import { createAotUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Cereal } from '../models/cereal';

@Component({
  selector: 'cereales',
  templateUrl: './cereales.component.html'
})

export class CerealesComponent implements OnInit{
  public titulo: string = 'Componente de Cereales';
  public cereales: Array<Cereal>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor(){
    this.mi_marca = 'Fela';
    this.color = 'red';
    this.marcas = new Array();

    this.cereales = [
      new Cereal('Azucaradas','Amarillo','Maizoritos',150,1500,true),
      new Cereal('Zucaritas','Blanco','Kellogs',50,850,true),
      new Cereal('Choco Safari','Marron','Maizoritos',250,950,true),
      new Cereal('Corn Flakes','Amarillo','Kellogs',25,1000,false),
      new Cereal('Trix','Rosado','Lucky Charms',15,800,false)
    ]
  }

  ngOnInit(){
    console.log(this.cereales)
    this.getMarcas();
  }

  getMarcas(){
    this.cereales.forEach((conflei,index) => {
      if(this.marcas.indexOf(conflei.marca ) < 0){
        this.marcas.push(conflei.marca);
      }
    });
    console.log(this.marcas);
  }

  getMarca(){
    alert(this.mi_marca);
  }

  addMarca(){
    this.marcas.push(this.mi_marca);
  }

/*   borrarMarca(index){
   //delete this.marcas[index];
   this.marcas.splice(index, 1);
 }*/

  onBlur(){
    console.log("Has salido del input");
  }

  mostrarPalabra(){
    alert(this.mi_marca);
  }
}