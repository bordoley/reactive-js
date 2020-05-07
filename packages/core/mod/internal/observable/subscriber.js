import { AbstractDisposable } from "../../disposable.js";
import { __DEV__ } from "../env.js";
import { alwaysVoid } from "../../functions.js";
const assertSubscriberNotifyInContinuationProduction = alwaysVoid;
const assertSubscriberNotifyInContinuationDev = (subscriber) => {
    if (!subscriber.inContinuation) {
        throw new Error("Subscriber.notify() may only be invoked within a scheduled SchedulerContinuation");
    }
};
const _assertSubscriberNotifyInContinuation = __DEV__
    ? assertSubscriberNotifyInContinuationDev
    : assertSubscriberNotifyInContinuationProduction;
export const assertSubscriberNotifyInContinuation = _assertSubscriberNotifyInContinuation;
export class AbstractSubscriber extends AbstractDisposable {
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
    schedule(continuation, delay = 0) {
        continuation.addListener("onRunStatusChanged", this);
        this.add(continuation);
        this.scheduler.schedule(continuation, delay);
    }
}
export class AbstractDelegatingSubscriber extends AbstractSubscriber {
    constructor(delegate) {
        super(delegate);
        this.delegate = delegate;
        delegate.add(this);
    }
}
