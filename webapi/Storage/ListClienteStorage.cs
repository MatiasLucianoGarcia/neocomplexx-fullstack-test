using webapi.Models;
using System.Collections.Generic;
namespace webapi.Storage{
    public class ListClienteStorage : StorageInterface<Cliente>{
        
        private readonly static ListClienteStorage _instance=new ListClienteStorage();
        private List<Cliente> CollectionClientes;
        private int nextId;

        private ListClienteStorage(){
            CollectionClientes=new List<Cliente>();
            nextId=0;
        }
        public static ListClienteStorage getInstance(){
            return _instance;
        }
        public void insert(Cliente item){
            item.id=nextId;
            CollectionClientes.Add(item);
            nextId++;
        }
        public void update(Cliente item){
            Cliente toUpdate = CollectionClientes.Find(Cliente=>Cliente.id==item.id);
            if(toUpdate!=null) CollectionClientes.Remove(toUpdate);
            CollectionClientes.Add(item);
        }
        public void delete(Cliente item){
            CollectionClientes.Remove(item);
        }
        public Cliente getById(int id){
            Cliente finalCliente = CollectionClientes.Find(Cliente=>Cliente.id==id);
            return finalCliente;
        }
        public List<Cliente> getAllItems(){
            return CollectionClientes;
        }
    }
}