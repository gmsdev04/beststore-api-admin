"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database_1 = require("./configuration/database");
const tiposDeDadosController_1 = require("./controller/tiposDeDadosController");
const negociosController_1 = require("./controller/negociosController");
const camposPadroesController_1 = require("./controller/camposPadroesController");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new database_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    enableCors() {
        const options = {
            methods: "GET,OPTIONS,PUT,POST,DELETE,PATCH",
            origin: "*"
        };
        this.app.use(cors(options));
    }
    middler() {
        this.enableCors();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        //tiposDeDados
        this.app.route('/api/v1/tipos-de-dados').get(tiposDeDadosController_1.default.get);
        this.app.route('/api/v1/tipos-de-dados').post(tiposDeDadosController_1.default.create);
        //negocios
        this.app.route('/api/v1/negocios').get(negociosController_1.default.get);
        this.app.route('/api/v1/negocios').post(negociosController_1.default.post);
        this.app.route('/api/v1/negocios/:id').get(negociosController_1.default.getById);
        this.app.route('/api/v1/negocios/:id').patch(negociosController_1.default.patchById);
        this.app.route('/api/v1/negocios/:id').delete(negociosController_1.default.deleteById);
        //campos-padroes
        this.app.route('/api/v1/campos-padroes').get(camposPadroesController_1.default.get);
        this.app.route('/api/v1/campos-padroes').post(camposPadroesController_1.default.post);
        this.app.route('/api/v1/campos-padroes/:id').get(camposPadroesController_1.default.getById);
        this.app.route('/api/v1/campos-padroes/:id').patch(camposPadroesController_1.default.patchById);
        this.app.route('/api/v1/campos-padroes/:id').delete(camposPadroesController_1.default.deleteById);
    }
}
exports.default = new StartUp();
