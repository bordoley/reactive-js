/// <reference types="./__internal__.container.d.ts" />
import { length, min, max } from './functions.mjs';

const createFromArray = (factory) => (options = {}) => values => {
    var _a, _b;
    const valuesLength = length(values);
    const startIndex = min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = max(min((_b = options.endIndex) !== null && _b !== void 0 ? _b : valuesLength, valuesLength), 0);
    return factory(values, startIndex, endIndex, options);
};

export { createFromArray };
