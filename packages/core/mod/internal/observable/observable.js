import { schedule } from "../../scheduler.js";
import { pipe } from "../../functions.js";
class ScheduledObservable {
    constructor(factory, isSynchronous, delay) {
        this.factory = factory;
        this.isSynchronous = isSynchronous;
        this.delay = delay;
    }
    subscribe(subscriber) {
        const schedulerContinuation = this.factory(subscriber);
        if (schedulerContinuation instanceof Function) {
            pipe(subscriber, schedule(schedulerContinuation, this.delay));
        }
        else {
            subscriber.schedule(schedulerContinuation, this.delay);
        }
    }
}
export const createScheduledObservable = (factory, isSynchronous) => new ScheduledObservable(factory, isSynchronous, 0);
export const createDelayedScheduledObservable = (factory, delay) => new ScheduledObservable(factory, false, delay);
