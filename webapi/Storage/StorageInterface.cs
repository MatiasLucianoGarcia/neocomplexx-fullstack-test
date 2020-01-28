using System.Collections.Generic;
namespace webapi.Storage{
    public interface StorageInterface<C>{
        void insert(C item);
        void update(C item);
        void delete(C item);
        C getById(int id);
        List<C> getAllItems();
    }
}