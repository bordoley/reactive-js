import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { AbstractProducer } from "./producer.js";
class FromArrayProducer extends AbstractProducer {
    constructor(subscriber, values, startIndex, delay) {
        super(subscriber);
        this.values = values;
        this.startIndex = startIndex;
        this.delay = delay;
        this.index = this.startIndex;
    }
    produce(scheduler) {
        const delay = this.delay;
        const values = this.values;
        const length = values.length;
        let index = this.index;
        let isDisposed = this.isDisposed;
        while (index < length && !isDisposed) {
            this.notify(values[index]);
            index++;
            isDisposed = this.isDisposed;
            if (index < length &&
                !isDisposed &&
                (delay > 0 || scheduler.shouldYield())) {
                this.index = index;
                scheduler.schedule(this, this);
                return;
            }
        }
        this.dispose();
    }
}
export const fromArray = (options = {}) => values => {
    var _a, _b;
    const delay = Math.max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0);
    const startIndex = Math.min((_b = options.startIndex) !== null && _b !== void 0 ? _b : 0, values.length);
    const factory = (subscriber) => new FromArrayProducer(subscriber, values, startIndex, delay);
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
