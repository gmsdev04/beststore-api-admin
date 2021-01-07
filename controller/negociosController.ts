import * as HttpStatus from 'http-status'
import NegociosServices from '../services/negociosServices'
import { Request, Response } from 'express';

class NegociosController {
    get(req : Request,res : Response){
        NegociosServices.get()
        .then(negocio => res.status(HttpStatus.OK).json({data : negocio}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    post(req : Request, res : Response){
        let novoNegocio = req.body;
        
        NegociosServices.create(novoNegocio)
        .then(negocio => res.status(HttpStatus.CREATED).json({data : negocio}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    getById(req : Request, res : Response){
        let _id = req.params.id;

        NegociosServices.getById(_id)
        .then(negocio => res.status(HttpStatus.OK).json({data : negocio}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    deleteById(req : Request, res : Response){
        let _id = req.params.id;

        NegociosServices.deleteById(_id)
        .then(() => res.status(HttpStatus.OK).json({message : "Deletado com sucesso"}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }


    patchById(req : Request, res : Response){
        let _id = req.params.id;
        let negocioAtualizado = req.body;

        NegociosServices.patchById(_id,negocioAtualizado)
        .then(negocio => res.status(HttpStatus.OK).json({data : negocio}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

}

export default new NegociosController();