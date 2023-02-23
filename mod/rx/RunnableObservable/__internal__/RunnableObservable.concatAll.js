/// <reference types="./RunnableObservable.concatAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../constants.js";
import RunnableObservable_mergeAll from "./RunnableObservable.mergeAll.js";
const RunnableObservable_concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return RunnableObservable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
export default RunnableObservable_concatAll;
