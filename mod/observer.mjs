/// <reference types="./observer.d.ts" />
import { DisposableContainer } from './container.mjs';
import { addTo, onComplete, Disposable, isDisposed, dispose, onDisposed } from './disposable.mjs';
import { __DEV__ } from './env.mjs';
import { length, pipe, newInstanceWith, isEmpty, raise, newInstance } from './functions.mjs';
import { getDelegate } from './liftable.mjs';
import { none, isNone } from './option.mjs';
import { schedule, __yield, inContinuation } from './scheduler.mjs';
import { assertState, notify } from './source.mjs';

const scheduleDrainQueue = (dispatcher) => {
    if (length(dispatcher.nextQueue) === 1) {
        const { observer } = dispatcher;
        pipe(getScheduler(observer), schedule(dispatcher.continuation), addTo(observer), onComplete(dispatcher.onContinuationDispose));
    }
};
class ObserverDelegatingDispatcher extends Disposable {
    constructor(observer) {
        super();
        this.observer = observer;
        this.continuation = () => {
            const { nextQueue } = this;
            const { observer } = this;
            while (length(nextQueue) > 0) {
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
    get scheduler() {
        return this.observer.scheduler;
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
class Observer extends DisposableContainer {
    constructor(scheduler) {
        super();
        this.scheduler = scheduler;
        this._dispatcher = none;
    }
    get dispatcher() {
        if (isNone(this._dispatcher)) {
            const dispatcher = pipe(ObserverDelegatingDispatcher, newInstanceWith(this), addTo(this, true), onDisposed(e => {
                if (isEmpty(dispatcher.nextQueue)) {
                    pipe(this, dispose(e));
                }
            }));
            this._dispatcher = dispatcher;
        }
        return this._dispatcher;
    }
    assertState() { }
    notify(_) {
        assertState(this);
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
class AbstractDelegatingObserver extends Observer {
    constructor(delegate) {
        super(getScheduler(delegate));
        this.delegate = delegate;
    }
    notify(_) { }
}
class DelegatingObserver extends AbstractDelegatingObserver {
    notify(next) {
        pipe(this, getDelegate, notify(next));
    }
}
const createDelegatingObserver = (delegate) => newInstance(DelegatingObserver, delegate);
const getScheduler = (observer) => observer.scheduler;
const getDispatcher = (observer) => observer.dispatcher;

export { AbstractDelegatingObserver, Observer, createDelegatingObserver, getDispatcher, getScheduler };
