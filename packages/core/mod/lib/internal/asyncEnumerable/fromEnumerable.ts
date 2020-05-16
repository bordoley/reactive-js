import {
  EnumeratorLike,
  EnumerableLike,
  enumerate,
  current,
  hasCurrent,
  move,
} from "../../enumerable.ts";
import { Function, compose, bind } from "../../functions.ts";
import {
  withLatestFrom,
  onNotify,
  takeWhile,
  map,
  compute,
} from "../../observable.ts";
import { createStreamable } from "../../streamable.ts";

import { AsyncEnumerableLike } from "./interfaces.ts";

const _fromEnumerable = <T>(
  enumerable: EnumerableLike<T>,
): AsyncEnumerableLike<T> =>
  createStreamable(
    compose(
      withLatestFrom(
        compute<EnumeratorLike<T>>()(bind(enumerate, enumerable)),
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
export const fromEnumerable = <T>(): Function<
  EnumerableLike<T>,
  AsyncEnumerableLike<T>
> => _fromEnumerable;
