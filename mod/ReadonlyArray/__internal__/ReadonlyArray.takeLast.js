/// <reference types="./ReadonlyArray.takeLast.d.ts" />

import { clampPositiveInteger } from "../../__internal__/math.js";
const ReadonlyArray_takeLast = (options) => {
    const count = clampPositiveInteger(options?.count ?? 1);
    return (arr) => count > arr.length ? arr : arr.slice(arr.length - count, arr.length);
};
export default ReadonlyArray_takeLast;
