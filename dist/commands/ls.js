"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ls = void 0;
const memfs_1 = require("memfs");
const node_path_1 = __importDefault(require("node:path"));
function ls(currentDir, dir) {
    try {
        const targetPath = dir ? node_path_1.default.join(currentDir, dir) : currentDir;
        if (!memfs_1.vol.existsSync(targetPath)) {
            throw new Error(`Directory ${dir} does not exist`);
        }
        if (!memfs_1.vol.statSync(targetPath).isDirectory()) {
            throw new Error(`${dir} is not a directory`);
        }
        const files = memfs_1.vol.readdirSync(targetPath);
        console.log(files.join("\n"));
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`ls: ${error.message}`);
        }
    }
}
exports.ls = ls;
