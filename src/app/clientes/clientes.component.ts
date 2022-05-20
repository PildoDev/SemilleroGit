import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[];

  constructor(private clienteService: ClientService) { }//dependency injection

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
      /*
      //EQUIVALE A:
      function (clientes) {
        this.clientes = clientes
      }*/
    );
  }
  /**
   *
   */

}
