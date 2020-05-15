import { dispose } from "../../disposable.js";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation.js";
class CallbackSchedulerContinuation extends AbstractSchedulerContinuation {
    constructor(cb) {
        super();
        this.cb = cb;
    }
    continueUnsafe(scheduler) {
        this.cb(scheduler);
        dispose(this);
    }
}
export const schedule = (scheduler, schedulerContinuation, options = { delay: 0 }) => {
    const continuation = schedulerContinuation instanceof Function
        ? new CallbackSchedulerContinuation(schedulerContinuation)
        : schedulerContinuation;
    scheduler.schedule(continuation, options);
    return continuation;
};
export const scheduleWithPriority = (scheduler, schedulerContinuation, options) => {
    const continuation = schedulerContinuation instanceof Function
        ? new CallbackSchedulerContinuation(schedulerContinuation)
        : schedulerContinuation;
    scheduler.schedule(continuation, options);
    return continuation;
};
