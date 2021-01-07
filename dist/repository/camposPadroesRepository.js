"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const camposPadroesSchema_1 = require("../model/camposPadroesSchema");
exports.default = mongoose.model('camposPadroes', camposPadroesSchema_1.default);
