"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const camposPadroesService_1 = require("../services/camposPadroesService");
class CamposPadroesController {
    get(req, res) {
        camposPadroesService_1.default.get()
            .then(camposPadroes => res.status(HttpStatus.OK).json({ data: camposPadroes }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    post(req, res) {
        let novoCampoPadrao = req.body;
        camposPadroesService_1.default.create(novoCampoPadrao)
            .then(campoCriado => res.status(HttpStatus.CREATED).json({ data: campoCriado }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        let _id = req.params.id;
        camposPadroesService_1.default.getById(_id)
            .then(campo => res.status(HttpStatus.OK).json({ data: campo }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    deleteById(req, res) {
        let _id = req.params.id;
        camposPadroesService_1.default.deleteById(_id)
            .then(() => res.status(HttpStatus.OK).json({ message: "Deletado com sucesso" }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    patchById(req, res) {
        let _id = req.params.id;
        let campoAtualizado = req.body;
        camposPadroesService_1.default.patchById(_id, campoAtualizado)
            .then(campo => res.status(HttpStatus.OK).json({ data: campo }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new CamposPadroesController();
