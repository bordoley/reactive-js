import { addOnDisposedWithError } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { schedule } from "../../scheduler.js";
class ScheduledObservable {
    constructor(f, isSynchronous, delay) {
        this.f = f;
        this.isSynchronous = isSynchronous;
        this.delay = delay;
    }
    observe(observer) {
        const callback = this.f();
        const schedulerSubscription = pipe(observer, schedule(callback, this));
        addOnDisposedWithError(schedulerSubscription, observer);
    }
}
export const deferSynchronous = (factory) => new ScheduledObservable(factory, true, 0);
export const defer = (factory, options = {}) => {
    const { delay = 0 } = options;
    return new ScheduledObservable(factory, false, delay);
};
export const observe = (observer) => observable => observable.observe(observer);
