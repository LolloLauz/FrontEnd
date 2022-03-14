import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clienti:Cliente[];

  constructor(private clienteService: ClienteService,
    private router:Router) { }

  ngOnInit(): void {
      this.getClienti();
  }
  private getClienti(){
    this.clienteService.getClienteList().subscribe(data=>{
      this.clienti=data;
    });
  }

  clienteDetails(idCliente:number){
    this.router.navigate(['cliente-id',idCliente]);    
  }

  prentoazioniCliente(idCliente:number){
    this.router.navigate(['prenotazioni-cliente',idCliente]);
  }
}
