import inquirer from "inquirer";

import { Answer } from "../models/choice";

export async function commitBodyQuestion(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: "commitBody",
      type: "editor",
      message: "Body text",
    },
  ]);
}
