"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startup_1 = require("./startup");
let app = startup_1.default.server.build();
let port = process.env.PORT || '3540';
app.listen(port, function () {
    console.log(`Servidor executando na porta ${port}`);
});
