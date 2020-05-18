import { dispose, bindDisposables } from "../../disposable.ts";
import { pipe, bind } from "../../functions.ts";
import { ObservableLike, ObservableOperator, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { createAutoDisposingDelegatingObserver } from "./observer.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";

export const takeUntil = <T>(
  notifier: ObservableLike<unknown>,
): ObservableOperator<T, T> => {
  const operator = (observer: ObserverLike<T>) => {
    const takeUntilObserver = createAutoDisposingDelegatingObserver(observer);

    const otherSubscription = pipe(
      notifier,
      onNotify(bind(dispose, takeUntilObserver)),
      subscribe(takeUntilObserver),
    );

    bindDisposables(takeUntilObserver, otherSubscription);
    return takeUntilObserver;
  };
  operator.isSynchronous = false;
  return lift(operator);
};
