import { dispose } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { YieldError } from "../../internal/scheduler/schedulerContinuation.js";
import { deferSynchronous, defer } from "./observable.js";
export const fromArray = (options = {}) => values => {
    var _a, _b, _c;
    const delay = Math.max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0);
    const valuesLength = values.length;
    const startIndex = Math.min((_b = options.startIndex) !== null && _b !== void 0 ? _b : 0, valuesLength);
    const endIndex = Math.max(Math.min((_c = options.endIndex) !== null && _c !== void 0 ? _c : values.length, valuesLength), 0);
    const factory = () => {
        let index = startIndex;
        return (observer) => {
            while (index < endIndex) {
                const value = values[index];
                index++;
                observer.notify(value);
                if (index < endIndex && (delay > 0 || observer.shouldYield)) {
                    throw new YieldError(delay);
                }
            }
            pipe(observer, dispose());
        };
    };
    return delay > 0 ? defer(factory, { delay }) : deferSynchronous(factory);
};
