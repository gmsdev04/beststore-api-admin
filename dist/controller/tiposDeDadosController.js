"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tiposDeDadosService_1 = require("../services/tiposDeDadosService");
const HttpStatus = require("http-status");
class TiposDeDadosController {
    get(req, res) {
        tiposDeDadosService_1.default.get()
            .then(tipos => res.status(HttpStatus.OK).json({ result: tipos }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let tipoDeDado = req.body;
        tiposDeDadosService_1.default.create(tipoDeDado)
            .then(tipo => res.status(HttpStatus.CREATED).json({ result: tipo }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new TiposDeDadosController();
