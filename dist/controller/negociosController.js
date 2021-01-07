"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const negociosServices_1 = require("../services/negociosServices");
class NegociosController {
    get(req, res) {
        negociosServices_1.default.get()
            .then(negocio => res.status(HttpStatus.OK).json({ data: negocio }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    post(req, res) {
        let novoNegocio = req.body;
        negociosServices_1.default.create(novoNegocio)
            .then(negocio => res.status(HttpStatus.CREATED).json({ data: negocio }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        let _id = req.params.id;
        negociosServices_1.default.getById(_id)
            .then(negocio => res.status(HttpStatus.OK).json({ data: negocio }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    deleteById(req, res) {
        let _id = req.params.id;
        negociosServices_1.default.deleteById(_id)
            .then(() => res.status(HttpStatus.OK).json({ message: "Deletado com sucesso" }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    patchById(req, res) {
        let _id = req.params.id;
        let negocioAtualizado = req.body;
        negociosServices_1.default.patchById(_id, negocioAtualizado)
            .then(negocio => res.status(HttpStatus.OK).json({ data: negocio }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new NegociosController();
