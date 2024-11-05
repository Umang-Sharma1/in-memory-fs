"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cd = void 0;
const memfs_1 = require("memfs");
const node_path_1 = __importDefault(require("node:path"));
function cd(currentDir, dir) {
    try {
        if (!dir) {
            throw new Error("Directory name not provided");
        }
        if (dir === "/")
            return "/";
        if (dir === "..")
            return node_path_1.default.posix.dirname(currentDir);
        const targetPath = node_path_1.default.posix.join(currentDir, dir);
        if (!memfs_1.vol.existsSync(targetPath)) {
            throw new Error(`Directory ${dir} does not exist`);
        }
        if (!memfs_1.vol.statSync(targetPath).isDirectory()) {
            throw new Error(`${dir} is not a directory`);
        }
        return targetPath;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`cd: ${error.message}`);
        }
        return currentDir;
    }
}
exports.cd = cd;
