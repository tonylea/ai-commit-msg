import inquirer from "inquirer";

import { Answer } from "../models/choice";

export async function stageAllChangesQuestion(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: "stageAllChanges",
      type: "confirm",
      message: "Do you want to stage all changes?",
      default: true,
    },
  ]);
}
