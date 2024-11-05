"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rm = void 0;
// src/commands/rm.ts
const memfs_1 = require("memfs");
const node_path_1 = __importDefault(require("node:path"));
function rm(currentDir, target) {
    try {
        if (!target) {
            throw new Error("Target file or directory name not provided");
        }
        const targetPath = node_path_1.default.join(currentDir, target);
        if (!memfs_1.vol.existsSync(targetPath)) {
            throw new Error(`Target ${target} does not exist`);
        }
        const stats = memfs_1.vol.statSync(targetPath);
        if (stats.isDirectory()) {
            memfs_1.vol.rmdirSync(targetPath, { recursive: true });
        }
        else {
            memfs_1.vol.unlinkSync(targetPath);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`rm: ${error.message}`);
        }
    }
}
exports.rm = rm;
