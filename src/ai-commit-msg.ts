import { showTitleAndBanner } from "./utils/logger.util";
import { typeQuestion } from "./questions";
import { Answer } from "./models/choice";

const clear = require("clear");

export async function AiCommitMsg(): Promise<any> {
  clear();

  showTitleAndBanner();

  const typeAnswer: Answer = await typeQuestion();
  const type: String = typeAnswer.type;

  console.log(`COMMIT-MSG::::: ${type}`);
}
