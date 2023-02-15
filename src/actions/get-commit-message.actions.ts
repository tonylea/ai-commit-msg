import { showError } from "../utils/logger.util";
import { normaliseCommitDescription } from "./normalise-commit-description.action";
import { execSync } from "child_process";
import { Configuration, OpenAIApi } from "openai";

const OPENAI_KEY = process.env.OPENAI_KEY ?? process.env.OPENAI_API_KEY;

async function generateCommitMessage(
  apiKey: string,
  prompt: string
): Promise<String> {
  const openai = new OpenAIApi(new Configuration({ apiKey }));

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 200,
      stream: false,
      n: 1,
    });

    let openAiMessage: string = completion.data.choices[0]
      .text!.trim()
      .replace(/[\n\r]/g, "");
    return openAiMessage;
  } catch (error) {
    const errorAsAny = error as any;
    errorAsAny.message = `OpenAI API Error: ${errorAsAny.message} - ${errorAsAny.response.statusText}`;
    throw errorAsAny;
  }
}

export async function getCommitMessage(): Promise<String> {
  if (!OPENAI_KEY) {
    showError(
      `Please save your OpenAI API key as an env variable by doing 'export OPENAI_KEY=YOUR_API_KEY'`
    );
    process.exit(1);
  }

  try {
    execSync("git rev-parse --is-inside-work-tree", {
      encoding: "utf8",
      stdio: "ignore",
    });
  } catch {
    showError(`This is not a git repository`);
    process.exit(1);
  }

  const diff = execSync(
    'git diff --cached . ":(exclude)package-lock.json" ":(exclude)yarn.lock" ":(exclude)pnpm-lock.yaml"',
    {
      encoding: "utf8",
    }
  );

  if (!diff) {
    showError(
      `No staged changes found. Make sure there are changes and run 'git add .'`
    );
    process.exit(1);
  }

  // Accounting for GPT-3's input req of 4k tokens (approx 8k chars)
  if (diff.length > 8000) {
    showError(`The diff is too large to write a commit message.`);
    process.exit(1);
  }

  const prompt = `I want you to act like a git commit message writer. I will input a git diff and your job is to convert it into a useful commit message. Do not preface the commit with anything, use the present tense, return a complete sentence, do not repeat yourself and limit the message to 90 characters including spaces: ${diff}`;

  let aiCommitMessage: String;
  aiCommitMessage = await generateCommitMessage(OPENAI_KEY, prompt);

  return normaliseCommitDescription(aiCommitMessage);
}
