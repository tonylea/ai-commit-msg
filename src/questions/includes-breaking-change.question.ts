import inquirer from "inquirer";

import { Answer } from "../models/choice";

export async function includesBreakingChangeQuestion(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: "breakingChange",
      type: "confirm",
      message: "Is this a breaking change?",
      default: false,
    },
  ]);
}
