import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation.js";
class CallbackSchedulerContinuation extends AbstractSchedulerContinuation {
    constructor(cb) {
        super();
        this.cb = cb;
    }
    produce(scheduler) {
        this.cb(scheduler);
        this.dispose();
    }
}
export const schedule = (callback, delay = 0) => (scheduler) => {
    const continuation = new CallbackSchedulerContinuation(callback);
    scheduler.schedule(continuation, delay);
    return continuation;
};
