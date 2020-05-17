import { add, AbstractDisposable, addDisposableOrTeardown } from "../../disposable.js";
import { ignore, pipe } from "../../functions.js";
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
        this.scheduler = scheduler;
        this.inContinuation = false;
        this.scheduler = scheduler;
    }
    get now() {
        return this.scheduler.now;
    }
    onRunStatusChanged(status) {
        this.inContinuation = status;
    }
    schedule(continuation, options = { delay: 0 }) {
        continuation.addListener("onRunStatusChanged", this);
        add(this, continuation);
        this.scheduler.schedule(continuation, options);
    }
    yield(options) {
        return this.scheduler.yield(options);
    }
}
export class AbstractDelegatingObserver extends AbstractObserver {
    constructor(delegate) {
        super(delegate);
        this.delegate = delegate;
        add(delegate, this);
    }
}
export class AbstractAutoDisposingDelegatingObserver extends AbstractObserver {
    constructor(delegate) {
        super(delegate);
        this.delegate = delegate;
        add(delegate, this);
        add(this, delegate);
    }
}
class DelegatingObserver extends AbstractDelegatingObserver {
    constructor(delegate) {
        super(delegate);
        this.delegate = delegate;
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
export const createDelegatingObserver = (delegate) => new DelegatingObserver(delegate);
export const createAutoDisposingDelegatingObserver = (delegate) => pipe(delegate, createDelegatingObserver, addDisposableOrTeardown(delegate));
