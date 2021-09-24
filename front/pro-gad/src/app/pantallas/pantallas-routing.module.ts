import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoridadComponent } from './autoridad/autoridad.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HistoriaComponent } from './historia/historia.component';
import { HomeComponent } from './home/home.component';
import { TurismoComponent } from './turismo/turismo.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantallasRoutingModule { }
