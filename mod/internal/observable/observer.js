import { addDisposable, AbstractDisposable, bindDisposables, } from "../../disposable.js";
import { ignore, raise } from "../../functions.js";
import { yield$ as yieldScheduler, } from "../../scheduler.js";
import { __DEV__ } from "../env.js";
const assertObserverStateProduction = ignore;
const assertObserverStateDev = (observer) => {
    if (!observer.inContinuation) {
        raise("Observer.notify() may only be invoked within a scheduled SchedulerContinuation");
    }
    else if (observer.isDisposed) {
        raise("Observer is disposed");
    }
};
const _assertObserverState = __DEV__
    ? assertObserverStateDev
    : assertObserverStateProduction;
export const assertObserverState = _assertObserverState;
export class AbstractObserver extends AbstractDisposable {
    constructor(delegate) {
        super();
        this.delegate = delegate;
        this.inContinuation = false;
        this.scheduler =
            delegate instanceof AbstractObserver ? delegate.scheduler : delegate;
    }
    get now() {
        return this.scheduler.now;
    }
    get shouldYield() {
        return (this.inContinuation && (this.isDisposed || this.scheduler.shouldYield));
    }
    onRunStatusChanged(status) {
        this.inContinuation = status;
    }
    schedule(continuation, options) {
        continuation.addListener("onRunStatusChanged", this);
        addDisposable(this, continuation);
        this.delegate.schedule(continuation, options);
    }
}
export class AbstractDelegatingObserver extends AbstractObserver {
    constructor(delegate) {
        super(delegate);
        addDisposable(delegate, this);
    }
}
export class AbstractAutoDisposingDelegatingObserver extends AbstractObserver {
    constructor(delegate) {
        super(delegate);
        bindDisposables(this, delegate);
    }
}
class DelegatingObserver extends AbstractObserver {
    notify(next) {
        this.delegate.notify(next);
    }
}
export const createDelegatingObserver = (delegate) => {
    const observer = new DelegatingObserver(delegate);
    addDisposable(delegate, observer);
    return observer;
};
export const createAutoDisposingDelegatingObserver = (delegate) => {
    const observer = new DelegatingObserver(delegate);
    bindDisposables(delegate, observer);
    return observer;
};
export const yield$ = (observer, next, delay) => {
    observer.notify(next);
    yieldScheduler(observer, delay);
};
