/// <reference types="./Observable.concatAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../constants.js";
import Observable_mergeAll from "./Observable.mergeAll.js";
const Observable_concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return Observable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
export default Observable_concatAll;
