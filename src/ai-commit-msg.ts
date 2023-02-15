import { showTitleAndBanner } from "./utils/logger.util";
import {
  typeQuestion,
  addScopeQuestion,
  scopeQuestion,
  changesStagedQuestion,
  stageAllChangesQuestion,
} from "./questions";
import { Answer } from "./models/choice";
import { noCommitsStaged } from "./utils/checker.utils";
import { stageAllCommits } from "./actions/stage-all-commits.actions";

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

  const changesStagedAnswer: Answer = await changesStagedQuestion();
  if (changesStagedAnswer.changesStaged === false) {
    const stageAllChangesAnswer: Answer = await stageAllChangesQuestion();

    if (stageAllChangesAnswer.stageAllChanges === false) {
      noCommitsStaged();
    } else {
      stageAllCommits();
    }
  }

  console.log(`COMMIT-MSG::::: ${type}${scope}: `);
}
