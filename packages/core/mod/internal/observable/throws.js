import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { AbstractProducer } from "./producer.js";
class ThrowsProducer extends AbstractProducer {
    constructor(subscriber, f, delay) {
        super(subscriber);
        this.f = f;
        this.delay = delay;
    }
    produce(_) {
        const cause = this.f();
        this.dispose({ cause });
    }
}
export const throws = ({ delay } = { delay: 0 }) => errorFactory => {
    const factory = (subscriber) => new ThrowsProducer(subscriber, errorFactory, delay);
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
