import { add, dispose, addDisposableOrTeardown, } from "../../disposable.js";
import { compose, pipe } from "../../functions.js";
import { isSome } from "../../option.js";
import { lift } from "./lift.js";
import { map } from "./map.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { AbstractDelegatingObserver, assertObserverState, } from "./observer.js";
const subscribeNext = (observer) => {
    if (observer.activeCount < observer.maxConcurrency) {
        const nextObs = observer.queue.shift();
        if (isSome(nextObs)) {
            observer.activeCount++;
            const nextObsSubscription = pipe(nextObs, onNotify(observer.onNotify), subscribe(observer.delegate), addDisposableOrTeardown(observer.onDispose));
            add(observer.delegate, nextObsSubscription);
        }
        else if (observer.isDisposed) {
            dispose(observer.delegate);
        }
    }
};
class MergeObserver extends AbstractDelegatingObserver {
    constructor(delegate, maxBufferSize, maxConcurrency) {
        super(delegate);
        this.maxBufferSize = maxBufferSize;
        this.maxConcurrency = maxConcurrency;
        this.activeCount = 0;
        this.onDispose = (error) => {
            this.activeCount--;
            if (isSome(error)) {
                dispose(this.delegate, error);
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
        add(this, error => {
            if (isSome(error) || queue.length + this.activeCount === 0) {
                dispose(delegate, error);
            }
        });
        add(delegate, () => {
            queue.length = 0;
        });
    }
    notify(next) {
        assertObserverState(this);
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
    const operator = (observer) => new MergeObserver(observer, maxBufferSize, maxConcurrency);
    operator.isSynchronous = false;
    return lift(operator);
};
export const mergeMap = (mapper, options = {}) => compose(map(mapper), mergeAll(options));
export const concatAll = (maxBufferSize = Number.MAX_SAFE_INTEGER) => mergeAll({ maxBufferSize, maxConcurrency: 1 });
export const concatMap = (mapper, maxBufferSize) => compose(map(mapper), concatAll(maxBufferSize));
const exhaustInstance = mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });
export const exhaust = () => exhaustInstance;
export const exhaustMap = (mapper) => compose(map(mapper), exhaust());
