import { addOnDisposedWithError } from "../../disposable.js";
import { schedule } from "../../scheduler.js";
class ScheduledObservable {
    constructor(f, isSynchronous, delay) {
        this.f = f;
        this.isSynchronous = isSynchronous;
        this.delay = delay;
    }
    observe(observer) {
        const callback = this.f();
        const schedulerSubscription = schedule(observer, callback, this);
        addOnDisposedWithError(schedulerSubscription, observer);
    }
}
export const deferSynchronous = (factory) => new ScheduledObservable(factory, true, 0);
export const defer = (factory, { delay } = {
    delay: 0,
}) => new ScheduledObservable(factory, false, delay);
export const observe = (observable, observer) => observable.observe(observer);
export const observeWith = (observer) => observable => observe(observable, observer);
