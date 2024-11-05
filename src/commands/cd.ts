import { vol } from "memfs";
import path from "node:path";

export function cd(currentDir: string, dir: string): string {
  try {
    if (!dir) {
      throw new Error("Directory name not provided");
    }
    if (dir === "/") return "/";
    if (dir === "..") return path.posix.dirname(currentDir);

    const targetPath = path.posix.join(currentDir, dir);
    if (!vol.existsSync(targetPath)) {
      throw new Error(`Directory ${dir} does not exist`);
    }
    if (!vol.statSync(targetPath).isDirectory()) {
      throw new Error(`${dir} is not a directory`);
    }
    return targetPath;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`cd: ${error.message}`);
    }
    return currentDir;
  }
}
