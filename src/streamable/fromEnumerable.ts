import { concatWith, fromValue } from "../container";
import {
  EnumerableLike,
  EnumeratorLike,
  current,
  enumerate,
  hasCurrent,
  move,
} from "../enumerable";
import { Function1, compose } from "../functions";
import {
  concatT,
  fromArrayT,
  map,
  never,
  onNotify,
  takeWhile,
  using,
  withLatestFrom,
} from "../observable";
import { AsyncEnumerableLike } from "../streamable";
import { createStreamable } from "./streamable";

const _fromEnumerable = <T>(
  enumerable: EnumerableLike<T>,
): AsyncEnumerableLike<T> =>
  createStreamable(
    compose(
      withLatestFrom<void, EnumeratorLike<T>, EnumeratorLike<T>>(
        using(
          () => enumerate(enumerable),
          compose(fromValue(fromArrayT), concatWith(concatT, never())),
        ),
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
