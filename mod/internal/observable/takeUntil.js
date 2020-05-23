import { dispose, bindDisposables } from "../../disposable.js";
import { pipe, defer } from "../../functions.js";
import { lift } from "./lift.js";
import { createAutoDisposingDelegatingObserver } from "./observer.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
export const takeUntil = (notifier) => {
    const operator = (observer) => {
        const takeUntilObserver = createAutoDisposingDelegatingObserver(observer);
        const otherSubscription = pipe(notifier, onNotify(defer(takeUntilObserver, dispose)), subscribe(takeUntilObserver));
        bindDisposables(takeUntilObserver, otherSubscription);
        return takeUntilObserver;
    };
    operator.isSynchronous = false;
    return lift(operator);
};
