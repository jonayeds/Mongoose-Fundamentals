"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json()); // --> middleware that parses the json file receiving from client
app.use(express_1.default.text()); //--> middleware that parses the text file receiving from client 
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.query);
    next(); //--> calling next function after executing middleware
};
app.get('/', logger, (req, res) => {
    console.log(req.query);
    res.send("<h1>Hello Universe</h1>");
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({
        "message": "successfully received data"
    });
});
exports.default = app;
