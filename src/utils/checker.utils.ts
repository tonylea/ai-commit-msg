import { showError } from "./logger.util";

export function noCommitsStaged() {
  showError(`No commits are staged!`);
  process.exit(1);
}
