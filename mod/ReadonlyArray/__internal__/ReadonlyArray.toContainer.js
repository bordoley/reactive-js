/// <reference types="./ReadonlyArray.toContainer.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { abs, clamp, min } from "../../__internal__/math.js";
import ReadonlyArray_getLength from "./ReadonlyArray.getLength.js";
const ReadonlyArray_toContainer = (factory) => (options) => values => {
    const valuesLength = ReadonlyArray_getLength(values);
    const { start: startOption, count: countOption = MAX_SAFE_INTEGER } = options ?? {};
    const start = countOption >= 0
        ? clamp(0, startOption ?? 0, valuesLength)
        : clamp(-1, startOption ?? valuesLength - 1, valuesLength - 1);
    const count = countOption >= 0
        ? clamp(0, countOption, valuesLength - start)
        : -min(abs(countOption), start + 1);
    return factory(values, start, count);
};
export default ReadonlyArray_toContainer;
