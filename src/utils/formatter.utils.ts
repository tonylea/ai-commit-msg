export function formatMessage(message: string): string {
  let formattedMessage: string;

  const singleLineMessage = message.replace(/[\n\r]+/g, " ");
  const linebreak: string = "\n";
  const words: string[] = message.split(/\s+/);

  formattedMessage = words.shift()!;
  let characterCount: number = formattedMessage.length;

  words.forEach(function (word, i) {
    characterCount += word.length + 1;
    if (characterCount <= 98) {
      formattedMessage += " ";
    } else {
      formattedMessage += linebreak;
      characterCount = word.length;
    }
    formattedMessage += word;
  });

  return formattedMessage;
}
