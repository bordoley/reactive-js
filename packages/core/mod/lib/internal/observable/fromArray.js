import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
export const fromArray = (options = {}) => values => {
    var _a, _b;
    const delay = Math.max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0);
    const valuesLength = values.length;
    const startIndex = Math.min((_b = options.startIndex) !== null && _b !== void 0 ? _b : 0, valuesLength);
    const factory = (observer) => {
        const yieldOptions = { delay };
        let index = startIndex;
        let observerIsDisposed = observer.isDisposed;
        return ($) => {
            while (index < valuesLength && !observerIsDisposed) {
                observer.notify(values[index]);
                index++;
                observerIsDisposed = observer.isDisposed;
                if (index < valuesLength && !observerIsDisposed) {
                    $.yield(yieldOptions);
                }
            }
            observer.dispose();
        };
    };
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
