import {
  fromIterable as enumerableFromIterable,
  fromIterator as enumerableFromIterator,
} from "../../enumerable";
import { Function1, compose, Factory } from "../../functions";
import { fromEnumerable } from "./fromEnumerable";
import { ObservableLike } from "./interfaces";

/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterator` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromIterator = <T, TReturn = any, TNext = unknown>(options?: {
  readonly delay?: number;
}): Function1<Factory<Iterator<T, TReturn, TNext>>, ObservableLike<T>> => {
  const call = fromEnumerable(options);
  return compose(enumerableFromIterator(), call);
};

/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterable` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromIterable = <T>(options?: {
  readonly delay?: number;
}): Function1<Iterable<T>, ObservableLike<T>> => {
  const call = fromEnumerable(options);
  return compose(enumerableFromIterable(), call);
};
