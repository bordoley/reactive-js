import { createSerialDisposable, disposeOnError, dispose, add, addDisposableOrTeardown, } from "../../disposable.js";
import { pipe, returns } from "../../functions.js";
import { concat } from "./concat.js";
import { lift } from "./lift.js";
import { subscribe } from "./subscribe.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
import { throws } from "./throws.js";
export const timeoutError = Symbol("@reactive-js/core/lib/observable/timeoutError");
const setupDurationSubscription = (observer) => {
    observer.durationSubscription.inner = pipe(observer.duration, subscribe(observer), addDisposableOrTeardown(disposeOnError(observer)));
};
class TimeoutObserver extends AbstractDelegatingObserver {
    constructor(delegate, duration) {
        super(delegate);
        this.duration = duration;
        this.durationSubscription = createSerialDisposable();
        add(this, this.durationSubscription, delegate);
        setupDurationSubscription(this);
    }
    notify(next) {
        assertObserverState(this);
        dispose(this.durationSubscription);
        this.delegate.notify(next);
    }
}
const returnTimeoutError = returns(timeoutError);
export function timeout(duration) {
    const durationObs = typeof duration === "number"
        ? throws({ delay: duration })(returnTimeoutError)
        : concat(duration, throws()(returnTimeoutError));
    const operator = (observer) => new TimeoutObserver(observer, durationObs);
    operator.isSynchronous = false;
    return lift(operator);
}
