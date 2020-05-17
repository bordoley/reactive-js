import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
export function generate(generator, initialValue, options = { delay: 0 }) {
    const factory = (observer) => {
        let acc = initialValue();
        return ($) => {
            let observerIsDisposed = observer.isDisposed;
            while (!observerIsDisposed) {
                acc = generator(acc);
                observer.notify(acc);
                observerIsDisposed = observer.isDisposed;
                if (!observerIsDisposed) {
                    $.yield(options);
                }
            }
            observer.dispose();
        };
    };
    const { delay } = options;
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
}
