"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const tipoDeDadoSchema_1 = require("../model/tipoDeDadoSchema");
exports.default = mongoose.model('tiposDeDados', tipoDeDadoSchema_1.default);
