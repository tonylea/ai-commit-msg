import inquirer from "inquirer";

import { Answer } from "../models/choice";

export async function changesStagedQuestion(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: "changesStaged",
      type: "confirm",
      message: "Are your changes staged already?",
      default: true,
    },
  ]);
}
