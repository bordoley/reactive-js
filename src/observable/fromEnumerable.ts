import { hasDelay } from "../__internal__.optionalArgs";
import { dispose } from "../disposable";
import {
  EnumerableLike,
  FromEnumerable,
  fromIterable as enumerableFromIterable,
  fromIterator as enumerableFromIterator,
  enumerate,
} from "../enumerable";
import { Enumerator, getCurrent, move } from "../enumerator";
import { Factory, Function1, compose, pipe, pipeLazy } from "../functions";
import { FromIterable, FromIterator } from "../liftableContainer";
import { ObservableLike } from "../observable";
import { Observer } from "../observer";
import { none } from "../option";
import { __yield } from "../scheduler";
import { defer } from "./defer";
import { tagObservableType } from "./observable";
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
    readonly delayStart?: boolean;
  }): Function1<Factory<Enumerator<T>>, ObservableLike<T>> =>
  f => {
    const { delayStart = true } = options ?? {};
    return pipe(
      using(f, enumerator =>
        defer(
          () => (observer: Observer<T>) => {
            while (move(enumerator)) {
              observer.notify(getCurrent(enumerator));
              __yield(options);
            }
            pipe(observer, dispose());
          },
          delayStart ? options : none,
        ),
      ),
      tagObservableType(hasDelay(options) ? 1 : 2),
    );
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
    readonly delayStart?: boolean;
  }): Function1<EnumerableLike<T>, ObservableLike<T>> =>
  enumerable =>
    pipe(pipeLazy(enumerable, enumerate), fromEnumerator(options));

export const fromEnumerableT: FromEnumerable<ObservableLike<unknown>> = {
  fromEnumerable,
};

/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterator` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromIterator = <T, TReturn = any, TNext = unknown>(options?: {
  readonly delay?: number;
  readonly delayStart?: boolean;
}): Function1<Factory<Iterator<T, TReturn, TNext>>, ObservableLike<T>> =>
  compose(enumerableFromIterator(), fromEnumerable(options));

export const fromIteratorT: FromIterator<
  ObservableLike<unknown>,
  {
    readonly delay?: number;
  }
> = {
  fromIterator,
};

/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterable` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromIterable = <T>(options?: {
  readonly delay?: number;
  readonly delayStart?: boolean;
}): Function1<Iterable<T>, ObservableLike<T>> =>
  compose(enumerableFromIterable(), fromEnumerable(options));

export const fromIterableT: FromIterable<ObservableLike<unknown>> = {
  fromIterable,
};
