import inquirer from "inquirer";

import { Answer } from "../models/choice";

export async function addScopeQuestion(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: "addScope",
      type: "confirm",
      message: "Do you want to add a scope to the message?",
      default: false,
    },
  ]);
}
