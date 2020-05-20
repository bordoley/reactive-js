import { addDisposable, AbstractDisposable, bindDisposables, } from "../../disposable.js";
import { ignore } from "../../functions.js";
import { yield$ as yieldScheduler, } from "../../scheduler.js";
import { __DEV__ } from "../env.js";
const assertObserverStateProduction = ignore;
const assertObserverStateDev = (observer) => {
    if (!observer.inContinuation) {
        throw new Error("Observer.notify() may only be invoked within a scheduled SchedulerContinuation");
    }
    else if (observer.isDisposed) {
        throw new Error("Observer is disposed");
    }
};
const _assertObserverState = __DEV__
    ? assertObserverStateDev
    : assertObserverStateProduction;
export const assertObserverState = _assertObserverState;
export class AbstractObserver extends AbstractDisposable {
    constructor(scheduler) {
        super();
        this.inContinuation = false;
        this.scheduler =
            scheduler instanceof AbstractObserver
                ? scheduler.scheduler
                : scheduler;
    }
    get now() {
        return this.scheduler.now;
    }
    get shouldYield() {
        return this.isDisposed || this.scheduler.shouldYield;
    }
    onRunStatusChanged(status) {
        this.inContinuation = status;
    }
    schedule(continuation, options = { delay: 0 }) {
        continuation.addListener("onRunStatusChanged", this);
        addDisposable(this, continuation);
        this.scheduler.schedule(continuation, options);
    }
}
export class AbstractDelegatingObserver extends AbstractObserver {
    constructor(delegate) {
        super(delegate);
        this.delegate = delegate;
        addDisposable(delegate, this);
    }
}
export class AbstractAutoDisposingDelegatingObserver extends AbstractObserver {
    constructor(delegate) {
        super(delegate);
        this.delegate = delegate;
        bindDisposables(this, delegate);
    }
}
class DelegatingObserver extends AbstractObserver {
    constructor(delegate) {
        super(delegate);
        this.delegate = delegate;
    }
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
export const yield$ = (observer, next, delay = 0) => {
    observer.notify(next);
    yieldScheduler(observer, delay);
};
