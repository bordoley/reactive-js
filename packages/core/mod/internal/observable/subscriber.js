import { AbstractDisposable } from "../../disposable.js";
import { ignore } from "../../functions.js";
import { schedule } from "../../scheduler.js";
import { __DEV__ } from "../env.js";
const assertSubscriberNotifyInContinuationProduction = ignore;
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
    schedule(continuation, options = { delay: 0 }) {
        continuation.addListener("onRunStatusChanged", this);
        this.add(continuation);
        schedule(this.scheduler, continuation, options);
    }
    shouldYield() {
        return this.scheduler.shouldYield();
    }
}
export class AbstractDelegatingSubscriber extends AbstractSubscriber {
    constructor(delegate) {
        super(delegate);
        this.delegate = delegate;
        delegate.add(this);
    }
}
