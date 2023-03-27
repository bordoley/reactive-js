/// <reference types="./ReadonlyArray.toContainer.d.ts" />

import { abs, clamp, min } from "../../../__internal__/math.js";
import { isSome } from "../../../functions.js";
import ReadonlyArray_getLength from "./ReadonlyArray.getLength.js";
const ReadonlyArray_toContainer = (factory) => (options) => values => {
    const valuesLength = ReadonlyArray_getLength(values);
    const { start: startOption, count: countOption, ...tail } = options !== null && options !== void 0 ? options : {};
    const { start, count } = (() => {
        if (isSome(countOption) && countOption >= 0) {
            const start = clamp(0, startOption !== null && startOption !== void 0 ? startOption : 0, valuesLength);
            const count = clamp(0, countOption, valuesLength - start);
            return { start, count };
        }
        else if (isSome(countOption) && countOption < 0) {
            const start = clamp(-1, startOption !== null && startOption !== void 0 ? startOption : valuesLength - 1, valuesLength - 1);
            const count = -min(abs(countOption), start + 1);
            return { start, count };
        }
        else {
            const start = clamp(0, startOption !== null && startOption !== void 0 ? startOption : 0, valuesLength);
            const count = valuesLength - start;
            return { start, count };
        }
    })();
    return factory(values, start, count, tail);
};
export default ReadonlyArray_toContainer;
