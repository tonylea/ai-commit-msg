import { exec } from "child_process";

export async function stageAllCommits(): Promise<any> {
  exec("git add .", (error, stdout, stderr) => {});
}

export async function commitChanges(
  header: string,
  body: string,
  footer: string
): Promise<any> {
  const commitMessage = `${header}\n${body}\n${footer}`;
  exec(`git commit -m"${commitMessage}"`, (error, stdout, stderr) => {});
}
