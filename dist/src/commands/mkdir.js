"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mkdir = void 0;
const memfs_1 = require("memfs");
const node_path_1 = __importDefault(require("node:path"));
function mkdir(currentDir, dir) {
    try {
        if (!dir) {
            throw new Error("Directory name not provided");
        }
        const targetPath = node_path_1.default.join(currentDir, dir);
        if (memfs_1.vol.existsSync(targetPath)) {
            throw new Error(`Directory ${dir} already exists`);
        }
        memfs_1.vol.mkdirSync(targetPath, { recursive: true });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`mkdir: ${error.message}`);
        }
    }
}
exports.mkdir = mkdir;
