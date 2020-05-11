import { dispose } from "../../disposable.js";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation.js";
class CallbackSchedulerContinuation extends AbstractSchedulerContinuation {
    constructor(cb) {
        super();
        this.cb = cb;
    }
    produce(scheduler) {
        this.cb(scheduler);
        dispose(this);
    }
}
export const schedule = (callback, options = { delay: 0 }) => (scheduler) => {
    const continuation = new CallbackSchedulerContinuation(callback);
    scheduler.schedule(continuation, options);
    return continuation;
};
