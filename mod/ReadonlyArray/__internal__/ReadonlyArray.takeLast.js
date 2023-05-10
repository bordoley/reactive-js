/// <reference types="./ReadonlyArray.takeLast.d.ts" />

import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
const ReadonlyArray_takeLast = (options) => {
    const count = clampPositiveNonZeroInteger(options?.count ?? 1);
    return (arr) => count > arr.length ? arr : arr.slice(arr.length - count, count);
};
export default ReadonlyArray_takeLast;
