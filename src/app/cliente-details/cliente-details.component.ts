import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {

  idCliente:number;
  cliente: Cliente;
  constructor(private route:ActivatedRoute,private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.idCliente=this.route.snapshot.params['idCliente'];

    this.cliente=new Cliente();
    this.clienteService.getClienteById(this.idCliente).subscribe(data=>{
      this.cliente=data;
    });
  }

}
