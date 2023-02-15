import { showTitleAndBanner } from "./utils/logger.util";
import {
  typeQuestion,
  addScopeQuestion,
  scopeQuestion,
  changesStagedQuestion,
  stageAllChangesQuestion,
  copyAndQuitQuestion,
  addBodyQuestion,
  commitBodyQuestion,
  includesBreakingChangeQuestion,
  commitFooterQuestion,
} from "./questions";
import { Answer } from "./models/choice";
import { noCommitsStaged } from "./utils/checker.utils";
import { stageAllCommits } from "./actions/stage-all-commits.actions";
import { getCommitMessage } from "./actions/get-commit-message.actions";
import { copyCommitHeaderToClipboard } from "./actions/copy-commit-header-to-clipboard.actions";
import { green } from "kleur";
import { ConsoleMessage } from "./models/console-message";

const clear = require("clear");

export async function AiCommitMsg(): Promise<any> {
  clear();

  showTitleAndBanner();

  const typeAnswer: Answer = await typeQuestion();
  const commitType: string = typeAnswer.type;

  const addScopeAnswer: Answer = await addScopeQuestion();

  let commitScope: string;
  if (addScopeAnswer.addScope === true) {
    const scopeAnswer: Answer = await scopeQuestion();
    commitScope = ` (${scopeAnswer.scope})`;
  } else {
    commitScope = "";
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

  const commitDescription: String = await getCommitMessage();

  const commitHeader: string = `${commitType}${commitScope}: ${commitDescription}`;
  console.info(green(ConsoleMessage.GENERATED_HEADER) + commitHeader);

  const copyAndQuitAnswer: Answer = await copyAndQuitQuestion();
  if (copyAndQuitAnswer.copyAndQuit === true) {
    copyCommitHeaderToClipboard(commitHeader);
    process.exit(0);
  }
  const addBodyAnswer: Answer = await addBodyQuestion();
  let commitBody: string;
  if (addBodyAnswer.addBody === true) {
    const commitBodyAnswer: Answer = await commitBodyQuestion();
    commitBody = commitBodyAnswer.commitBody;
    // TODO: Combine everything to one line, then split on end of last word before 100 characters
  }

  let commitFooter: string;
  const includesBreakingChangeAnswer: Answer =
    await includesBreakingChangeQuestion();
  if (includesBreakingChangeAnswer.breakingChange === true) {
    const commitFooterAnswer: Answer = await commitFooterQuestion();
    commitFooter = `BREAKING CHANGE: ${commitFooterAnswer.commitFooter}`;
    // TODO: Combine everything to one line, then split on end of last word before 100 characters
  }

  // Commit

  console.log(
    `COMMIT-MSG::::: ${commitType}${commitScope}: ${commitDescription}`
  );
}
