import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {

  cliente:Cliente =new Cliente();
  constructor(private clienteService:ClienteService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveCliente(){
    this.clienteService.createCliente(this.cliente).subscribe( data=>{
     console.log(data) ;
     this.goToClienteList();
    },
    error=> console.log(error));
  }

  goToClienteList(){
    this.router.navigate(['/clienti'])
  }
  onSubmit(){
    console.log(this.cliente);
    this.saveCliente();
  }



}
