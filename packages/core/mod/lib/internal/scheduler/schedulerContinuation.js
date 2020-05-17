import { AbstractDisposable, add, dispose, } from "../../disposable.js";
import { none, isSome } from "../../option.js";
import { YieldError, } from "./interfaces.js";
const notifyListeners = (listeners, state) => {
    for (const listener of listeners) {
        listener.onRunStatusChanged(state);
    }
};
const isYieldError = (e) => e instanceof YieldError;
class SchedulerContinuationImpl extends AbstractDisposable {
    constructor(f) {
        super();
        this.f = f;
        this.listeners = new Set();
        add(this, () => {
            this.listeners.clear();
        });
    }
    addListener(_ev, listener) {
        if (!this.isDisposed) {
            this.listeners.add(listener);
        }
    }
    removeListener(_ev, listener) {
        this.listeners.delete(listener);
    }
    continue(state) {
        if (!this.isDisposed) {
            const listeners = this.listeners;
            let error = none;
            let yieldError = none;
            notifyListeners(listeners, true);
            try {
                this.f(state);
            }
            catch (cause) {
                if (isYieldError(cause)) {
                    yieldError = cause;
                }
                else {
                    error = { cause };
                }
            }
            notifyListeners(listeners, false);
            if (isSome(yieldError)) {
                throw yieldError;
            }
            else {
                dispose(this, error);
            }
        }
    }
}
export const runContinuation = (scheduler, continuation) => {
    try {
        continuation.continue(scheduler);
    }
    catch (cause) {
        if (isYieldError(cause)) {
            scheduler.schedule(continuation, cause);
        }
        else {
            continuation.dispose({ cause });
        }
    }
};
export const schedule = (scheduler, f, options = { delay: 0 }) => {
    const continuation = new SchedulerContinuationImpl(f);
    scheduler.schedule(continuation, options);
    return continuation;
};
export const scheduleWithPriority = (scheduler, f, options) => {
    const continuation = new SchedulerContinuationImpl(f);
    scheduler.schedule(continuation, options);
    return continuation;
};
