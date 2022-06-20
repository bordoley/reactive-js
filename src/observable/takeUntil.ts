import { bindDisposables, dispose } from "../disposable";
import { defer, pipe } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
} from "../observable";
import { lift } from "./lift";
import { createDelegatingObserver } from "./observer";
import { subscribe } from "./subscribe";

export const takeUntil = <T>(
  notifier: ObservableLike<unknown>,
): ObservableOperator<T, T> => {
  const operator = (delegate: ObserverLike<T>) => {
    const takeUntilObserver = createDelegatingObserver(delegate);
    bindDisposables(takeUntilObserver, delegate);

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
