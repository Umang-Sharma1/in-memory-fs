import { vol } from "memfs";
import { mkdir } from "../src/commands/mkdir";
import { cd } from "../src/commands/cd";
import { ls } from "../src/commands/ls";
import { touch } from "../src/commands/touch";
import { echo } from "../src/commands/echo";
import { cat } from "../src/commands/cat";
import { mv } from "../src/commands/mv";
import { cp } from "../src/commands/cp";
import { rm } from "../src/commands/rm";

describe("In-Memory File System Tests", () => {
  let currentDir = "/root";

  beforeEach(() => {
    vol.reset();
    vol.mkdirSync("/root", { recursive: true });
    currentDir = "/root";
  });

  test("mkdir should create a new directory", () => {
    mkdir(currentDir, "dir1");
    expect(vol.existsSync("/root/dir1")).toBe(true);
  });

  test("cd should change the current directory", () => {
    mkdir(currentDir, "dir1");
    currentDir = cd(currentDir, "dir1");
    expect(currentDir).toBe("/root/dir1");
  });

  test("ls should list contents of the directory", () => {
    touch(currentDir, "file1.txt");
    touch(currentDir, "file2.txt");
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    ls(currentDir);
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("file1.txt")
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("file2.txt")
    );
    consoleSpy.mockRestore();
  });

  test("touch should create a new empty file", () => {
    touch(currentDir, "newfile.txt");
    expect(vol.existsSync("/root/newfile.txt")).toBe(true);
  });

  test("echo should write text to a file", () => {
    echo(currentDir, "Test content", "echo.txt");
    const content = vol.readFileSync("/root/echo.txt", "utf8");
    expect(content).toBe("Test content");
  });

  test("cat should display file contents", () => {
    echo(currentDir, "File content", "catfile.txt");
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    cat(currentDir, "catfile.txt");
    expect(consoleSpy).toHaveBeenCalledWith("File content");
    consoleSpy.mockRestore();
  });

  test("mv should move a file", () => {
    touch(currentDir, "file1.txt");
    mkdir(currentDir, "dir2");
    mv(currentDir, "file1.txt", "dir2/file1.txt");
    expect(vol.existsSync("/root/dir2/file1.txt")).toBe(true);
    expect(vol.existsSync("/root/file1.txt")).toBe(false);
  });

  test("cp should copy a file", () => {
    echo(currentDir, "File content", "file1.txt");
    cp(currentDir, "file1.txt", "file2.txt");
    expect(vol.readFileSync("/root/file2.txt", "utf8")).toBe("File content");
  });

  test("rm should remove a file", () => {
    touch(currentDir, "rmfile.txt");
    rm(currentDir, "rmfile.txt");
    expect(vol.existsSync("/root/rmfile.txt")).toBe(false);
  });

  test("rm should remove a directory", () => {
    mkdir(currentDir, "dir1");
    rm(currentDir, "dir1");
    expect(vol.existsSync("/root/dir1")).toBe(false);
  });
});
