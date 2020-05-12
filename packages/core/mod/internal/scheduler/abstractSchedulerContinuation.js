import { AbstractDisposable, add, dispose } from "../../disposable.js";
import { none, isSome } from "../../option.js";
const notifyListeners = (listeners, state) => {
    for (const listener of listeners) {
        listener.onRunStatusChanged(state);
    }
};
export class AbstractSchedulerContinuation extends AbstractDisposable {
    constructor() {
        super();
        this.listeners = new Set();
        add(this, () => {
            this.listeners = new Set();
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
    run(scheduler) {
        const listeners = this.listeners;
        let error = none;
        if (!this.isDisposed) {
            notifyListeners(listeners, true);
            try {
                this.produce(scheduler);
            }
            catch (cause) {
                error = { cause };
            }
            notifyListeners(listeners, false);
        }
        const isDisposed = this.isDisposed;
        if (!isDisposed && isSome(error)) {
            dispose(this, error);
        }
    }
}
