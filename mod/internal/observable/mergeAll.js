import { dispose, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown, addTeardown, addDisposableDisposeParentOnChildError, } from "../../disposable.js";
import { compose, pipe } from "../../functions.js";
import { isSome } from "../../option.js";
import { lift } from "./lift.js";
import { map } from "./map.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
const subscribeNext = (observer) => {
    if (observer.activeCount < observer.maxConcurrency) {
        const nextObs = observer.queue.shift();
        if (isSome(nextObs)) {
            observer.activeCount++;
            const nextObsSubscription = pipe(nextObs, onNotify(observer.onNotify), subscribe(observer.delegate));
            addOnDisposedWithoutErrorTeardown(nextObsSubscription, observer.onDispose);
            addDisposableDisposeParentOnChildError(observer.delegate, nextObsSubscription);
        }
        else if (observer.isDisposed) {
            pipe(observer.delegate, dispose());
        }
    }
};
class MergeObserver extends AbstractDelegatingObserver {
    constructor(delegate, maxBufferSize, maxConcurrency) {
        super(delegate);
        this.maxBufferSize = maxBufferSize;
        this.maxConcurrency = maxConcurrency;
        this.activeCount = 0;
        this.onDispose = () => {
            this.activeCount--;
            subscribeNext(this);
        };
        this.onNotify = (next) => {
            this.delegate.notify(next);
        };
        this.queue = [];
        addOnDisposedWithError(this, delegate);
        addOnDisposedWithoutErrorTeardown(this, () => {
            if (this.queue.length + this.activeCount === 0) {
                pipe(delegate, dispose());
            }
        });
        addTeardown(delegate, () => {
            this.queue.length = 0;
        });
    }
    notify(next) {
        assertObserverState(this);
        const queue = this.queue;
        queue.push(next);
        if (queue.length + this.activeCount > this.maxBufferSize) {
            queue.shift();
        }
        subscribeNext(this);
    }
}
export const mergeAll = (options = {}) => {
    const { maxBufferSize = Number.MAX_SAFE_INTEGER, maxConcurrency = Number.MAX_SAFE_INTEGER, } = options;
    const operator = (observer) => new MergeObserver(observer, maxBufferSize, maxConcurrency);
    operator.isSynchronous = false;
    return lift(operator);
};
export const mergeMap = (mapper, options = {}) => compose(map(mapper), mergeAll(options));
export const concatAll = (options = {}) => {
    const { maxBufferSize = Number.MAX_SAFE_INTEGER } = options;
    return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
export const concatMap = (mapper, options) => compose(map(mapper), concatAll(options));
const _exhaust = mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });
export const exhaust = () => _exhaust;
export const exhaustMap = (mapper) => compose(map(mapper), exhaust());
