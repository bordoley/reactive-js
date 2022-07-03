/// <reference types="./__internal__.container.d.ts" />
import { raise, getLength, min, max } from './functions.mjs';

class AbstractContainer {
    get TContainerOf() {
        return raise();
    }
    get T() {
        return raise();
    }
}
const createFromArray = (factory) => (options = {}) => values => {
    var _a, _b;
    const valuesLength = getLength(values);
    const startIndex = min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = max(min((_b = options.endIndex) !== null && _b !== void 0 ? _b : valuesLength, valuesLength), 0);
    return factory(values, startIndex, endIndex, options);
};

export { AbstractContainer, createFromArray };
