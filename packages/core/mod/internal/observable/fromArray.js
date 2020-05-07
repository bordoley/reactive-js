import { alwaysFalse } from "../../functions.js";
import { isSome } from "../../option.js";
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
    produce(shouldYield) {
        const delay = this.delay;
        const values = this.values;
        const length = values.length;
        let index = this.index;
        if (delay > 0 || isSome(shouldYield)) {
            let isDisposed = this.isDisposed;
            shouldYield = shouldYield !== null && shouldYield !== void 0 ? shouldYield : alwaysFalse;
            while (index < length && !isDisposed) {
                this.notify(values[index]);
                index++;
                isDisposed = this.isDisposed;
                if (index < length && !isDisposed && (delay > 0 || shouldYield())) {
                    this.index = index;
                    return delay;
                }
            }
        }
        else {
            while (index < length && !this.isDisposed) {
                this.notify(values[index]);
                index++;
            }
        }
        return -1;
    }
}
export function fromArray(values, options = {}) {
    var _a, _b;
    const delay = Math.max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0);
    const startIndex = Math.min((_b = options.startIndex) !== null && _b !== void 0 ? _b : 0, values.length);
    const factory = (subscriber) => new FromArrayProducer(subscriber, values, startIndex, delay);
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
}
