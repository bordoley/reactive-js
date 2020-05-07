import { AbstractDisposable } from "../../disposable.js";
import { none, isSome } from "../../option.js";
const notifyListeners = (listeners, state) => {
    for (const listener of listeners) {
        listener.onRunStatusChanged(state);
    }
};
export class AbstractSchedulerContinuation extends AbstractDisposable {
    constructor() {
        super();
        this.isActive = false;
        this.listeners = new Set();
        this.add(() => {
            if (!this.isActive) {
                this.listeners.clear();
            }
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
    run(shouldYield) {
        const listeners = this.listeners;
        let result = -1;
        let error = none;
        if (!this.isDisposed) {
            this.isActive = true;
            notifyListeners(listeners, true);
            try {
                result = this.produce(shouldYield);
            }
            catch (cause) {
                error = { cause };
            }
            this.isActive = false;
            notifyListeners(listeners, false);
        }
        const isDisposed = this.isDisposed;
        if (!isDisposed && isSome(error)) {
            this.dispose(error);
        }
        else if (!isDisposed && result < 0) {
            this.dispose();
        }
        else if (isDisposed) {
            listeners.clear();
        }
        return result;
    }
}
