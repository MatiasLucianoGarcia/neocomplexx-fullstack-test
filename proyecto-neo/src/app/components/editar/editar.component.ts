import { Component, OnInit} from '@angular/core';
import {NewclienteService} from '../../services/newcliente.service'
import { Cliente } from 'src/app/models/Cliente';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit {

  public myClient;

  constructor(
    private _clienteService:NewclienteService,
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

  async getCliente(id:Number){
    this.myClient = await this._clienteService.getClienteById(id);
  }

  async actualizarCliente(cliente:Cliente){
    await this._clienteService.updateCliente(cliente);
  }

  onSubmit(clienteForm){
    this.actualizarCliente(this.myClient);
    this._router.navigate(['clientes']);    
  }

}
