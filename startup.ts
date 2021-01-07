import * as express from 'express';
import Database from  './configuration/database'
import * as  bodyParser from 'body-parser';

import TiposDeDadosController from './controller/tiposDeDadosController'
import NegociosController from './controller/negociosController'
import CamposPadroesController from './controller/camposPadroesController'

class StartUp{
    public app: express.Application;
    private _db : Database;
    private bodyParser;

    constructor(){
        this.app = express();
        this._db = new Database();
        this._db.createConnection();
        this.middler();
        this.routes();
    }

    middler(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false}));
    }

    routes(){
        this.app.route('/').get((req,res) => {
            res.send({ versao: '0.0.1'})
        })
        
        //tiposDeDados
        this.app.route('/api/v1/tipos-de-Dados').get(TiposDeDadosController.get);
        this.app.route('/api/v1/tipos-de-dados').post(TiposDeDadosController.create);

        //negocios
        this.app.route('/api/v1/negocios').get(NegociosController.get);
        this.app.route('/api/v1/negocios').post(NegociosController.post);
        this.app.route('/api/v1/negocios/:id').get(NegociosController.getById);
        this.app.route('/api/v1/negocios/:id').patch(NegociosController.patchById);
        this.app.route('/api/v1/negocios/:id').delete(NegociosController.deleteById);

        //campos-padroes
        this.app.route('/api/v1/campos-padroes').get(CamposPadroesController.get);
        this.app.route('/api/v1/campos-padroes').post(CamposPadroesController.post);
        this.app.route('/api/v1/campos-padroes/:id').get(CamposPadroesController.getById);
        this.app.route('/api/v1/campos-padroes/:id').patch(CamposPadroesController.patchById);
        this.app.route('/api/v1/campos-padroes/:id').delete(CamposPadroesController.deleteById);
        
    }

}

export default new StartUp();