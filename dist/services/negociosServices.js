"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const negociosRepository_1 = require("../repository/negociosRepository");
class NegociosServices {
    get() {
        return negociosRepository_1.default.find({});
    }
    create(novoNegocio) {
        return negociosRepository_1.default.create(novoNegocio);
    }
    getById(_id) {
        return negociosRepository_1.default.findById(_id);
    }
    deleteById(_id) {
        return negociosRepository_1.default.findByIdAndDelete(_id);
    }
    patchById(_id, negocioAtualizado) {
        return negociosRepository_1.default.findByIdAndUpdate(_id, negocioAtualizado, { new: true });
    }
}
exports.default = new NegociosServices();
