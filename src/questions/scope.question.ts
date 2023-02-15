import inquirer from "inquirer";

export function scopeQuestion(): Promise<any> {
  return inquirer.prompt([
    {
      name: "scope",
      type: "input",
      message: "Please provide the scope:",
    },
  ]);
}
