/// <reference types="./Enumerable.concatAll.d.ts" />

import Enumerable_mergeAll from "./Enumerable.mergeAll.js";
const Enumerable_concatAll = (options = {}) => {
    const { maxBufferSize } = options;
    return Enumerable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
export default Enumerable_concatAll;
