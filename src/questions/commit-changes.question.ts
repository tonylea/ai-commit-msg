import inquirer from "inquirer";

import { Answer } from "../models/choice";

export async function commitChangesQuestion(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: "commitChanges",
      type: "confirm",
      message: "Do you want to commit your changes?",
      default: true,
    },
  ]);
}
