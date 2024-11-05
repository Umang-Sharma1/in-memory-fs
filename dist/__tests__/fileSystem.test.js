"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memfs_1 = require("memfs");
const mkdir_1 = require("../src/commands/mkdir");
const cd_1 = require("../src/commands/cd");
const ls_1 = require("../src/commands/ls");
const touch_1 = require("../src/commands/touch");
const echo_1 = require("../src/commands/echo");
const cat_1 = require("../src/commands/cat");
const mv_1 = require("../src/commands/mv");
const cp_1 = require("../src/commands/cp");
const rm_1 = require("../src/commands/rm");
describe("In-Memory File System Tests", () => {
    let currentDir = "/root";
    beforeEach(() => {
        memfs_1.vol.reset();
        memfs_1.vol.mkdirSync("/root", { recursive: true });
        currentDir = "/root";
    });
    test("mkdir should create a new directory", () => {
        (0, mkdir_1.mkdir)(currentDir, "dir1");
        expect(memfs_1.vol.existsSync("/root/dir1")).toBe(true);
    });
    test("cd should change the current directory", () => {
        (0, mkdir_1.mkdir)(currentDir, "dir1");
        currentDir = (0, cd_1.cd)(currentDir, "dir1");
        expect(currentDir).toBe("/root/dir1");
    });
    test("ls should list contents of the directory", () => {
        (0, touch_1.touch)(currentDir, "file1.txt");
        (0, touch_1.touch)(currentDir, "file2.txt");
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();
        (0, ls_1.ls)(currentDir);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("file1.txt"));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("file2.txt"));
        consoleSpy.mockRestore();
    });
    test("touch should create a new empty file", () => {
        (0, touch_1.touch)(currentDir, "newfile.txt");
        expect(memfs_1.vol.existsSync("/root/newfile.txt")).toBe(true);
    });
    test("echo should write text to a file", () => {
        (0, echo_1.echo)(currentDir, "Test content", "echo.txt");
        const content = memfs_1.vol.readFileSync("/root/echo.txt", "utf8");
        expect(content).toBe("Test content");
    });
    test("cat should display file contents", () => {
        (0, echo_1.echo)(currentDir, "File content", "catfile.txt");
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();
        (0, cat_1.cat)(currentDir, "catfile.txt");
        expect(consoleSpy).toHaveBeenCalledWith("File content");
        consoleSpy.mockRestore();
    });
    test("mv should move a file", () => {
        (0, touch_1.touch)(currentDir, "file1.txt");
        (0, mkdir_1.mkdir)(currentDir, "dir2");
        (0, mv_1.mv)(currentDir, "file1.txt", "dir2/file1.txt");
        expect(memfs_1.vol.existsSync("/root/dir2/file1.txt")).toBe(true);
        expect(memfs_1.vol.existsSync("/root/file1.txt")).toBe(false);
    });
    test("cp should copy a file", () => {
        (0, echo_1.echo)(currentDir, "File content", "file1.txt");
        (0, cp_1.cp)(currentDir, "file1.txt", "file2.txt");
        expect(memfs_1.vol.readFileSync("/root/file2.txt", "utf8")).toBe("File content");
    });
    test("rm should remove a file", () => {
        (0, touch_1.touch)(currentDir, "rmfile.txt");
        (0, rm_1.rm)(currentDir, "rmfile.txt");
        expect(memfs_1.vol.existsSync("/root/rmfile.txt")).toBe(false);
    });
    test("rm should remove a directory", () => {
        (0, mkdir_1.mkdir)(currentDir, "dir1");
        (0, rm_1.rm)(currentDir, "dir1");
        expect(memfs_1.vol.existsSync("/root/dir1")).toBe(false);
    });
});
