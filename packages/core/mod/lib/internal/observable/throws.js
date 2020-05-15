import { dispose } from "../../disposable.js";
import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { AbstractProducer } from "./producer.js";
class ThrowsProducer extends AbstractProducer {
    constructor(observer, f, delay) {
        super(observer);
        this.f = f;
        this.delay = delay;
    }
    continueUnsafe(_) {
        const cause = this.f();
        dispose(this, { cause });
    }
}
export const throws = ({ delay } = { delay: 0 }) => errorFactory => {
    const factory = (observer) => new ThrowsProducer(observer, errorFactory, delay);
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
