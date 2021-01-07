"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tiposDeDadosRepository_1 = require("../repository/tiposDeDadosRepository");
class TiposDeDadosService {
    get() {
        return tiposDeDadosRepository_1.default.find({});
    }
    create(tipoDeDado) {
        return tiposDeDadosRepository_1.default.create(tipoDeDado);
    }
}
exports.default = new TiposDeDadosService();
