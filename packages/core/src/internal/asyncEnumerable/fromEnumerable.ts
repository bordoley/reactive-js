import { EnumeratorLike, EnumerableLike } from "../../enumerable";
import { compose } from "../../functions";
import {
  withLatestFrom,
  onNotify,
  takeWhile,
  map,
  compute,
} from "../../observable";
import { createStreamable } from "../../streamable";

import { AsyncEnumerableLike } from "./interfaces";

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
