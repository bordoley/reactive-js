import { dispose } from "../../disposable.js";
import { deferSynchronous, defer, } from "./observable.js";
import { yield$ } from "./observer.js";
export const fromArray = (options = {}) => values => {
    var _a, _b;
    const delay = Math.max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0);
    const valuesLength = values.length;
    const startIndex = Math.min((_b = options.startIndex) !== null && _b !== void 0 ? _b : 0, valuesLength);
    const factory = () => {
        let index = startIndex;
        return (observer) => {
            while (index < valuesLength) {
                const value = values[index];
                index++;
                yield$(observer, value, index < valuesLength ? delay : 0);
            }
            dispose(observer);
        };
    };
    return delay > 0
        ? defer(factory, { delay })
        : deferSynchronous(factory);
};
