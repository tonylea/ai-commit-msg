import inquirer from "inquirer";

import { Answer, CommitType, Choice } from "../models/choice";

export async function typeQuestion(): Promise<Answer> {
  const listOfTypes: Choice[] = [
    { name: "chore", value: CommitType.CHORE },
    { name: "ci", value: CommitType.CI },
    { name: "docs", value: CommitType.DOCS },
    { name: "feat", value: CommitType.FEAT },
    { name: "fix", value: CommitType.FIX },
    { name: "perf", value: CommitType.PERF },
    { name: "refactor", value: CommitType.REFACTOR },
    { name: "style", value: CommitType.STYLE },
    { name: "test", value: CommitType.TEST },
  ];

  return await inquirer.prompt([
    {
      name: "type",
      type: "list",
      message: "Select the type of commit:",
      choices: listOfTypes,
    },
  ]);
}
