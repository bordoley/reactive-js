import { createSerialDisposable, disposeOnError, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { none, isNone } from "../../option.js";
import { fromValue } from "./fromValue.js";
import { lift } from "./lift.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
const setupDurationSubscription = (subscriber, next) => {
    subscriber.durationSubscription.inner = pipe(subscriber.durationSelector(next), onNotify(subscriber.onNotify), subscribe(subscriber)).add(disposeOnError(subscriber));
};
class ThrottleSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, durationSelector, mode) {
        super(delegate);
        this.durationSelector = durationSelector;
        this.mode = mode;
        this.durationSubscription = createSerialDisposable();
        this.value = none;
        this.hasValue = false;
        this.onNotify = (_) => {
            if (this.hasValue) {
                const value = this.value;
                this.value = none;
                this.hasValue = false;
                setupDurationSubscription(this, value);
                this.delegate.notify(value);
            }
        };
        this.add(this.durationSubscription).add(error => {
            if (isNone(error) && mode !== 1 && this.hasValue) {
                fromValue()(this.value).subscribe(delegate);
            }
            else {
                delegate.dispose(error);
            }
        });
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        if (!this.isDisposed) {
            this.value = next;
            this.hasValue = true;
            const durationSubscriptionDisposableIsDisposed = this.durationSubscription
                .inner.isDisposed;
            if (durationSubscriptionDisposableIsDisposed &&
                this.mode !== 2) {
                this.onNotify();
            }
            else if (durationSubscriptionDisposableIsDisposed) {
                setupDurationSubscription(this, next);
            }
        }
    }
}
export function throttle(duration, mode = 3) {
    const durationSelector = typeof duration === "number"
        ? (_) => fromValue({ delay: duration })(none)
        : duration;
    const operator = (subscriber) => new ThrottleSubscriber(subscriber, durationSelector, mode);
    operator.isSynchronous = false;
    return lift(operator);
}
