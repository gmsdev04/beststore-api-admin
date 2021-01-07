"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const TipoDeDadoSchema = new mongoose.Schema({
    nome: { type: String },
    alias: { type: String }
}, { collection: 'tiposDeDados' });
exports.default = TipoDeDadoSchema;
