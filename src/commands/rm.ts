// src/commands/rm.ts
import { vol } from "memfs";
import path from "node:path";

export function rm(currentDir: string, target: string): void {
  try {
    if (!target) {
      throw new Error("Target file or directory name not provided");
    }
    const targetPath = path.join(currentDir, target);
    if (!vol.existsSync(targetPath)) {
      throw new Error(`Target ${target} does not exist`);
    }
    const stats = vol.statSync(targetPath);
    if (stats.isDirectory()) {
      vol.rmdirSync(targetPath, { recursive: true });
    } else {
      vol.unlinkSync(targetPath);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(`rm: ${error.message}`);
    }
  }
}
