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
           // Cliente c1 = new Cliente();
            //c1.Nombre="Juan";
            //c1.Direccion="La quiaca 1231";
            //c1.Apellido="Perez";
            //Cliente c2 = new Cliente();
            //c2.Nombre="Juana";
            //c2.Direccion="Mendoza 691";
            //c2.Apellido="De Arco";
            //CollectionClientes.Add(c1);
            //CollectionClientes.Add(c2);
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