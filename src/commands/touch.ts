import { vol } from "memfs";
import path from "node:path";

export function touch(currentDir: string, fileName: string): void {
  try {
    if (!fileName) {
      throw new Error("File name not provided");
    }
    const targetPath = path.join(currentDir, fileName);
    if (vol.existsSync(targetPath)) {
      throw new Error(`File ${fileName} already exists`);
    }
    vol.writeFileSync(targetPath, "");
  } catch (error) {
    if (error instanceof Error) {
      console.error(`touch: ${error.message}`);
    }
  }
}
