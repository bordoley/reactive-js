import { dispose } from "../../disposable.js";
import { enumerate } from "../../enumerable.js";
import { defer, pipe } from "../../functions.js";
import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
export const fromEnumerator = (options = { delay: 0 }) => f => {
    const factory = (observer) => {
        const enumerator = f();
        let observerIsDisposed = observer.isDisposed;
        return ($) => {
            while (!observerIsDisposed && enumerator.move()) {
                observer.notify(enumerator.current);
                observerIsDisposed = observer.isDisposed;
                if (!observerIsDisposed) {
                    $.yield(options);
                }
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
