import { createAotUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Cereal } from '../models/cereal';
import { CerealesService } from '../services/cereales.service';

@Component({
  selector: 'cereales',
  templateUrl: './cereales.component.html',
  providers: [CerealesService]
})

export class CerealesComponent implements OnInit{
  public titulo: string = 'Componente de Cereales';
  public cereales!: Array<Cereal>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor(
    private _CerealesService: CerealesService
  ){
    this.mi_marca = 'Fela';
    this.color = 'red';
    this.marcas = new Array();
  }

  ngOnInit(){
    this.cereales = this._CerealesService.getCereal();
    // alert(this._CerealesService.getTexto());
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
   delete this.marcas[index];
   this.marcas.splice(index, 1);
 }*/

  onBlur(){
    console.log("Has salido del input");
  }

  mostrarPalabra(){
    alert(this.mi_marca);
  }
}