"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const negociosSchema = new mongoose.Schema({
    nome: { type: String },
    descricao: { type: String },
    ativo: { type: Boolean }
}, { collection: 'negocios' });
exports.default = negociosSchema;
