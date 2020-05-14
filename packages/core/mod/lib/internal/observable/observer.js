import { add, AbstractDisposable } from "../../disposable.js";
import { ignore } from "../../functions.js";
import { schedule, } from "../../scheduler.js";
import { __DEV__ } from "../env.js";
const assertObserverNotifyInContinuationProduction = ignore;
const assertObserverNotifyInContinuationDev = (observer) => {
    if (!observer.inContinuation) {
        throw new Error("Observer.notify() may only be invoked within a scheduled SchedulerContinuation");
    }
};
const _assertObserverNotifyInContinuation = __DEV__
    ? assertObserverNotifyInContinuationDev
    : assertObserverNotifyInContinuationProduction;
export const assertObserverNotifyInContinuation = _assertObserverNotifyInContinuation;
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
        schedule(this.scheduler, continuation, options);
    }
    shouldYield() {
        return this.scheduler.shouldYield();
    }
}
export class AbstractDelegatingObserver extends AbstractObserver {
    constructor(delegate) {
        super(delegate);
        this.delegate = delegate;
        add(delegate, this);
    }
}
