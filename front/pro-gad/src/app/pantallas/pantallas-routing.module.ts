import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdultoMayorComponent } from './adulto-mayor/adulto-mayor.component';
import { AutoridadComponent } from './autoridad/autoridad.component';
import { BarriosComponent } from './barrios/barrios.component';
import { CivicosComponent } from './civicos/civicos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { FiestasComponent } from './fiestas/fiestas.component';
import { HistoriaComponent } from './historia/historia.component';
import { HomeComponent } from './home/home.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { TurismoComponent } from './turismo/turismo.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [

  {
    path: '',
    children: [
        {
            path: '',
            component: HomeComponent
        }
    ]
  },


  {
    path : 'historia',
    component : HistoriaComponent
  },
  {
    path : 'turismo',
    component : TurismoComponent
  },
  {
    path : 'autoridades',
    component : AutoridadComponent
  },
  {
    path : 'contactos',
    component : ContactosComponent
  },
  {
    path : 'quienes-somos',
    component : VisionComponent
  },
  {
    path : 'adulto-mayor',
    component : AdultoMayorComponent
  },
  {
    path: 'barrios',
    component : BarriosComponent
  },
  {
    path: 'simbolos-civicos',
    component : CivicosComponent
  },
  {
    path: 'fiestas',
    component: FiestasComponent
  },
  {
    path: 'trabajos',
    component: TrabajosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantallasRoutingModule { }
