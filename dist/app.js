"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var midWar_1 = __importDefault(require("./middleware/midWar"));
var resizeRouter_1 = __importDefault(require("./routes/resizeRouter"));
var app = (0, express_1.default)();
app.use(midWar_1.default);
app.use('/', express_1.default.static(__dirname + '/public'));
app.use('/resize', resizeRouter_1.default);
app.get('/test', function (req, res) {
    res.send('Hello world!');
});
exports.default = app;
