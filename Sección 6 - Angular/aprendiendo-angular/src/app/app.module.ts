import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CerealesComponent } from './cereales/cereales.component';
import { RefrescosComponent } from './refrescos/refrescos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { CodigofacilitoComponent } from './codigofacilito/codigofacilito.component'

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CerealesComponent,
    RefrescosComponent,
    HomeComponent,
    ExternoComponent,
    CodigofacilitoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
