// src/commands/cat.ts
import { vol } from "memfs";
import path from "node:path";

export function cat(currentDir: string, fileName: string): void {
  try {
    if (!fileName) {
      throw new Error("File name not provided");
    }
    const targetPath = path.join(currentDir, fileName);
    if (!vol.existsSync(targetPath)) {
      throw new Error(`File ${fileName} does not exist`);
    }
    const content = vol.readFileSync(targetPath, "utf8");
    console.log(content);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`cat: ${error.message}`);
    }
  }
}
