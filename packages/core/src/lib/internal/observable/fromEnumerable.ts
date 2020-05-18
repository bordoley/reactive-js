import { EnumeratorLike, EnumerableLike, enumerate } from "../../enumerable";
import { Function1, Factory, defer, pipe } from "../../functions";
import { YieldableLike } from "../scheduler/interfaces";
import { ObservableLike, ObserverLike } from "./interfaces";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable";
import { dispose } from "../../disposable";

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `EnumeratorLike` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromEnumerator = <T>(
  options = { delay: 0 },
): Function1<Factory<EnumeratorLike<T>>, ObservableLike<T>> => f => {
  const factory = (observer: ObserverLike<T>) => {
    const enumerator = f();

    let observerIsDisposed = observer.isDisposed;

    return ($: YieldableLike) => {
      while (!observerIsDisposed && enumerator.move()) {
        observer.notify(enumerator.current);

        observerIsDisposed = observer.isDisposed;
        if (!observerIsDisposed) {
          $.yield(options);
        }
      }
      dispose(observer);
    };
  };

  const { delay } = options;
  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `Enumerable` with a specified `delay` between emitted items.
 *
 * @param values The `Enumerable`.
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromEnumerable = <T>(
  options = { delay: 0 },
): Function1<EnumerableLike<T>, ObservableLike<T>> => enumerable =>
  pipe(defer(enumerable, enumerate), fromEnumerator(options));
