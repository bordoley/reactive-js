import { createSerialDisposable, disposeOnError, dispose, add, addDisposableOrTeardown, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { none, isNone } from "../../option.js";
import { fromValue } from "./fromValue.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
const setupDurationSubscription = (observer, next) => {
    observer.durationSubscription.inner = pipe(observer.durationFunction(next), onNotify(observer.onNotify), subscribe(observer), addDisposableOrTeardown(disposeOnError(observer)));
};
class ThrottleObserver extends AbstractDelegatingObserver {
    constructor(delegate, durationFunction, mode) {
        super(delegate);
        this.durationFunction = durationFunction;
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
        add(this, this.durationSubscription, error => {
            if (isNone(error) && mode !== 1 && this.hasValue) {
                fromValue()(this.value).observe(delegate);
            }
            else {
                dispose(delegate, error);
            }
        });
    }
    notify(next) {
        assertObserverState(this);
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
export function throttle(duration, mode = 3) {
    const durationFunction = typeof duration === "number"
        ? (_) => fromValue({ delay: duration })(none)
        : duration;
    const operator = (observer) => new ThrottleObserver(observer, durationFunction, mode);
    operator.isSynchronous = false;
    return lift(operator);
}
