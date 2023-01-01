/// <reference types="./ReadonlyArrayLike.toContainer.d.ts" />
import { getLength, isSome, max, min } from '../../../functions.mjs';

const ReadonlyArrayLike__toContainer = (factory) => (options = {}) => values => {
    const valuesLength = getLength(values);
    const { start: startOption, count: countOption } = options;
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
    return factory(values, start, count);
};

export { ReadonlyArrayLike__toContainer as default };
