import NegociosRepository from '../repository/negociosRepository'

class NegociosServices{
    get(){
        return NegociosRepository.find({});
    }   
    
    create(novoNegocio){
        return NegociosRepository.create(novoNegocio);
    }

    getById(_id){
        return NegociosRepository.findById(_id);
    }

    deleteById(_id){
        return NegociosRepository.findByIdAndDelete(_id);
    }

    patchById(_id, negocioAtualizado){
        return NegociosRepository.findOneAndUpdate(_id,negocioAtualizado,{new: true});
    }
}

export default new NegociosServices();