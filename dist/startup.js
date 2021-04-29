"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const bodyParser = require("body-parser");
const cors = require("cors");
const database_1 = require("./configuration/database");
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const negociosRepositoryMongoDb_1 = require("./repository/impl/negociosRepositoryMongoDb");
//CONTROLLERS
const negociosServices_1 = require("./services/negociosServices");
require('./controller/negociosController');
class StartUp {
    constructor() {
        this.container = new inversify_1.Container();
        this.server = new inversify_express_utils_1.InversifyExpressServer(this.container);
        this._db = new database_1.default();
        this._db.createConnection();
        this.configureServer();
        this.configureDependencyInjection();
    }
    configureServer() {
        this.server.setConfig((app) => {
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(bodyParser.json());
            this.enableCors(app);
        });
    }
    configureDependencyInjection() {
        this.container.bind('INegociosRepository').to(negociosRepositoryMongoDb_1.default);
        this.container.bind('NegociosServices').to(negociosServices_1.default);
    }
    enableCors(app) {
        const options = {
            methods: "GET,OPTIONS,PUT,POST,DELETE,PATCH",
            origin: "*"
        };
        app.use(cors(options));
    }
}
exports.default = new StartUp();
