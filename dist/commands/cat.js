"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cat = void 0;
// src/commands/cat.ts
const memfs_1 = require("memfs");
const node_path_1 = __importDefault(require("node:path"));
function cat(currentDir, fileName) {
    try {
        if (!fileName) {
            throw new Error("File name not provided");
        }
        const targetPath = node_path_1.default.join(currentDir, fileName);
        if (!memfs_1.vol.existsSync(targetPath)) {
            throw new Error(`File ${fileName} does not exist`);
        }
        const content = memfs_1.vol.readFileSync(targetPath, "utf8");
        console.log(content);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`cat: ${error.message}`);
        }
    }
}
exports.cat = cat;
