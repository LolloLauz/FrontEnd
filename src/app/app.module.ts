import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { FormsModule } from '@angular/forms';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';
import { PrenotazioneListComponent } from './prenotazione-list/prenotazione-list.component';
import { CreatePrenotazioneComponent } from './create-prenotazione/create-prenotazione.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    CreateClienteComponent,
    ClienteDetailsComponent,
    PrenotazioneListComponent,
    CreatePrenotazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
