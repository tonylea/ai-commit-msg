import { showTitleAndBanner } from "./utils/logger.util";

const clear = require("clear");

export async function AiCommitMsg(): Promise<any> {
  clear();

  showTitleAndBanner();

  console.log(`COMMIT-MSG::::: `);
}
