import { AsyncEnumerableLike } from "./interfaces.ts";
import { fromIterable as fromIterableEnumerable } from "../../enumerable.ts";
import { fromEnumerable } from "./fromEnumerable.ts";

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromIterable = <T>(
  iterable: Iterable<T>,
): AsyncEnumerableLike<T> => fromEnumerable(fromIterableEnumerable(iterable));
