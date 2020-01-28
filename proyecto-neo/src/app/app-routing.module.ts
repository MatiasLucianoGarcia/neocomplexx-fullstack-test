import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FormularioComponent} from './components/formulario/formulario.component';
import {ClientesComponent} from './components/clientes/clientes.component';
import{EditarComponent} from './components/editar/editar.component'

const routes: Routes = [
  {path:'formulario',component:FormularioComponent},
  {path:'',component:FormularioComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'editar/:id',component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
