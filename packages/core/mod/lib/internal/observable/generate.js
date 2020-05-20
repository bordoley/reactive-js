import { deferSynchronous, defer, } from "./observable.js";
import { yield$ } from "./observer.js";
export function generate(generator, initialValue, options = { delay: 0 }) {
    const { delay } = options;
    const factory = () => {
        let acc = initialValue();
        return (observer) => {
            while (true) {
                acc = generator(acc);
                yield$(observer, acc, delay);
            }
        };
    };
    return delay > 0
        ? defer(factory, options)
        : deferSynchronous(factory);
}
