import { fromIterable as fromIterableEnumerable } from "../enumerable";
import { Function1, pipe } from "../functions";
import { StreamableLike } from "../streamable";
import { fromEnumerable } from "./fromEnumerable";

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const _fromIterable = <T>(iterable: Iterable<T>): StreamableLike<void, T> =>
  pipe(iterable, fromIterableEnumerable(), fromEnumerable());

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromIterable = <T>(): Function1<
  Iterable<T>,
  StreamableLike<void, T>
> => _fromIterable;
