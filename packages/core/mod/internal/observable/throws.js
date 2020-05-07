import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { AbstractProducer } from "./producer.js";
class ThrowsProducer extends AbstractProducer {
    constructor(subscriber, f, delay) {
        super(subscriber);
        this.f = f;
        this.delay = delay;
    }
    produce(_) {
        const error = this.f();
        throw error;
    }
}
export const throws = (errorFactory, delay = 0) => {
    const factory = (subscriber) => new ThrowsProducer(subscriber, errorFactory, delay);
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
