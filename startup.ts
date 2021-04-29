import "reflect-metadata";
import * as  bodyParser from 'body-parser';
import * as cors from 'cors'
import Database from  './configuration/database'
import { InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { Container } from 'inversify';
import { Application } from "express";
import INegociosRepository from './repository/INegociosRepository';
import NegociosRepositoryMongoDb from './repository/impl/negociosRepositoryMongoDb';

//CONTROLLERS
import NegociosServices from './services/negociosServices';

require('./controller/negociosController')

class StartUp{
    public server: InversifyExpressServer;
    private _db : Database;
    private container : Container

    constructor(){
        this.container = new Container();
        this.server =  new InversifyExpressServer(this.container);
        this._db = new Database();
        this._db.createConnection();
        this.configureServer();
        this.configureDependencyInjection();
    }

    configureServer(){
        this.server.setConfig((app) =>{
            app.use(bodyParser.urlencoded({ extended: false}));
            app.use(bodyParser.json());
            this.enableCors(app);
        })
    }

    configureDependencyInjection(){
        this.container.bind<INegociosRepository>('INegociosRepository').to(NegociosRepositoryMongoDb);
        this.container.bind<NegociosServices>('NegociosServices').to(NegociosServices);
    }

    enableCors(app : Application){
        const options: cors.CorsOptions = {
            methods: "GET,OPTIONS,PUT,POST,DELETE,PATCH",
            origin: "*"
        }
        app.use(cors(options)); 
    }


}

export default new StartUp();