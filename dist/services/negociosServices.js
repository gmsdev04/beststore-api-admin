"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
let NegociosServices = class NegociosServices {
    constructor(_repository) {
        this._repository = _repository;
        this.repository = _repository;
    }
    get() {
        return this.repository.getAll();
    }
    getByAtivo(ativo) {
        return this.repository.getByAtivo(ativo);
    }
    create(novoNegocio) {
        return this.repository.create(novoNegocio);
    }
    getById(id) {
        return this.repository.getById(id);
    }
    deleteById(id) {
        return this.repository.deleteById(id);
    }
    patchById(id, negocioAtualizado) {
        return this.repository.updateById(id, negocioAtualizado);
    }
};
NegociosServices = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject("INegociosRepository"))
], NegociosServices);
exports.default = NegociosServices;
