import { red, green, cyan } from "kleur";
import * as figlet from "figlet";

import { ConsoleMessage } from "../models/console-message";

export const showTitleAndBanner = (): void => {
  console.log(
    cyan(figlet.textSync(ConsoleMessage.TITLE, { horizontalLayout: "full" }))
  );
  console.info(cyan(ConsoleMessage.BANNER));
};
