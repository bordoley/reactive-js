import { dispose } from "../../disposable";
import { EnumeratorLike, EnumerableLike, enumerate } from "../../enumerable";
import { Function1, Factory, defer, pipe } from "../../functions";
import { ObservableLike, ObserverLike } from "./interfaces";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable";
import { yield$ } from "./observer";

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `EnumeratorLike` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromEnumerator = <T>(
  options = { delay: 0 },
): Function1<Factory<EnumeratorLike<T>>, ObservableLike<T>> => f => {
  const factory = () => {
    const enumerator = f();

    return (observer: ObserverLike<T>) => {
      while (enumerator.move()) {
        yield$(observer, enumerator.current, delay);
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
