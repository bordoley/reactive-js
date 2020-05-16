import { fromIterable as fromIterableEnumerable } from "../../enumerable.ts";
import { fromEnumerable } from "./fromEnumerable.ts";
import { AsyncEnumerableLike } from "./interfaces.ts";
import { Function, pipe } from "../../functions.ts";

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
