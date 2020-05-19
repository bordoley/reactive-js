import { dispose } from "../../disposable.js";
import { enumerate } from "../../enumerable.js";
import { defer, pipe } from "../../functions.js";
import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { yield$ } from "./observer.js";
export const fromEnumerator = (options = { delay: 0 }) => f => {
    const factory = () => {
        const enumerator = f();
        return (observer) => {
            while (enumerator.move()) {
                yield$(observer, enumerator.current, delay);
            }
            dispose(observer);
        };
    };
    const { delay } = options;
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
export const fromEnumerable = (options = { delay: 0 }) => enumerable => pipe(defer(enumerable, enumerate), fromEnumerator(options));
