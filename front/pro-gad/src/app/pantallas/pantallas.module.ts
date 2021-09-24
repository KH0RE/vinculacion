import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantallasRoutingModule } from './pantallas-routing.module';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContactosComponent } from './contactos/contactos.component';
import { AutoridadComponent } from './autoridad/autoridad.component';
import { TurismoComponent } from './turismo/turismo.component';


@NgModule({
  declarations: [
    HomeComponent,
    HistoriaComponent,
    MenuComponent,
    FooterComponent,
    ContactosComponent,
    AutoridadComponent,
    TurismoComponent
  ],
  imports: [
    CommonModule,
    PantallasRoutingModule
  ]
})
export class PantallasModule { }
