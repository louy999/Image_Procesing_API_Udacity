"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var sharp_1 = __importDefault(require("sharp"));
var index_1 = require("./index");
var resizeImage = function (fileName, fileExtension, width, height, inputPath, outputPath) {
    if (fileExtension === void 0) { fileExtension = 'jpg'; }
    return new Promise(function (resolve, reject) {
        var readStream = fs_1.default.createReadStream("".concat(inputPath, "/").concat(fileName, ".").concat(fileExtension));
        var outputFile = "".concat(outputPath, "/").concat((0, index_1.getImageName)(fileName, Number(width), Number(height), fileExtension));
        var writeStream = fs_1.default.createWriteStream(outputFile);
        console.log('Resizing the image...');
        var transformer = (0, sharp_1.default)().resize(width, height);
        readStream.pipe(transformer).pipe(writeStream);
        writeStream.on('finish', function () {
            resolve(outputFile);
        });
        writeStream.on('error', reject);
    });
};
exports.default = resizeImage;
