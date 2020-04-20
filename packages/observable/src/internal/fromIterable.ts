import {
  fromIterable as enumerableFromIterable,
  fromIterator as enumerableFromIterator,
} from "@reactive-js/enumerable";
import { ObservableLike } from "./interfaces";
import { fromEnumerable } from "./fromEnumerable";

/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterator` with a specified `delay` between emitted items.
 *
 * @param values The `Iterator`.
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromIterator = <T, TReturn = any, TNext = unknown>(
  f: () => Iterator<T, TReturn, TNext>,
  delay = 0,
): ObservableLike<T> => fromEnumerable(enumerableFromIterator(f), delay);

/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterable` with a specified `delay` between emitted items.
 *
 * @param values The `Iterable`.
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromIterable = <T>(
  iterable: Iterable<T>,
  delay = 0,
): ObservableLike<T> => fromEnumerable(enumerableFromIterable(iterable), delay);
