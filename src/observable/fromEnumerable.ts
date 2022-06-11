import { dispose } from "../disposable";
import { EnumerableLike, EnumeratorLike, enumerate } from "../enumerable";
import { Factory, Function1, defer, pipe } from "../functions";
import { ObservableLike, ObserverLike } from "../observable";
import { __yield } from "../scheduler";
import { defer as deferObs, deferSynchronous } from "./observable";

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `EnumeratorLike` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromEnumerator =
  <T>(
    options: { readonly delay?: number } = {},
  ): Function1<Factory<EnumeratorLike<T>>, ObservableLike<T>> =>
  f => {
    const factory = (observer: ObserverLike<T>) => {
      const enumerator = f();

      return () => {
        while (enumerator.move()) {
          observer.notify(enumerator.current);
          __yield(delay);
        }
        pipe(observer, dispose());
      };
    };

    const { delay = 0 } = options;
    return delay > 0 ? deferObs(factory, { delay }) : deferSynchronous(factory);
  };

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `Enumerable` with a specified `delay` between emitted items.
 *
 * @param values The `Enumerable`.
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromEnumerable =
  <T>(options?: {
    readonly delay?: number;
  }): Function1<EnumerableLike<T>, ObservableLike<T>> =>
  enumerable =>
    pipe(defer(enumerable, enumerate), fromEnumerator(options));
