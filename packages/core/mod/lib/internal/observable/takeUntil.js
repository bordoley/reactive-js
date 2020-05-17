import { addDisposableOrTeardown, add, dispose } from "../../disposable.js";
import { pipe, bind } from "../../functions.js";
import { lift } from "./lift.js";
import { createAutoDisposingDelegatingObserver } from "./observer.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
export const takeUntil = (notifier) => {
    const operator = (observer) => {
        const takeUntilObserver = createAutoDisposingDelegatingObserver(observer);
        const otherSubscription = pipe(notifier, onNotify(bind(dispose, takeUntilObserver)), subscribe(takeUntilObserver), addDisposableOrTeardown(takeUntilObserver));
        add(observer, otherSubscription);
        return takeUntilObserver;
    };
    operator.isSynchronous = false;
    return lift(operator);
};
