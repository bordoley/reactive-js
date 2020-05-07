import { isSome } from "../../option.js";
import { alwaysFalse } from "../../functions.js";
import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { AbstractProducer } from "./producer.js";
class GenerateProducer extends AbstractProducer {
    constructor(subscriber, generator, acc, delay) {
        super(subscriber);
        this.generator = generator;
        this.acc = acc;
        this.delay = delay;
    }
    produce(shouldYield) {
        const generator = this.generator;
        const delay = this.delay;
        let acc = this.acc;
        let isDisposed = this.isDisposed;
        if (delay > 0 || isSome(shouldYield)) {
            shouldYield = shouldYield !== null && shouldYield !== void 0 ? shouldYield : alwaysFalse;
            while (!isDisposed) {
                this.notify(acc);
                isDisposed = this.isDisposed;
                if (!isDisposed) {
                    acc = generator(acc);
                }
                if (!isDisposed && (delay > 0 || shouldYield())) {
                    this.acc = acc;
                    return delay;
                }
            }
        }
        else {
            while (!isDisposed) {
                this.notify(acc);
                isDisposed = this.isDisposed;
                if (!isDisposed) {
                    acc = generator(acc);
                }
            }
        }
        return delay;
    }
}
export function generate(generator, initialValue, delay = 0) {
    const factory = (subscriber) => new GenerateProducer(subscriber, generator, initialValue(), delay);
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
}
