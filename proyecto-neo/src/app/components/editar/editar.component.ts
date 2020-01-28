import { Component, OnInit} from '@angular/core';
import {ClienteService} from '../../services/cliente.service'
import { Cliente } from 'src/app/models/Cliente';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit {

  public myClient:Cliente;

  constructor(
    private _clienteService:ClienteService,
    private _router : Router, 
    private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(
      params=>{
        let id = params.id;
        this.getCliente(id);
      }
    );
  }

  getCliente(id:Number){
    this._clienteService.getClienteById(id).subscribe(
      response=>{
        this.myClient=response;
        console.log(this.myClient);
      },
      error=>{
        console.log(error);
      }
    );
  }

  onSubmit(clienteForm){
    this._clienteService.updateCliente(this.myClient).subscribe(
      response=>{
        this._router.navigate(['clientes']);
      },
      error=>{console.log(error);}
    );
  }

}
