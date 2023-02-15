"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiCommitMsg = void 0;
const logger_util_1 = require("./utils/logger.util");
async function AiCommitMsg() {
    (0, logger_util_1.showTitleAndBanner)();
    console.log(`COMMIT-MSG::::: `);
}
exports.AiCommitMsg = AiCommitMsg;
