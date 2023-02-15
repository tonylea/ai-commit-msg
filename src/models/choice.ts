export interface Answer {
  type: CommitType;
  addScope?: boolean;
  scope: string;
  changesStaged?: boolean;
  stageAllChanges?: boolean;
  copyAndQuit?: boolean;
  addBody?: boolean;
  commitBody: string;
  breakingChange?: boolean;
  commitFooter: string;
  commitChanges: boolean;
}

export interface Choice {
  name: string;
  value: CommitType;
}

export enum CommitType {
  CHORE = "chore",
  CI = "ci",
  DOCS = "docs",
  FEAT = "feat",
  FIX = "fix",
  PERF = "perf",
  REFACTOR = "refactor",
  TEST = "test",
}
