import { vol } from "memfs";
import path from "node:path";

export function echo(currentDir: string, text: string, fileName: string): void {
  try {
    if (!fileName) {
      throw new Error("File name not provided");
    }
    const targetPath = path.join(currentDir, fileName);
    vol.writeFileSync(targetPath, text);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`echo: ${error.message}`);
    }
  }
}
