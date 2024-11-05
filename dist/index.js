"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memfs_1 = require("memfs");
const readline_sync_1 = __importDefault(require("readline-sync"));
const mkdir_1 = require("./commands/mkdir");
const cd_1 = require("./commands/cd");
const ls_1 = require("./commands/ls");
const touch_1 = require("./commands/touch");
const echo_1 = require("./commands/echo");
const cat_1 = require("./commands/cat");
const mv_1 = require("./commands/mv");
const cp_1 = require("./commands/cp");
const rm_1 = require("./commands/rm");
// Initialize file system
memfs_1.vol.mkdirSync("/root");
let currentDir = "/root";
while (true) {
    const command = readline_sync_1.default.question(`${currentDir}> `);
    const [cmd, ...args] = command.split(" ");
    if (cmd === "exit")
        break;
    try {
        switch (cmd) {
            case "mkdir":
                if (args[0]) {
                    (0, mkdir_1.mkdir)(currentDir, args[0]);
                }
                else {
                    console.log("Error: Directory name is required");
                }
                break;
            case "cd":
                if (args[0]) {
                    currentDir = (0, cd_1.cd)(currentDir, args[0]);
                }
                else {
                    console.log("Error: Directory path is required");
                }
                break;
            case "ls":
                (0, ls_1.ls)(currentDir, args[0]);
                break;
            case "touch":
                if (args[0]) {
                    (0, touch_1.touch)(currentDir, args[0]);
                }
                else {
                    console.log("Error: Filename is required");
                }
                break;
            case "echo":
                if (args.length >= 2) {
                    (0, echo_1.echo)(currentDir, args.slice(0, -1).join(" "), args[args.length - 1]);
                }
                else {
                    console.log("Error: Text and filename are required");
                }
                break;
            case "cat":
                if (args[0]) {
                    (0, cat_1.cat)(currentDir, args[0]);
                }
                else {
                    console.log("Error: Filename is required");
                }
                break;
            case "mv":
                if (args.length === 2) {
                    (0, mv_1.mv)(currentDir, args[0], args[1]);
                }
                else {
                    console.log("Error: Source and destination paths are required");
                }
                break;
            case "cp":
                if (args.length === 2) {
                    (0, cp_1.cp)(currentDir, args[0], args[1]);
                }
                else {
                    console.log("Error: Source and destination paths are required");
                }
                break;
            case "rm":
                if (args[0]) {
                    (0, rm_1.rm)(currentDir, args[0]);
                }
                else {
                    console.log("Error: File or directory path is required");
                }
                break;
            default:
                console.log("Invalid command");
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(`Error: ${error.message}`);
        }
        else {
            console.log("An unknown error occurred");
        }
    }
}
