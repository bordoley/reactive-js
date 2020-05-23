import { createSerialDisposable, dispose, addDisposableDisposeParentOnChildError, } from "../../disposable.js";
import { pipe, returns } from "../../functions.js";
import { concat } from "./concat.js";
import { lift } from "./lift.js";
import { AbstractAutoDisposingDelegatingObserver, assertObserverState, } from "./observer.js";
import { subscribe } from "./subscribe.js";
import { throws } from "./throws.js";
const _timeoutError = Symbol("@reactive-js/core/lib/observable/timeoutError");
export const timeoutError = _timeoutError;
const setupDurationSubscription = (observer) => {
    observer.durationSubscription.inner = pipe(observer.duration, subscribe(observer));
};
class TimeoutObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, duration) {
        super(delegate);
        this.duration = duration;
        this.durationSubscription = createSerialDisposable();
        addDisposableDisposeParentOnChildError(this, this.durationSubscription);
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
