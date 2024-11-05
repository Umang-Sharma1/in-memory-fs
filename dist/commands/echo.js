"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.echo = void 0;
const memfs_1 = require("memfs");
const node_path_1 = __importDefault(require("node:path"));
function echo(currentDir, text, fileName) {
    try {
        if (!fileName) {
            throw new Error("File name not provided");
        }
        const targetPath = node_path_1.default.join(currentDir, fileName);
        memfs_1.vol.writeFileSync(targetPath, text);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`echo: ${error.message}`);
        }
    }
}
exports.echo = echo;
