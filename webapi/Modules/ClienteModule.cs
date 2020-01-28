using Nancy; 
using webapi.Storage;
using webapi.Models;
using System.Collections.Generic;
using Newtonsoft.Json;
using Nancy.ModelBinding;

public class ClienteModule : NancyModule
{
    private StorageInterface<Cliente> myStorage;
    public ClienteModule(): base("/cliente")
    {
        myStorage= ListClienteStorage.getInstance();
        Get("/all", parameters => getAllClientes());
        Post("/insert", parameters => insertCliente());
        Put("/{id:int}",parameters=>editCliente(parameters.id));
        Delete("/{id:int}",parameters=>deleteCliente(parameters.id));
        Get("/{id:int}",parameters=>getClienteById(parameters.id));
    }

    dynamic getAllClientes(){
        List<Cliente>clientes = myStorage.getAllItems();
        var json = JsonConvert.SerializeObject(clientes);
        return json;
    }

    dynamic insertCliente(){
        Cliente cliente = this.Bind<Cliente>();
        if (checkCliente(cliente))
        {
            myStorage.insert(cliente);
            var json= JsonConvert.SerializeObject(cliente);
            return json;
        }
        else{
            //Aca se podria modificar la request de error, crear un json con un status, etc.
            return 400;
        }
    }
    
    dynamic editCliente(int id){
        if(myStorage.getById(id)==null) return 400;
        Cliente clienteNuevo = this.Bind<Cliente>();
        if(checkCliente(clienteNuevo)){
            clienteNuevo.id=id;
            myStorage.update(clienteNuevo);
            var json = JsonConvert.SerializeObject(clienteNuevo);
            return json;
        }else{
            return 400;
        }
    }

    dynamic deleteCliente(int id){
        Cliente clienteToDelete = myStorage.getById(id);
        if(clienteToDelete!=null){
            myStorage.delete(clienteToDelete);
            var json= JsonConvert.SerializeObject(clienteToDelete);
            return json;
        }else{
            //No existe el cliente con ese id.
            return 400;
        }

    }
    dynamic getClienteById(int id){
        Cliente cliente = myStorage.getById(id);
        if (cliente !=null){
            var json= JsonConvert.SerializeObject(cliente);
            return json;
        }else{
            //Aca se podria modificar la request de error, crear un json con un status, etc.
            return 400;
        }
    }
    
     private bool checkCliente(Cliente cliente)
        {
            return (cliente.Nombre != null) && (cliente.Apellido != null) && (cliente.Direccion != null);
        }
}