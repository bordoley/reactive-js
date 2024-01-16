/// <reference types="./parseArrayBounds.d.ts" />

import { Array_length, MAX_SAFE_INTEGER } from "./constants.js";
import { abs, clamp, min } from "./math.js";
const parseArrayBounds = (array, options) => {
    const valuesLength = array[Array_length];
    const { start: startOption, count: countOption = MAX_SAFE_INTEGER } = options ?? {};
    const start = countOption >= 0
        ? clamp(0, startOption ?? 0, valuesLength)
        : clamp(-1, startOption ?? valuesLength - 1, valuesLength - 1);
    const count = countOption >= 0
        ? clamp(0, countOption, valuesLength - start)
        : -min(abs(countOption), start + 1);
    return { start, count };
};
export default parseArrayBounds;
