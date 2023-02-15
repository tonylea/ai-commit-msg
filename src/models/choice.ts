export interface Answer {
  type: CommitType;
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
  STYLE = "style",
  TEST = "test",
}
