import { vol } from "memfs";
import path from "node:path";

export function mkdir(currentDir: string, dir: string) {
  try {
    if (!dir) {
      throw new Error("Directory name not provided");
    }
    const targetPath = path.join(currentDir, dir);
    if (vol.existsSync(targetPath)) {
      throw new Error(`Directory ${dir} already exists`);
    }
    vol.mkdirSync(targetPath, { recursive: true });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`mkdir: ${error.message}`);
    }
  }
}
