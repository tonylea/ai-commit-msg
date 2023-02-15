"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTitleAndBanner = void 0;
const tslib_1 = require("tslib");
const kleur_1 = require("kleur");
const figlet = tslib_1.__importStar(require("figlet"));
const console_message_1 = require("../models/console-message");
const showTitleAndBanner = () => {
    console.log((0, kleur_1.cyan)(figlet.textSync(console_message_1.ConsoleMessage.TITLE, { horizontalLayout: "full" })));
    console.info((0, kleur_1.cyan)(console_message_1.ConsoleMessage.BANNER));
};
exports.showTitleAndBanner = showTitleAndBanner;
