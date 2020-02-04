import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {global} from  './global';
import {Cliente} from '../models/Cliente';


@Injectable({
  providedIn: 'root'
})
export class NewclienteService {
  private url:String;
  constructor(
    private _http:HttpClient)
  {
    this.url=global.url;
  }

  async getClientes(){
    const data =  await this._http.get(this.url+'cliente/all').toPromise();
    return data;
  }

  async saveCliente(cliente:Cliente){
    const data = await this._http.post(this.url+"cliente/insert",{Nombre:cliente.nombre,Apellido:cliente.apellido,Direccion: cliente.direccion}).toPromise();
    return data;
  }

  async deleteCliente(id:Number){
    const data = await this._http.delete(this.url+'cliente/'+id).toPromise();
    return data;
  }

  async updateCliente(cliente:Cliente){
    const data = await this._http.put(this.url+"cliente/"+cliente.id,{Nombre:cliente.nombre,Apellido:cliente.apellido,Direccion: cliente.direccion}).toPromise();
    return data;
  }

  async   getClienteById(id:Number){
    const data = await this._http.get(this.url+'cliente/'+id).toPromise();
    return data;
  }
}
