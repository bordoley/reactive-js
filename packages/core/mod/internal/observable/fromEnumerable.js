import { alwaysFalse } from "../../functions.js";
import { isSome } from "../../option.js";
import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { AbstractProducer } from "./producer.js";
class FromEnumeratorProducer extends AbstractProducer {
    constructor(subscriber, enumerator, delay) {
        super(subscriber);
        this.enumerator = enumerator;
        this.delay = delay;
    }
    produce(shouldYield) {
        const delay = this.delay;
        const enumerator = this.enumerator;
        if (delay > 0 || isSome(shouldYield)) {
            let isDisposed = this.isDisposed;
            shouldYield = shouldYield !== null && shouldYield !== void 0 ? shouldYield : alwaysFalse;
            while (enumerator.move() && !isDisposed) {
                this.notify(enumerator.current);
                isDisposed = this.isDisposed;
                if (!isDisposed && (delay > 0 || shouldYield())) {
                    return delay;
                }
            }
        }
        else {
            while (enumerator.move() && !this.isDisposed) {
                this.notify(enumerator.current);
            }
        }
        return -1;
    }
}
export const fromEnumerator = (delay = 0) => enumerator => {
    const factory = (subscriber) => new FromEnumeratorProducer(subscriber, enumerator, delay);
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
export const fromEnumerable = (delay = 0) => enumerable => {
    const factory = (subscriber) => {
        const enumerator = enumerable.enumerate();
        return new FromEnumeratorProducer(subscriber, enumerator, delay);
    };
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
