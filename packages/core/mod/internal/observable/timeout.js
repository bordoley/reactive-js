import { createSerialDisposable, } from "../../disposable.js";
import { isSome } from "../../option.js";
import { lift } from "./lift.js";
import { pipe, returns } from "../../functions.js";
import { subscribe } from "./subscribe.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
import { throws } from "./throws.js";
import { concat } from "./concat.js";
export const timeoutError = Symbol("TimeoutError");
const setupDurationSubscription = (subscriber) => {
    subscriber.durationSubscription.inner = pipe(subscriber.duration, subscribe(subscriber)).add(subscriber.onDispose);
};
class TimeoutSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, duration) {
        super(delegate);
        this.duration = duration;
        this.durationSubscription = createSerialDisposable();
        this.onDispose = (error) => {
            if (isSome(error)) {
                this.dispose(error);
            }
        };
        this.add(this.durationSubscription).add(delegate);
        setupDurationSubscription(this);
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        this.durationSubscription.dispose();
        this.delegate.notify(next);
    }
}
const returnTimeoutError = returns(timeoutError);
export function timeout(duration) {
    const durationObs = typeof duration === "number"
        ? throws(returnTimeoutError, duration)
        : concat(duration, throws(returnTimeoutError));
    const operator = (subscriber) => new TimeoutSubscriber(subscriber, durationObs);
    operator.isSynchronous = false;
    return lift(operator);
}
