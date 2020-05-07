import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation.js";
import { isSome } from "../../option.js";
class CallbackSchedulerContinuation extends AbstractSchedulerContinuation {
    constructor(cb) {
        super();
        this.cb = cb;
    }
    produce(shouldYield) {
        const result = this.cb(shouldYield);
        if (result) {
            this.cb = result;
        }
        return isSome(result) ? 0 : -1;
    }
}
export const schedule = (callback, delay = 0) => (scheduler) => {
    const continuation = new CallbackSchedulerContinuation(callback);
    scheduler.schedule(continuation, delay);
    return continuation;
};
