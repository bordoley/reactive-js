import { dispose } from "../disposable";
import { EnumerableLike, Enumerator, enumerate } from "../enumerable";
import { Factory, Function1, defer, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { __yield } from "../scheduler";
import { defer as deferObs } from "./defer";
import { Observer } from "./observer";
import { using } from "./using";

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `EnumeratorLike` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromEnumerator =
  <T>(
    options: { readonly delay?: number } = {},
  ): Function1<Factory<Enumerator<T>>, ObservableLike<T>> =>
  f => {
    const { delay = Math.max(options.delay ?? 0, 0) } = options;

    const result = using(f, enumerator =>
      deferObs(
        () => (observer: Observer<T>) => {
          while (enumerator.move()) {
            observer.notify(enumerator.current);
            __yield(delay);
          }
          pipe(observer, dispose());
        },
        { delay },
      ),
    );

    (result as any).isEnumerable = delay === 0;

    return result;
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
