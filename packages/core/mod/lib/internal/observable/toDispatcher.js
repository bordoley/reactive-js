import { AbstractDisposable, add, dispose } from "../../disposable.js";
import { isSome } from "../../option.js";
import { AbstractSchedulerContinuation, schedule } from "../../scheduler.js";
class ObserverDelegatingDispatcherSchedulerContinuation extends AbstractSchedulerContinuation {
    constructor(dispatcher) {
        super();
        this.dispatcher = dispatcher;
    }
    produce(scheduler) {
        const dispatcher = this.dispatcher;
        const nextQueue = dispatcher.nextQueue;
        while (nextQueue.length > 0 && !this.isDisposed) {
            const next = nextQueue.shift();
            dispatcher.observer.notify(next);
            if (dispatcher.nextQueue.length > 0 && scheduler.shouldYield()) {
                schedule(scheduler, this);
                return;
            }
        }
        dispose(this);
    }
}
const scheduleDrainQueue = (dispatcher) => {
    if (dispatcher.nextQueue.length === 1) {
        const producer = new ObserverDelegatingDispatcherSchedulerContinuation(dispatcher);
        add(producer, e => {
            const error = e !== null && e !== void 0 ? e : dispatcher.error;
            if (isSome(error) || dispatcher.isDisposed) {
                dispose(dispatcher.observer, error);
            }
        });
        schedule(dispatcher.observer, producer);
    }
};
class ObserverDelegatingDispatcher extends AbstractDisposable {
    constructor(observer) {
        super();
        this.observer = observer;
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
