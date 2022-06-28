/// <reference types="./observer.d.ts" />
import { AbstractDisposableContainer } from './container.mjs';
import { addTo, onComplete, AbstractDisposable, isDisposed, dispose, onDisposed } from './disposable.mjs';
import { __DEV__ } from './env.mjs';
import { pipe, raise } from './functions.mjs';
import { none, isNone } from './option.mjs';
import { schedule, __yield, inContinuation } from './scheduler.mjs';

const scheduleDrainQueue = (dispatcher) => {
    if (dispatcher.nextQueue.length === 1) {
        const { observer } = dispatcher;
        pipe(observer.scheduler, schedule(dispatcher.continuation), addTo(observer), onComplete(dispatcher.onContinuationDispose));
    }
};
class ObserverDelegatingDispatcher extends AbstractDisposable {
    constructor(observer) {
        super();
        this.observer = observer;
        this.continuation = () => {
            const { nextQueue } = this;
            const { observer } = this;
            while (nextQueue.length > 0) {
                const next = nextQueue.shift();
                observer.notify(next);
                __yield();
            }
        };
        this.onContinuationDispose = () => {
            if (isDisposed(this)) {
                pipe(this.observer, dispose(this.error));
            }
        };
        this.nextQueue = [];
    }
    dispatch(next) {
        if (!isDisposed(this)) {
            this.nextQueue.push(next);
            scheduleDrainQueue(this);
        }
    }
}
/**
 * Abstract base class for implementing the `ObserverLike` interface.
 */
class Observer extends AbstractDisposableContainer {
    constructor(scheduler) {
        super();
        this.scheduler = scheduler;
        this._dispatcher = none;
    }
    get dispatcher() {
        if (isNone(this._dispatcher)) {
            const dispatcher = pipe(new ObserverDelegatingDispatcher(this), addTo(this, true), onDisposed(e => {
                if (dispatcher.nextQueue.length === 0) {
                    pipe(this, dispose(e));
                }
            }));
            this._dispatcher = dispatcher;
        }
        return this._dispatcher;
    }
    assertState() { }
    notify(_) {
        this.assertState();
    }
}
if (__DEV__) {
    Observer.prototype.assertState = function assertStateDev() {
        if (!inContinuation(this.scheduler)) {
            raise("Observer.notify() may only be invoked within a scheduled SchedulerContinuation");
        }
        else if (isDisposed(this)) {
            raise("Observer is disposed");
        }
    };
}
class DelegatingObserver extends Observer {
    constructor(delegate) {
        super(delegate.scheduler);
        this.delegate = delegate;
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
const createDelegatingObserver = (delegate) => new DelegatingObserver(delegate);

export { Observer, createDelegatingObserver };
