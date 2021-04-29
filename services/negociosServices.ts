import { injectable, inject } from 'inversify';
import INegociosRepository from '../repository/INegociosRepository';

@injectable()
class NegociosServices{
    private repository: INegociosRepository;

    constructor( @inject("INegociosRepository") private _repository: INegociosRepository ) {
        this.repository = _repository;
    }

    get(){
        return this.repository.getAll();
    }   
    
    getByAtivo(ativo : Boolean){
        return this.repository.getByAtivo(ativo);
    }

    create(novoNegocio){
        return this.repository.create(novoNegocio);
    }

    getById(id){
        return this.repository.getById(id);
    }

    deleteById(id){
        return this.repository.deleteById(id)
    }

    patchById(id, negocioAtualizado){
        return this.repository.updateById(id,negocioAtualizado);
    }
}

export default NegociosServices;