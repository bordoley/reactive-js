import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { yield$ } from "./observer.js";
export function generate(generator, initialValue, options = { delay: 0 }) {
    const factory = () => {
        let acc = initialValue();
        return (observer) => {
            while (true) {
                acc = generator(acc);
                yield$(observer, acc, delay);
            }
        };
    };
    const { delay } = options;
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
}
