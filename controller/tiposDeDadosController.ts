import TiposDeDadosService from '../services/tiposDeDadosService'
import * as HttpStatus from 'http-status';


class TiposDeDadosController {
    get(req, res){
        
        TiposDeDadosService.get()
            .then(tipos => res.status(HttpStatus.OK).json({result: tipos}))
            .catch(error => console.error.bind(console,`Error ${error}`));
    } 

    create(req, res){

        let tipoDeDado = req.body;

        TiposDeDadosService.create(tipoDeDado)
            .then(tipo => res.status(HttpStatus.CREATED).json({result: tipo}))
            .catch(error => console.error.bind(console,`Error ${error}`));
    }
}

export default new TiposDeDadosController();