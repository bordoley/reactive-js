import { dispose } from "../../disposable.js";
import { enumerate } from "../../enumerable.js";
import { defer, pipe } from "../../functions.js";
import { deferSynchronous, defer as deferObs } from "./observable.js";
import { yield$ } from "./observer.js";
export const fromEnumerator = (options = {}) => f => {
    const factory = () => {
        const enumerator = f();
        return (observer) => {
            while (enumerator.move()) {
                yield$(observer, enumerator.current, delay);
            }
            dispose(observer);
        };
    };
    const { delay = 0 } = options;
    return delay > 0 ? deferObs(factory, { delay }) : deferSynchronous(factory);
};
export const fromEnumerable = (options) => enumerable => pipe(defer(enumerable, enumerate), fromEnumerator(options));
