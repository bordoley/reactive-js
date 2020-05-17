import { AbstractDisposable, add, dispose } from "../../disposable.js";
import { isSome } from "../../option.js";
import { schedule } from "../../scheduler.js";
const scheduleDrainQueue = (dispatcher) => {
    if (dispatcher.nextQueue.length === 1) {
        add(schedule(dispatcher.observer, dispatcher.continuation), dispatcher.onContinuationDispose);
    }
};
class ObserverDelegatingDispatcher extends AbstractDisposable {
    constructor(observer) {
        super();
        this.observer = observer;
        this.continuation = ($) => {
            const nextQueue = this.nextQueue;
            const observer = this.observer;
            let observerIsDisposed = observer.isDisposed;
            let nextQueueLength = nextQueue.length;
            while (nextQueueLength > 0 && !observerIsDisposed) {
                const next = nextQueue.shift();
                observer.notify(next);
                observerIsDisposed = observer.isDisposed;
                nextQueueLength = nextQueue.length;
                if (nextQueueLength > 0 && !observerIsDisposed) {
                    $.yield();
                }
            }
        };
        this.onContinuationDispose = (e) => {
            const error = e !== null && e !== void 0 ? e : this.error;
            if (isSome(error) || this.isDisposed) {
                dispose(this.observer, error);
            }
        };
        this.nextQueue = [];
        add(this, e => {
            if (this.nextQueue.length === 0) {
                dispose(observer, e);
            }
        });
        add(observer, this);
    }
    dispatch(next) {
        if (!this.isDisposed) {
            this.nextQueue.push(next);
            scheduleDrainQueue(this);
        }
    }
}
export const toDispatcher = (observer) => new ObserverDelegatingDispatcher(observer);
