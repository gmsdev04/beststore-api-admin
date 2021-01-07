"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const camposPadroesRepository_1 = require("../repository/camposPadroesRepository");
class CamposPadroesService {
    get() {
        return camposPadroesRepository_1.default.find({});
    }
    create(novoCampoPadrao) {
        return camposPadroesRepository_1.default.create(novoCampoPadrao);
    }
    getById(_id) {
        return camposPadroesRepository_1.default.findById(_id);
    }
    deleteById(_id) {
        return camposPadroesRepository_1.default.findByIdAndDelete(_id);
    }
    patchById(_id, campoPadraoAtualizacao) {
        return camposPadroesRepository_1.default.findOneAndUpdate(_id, campoPadraoAtualizacao, { new: true });
    }
}
exports.default = new CamposPadroesService();
