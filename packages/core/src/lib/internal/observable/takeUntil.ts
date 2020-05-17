import { addDisposableOrTeardown, add, dispose } from "../../disposable";
import { pipe, bind } from "../../functions";
import { ObservableLike, ObservableOperator, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import { createAutoDisposingDelegatingObserver } from "./observer";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

export const takeUntil = <T>(
  notifier: ObservableLike<unknown>,
): ObservableOperator<T, T> => {
  const operator = (observer: ObserverLike<T>) => {
    const takeUntilObserver = createAutoDisposingDelegatingObserver(observer);

    const otherSubscription = pipe(
      notifier,
      onNotify(bind(dispose, takeUntilObserver)),
      subscribe(takeUntilObserver),
      addDisposableOrTeardown(takeUntilObserver),
    );

    add(observer, otherSubscription);
    return takeUntilObserver;
  };
  operator.isSynchronous = false;
  return lift(operator);
};
