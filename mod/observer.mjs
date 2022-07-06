/// <reference types="./observer.d.ts" />
import { __DEV__ } from './__internal__.env.mjs';
import { addTo, onComplete, Disposable, isDisposed, dispose, onDisposed } from './disposable.mjs';
import { getLength, pipe, newInstanceWith, isEmpty, raise } from './functions.mjs';
import { reactive } from './liftable.mjs';
import { none, isNone } from './option.mjs';
import { assertState } from './reactiveSink.mjs';
import { schedule, __yield, isInContinuation } from './scheduler.mjs';

const scheduleDrainQueue = (dispatcher) => {
    if (getLength(dispatcher.nextQueue) === 1) {
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
            while (getLength(nextQueue) > 0) {
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
        return getScheduler(this.observer);
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
class Observer extends Disposable {
    constructor(scheduler) {
        super();
        this.scheduler = scheduler;
        this._dispatcher = none;
    }
    get TLiftableContainerStateType() {
        return reactive;
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
        if (!pipe(this, getScheduler, isInContinuation)) {
            raise("Observer.notify() may only be invoked within a scheduled SchedulerContinuation");
        }
        else if (isDisposed(this)) {
            raise("Observer is disposed");
        }
    };
}
const getScheduler = (observer) => observer.scheduler;
const getDispatcher = (observer) => observer.dispatcher;

export { Observer, getDispatcher, getScheduler };
