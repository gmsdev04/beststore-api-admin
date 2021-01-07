import TiposDeDadosRepository from '../repository/tiposDeDadosRepository'

class TiposDeDadosService {
    get(){
        return TiposDeDadosRepository.find({});
    }

    create(tipoDeDado){
        return TiposDeDadosRepository.create(tipoDeDado);
    }
}

export default new TiposDeDadosService();