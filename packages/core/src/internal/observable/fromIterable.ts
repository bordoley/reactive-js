import {
  fromIterable as enumerableFromIterable,
  fromIterator as enumerableFromIterator,
} from "../../enumerable";
import { fromEnumerable } from "./fromEnumerable";
import { ObservableLike } from "./interfaces";
import { Operator, compose } from "../../functions";

/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterator` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromIterator = <T, TReturn = any, TNext = unknown>(
  config = { delay: 0 },
): Operator<() => Iterator<T, TReturn, TNext>, ObservableLike<T>> => {
  const call = fromEnumerable(config);
  return compose(enumerableFromIterator, call);
};

/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterable` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromIterable = <T>(
  config = { delay: 0 },
): Operator<Iterable<T>, ObservableLike<T>> => {
  const call = fromEnumerable(config);
  return compose(enumerableFromIterable, call);
};
