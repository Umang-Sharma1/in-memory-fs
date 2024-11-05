// src/commands/mv.ts
import { vol } from "memfs";
import path from "node:path";

export function mv(
  currentDir: string,
  source: string,
  destination: string
): void {
  try {
    if (!source || !destination) {
      throw new Error("Source and destination paths must be provided");
    }
    const sourcePath = path.join(currentDir, source);
    const destPath = path.join(currentDir, destination);
    if (!vol.existsSync(sourcePath)) {
      throw new Error(`Source ${source} does not exist`);
    }
    vol.renameSync(sourcePath, destPath);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`mv: ${error.message}`);
    }
  }
}