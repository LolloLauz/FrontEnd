import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ombrellone } from '../ombrellone';
import { Prenotazione } from '../prenotazione';
import { PrenotazioneService } from '../prenotazione.service';
import { RichiestaId } from '../richiesta-id';

@Component({
  selector: 'app-create-prenotazione',
  templateUrl: './create-prenotazione.component.html',
  styleUrls: ['./create-prenotazione.component.css']
})
export class CreatePrenotazioneComponent implements OnInit {

  dataInizio:Date;
  dataFine:Date;
  numSdraio:number;
  prenotazione:Prenotazione =new Prenotazione();
  ombrelloni:Ombrellone[];
  idOmbrelloni:number[]=[];
  idPrenotazione:number;
  richiestaperId:RichiestaId;
  constructor(private router:Router,private prenotazioneService:PrenotazioneService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.prenotazione.stato="IN_ATTESA_DI_PAGAMENTO";
    this.prenotazioneService.addPrenotazione(this.prenotazione).subscribe(data=>{
        this.idPrenotazione=data;
        this.richiestaperId.idPrenotazione=data;
        this.idOmbrelloni.forEach(id => {
          this.richiestaperId.idOmbrellone=id;
          this.prenotazioneService.addOmbrelloneToPrenotazione(this.richiestaperId);
        });
    });
  }

  mostraOmbrelloniLiberi(){
    this.prenotazioneService.getOmbrelloniLiberi(this.prenotazione.dataInizio,this.prenotazione.dataFine).subscribe(data=>{
      this.ombrelloni=data;
    })
  }

  prenotaOmbrellone(idOmbrellone:number){
    this.idOmbrelloni.push(idOmbrellone);
  }


}
