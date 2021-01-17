import { Injectable } from '@angular/core';
import { Cereal } from '../models/cereal';

@Injectable()
export class CerealesService{
  public cereales: Array<Cereal>;

  constructor(){
    this.cereales = [
      new Cereal('Azucaradas','Amarillo','Maizoritos',150,1500,true),
      new Cereal('Zucaritas','Blanco','Kellogs',50,850,true),
      new Cereal('Choco Safari','Marron','Maizoritos',250,950,true),
      new Cereal('Corn Flakes','Amarillo','Kellogs',25,1000,false),
      new Cereal('Trix','Rosado','Lucky Charms',15,800,false)
    ];
  }

  getTexto(){
    return "Hola mundo desde SERVICE"
  }

  getCereal(): Array<Cereal>{
    return this.cereales;
  }
}