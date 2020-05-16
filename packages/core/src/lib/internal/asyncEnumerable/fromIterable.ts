import { fromIterable as fromIterableEnumerable } from "../../enumerable";
import { fromEnumerable } from "./fromEnumerable";
import { AsyncEnumerableLike } from "./interfaces";
import { Function, pipe } from "../../functions";

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const _fromIterable = <T>(iterable: Iterable<T>): AsyncEnumerableLike<T> =>
  pipe(iterable, fromIterableEnumerable(), fromEnumerable());

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromIterable = <T>(): Function<
  Iterable<T>,
  AsyncEnumerableLike<T>
> => _fromIterable;
