import { schedule } from "../../scheduler.js";
class ScheduledObservable {
    constructor(factory, isSynchronous, delay) {
        this.factory = factory;
        this.isSynchronous = isSynchronous;
        this.delay = delay;
    }
    subscribe(subscriber) {
        const schedulerContinuation = this.factory(subscriber);
        schedule(subscriber, schedulerContinuation, this);
    }
}
export const createScheduledObservable = (factory, isSynchronous) => new ScheduledObservable(factory, isSynchronous, 0);
export const createDelayedScheduledObservable = (factory, delay) => new ScheduledObservable(factory, false, delay);
