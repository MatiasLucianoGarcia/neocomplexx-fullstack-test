import { Component, OnInit } from '@angular/core';
import {NewclienteService} from '../../services/newcliente.service';
import {Cliente} from '../../models/Cliente';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  public clientes;
  constructor(
    private _clienteService:NewclienteService,
    private _router : Router, 
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getClientes();
  }

  async getClientes(){
  this.clientes = await this._clienteService.getClientes();
  }


  async eliminarCliente(id){
    await this._clienteService.deleteCliente(id);
    await this.getClientes();
  }
  
  enviarEditar(id:Number){
    this._router.navigate(['editar/:id',{id}])
  }

}
