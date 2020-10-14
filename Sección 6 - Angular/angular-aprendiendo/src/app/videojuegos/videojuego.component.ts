// Creando componentes

import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;

  constructor(){
    this.titulo = 'Componente de Videojuegos';
    this.listado = 'Listado de las franquicias más populares'
    console.log('Se ha cargado el Componente de: videojuego.component.ts')
  }

  ngOnInit(){
    console.log('OnInit ejecutado!!')
  }

  // Se ejecuta cuando se presenta un cambio en página
  ngDoCheck(){
    console.log('DoCheck ejecutado')
  }

  // Se ejecuta cuando se elimine/oculte un componente
  ngOnDestroy(){
    console.log('OnDestroy Ejeceutado')
  }

  cambiarTitulo(){
    this.titulo = "Nuevo titulo del componente";
  }

}