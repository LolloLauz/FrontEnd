import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ombrellone } from './ombrellone';
import { Prenotazione } from './prenotazione';
import { RichiestaId } from './richiesta-id';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  private getOmbrelloniLiberiURL="http://localhost:8080/prenotazione/getOmbrelloniLiberi";
  private addOmbrelloneToPrenotazioneURL="http://localhost:8080/prenotazione/addOmbrelloneToPrenotazione";
  private getOmbrelloniPrenotazioneURL="http://localhost:8080/prenotazione/getOmbrelloniPrenotazione";
  private addNewPrenotazione="http://localhost:8080/prenotazione/addNewPrenotazione";

  constructor(private httpClient:HttpClient) { }


  getOmbrelloniLiberi(dataInizio:Date,dataFine:Date):Observable<Ombrellone[]>{
    return this.httpClient.get<Ombrellone[]>(`${this.getOmbrelloniLiberiURL}/${dataInizio}/${dataFine}`);
  }

  addOmbrelloneToPrenotazione(richiestaperId:RichiestaId):Observable<Object>{
      return this.httpClient.post(`${this.addOmbrelloneToPrenotazioneURL}`,richiestaperId);
  }

  
  getOmbrelloniPrenotazione(idPrenotazione:number):Observable<Ombrellone[]>{
      return this.httpClient.get<Ombrellone[]>(`${this.getOmbrelloniPrenotazioneURL}/${idPrenotazione}`);
  }

  addPrenotazione(prenotazione:Prenotazione):Observable<number>{
      return this.httpClient.post<number>(`${this.addNewPrenotazione}`,prenotazione);
  }
}
