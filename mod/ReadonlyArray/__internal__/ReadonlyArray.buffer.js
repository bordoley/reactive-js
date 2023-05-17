/// <reference types="./ReadonlyArray.buffer.d.ts" />

import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
const ReadonlyArray_buffer = (count) => {
    count = clampPositiveNonZeroInteger(count);
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
