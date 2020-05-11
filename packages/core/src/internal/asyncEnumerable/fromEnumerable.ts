import { AsyncEnumerableLike } from "./interfaces";
import {
  withLatestFrom,
  onNotify,
  takeWhile,
  map,
  compute,
} from "../../observable";
import { compose } from "../../functions";
import { EnumeratorLike } from "../../enumerable";
import { createStreamable } from "../../streamable";
import { EnumerableLike } from "../../enumerable";

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromEnumerable = <T>(
  enumerable: EnumerableLike<T>,
): AsyncEnumerableLike<T> =>
  createStreamable(
    compose(
      withLatestFrom(
        compute<EnumeratorLike<T>>()(() => enumerable.enumerate()),
        (_, enumerator) => enumerator,
      ),
      onNotify(enumerator => enumerator.move()),
      takeWhile(enumerator => enumerator.hasCurrent),
      map(enumerator => enumerator.current),
    ),
  );
