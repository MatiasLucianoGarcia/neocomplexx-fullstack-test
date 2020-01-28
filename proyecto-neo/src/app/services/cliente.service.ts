import { Injectable } from '@angular/core';
import {Observable, from} from 'rxjs';
import {global} from  './global';
import {HttpHeaders,HttpClient} from '@angular/common/http';
import {Cliente} from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url:string;
  
  constructor(
    private _http:HttpClient
  ) { 
    this.url=global.url;
  }

  getClientes():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'cliente/all',{headers:headers});
  }

  saveCliente(cliente:Cliente):Observable<any>{
    
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+"cliente/insert",{Nombre:cliente.nombre,Apellido:cliente.apellido,Direccion: cliente.direccion},{headers:headers});
  }

  deleteCliente(id:Number):Observable<any>{
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'cliente/'+id,{headers:headers});
  }

  updateCliente(cliente:Cliente):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+"cliente/"+cliente.id,{Nombre:cliente.nombre,Apellido:cliente.apellido,Direccion: cliente.direccion},{headers:headers});
  }

  getClienteById(id:Number):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'cliente/'+id,{headers:headers});
  }
}
