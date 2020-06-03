import { AbstractDisposable, dispose, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown, addTeardown, addDisposable, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { schedule } from "../../scheduler.js";
import { yield$ } from "./observer.js";
const scheduleDrainQueue = (dispatcher) => {
    if (dispatcher.nextQueue.length === 1) {
        const { observer } = dispatcher;
        const continuationSubcription = pipe(observer, schedule(dispatcher.continuation));
        addOnDisposedWithError(continuationSubcription, observer);
        addOnDisposedWithoutErrorTeardown(continuationSubcription, dispatcher.onContinuationDispose);
    }
};
class ObserverDelegatingDispatcher extends AbstractDisposable {
    constructor(observer) {
        super();
        this.observer = observer;
        this.continuation = () => {
            const nextQueue = this.nextQueue;
            const observer = this.observer;
            while (nextQueue.length > 0) {
                const next = nextQueue.shift();
                yield$(observer, next, 0);
            }
        };
        this.onContinuationDispose = () => {
            if (this.isDisposed) {
                pipe(this.observer, dispose(this.error));
            }
        };
        this.nextQueue = [];
        addTeardown(this, e => {
            if (this.nextQueue.length === 0) {
                pipe(observer, dispose(e));
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
