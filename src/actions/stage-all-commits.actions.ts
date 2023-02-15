import { exec } from "child_process";

export async function stageAllCommits(): Promise<any> {
  exec("git add .", (error, stdout, stderr) => {});
}
