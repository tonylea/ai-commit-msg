import { showTitleAndBanner } from "./utils/logger.util";
import { typeQuestion, addScopeQuestion, scopeQuestion } from "./questions";
import { Answer } from "./models/choice";

const clear = require("clear");

export async function AiCommitMsg(): Promise<any> {
  clear();

  showTitleAndBanner();

  const typeAnswer: Answer = await typeQuestion();
  const type: String = typeAnswer.type;

  const addScopeAnswer: Answer = await addScopeQuestion();

  let scope: String;
  if (addScopeAnswer.addScope === true) {
    const scopeAnswer: Answer = await scopeQuestion();
    scope = ` (${scopeAnswer.scope})`;
  } else {
    scope = "";
  }

  console.log(`COMMIT-MSG::::: ${type}${scope}: `);
}
