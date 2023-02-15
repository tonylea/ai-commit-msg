import inquirer from "inquirer";

import { Answer } from "../models/choice";

export async function commitFooterQuestion(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: "commitFooter",
      type: "editor",
      message: "Footer text. Include incident or PBI number",
    },
  ]);
}
