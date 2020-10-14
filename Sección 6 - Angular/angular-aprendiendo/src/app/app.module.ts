import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuegos/videojuego.component' 
import { ZapatosComponent } from './zapatos/zapatos.component';
import { CursosComponent } from './cursos/cursos.component'

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatosComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
