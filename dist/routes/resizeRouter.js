"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var utils_1 = require("../utils");
var resizeImage_1 = __importDefault(require("../utils/resizeImage"));
var resizeRouter = express_1.default.Router();
resizeRouter.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var fileName, fileExtension, width, height, imageAvailable, fullFileName, requestedSizeAvailable;
    return __generator(this, function (_a) {
        fileName = req.query.name && req.query.name.split('.')[0];
        fileExtension = req.query.fileExtension || 'jpg';
        width = req.query.width;
        height = req.query.height;
        if (!fileName) {
            return [2, res.status(400).json({
                    error: 'Please specify the file name',
                })];
        }
        if (!width) {
            return [2, res.status(400).json({
                    error: 'Please specify width  values',
                })];
        }
        if (!Number(width)) {
            return [2, res.status(400).json({
                    error: 'Please write width number',
                })];
        }
        if (!height) {
            return [2, res.status(400).json({
                    error: 'Please specify height values',
                })];
        }
        if (!Number(height)) {
            return [2, res.status(400).json({
                    error: 'Please specify height values',
                })];
        }
        imageAvailable = (0, utils_1.isImageAvailable)(fileName + '.' + fileExtension);
        if (!imageAvailable) {
            return [2, res.status(404).json({
                    error: 'The requested image is not available',
                })];
        }
        fullFileName = (0, utils_1.getImageName)(fileName, width, height, fileExtension);
        requestedSizeAvailable = (0, utils_1.isImageAvailable)(fullFileName);
        if (requestedSizeAvailable) {
            console.log('Image already available, returning cached image');
            return [2, res
                    .status(200)
                    .sendFile(path_1.default.join(__dirname, '/../images/', fullFileName))];
        }
        (0, resizeImage_1.default)(fileName, fileExtension, parseInt(width), parseInt(height), path_1.default.join(__dirname, '/../images'), path_1.default.join(__dirname, '../images/thumbnails/'))
            .then(function (filePath) { return res.sendFile(filePath); })
            .catch(function (error) {
            console.log(error);
            res.json({
                error: 'Image could not be resized',
                success: false,
            });
        });
        return [2];
    });
}); });
exports.default = resizeRouter;
