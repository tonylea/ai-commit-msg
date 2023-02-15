import inquirer from "inquirer";

import { Answer } from "../models/choice";

export async function addBodyQuestion(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: "addBody",
      type: "confirm",
      message: "Do you want to add a body to the message?",
      default: false,
    },
  ]);
}
