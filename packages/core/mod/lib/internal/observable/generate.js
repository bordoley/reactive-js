import { dispose } from "../../disposable.js";
import { schedule } from "../../scheduler.js";
import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { AbstractProducer } from "./producer.js";
class GenerateProducer extends AbstractProducer {
    constructor(observer, generator, acc, delay) {
        super(observer);
        this.generator = generator;
        this.acc = acc;
        this.delay = delay;
    }
    produce(scheduler) {
        const generator = this.generator;
        const delay = this.delay;
        let acc = this.acc;
        let isDisposed = this.isDisposed;
        while (!isDisposed) {
            this.notify(acc);
            isDisposed = this.isDisposed;
            if (!isDisposed) {
                acc = generator(acc);
            }
            if (!isDisposed && (delay > 0 || scheduler.shouldYield())) {
                this.acc = acc;
                schedule(scheduler, this, this);
                return;
            }
        }
        dispose(this);
    }
}
export function generate(generator, initialValue, { delay } = { delay: 0 }) {
    const factory = (observer) => new GenerateProducer(observer, generator, initialValue(), delay);
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
}
