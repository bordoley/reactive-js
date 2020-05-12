import { createSerialDisposable, disposeOnError, dispose, add, addDisposableOrTeardown, } from "../../disposable.js";
import { pipe, returns } from "../../functions.js";
import { concat } from "./concat.js";
import { lift } from "./lift.js";
import { subscribe } from "./subscribe.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
import { throws } from "./throws.js";
export const timeoutError = Symbol("TimeoutError");
const setupDurationSubscription = (subscriber) => {
    subscriber.durationSubscription.inner = pipe(subscriber.duration, subscribe(subscriber), addDisposableOrTeardown(disposeOnError(subscriber)));
};
class TimeoutSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, duration) {
        super(delegate);
        this.duration = duration;
        this.durationSubscription = createSerialDisposable();
        add(this, this.durationSubscription, delegate);
        setupDurationSubscription(this);
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        dispose(this.durationSubscription);
        this.delegate.notify(next);
    }
}
const returnTimeoutError = returns(timeoutError);
export function timeout(duration) {
    const durationObs = typeof duration === "number"
        ? throws({ delay: duration })(returnTimeoutError)
        : concat(duration, throws()(returnTimeoutError));
    const operator = (subscriber) => new TimeoutSubscriber(subscriber, durationObs);
    operator.isSynchronous = false;
    return lift(operator);
}
