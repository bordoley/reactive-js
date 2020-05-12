import { dispose } from "../../disposable.js";
import { enumerate } from "../../enumerable.js";
import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { AbstractProducer } from "./producer.js";
class FromEnumeratorProducer extends AbstractProducer {
    constructor(subscriber, enumerator, delay) {
        super(subscriber);
        this.enumerator = enumerator;
        this.delay = delay;
    }
    produce(scheduler) {
        const delay = this.delay;
        const enumerator = this.enumerator;
        let isDisposed = this.isDisposed;
        while (enumerator.move() && !isDisposed) {
            this.notify(enumerator.current);
            isDisposed = this.isDisposed;
            if (!isDisposed && (delay > 0 || scheduler.shouldYield())) {
                scheduler.schedule(this, this);
                return;
            }
        }
        dispose(this);
    }
}
export const fromEnumerator = ({ delay } = { delay: 0 }) => enumerator => {
    const factory = (subscriber) => new FromEnumeratorProducer(subscriber, enumerator, delay);
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
export const fromEnumerable = ({ delay } = { delay: 0 }) => enumerable => {
    const factory = (subscriber) => {
        const enumerator = enumerate(enumerable);
        return new FromEnumeratorProducer(subscriber, enumerator, delay);
    };
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
