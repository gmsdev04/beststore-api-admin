"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const negociosSchema_1 = require("../model/negociosSchema");
exports.default = mongoose.model('negocios', negociosSchema_1.default);
