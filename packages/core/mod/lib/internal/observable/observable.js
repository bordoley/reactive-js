import { addOnDisposedWithError } from "../../disposable.js";
import { schedule } from "../../scheduler.js";
class ScheduledObservable {
    constructor(f, isSynchronous, delay) {
        this.f = f;
        this.isSynchronous = isSynchronous;
        this.delay = delay;
    }
    observe(observer) {
        const continuation = this.f(observer);
        const schedulerSubscription = schedule(observer, continuation, this);
        addOnDisposedWithError(schedulerSubscription, observer);
    }
}
export const createScheduledObservable = (factory, isSynchronous) => new ScheduledObservable(factory, isSynchronous, 0);
export const createDelayedScheduledObservable = (factory, delay) => new ScheduledObservable(factory, false, delay);
export const observe = (observable, observer) => observable.observe(observer);
export const observeWith = (observer) => observable => observe(observable, observer);
