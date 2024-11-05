import { vol } from "memfs";
import path from "node:path";

export function ls(currentDir: string, dir?: string): void {
  try {
    const targetPath = dir ? path.join(currentDir, dir) : currentDir;
    if (!vol.existsSync(targetPath)) {
      throw new Error(`Directory ${dir} does not exist`);
    }
    if (!vol.statSync(targetPath).isDirectory()) {
      throw new Error(`${dir} is not a directory`);
    }
    const files = vol.readdirSync(targetPath);
    console.log(files.join("\n"));
  } catch (error) {
    if (error instanceof Error) {
      console.error(`ls: ${error.message}`);
    }
  }
}
