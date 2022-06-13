import { AsyncEnumerableLike } from "../asyncEnumerable";
import {
  EnumerableLike,
  current,
  enumerate,
  hasCurrent,
  move,
  EnumeratorLike,
} from "../enumerable";
import { Function1, compose, defer } from "../functions";
import {
  fromArrayT,
  map,
  mapT,
  onNotify,
  takeWhile,
  withLatestFrom,
} from "../observable";
import { createStreamable } from "../streamable";
import { compute } from "../container";

const _fromEnumerable = <T>(
  enumerable: EnumerableLike<T>,
): AsyncEnumerableLike<T> =>
  createStreamable(
    compose(
      withLatestFrom<void, EnumeratorLike<T>, EnumeratorLike<T>>(
        compute({
          ...fromArrayT,
          ...mapT,
        })(defer(enumerable, enumerate)),
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
