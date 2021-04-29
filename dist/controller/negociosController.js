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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
let NegociosController = class NegociosController extends inversify_express_utils_1.BaseHttpController {
    constructor(_service) {
        super();
        this.service = _service;
    }
    get(ativo) {
        return __awaiter(this, void 0, void 0, function* () {
            //FILTER BY ATIVO
            if (ativo != undefined) {
                return yield this.service.getByAtivo(ativo)
                    .then(negocio => this.ok({ data: negocio }))
                    .catch(error => console.error.bind(console, `Error ${error}`));
            }
            //GET ALL
            return yield this.service.get()
                .then(negocio => this.ok({ data: negocio }))
                .catch(error => console.error.bind(console, `Error ${error}`));
        });
    }
    post(novoNegocio) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.create(novoNegocio)
                .then(negocio => this.created(`/api/v1/negocios/${negocio._id}`, { data: negocio }))
                .catch(error => console.error.bind(console, `Error ${error}`));
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getById(id)
                .then(negocio => this.ok({ data: negocio }))
                .catch(error => console.error.bind(console, `Error ${error}`));
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.deleteById(id)
                .then(() => this.ok({ message: "Deletado com sucesso" }))
                .catch(error => console.error.bind(console, `Error ${error}`));
        });
    }
    patchById(id, negocioAtualizado) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('negocioAtualizado', negocioAtualizado);
            return yield this.service.patchById(id, negocioAtualizado)
                .then(negocio => this.ok({ data: negocio }))
                .catch(error => console.error.bind(console, `Error ${error}`));
        });
    }
};
__decorate([
    inversify_express_utils_1.httpGet(''),
    __param(0, inversify_express_utils_1.queryParam('ativo'))
], NegociosController.prototype, "get", null);
__decorate([
    inversify_express_utils_1.httpPost(''),
    __param(0, inversify_express_utils_1.requestBody())
], NegociosController.prototype, "post", null);
__decorate([
    inversify_express_utils_1.httpGet('/:id'),
    __param(0, inversify_express_utils_1.requestParam('id'))
], NegociosController.prototype, "getById", null);
__decorate([
    inversify_express_utils_1.httpDelete('/:id'),
    __param(0, inversify_express_utils_1.requestParam('id'))
], NegociosController.prototype, "deleteById", null);
__decorate([
    inversify_express_utils_1.httpPatch('/:id'),
    __param(0, inversify_express_utils_1.requestParam('id')), __param(1, inversify_express_utils_1.requestBody())
], NegociosController.prototype, "patchById", null);
NegociosController = __decorate([
    inversify_express_utils_1.controller('/api/v1/negocios'),
    __param(0, inversify_1.inject('NegociosServices'))
], NegociosController);
exports.default = NegociosController;
