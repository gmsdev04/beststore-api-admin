"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startup_1 = require("./startup");
let port = process.env.PORT || '8080';
startup_1.default.app.listen(port, function () {
    console.log(`Servidor executando na porta ${port}`);
});
