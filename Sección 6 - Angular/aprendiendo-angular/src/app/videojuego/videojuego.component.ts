import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
  public titulo: string;
  public listado: string;

  constructor(){
    this.titulo = 'Componente de Videojuegos'
    this.listado = 'Listado de los juegos mas populares'
    //console.log("Se ha cargado el componente: Videojuego.component")
  }

  ngOnInit(){
    //console.log("OnInit Iniciado")
  }

  ngDoCheck(){
    //console.log("DoCheck ejecutado")
  }

  ngOnDestroy(){
    //console.log("OnDestroy exitoso")
  }

  cambiarTitulo(){
    this.titulo = 'Nuevo titulo'
  }
}