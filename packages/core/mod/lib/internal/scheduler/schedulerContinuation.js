import { AbstractDisposable, addTeardown, dispose, } from "../../disposable.js";
import { none, isSome } from "../../option.js";
const notifyListeners = (listeners, state) => {
    for (const listener of listeners) {
        listener.onRunStatusChanged(state);
    }
};
const isYieldError = (e) => e instanceof YieldError;
class YieldError {
    constructor(delay) {
        this.delay = delay;
    }
}
class SchedulerContinuationImpl extends AbstractDisposable {
    constructor(scheduler, f) {
        super();
        this.scheduler = scheduler;
        this.f = f;
        this.listeners = new Set();
        addTeardown(this, _e => {
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
    continue() {
        if (!this.isDisposed) {
            const listeners = this.listeners;
            let error = none;
            let yieldError = none;
            notifyListeners(listeners, true);
            try {
                this.f(this.scheduler);
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
                this.scheduler.schedule(this, yieldError);
            }
            else {
                dispose(this, error);
            }
        }
    }
}
export const run = (continuation) => {
    continuation.continue();
};
export const yield$ = (scheduler, delay) => {
    if (delay > 0 || scheduler.shouldYield) {
        throw new YieldError(delay);
    }
};
export const schedule = (scheduler, f, options = { delay: 0 }) => {
    const continuation = new SchedulerContinuationImpl(scheduler, f);
    scheduler.schedule(continuation, options);
    return continuation;
};
