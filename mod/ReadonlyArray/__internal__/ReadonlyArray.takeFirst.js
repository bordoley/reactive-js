/// <reference types="./ReadonlyArray.takeFirst.d.ts" />

import { clampPositiveInteger } from "../../__internal__/math.js";
const ReadonlyArray_takeFirst = (options) => {
    const count = clampPositiveInteger(options?.count ?? 1);
    return (arr) => count > arr.length ? arr : arr.slice(0, count);
};
export default ReadonlyArray_takeFirst;
