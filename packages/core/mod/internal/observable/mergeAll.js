import { isSome } from "../../option.js";
import { compose, pipe } from "../../functions.js";
import { lift } from "./lift.js";
import { map } from "./map.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
const subscribeNext = (subscriber) => {
    if (subscriber.activeCount < subscriber.maxConcurrency) {
        const nextObs = subscriber.queue.shift();
        if (isSome(nextObs)) {
            subscriber.activeCount++;
            const nextObsSubscription = pipe(nextObs, onNotify(subscriber.onNotify), subscribe(subscriber.delegate)).add(subscriber.onDispose);
            subscriber.delegate.add(nextObsSubscription);
        }
        else if (subscriber.isDisposed) {
            subscriber.delegate.dispose();
        }
    }
};
class MergeSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, maxBufferSize, maxConcurrency) {
        super(delegate);
        this.maxBufferSize = maxBufferSize;
        this.maxConcurrency = maxConcurrency;
        this.activeCount = 0;
        this.onDispose = (error) => {
            this.activeCount--;
            if (isSome(error)) {
                this.delegate.dispose(error);
            }
            else {
                subscribeNext(this);
            }
        };
        this.onNotify = (next) => {
            this.delegate.notify(next);
        };
        this.queue = [];
        const queue = this.queue;
        this.add(error => {
            if (isSome(error) || queue.length + this.activeCount === 0) {
                delegate.dispose(error);
            }
        });
        delegate.add(() => {
            queue.length = 0;
        });
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        const queue = this.queue;
        if (!this.isDisposed) {
            queue.push(next);
            if (queue.length + this.activeCount > this.maxBufferSize) {
                queue.shift();
            }
            subscribeNext(this);
        }
    }
}
export const mergeAll = (options = {}) => {
    const { maxBufferSize = Number.MAX_SAFE_INTEGER, maxConcurrency = Number.MAX_SAFE_INTEGER, } = options;
    const operator = (subscriber) => new MergeSubscriber(subscriber, maxBufferSize, maxConcurrency);
    operator.isSynchronous = false;
    return lift(operator);
};
export const mergeMap = (mapper, options = {}) => compose(map(mapper), mergeAll(options));
export const concatAll = (maxBufferSize = Number.MAX_SAFE_INTEGER) => mergeAll({ maxBufferSize, maxConcurrency: 1 });
export const concatMap = (mapper, maxBufferSize) => compose(map(mapper), concatAll(maxBufferSize));
const exhaustInstance = mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });
export const exhaust = () => exhaustInstance;
export const exhaustMap = (mapper) => compose(map(mapper), exhaust());
