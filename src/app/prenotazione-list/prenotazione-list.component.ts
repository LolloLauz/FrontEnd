import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Ombrellone } from '../ombrellone';
import { Prenotazione } from '../prenotazione';
import { PrenotazioneService } from '../prenotazione.service';

@Component({
  selector: 'app-prenotazione-list',
  templateUrl: './prenotazione-list.component.html',
  styleUrls: ['./prenotazione-list.component.css']
})
export class PrenotazioneListComponent implements OnInit {

  idCliente:number;
  prenotazioni :Prenotazione[];
  ombrelloni:Ombrellone[];
  constructor(private router:ActivatedRoute,private clientService:ClienteService,private prenotazioneService:PrenotazioneService) { }

  ngOnInit(): void {
    this.idCliente=this.router.snapshot.params['idCliente'];

    this.clientService.getPrenotazioniCliente(this.idCliente).subscribe(data=>{
      this.prenotazioni=data;
    },
    error=>console.log(error));
  }

  listaOmbrelloni(idPrenotazione:number){
   this.prenotazioneService.getOmbrelloniPrenotazione(idPrenotazione).subscribe(data=>{
     console.log(data);
     this.ombrelloni=data;
   })
  }

}
