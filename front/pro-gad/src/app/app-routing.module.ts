
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallasComponent } from './pantallas/pantallas.component';



const routes: Routes = [
  { path: '', redirectTo: '/gad', pathMatch: 'full' },
  { path: 'gad',  loadChildren: () => import('./pantallas/pantallas.module').then(m => m.PantallasModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
