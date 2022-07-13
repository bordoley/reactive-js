/// <reference types="./optionalArgs.d.ts" />
import { floor, max } from '../util/functions.mjs';

const getDelay = (options = {}) => { var _a; return floor(max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0)); };
const hasDelay = (options = {}) => getDelay(options) > 0;

export { getDelay, hasDelay };
