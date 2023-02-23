/// <reference types="./EnumerableObservable.concatAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../constants.js";
import EnumerableObservable_mergeAll from "./EnumerableObservable.mergeAll.js";
const EnumerableObservable_concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return EnumerableObservable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
export default EnumerableObservable_concatAll;
