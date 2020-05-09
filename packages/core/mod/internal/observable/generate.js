import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { AbstractProducer } from "./producer.js";
class GenerateProducer extends AbstractProducer {
    constructor(subscriber, generator, acc, delay) {
        super(subscriber);
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
                scheduler.schedule(this, delay);
                return;
            }
        }
        this.dispose();
    }
}
export function generate(generator, initialValue, { delay } = { delay: 0 }) {
    const factory = (subscriber) => new GenerateProducer(subscriber, generator, initialValue(), delay);
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
}
