"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// configuration dotenv
dotenv_1.default.config();
// creating a Exppress APP
const app = (0, express_1.default)();
const port = process.env.PORT || 3002;
// routes
app.get('/', (req, res) => {
    res.send('welcome to my typescript proyect');
});
// running server
app.listen(port);
