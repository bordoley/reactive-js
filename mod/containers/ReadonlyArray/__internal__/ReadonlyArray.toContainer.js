/// <reference types="./ReadonlyArray.toContainer.d.ts" />

import { isSome, max, min } from "../../../functions.js";
import ReadonlyArray_getLength from "./ReadonlyArray.getLength.js";
const ReadonlyArray_toContainer = (factory) => (options) => values => {
    const valuesLength = ReadonlyArray_getLength(values);
    const { start: startOption, count: countOption, ...tail } = options !== null && options !== void 0 ? options : {};
    const { start, count } = (() => {
        if (isSome(countOption) && countOption >= 0) {
            const startOrDefault = startOption !== null && startOption !== void 0 ? startOption : 0;
            const maxStart = max(startOrDefault, 0);
            const start = min(maxStart, valuesLength - 1);
            const maxCount = min(valuesLength, countOption);
            const count = min(valuesLength - start, maxCount);
            return { start, count };
        }
        else if (isSome(countOption) && countOption < 0) {
            const startOrDefault = startOption !== null && startOption !== void 0 ? startOption : valuesLength - 1;
            const maxStart = max(startOrDefault, 0);
            const start = min(maxStart, valuesLength - 1);
            const maxCount = max(-valuesLength, countOption);
            const count = max(-start - 1, maxCount);
            return { start, count };
        }
        else {
            // count is none
            const startOrDefault = startOption !== null && startOption !== void 0 ? startOption : 0;
            const maxStart = max(startOrDefault, 0);
            const start = min(maxStart, valuesLength);
            const count = valuesLength - start;
            return { start, count };
        }
    })();
    return factory(values, start, count, tail);
};
export default ReadonlyArray_toContainer;
