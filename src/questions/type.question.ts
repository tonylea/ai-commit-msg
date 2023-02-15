import inquirer from "inquirer";

import { Answer, CommitType, Choice } from "../models/choice";

export async function typeQuestion(): Promise<Answer> {
  const listOfTypes: Choice[] = [
    {
      name: "chore   : Changes that do not fit into any other type",
      value: CommitType.CHORE,
    },
    {
      name: "ci      : Changes to our CI configuration files and scripts",
      value: CommitType.CI,
    },
    { name: "docs    : Documentation only changes", value: CommitType.DOCS },
    { name: "feat    : A new feature", value: CommitType.FEAT },
    { name: "fix     : A bug fix", value: CommitType.FIX },
    {
      name: "perf    : A code change that improves performance",
      value: CommitType.PERF,
    },
    {
      name: "refactor: A code change that neither fixes a bug nor adds a feature",
      value: CommitType.REFACTOR,
    },
    {
      name: "test    : Adding missing tests or correcting existing tests",
      value: CommitType.TEST,
    },
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
