import { AbstractDisposable, dispose } from "../../disposable.js";
import { isSome } from "../../option.js";
import { AbstractSchedulerContinuation, schedule } from "../../scheduler.js";
class SubscriberDelegatingDispatcherSchedulerContinuation extends AbstractSchedulerContinuation {
    constructor(dispatcher) {
        super();
        this.dispatcher = dispatcher;
    }
    produce(scheduler) {
        const dispatcher = this.dispatcher;
        const nextQueue = dispatcher.nextQueue;
        while (nextQueue.length > 0 && !this.isDisposed) {
            const next = nextQueue.shift();
            dispatcher.subscriber.notify(next);
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
        const producer = new SubscriberDelegatingDispatcherSchedulerContinuation(dispatcher);
        producer.add(e => {
            const error = e !== null && e !== void 0 ? e : dispatcher.error;
            if (isSome(error) || dispatcher.isDisposed) {
                dispose(dispatcher.subscriber, error);
            }
        });
        schedule(dispatcher.subscriber, producer);
    }
};
class SubscriberDelegatingDispatcher extends AbstractDisposable {
    constructor(subscriber) {
        super();
        this.subscriber = subscriber;
        this.nextQueue = [];
        this.add(e => {
            if (this.nextQueue.length === 0) {
                dispose(subscriber, e);
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
