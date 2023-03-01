/// <reference types="./Runnable.concatAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../constants.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";
const Runnable_concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return Runnable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
export default Runnable_concatAll;
