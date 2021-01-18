//Import módulos de router
import  { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import componentes
import { HomeComponent } from './home/home.component';
import { CerealesComponent } from './cereales/cereales.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { RefrescosComponent } from './refrescos/refrescos.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

//Array de rutas
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cereales', component: CerealesComponent},
  {path: 'videojuego', component: VideojuegoComponent},
  {path: 'refrescos', component: RefrescosComponent},
  {path: 'refrescos/:nombre', component: RefrescosComponent},
  {path: 'externo', component: ExternoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];

//Exportar módulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
