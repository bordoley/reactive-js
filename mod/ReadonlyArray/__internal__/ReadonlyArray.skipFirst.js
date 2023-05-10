/// <reference types="./ReadonlyArray.skipFirst.d.ts" />

import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
const ReadonlyArray_skipFirst = (options) => {
    const count = clampPositiveNonZeroInteger(options?.count ?? 1);
    return (arr) => count >= arr.length ? [] : arr.slice(count, arr.length - count);
};
export default ReadonlyArray_skipFirst;
