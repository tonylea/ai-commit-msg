import inquirer from "inquirer";

import { Answer } from "../models/choice";

export async function copyAndQuitQuestion(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: "copyAndQuit",
      type: "confirm",
      message: "Do you want to copy the message to the clipboard and quit?",
      default: false,
    },
  ]);
}
