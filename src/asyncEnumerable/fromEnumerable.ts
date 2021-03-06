import { AsyncEnumerableLike } from "../asyncEnumerable";
import {
  EnumerableLike,
  EnumeratorLike,
  current,
  enumerate,
  hasCurrent,
  move,
} from "../enumerable";
import { Function1, compose, defer } from "../functions";
import {
  compute,
  map,
  onNotify,
  takeWhile,
  withLatestFrom,
} from "../observable";
import { createStreamable } from "../streamable";

const _fromEnumerable = <T>(
  enumerable: EnumerableLike<T>,
): AsyncEnumerableLike<T> =>
  createStreamable(
    compose(
      withLatestFrom(
        compute<EnumeratorLike<T>>()(defer(enumerable, enumerate)),
        (_, enumerator) => enumerator,
      ),
      onNotify(move),
      takeWhile(hasCurrent),
      map(current),
    ),
  );

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromEnumerable = <T>(): Function1<
  EnumerableLike<T>,
  AsyncEnumerableLike<T>
> => _fromEnumerable;
