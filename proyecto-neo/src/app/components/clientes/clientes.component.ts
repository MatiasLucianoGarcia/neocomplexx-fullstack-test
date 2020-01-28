import { Component, OnInit } from '@angular/core';
import {ClienteService}from '../../services/cliente.service';
import {Cliente} from '../../models/Cliente';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  public clientes : Array<Cliente>;
  constructor(
    private _clienteService:ClienteService,
    private _router : Router, 
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes(){
    this._clienteService.getClientes().subscribe(
      response=>{
        this.clientes=response;
      },
      error=>{
        console.log(error);
      });
  }

  eliminarCliente(id){
    this._clienteService.deleteCliente(id).subscribe(
      response=>{
        this.getClientes();
      },
      error=>{
        console.log(error);
      }
    );
  }
  
  enviarEditar(id:Number){
    this._router.navigate(['editar/:id',{id}])
  }

}
