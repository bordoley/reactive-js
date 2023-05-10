/// <reference types="./ReadonlyArray.skipFirst.d.ts" />

import { clampPositiveInteger } from "../../__internal__/math.js";
const ReadonlyArray_skipFirst = (options) => {
    const count = clampPositiveInteger(options?.count ?? 1);
    return (arr) => count >= arr.length ? [] : arr.slice(count, arr.length);
};
export default ReadonlyArray_skipFirst;
