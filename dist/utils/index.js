"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageName = exports.isImageAvailable = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
function isImageAvailable(fileName) {
    if (fileName === void 0) { fileName = ''; }
    if (fileName.length === 0)
        return false;
    var filePath = path_1.default.join(__dirname, '../images', "".concat(fileName));
    console.log('Checking the availability of: ', filePath);
    try {
        if (fs_1.default.existsSync(filePath)) {
            return true;
        }
    }
    catch (err) {
        console.error(err);
        return false;
    }
    return false;
}
exports.isImageAvailable = isImageAvailable;
function getImageName(fileName, width, height, fileExtension) {
    if (fileExtension === void 0) { fileExtension = 'jpg'; }
    return "".concat(fileName, "_").concat(width, "x").concat(height, ".").concat(fileExtension);
}
exports.getImageName = getImageName;
