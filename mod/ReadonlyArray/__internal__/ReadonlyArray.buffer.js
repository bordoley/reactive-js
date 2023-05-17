/// <reference types="./ReadonlyArray.buffer.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
const ReadonlyArray_buffer = (options) => {
    const count = clampPositiveNonZeroInteger(options?.count ?? MAX_SAFE_INTEGER);
    return (array) => {
        const result = [];
        const length = array.length;
        let buffer = [];
        for (let i = 0; i < length; i++) {
            buffer.push(array[i]);
            if (buffer.length >= count) {
                result.push(buffer);
                buffer = [];
            }
        }
        if (buffer.length > 0) {
            result.push(buffer);
        }
        return result;
    };
};
export default ReadonlyArray_buffer;
