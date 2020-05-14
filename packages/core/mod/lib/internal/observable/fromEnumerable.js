import { dispose } from "../../disposable.js";
import { enumerate } from "../../enumerable.js";
import { schedule } from "../../scheduler.js";
import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { AbstractProducer } from "./producer.js";
class FromEnumeratorProducer extends AbstractProducer {
    constructor(observer, enumerator, delay) {
        super(observer);
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
                schedule(scheduler, this, this);
                return;
            }
        }
        dispose(this);
    }
}
export const fromEnumerator = ({ delay } = { delay: 0 }) => enumerator => {
    const factory = (observer) => new FromEnumeratorProducer(observer, enumerator, delay);
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
export const fromEnumerable = ({ delay } = { delay: 0 }) => enumerable => {
    const factory = (observer) => {
        const enumerator = enumerate(enumerable);
        return new FromEnumeratorProducer(observer, enumerator, delay);
    };
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
