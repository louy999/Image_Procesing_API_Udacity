"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var resizeRouter_1 = __importDefault(require("./routes/resizeRouter"));
var app = (0, express_1.default)();
var midWar = (0, morgan_1.default)('tiny');
app.use(midWar);
app.use('/resize', resizeRouter_1.default);
app.get('/test', function (req, res) {
    res.send('Hello world!');
});
app.get('/', function (req, res) {
    res.send('please write url like => http://localhost:4000/resize?name={imgName}&width={Width}&height={Height}&fileExtension={FileExtension}');
});
exports.default = app;
