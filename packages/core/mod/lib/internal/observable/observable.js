import { schedule } from "../../scheduler.js";
class ScheduledObservable {
    constructor(factory, isSynchronous, delay) {
        this.factory = factory;
        this.isSynchronous = isSynchronous;
        this.delay = delay;
    }
    observe(observer) {
        const schedulerContinuation = this.factory(observer);
        schedule(observer, schedulerContinuation, this);
    }
}
export const createScheduledObservable = (factory, isSynchronous) => new ScheduledObservable(factory, isSynchronous, 0);
export const createDelayedScheduledObservable = (factory, delay) => new ScheduledObservable(factory, false, delay);
