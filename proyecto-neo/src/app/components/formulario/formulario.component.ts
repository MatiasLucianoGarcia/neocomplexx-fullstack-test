import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../services/cliente.service'
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
    private _clienteService:ClienteService,
    private _router : Router, 
    private _route:ActivatedRoute
  ){
    this.myClient= new Cliente('','','','');
  }

  ngOnInit() {
    this._clienteService.getClientes().subscribe(response=>{console.log(response)});
  }

  onSubmit(form){
    this._clienteService.saveCliente(this.myClient).subscribe(
      response=>{
        this._router.navigate(['clientes']);
      },
      error=>{
        console.log(error);
      }
    );
  } 
}
