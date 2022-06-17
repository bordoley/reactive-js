import { compute } from "../container";
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
  fromArrayT,
  map,
  mapT,
  onNotify,
  takeWhile,
  withLatestFrom,
} from "../observable";
import { StreamableLike } from "../streamable";
import { createStreamable } from "./streamable";

const _fromEnumerable = <T>(
  enumerable: EnumerableLike<T>,
): StreamableLike<void, T> =>
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
  StreamableLike<void, T>
> => _fromEnumerable;
