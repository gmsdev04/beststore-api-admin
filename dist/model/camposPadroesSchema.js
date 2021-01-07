"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const camposPadroesSchema = new mongoose.Schema({
    nome: { type: String },
    produtivo: { type: Boolean },
    tipo: { type: Object }
}, { collection: 'camposPadroes' });
exports.default = camposPadroesSchema;
