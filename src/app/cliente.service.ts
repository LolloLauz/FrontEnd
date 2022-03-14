import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { Prenotazione } from './prenotazione';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL="http://localhost:8080/cliente/getAllClienti";
  private addClienteURL="http://localhost:8080/cliente/addNewCliente";
  private findClienteById="http://localhost:8080/cliente/getClienteById";
  private findPrenotazioniCliente="http://localhost:8080/cliente/getPrenotazioniCliente";
  constructor(private httpClient: HttpClient) { }

  getClienteList(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }

  createCliente(cliente : Cliente): Observable<Object>{
    return this.httpClient.post(`${this.addClienteURL}`,cliente);
  }

  getClienteById(idCliente:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.findClienteById}/${idCliente}`);
  }

  getPrenotazioniCliente(idCliente:number):Observable<Prenotazione[]>{
    return this.httpClient.get<Prenotazione[]>(`${this.findPrenotazioniCliente}/${idCliente}`);
  }

}
