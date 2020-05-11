import { fromIterable as fromIterableEnumerable } from "../../enumerable";
import { fromEnumerable } from "./fromEnumerable";
import { AsyncEnumerableLike } from "./interfaces";

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromIterable = <T>(
  iterable: Iterable<T>,
): AsyncEnumerableLike<T> => fromEnumerable(fromIterableEnumerable(iterable));
