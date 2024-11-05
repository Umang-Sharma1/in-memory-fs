import { vol } from "memfs";
import readlineSync from "readline-sync";
import path from "node:path";
import { mkdir } from "./commands/mkdir";
import { cd } from "./commands/cd";
import { ls } from "./commands/ls";
import { touch } from "./commands/touch";
import { echo } from "./commands/echo";
import { cat } from "./commands/cat";
import { mv } from "./commands/mv";
import { cp } from "./commands/cp";
import { rm } from "./commands/rm";

// Initialize file system
vol.mkdirSync("/root");
let currentDir = "/root";

while (true) {
  const command = readlineSync.question(`${currentDir}> `);
  const [cmd, ...args] = command.split(" ");

  if (cmd === "exit") break;

  try {
    switch (cmd) {
      case "mkdir":
        if (args[0]) {
          mkdir(currentDir, args[0]);
        } else {
          console.log("Error: Directory name is required");
        }
        break;
      case "cd":
        if (args[0]) {
          currentDir = cd(currentDir, args[0]);
        } else {
          console.log("Error: Directory path is required");
        }
        break;
      case "ls":
        ls(currentDir, args[0]);
        break;
      case "touch":
        if (args[0]) {
          touch(currentDir, args[0]);
        } else {
          console.log("Error: Filename is required");
        }
        break;
      case "echo":
        if (args.length >= 2) {
          echo(currentDir, args.slice(0, -1).join(" "), args[args.length - 1]);
        } else {
          console.log("Error: Text and filename are required");
        }
        break;
      case "cat":
        if (args[0]) {
          cat(currentDir, args[0]);
        } else {
          console.log("Error: Filename is required");
        }
        break;
      case "mv":
        if (args.length === 2) {
          mv(currentDir, args[0], args[1]);
        } else {
          console.log("Error: Source and destination paths are required");
        }
        break;
      case "cp":
        if (args.length === 2) {
          cp(currentDir, args[0], args[1]);
        } else {
          console.log("Error: Source and destination paths are required");
        }
        break;
      case "rm":
        if (args[0]) {
          rm(currentDir, args[0]);
        } else {
          console.log("Error: File or directory path is required");
        }
        break;
      default:
        console.log("Invalid command");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Error: ${error.message}`);
    } else {
      console.log("An unknown error occurred");
    }
  }
}
