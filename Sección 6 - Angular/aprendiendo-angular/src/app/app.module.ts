import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CerealesComponent } from './cereales/cereales.component';
import { RefrescosComponent } from './refrescos/refrescos.component'

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CerealesComponent,
    RefrescosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
