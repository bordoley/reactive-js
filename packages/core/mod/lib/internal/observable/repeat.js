import { createSerialDisposable, dispose, add, addDisposableOrTeardown, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { isNone, isSome } from "../../option.js";
import { lift } from "./lift.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
class RepeatObserver extends AbstractDelegatingObserver {
    constructor(delegate, observable, shouldRepeat) {
        super(delegate);
        this.observable = observable;
        this.shouldRepeat = shouldRepeat;
        this.innerSubscription = createSerialDisposable();
        this.count = 1;
        this.onDispose = (error) => {
            let shouldComplete = false;
            try {
                shouldComplete = !this.shouldRepeat(this.count, error);
            }
            catch (cause) {
                shouldComplete = true;
                error = { cause, parent: error };
            }
            const delegate = this.delegate;
            if (shouldComplete) {
                dispose(delegate, error);
            }
            else {
                this.count++;
                this.innerSubscription.inner = pipe(this.observable, onNotify(this.onNotify), subscribe(delegate), addDisposableOrTeardown(this.onDispose));
            }
        };
        this.onNotify = (next) => this.delegate.notify(next);
        add(delegate, this.innerSubscription);
        add(this, this.onDispose);
    }
    notify(next) {
        assertObserverState(this);
        this.delegate.notify(next);
    }
}
const repeatObs = (shouldRepeat) => observable => {
    const operator = (observer) => new RepeatObserver(observer, observable, shouldRepeat);
    operator.isSynchronous = true;
    return lift(operator)(observable);
};
const defaultRepeatPredicate = (_, error) => isNone(error);
export function repeat(predicate) {
    const repeatPredicate = isNone(predicate)
        ? defaultRepeatPredicate
        : typeof predicate === "number"
            ? (count, error) => isNone(error) && count < predicate
            : (count, error) => isNone(error) && predicate(count);
    return repeatObs(repeatPredicate);
}
const defaultRetryPredicate = (_, error) => isSome(error);
export function retry(predicate) {
    const retryPredicate = isNone(predicate)
        ? defaultRetryPredicate
        : (count, error) => isSome(error) && predicate(count, error.cause);
    return repeatObs(retryPredicate);
}
