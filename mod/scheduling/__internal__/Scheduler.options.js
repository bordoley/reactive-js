/// <reference types="./Scheduler.options.d.ts" />

import { floor, max } from "../../functions.js";
export const getDelay = (options = {}) => { var _a; return floor(max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0)); };
export const hasDelay = (options = {}) => getDelay(options) > 0;
