/// <reference types="./Enumerable.concatAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../constants.js";
import Enumerable_mergeAll from "./Enumerable.mergeAll.js";
const Enumerable_concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return Enumerable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
export default Enumerable_concatAll;
