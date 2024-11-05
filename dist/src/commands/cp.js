"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cp = void 0;
// src/commands/cp.ts
const memfs_1 = require("memfs");
const node_path_1 = __importDefault(require("node:path"));
function cp(currentDir, source, destination) {
    try {
        if (!source || !destination) {
            throw new Error("Source and destination paths must be provided");
        }
        const sourcePath = node_path_1.default.join(currentDir, source);
        const destPath = node_path_1.default.join(currentDir, destination);
        if (!memfs_1.vol.existsSync(sourcePath)) {
            throw new Error(`Source ${source} does not exist`);
        }
        memfs_1.vol.writeFileSync(destPath, memfs_1.vol.readFileSync(sourcePath));
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`cp: ${error.message}`);
        }
    }
}
exports.cp = cp;
