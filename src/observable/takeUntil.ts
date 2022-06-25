import { bindTo, dispose } from "../disposable";
import { pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { lift } from "./lift";
import { Observer, createDelegatingObserver } from "./observer";
import { subscribe } from "./subscribe";

export const takeUntil = <T>(
  notifier: ObservableLike<unknown>,
): ObservableOperator<T, T> => {
  const operator = (delegate: Observer<T>) => {
    const takeUntilObserver: Observer<T> = pipe(
      createDelegatingObserver(delegate),
      bindTo(delegate),
      bindTo(
        pipe(
          notifier,
          subscribe(delegate.scheduler, () => dispose()(takeUntilObserver)),
        ),
      ),
    );

    return takeUntilObserver;
  };
  return lift(operator);
};
