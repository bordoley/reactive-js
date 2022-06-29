import { dispose } from "../disposable";
import { EnumerableLike, enumerate } from "../enumerable";
import { Enumerator, current, move } from "../enumerator";
import { Factory, Function1, pipe, pipeLazy } from "../functions";
import { ObservableLike } from "../observable";
import { Observer } from "../observer";
import { __yield, hasDelay } from "../scheduler";
import { defer } from "./defer";
import { tagEnumerable } from "./observable";
import { using } from "./using";

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `EnumeratorLike` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromEnumerator =
  <T>(options?: {
    readonly delay?: number;
  }): Function1<Factory<Enumerator<T>>, ObservableLike<T>> =>
  f =>
    pipe(
      using(f, enumerator =>
        defer(
          () => (observer: Observer<T>) => {
            while (move(enumerator)) {
              observer.notify(current(enumerator));
              __yield(options);
            }
            pipe(observer, dispose());
          },
          options,
        ),
      ),
      tagEnumerable(!hasDelay(options)),
    );

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
    pipe(pipeLazy(enumerable, enumerate), fromEnumerator(options));
