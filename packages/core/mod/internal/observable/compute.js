import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { AbstractProducer } from "./producer.js";
class ComputeProducer extends AbstractProducer {
    constructor(subscriber, f, delay) {
        super(subscriber);
        this.f = f;
        this.delay = delay;
    }
    produce(_) {
        this.notify(this.f());
        return -1;
    }
}
export const compute = (valueFactory, delay = 0) => {
    const factory = (subscriber) => new ComputeProducer(subscriber, valueFactory, delay);
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
