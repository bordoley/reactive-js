import { AbstractDisposable, dispose, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown, addTeardown, addDisposable } from "../../disposable.js";
import { schedule } from "../../scheduler.js";
const scheduleDrainQueue = (dispatcher) => {
    if (dispatcher.nextQueue.length === 1) {
        const { observer } = dispatcher;
        const continuationSubcription = schedule(observer, dispatcher.continuation);
        addOnDisposedWithError(continuationSubcription, observer);
        addOnDisposedWithoutErrorTeardown(continuationSubcription, dispatcher.onContinuationDispose);
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
        this.onContinuationDispose = () => {
            if (this.isDisposed) {
                dispose(this.observer, this.error);
            }
        };
        this.nextQueue = [];
        addTeardown(this, e => {
            if (this.nextQueue.length === 0) {
                dispose(observer, e);
            }
        });
        addDisposable(observer, this);
    }
    dispatch(next) {
        if (!this.isDisposed) {
            this.nextQueue.push(next);
            scheduleDrainQueue(this);
        }
    }
}
export const toDispatcher = (observer) => new ObserverDelegatingDispatcher(observer);
