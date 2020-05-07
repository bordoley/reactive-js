import { AbstractDisposable } from "../../disposable.js";
import { alwaysFalse } from "../../functions.js";
import { isSome } from "../../option.js";
import { AbstractSchedulerContinuation } from "../../scheduler.js";
class SubscriberDelegatingDispatcherSchedulerContinuation extends AbstractSchedulerContinuation {
    constructor(dispatcher) {
        super();
        this.dispatcher = dispatcher;
    }
    produce(shouldYield) {
        const dispatcher = this.dispatcher;
        const nextQueue = dispatcher.nextQueue;
        shouldYield = shouldYield !== null && shouldYield !== void 0 ? shouldYield : alwaysFalse;
        while (nextQueue.length > 0 && !this.isDisposed) {
            const next = nextQueue.shift();
            dispatcher.subscriber.notify(next);
            if (dispatcher.nextQueue.length > 0 && shouldYield()) {
                return 0;
            }
        }
        return -1;
    }
}
const scheduleDrainQueue = (dispatcher) => {
    if (dispatcher.nextQueue.length === 1) {
        const producer = new SubscriberDelegatingDispatcherSchedulerContinuation(dispatcher);
        producer.add(e => {
            const error = e !== null && e !== void 0 ? e : dispatcher.error;
            if (isSome(error) || dispatcher.isDisposed) {
                dispatcher.subscriber.dispose(error);
            }
        });
        dispatcher.subscriber.schedule(producer);
    }
};
class SubscriberDelegatingDispatcher extends AbstractDisposable {
    constructor(subscriber) {
        super();
        this.subscriber = subscriber;
        this.nextQueue = [];
        this.add(e => {
            if (this.nextQueue.length === 0) {
                subscriber.dispose(e);
            }
        });
        subscriber.add(this);
    }
    dispatch(next) {
        if (!this.isDisposed) {
            this.nextQueue.push(next);
            scheduleDrainQueue(this);
        }
    }
}
export const toDispatcher = (subscriber) => new SubscriberDelegatingDispatcher(subscriber);
