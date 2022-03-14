import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { CreatePrenotazioneComponent } from './create-prenotazione/create-prenotazione.component';
import { PrenotazioneListComponent } from './prenotazione-list/prenotazione-list.component';

const routes: Routes = [
  {path:'clienti',component: ClienteListComponent},
  {path:'create-cliente',component: CreateClienteComponent},
  {path:'cliente-id/:idCliente',component:ClienteDetailsComponent},
  {path:'prenotazioni-cliente/:idCliente',component:PrenotazioneListComponent},
  {path:'creaPrenotazione-view', component:CreatePrenotazioneComponent},
  {path:'',redirectTo:'creaPrenotazione-view',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
