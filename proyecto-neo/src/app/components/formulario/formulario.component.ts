import { Component, OnInit } from '@angular/core';
import {NewclienteService} from '../../services/newcliente.service'
import { Cliente } from 'src/app/models/Cliente';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public myClient:Cliente;
  public save_client;
  constructor(
    private _clienteService:NewclienteService,
    private _router : Router, 
    private _route:ActivatedRoute
  ){
    this.myClient= new Cliente('','','','');
  }

  ngOnInit(){
    console.log(this._clienteService.getClientes());
  }

  onSubmit(form){
    this.guardarCliente(this.myClient);
  } 

  async guardarCliente(cliente:Cliente){
    await this._clienteService.saveCliente(cliente);
    this._router.navigate(['clientes']);
  }
}
