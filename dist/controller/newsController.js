"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsService_1 = require("../services/newsService");
const HttpStatus = require("http-status");
class NewsController {
    constructor() {
        this.sendResponse = function (res, statusCode, data) {
            res.status(statusCode).json({ result: data });
        };
    }
    get(req, res) {
        newsService_1.default.get()
            .then(news => res.status(HttpStatus.OK).json({ result: news, some: 's' }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let news = req.body;
        newsService_1.default.create(news)
            .then(news => res.status(HttpStatus.CREATED).json({ result: "Noticia cadastrada com sucesso" }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        let _id = req.params.id;
        newsService_1.default.getById(_id)
            .then(news => res.status(HttpStatus.OK).json({ result: news }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    deleteById(req, res) {
        let _id = req.params.id;
        newsService_1.default.delete(_id)
            .then(news => res.status(HttpStatus.OK).json({ result: 'Deletado com sucesso' }))
            .catch(error => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error }));
    }
    update(req, res) {
        let _id = req.params.id;
        let newsToUpdate = req.body;
        newsService_1.default.update(_id, newsToUpdate)
            .then(news => res.status(HttpStatus.OK).json({ result: 'Atualizado com sucesso' }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new NewsController();
