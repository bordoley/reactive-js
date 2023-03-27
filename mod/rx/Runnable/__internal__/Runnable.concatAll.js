/// <reference types="./Runnable.concatAll.d.ts" />

import Runnable_mergeAll from "./Runnable.mergeAll.js";
const Runnable_concatAll = (options = {}) => {
    const { maxBufferSize } = options;
    return Runnable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
export default Runnable_concatAll;
