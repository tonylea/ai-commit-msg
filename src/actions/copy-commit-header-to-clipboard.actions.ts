import { execSync } from "child_process";

export async function copyCommitHeaderToClipboard(commitHeader: string) {
  const operatingSystem: string = process.platform;

  if (operatingSystem === "darwin") {
    const copy = execSync(`echo '${commitHeader}' | pbcopy`);
  } else if (operatingSystem === "win32") {
    const copy = execSync(`write-Output '${commitHeader}' | clip`);
  }
}
