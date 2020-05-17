import { add, disposeOnError } from "../../disposable.js";
import { schedule } from "../../scheduler.js";
class ScheduledObservable {
    constructor(factory, isSynchronous, delay) {
        this.factory = factory;
        this.isSynchronous = isSynchronous;
        this.delay = delay;
    }
    observe(observer) {
        const schedulerContinuation = this.factory(observer);
        add(schedule(observer, schedulerContinuation, this), disposeOnError(observer));
    }
}
export const createScheduledObservable = (factory, isSynchronous) => new ScheduledObservable(factory, isSynchronous, 0);
export const createDelayedScheduledObservable = (factory, delay) => new ScheduledObservable(factory, false, delay);
