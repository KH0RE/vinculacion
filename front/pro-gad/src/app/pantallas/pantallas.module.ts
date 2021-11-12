import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule,  ReactiveFormsModule  } from "@angular/forms";

import { PantallasRoutingModule } from './pantallas-routing.module';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContactosComponent } from './contactos/contactos.component';
import { AutoridadComponent } from './autoridad/autoridad.component';
import { TurismoComponent } from './turismo/turismo.component';
import { VisionComponent } from './vision/vision.component';
import { HeaderComponent } from './header/header.component';
import { CivicosComponent } from './civicos/civicos.component';
import { BarriosComponent } from './barrios/barrios.component';
import { FiestasComponent } from './fiestas/fiestas.component';
import { AdultoMayorComponent } from './adulto-mayor/adulto-mayor.component';
import { TrabajosComponent } from './trabajos/trabajos.component';



@NgModule({
  declarations: [
    HomeComponent,
    HistoriaComponent,
    MenuComponent,
    FooterComponent,
    ContactosComponent,
    AutoridadComponent,
    TurismoComponent,
    VisionComponent,
    HeaderComponent,
    CivicosComponent,
    BarriosComponent,
    FiestasComponent,
    AdultoMayorComponent,
    TrabajosComponent
  ],
  imports: [
    CommonModule,
    PantallasRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PantallasModule { }
