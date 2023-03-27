/// <reference types="./Observable.concatAll.d.ts" />

import Observable_mergeAll from "./Observable.mergeAll.js";
const Observable_concatAll = (options = {}) => {
    const { maxBufferSize } = options;
    return Observable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
export default Observable_concatAll;
