import { createSerialDisposable, dispose, addDisposableOrTeardown, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { isNone, isSome } from "../../option.js";
import { lift } from "./lift.js";
import { createDelegatingObserver } from "./observer.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
const createRepeatObserver = (delegate, observable, shouldRepeat) => {
    const innerSubscription = createSerialDisposable();
    let count = 1;
    const onDispose = (error) => {
        let shouldComplete = false;
        try {
            shouldComplete = !shouldRepeat(count, error);
        }
        catch (cause) {
            shouldComplete = true;
            error = { cause, parent: error };
        }
        if (shouldComplete) {
            dispose(delegate, error);
        }
        else {
            count++;
            innerSubscription.inner = pipe(observable, onNotify((next) => delegate.notify(next)), subscribe(delegate), addDisposableOrTeardown(onDispose));
        }
    };
    return pipe(delegate, addDisposableOrTeardown(innerSubscription), createDelegatingObserver, addDisposableOrTeardown(onDispose));
};
const repeatObs = (shouldRepeat) => observable => {
    const operator = (observer) => createRepeatObserver(observer, observable, shouldRepeat);
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
