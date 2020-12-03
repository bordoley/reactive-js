import { bindDisposables, dispose } from "../disposable";
import { defer, pipe } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
} from "../observable";
import { lift } from "./lift";
import { createAutoDisposingDelegatingObserver } from "./observer";
import { subscribe } from "./subscribe";

export const takeUntil = <T>(
  notifier: ObservableLike<unknown>,
): ObservableOperator<T, T> => {
  const operator = (observer: ObserverLike<T>) => {
    const takeUntilObserver = createAutoDisposingDelegatingObserver(observer);

    const otherSubscription = pipe(
      notifier,
      subscribe(takeUntilObserver, defer(takeUntilObserver, dispose)),
    );

    bindDisposables(takeUntilObserver, otherSubscription);
    return takeUntilObserver;
  };
  operator.isSynchronous = false;
  return lift(operator);
};
