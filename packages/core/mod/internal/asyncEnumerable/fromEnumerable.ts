import { EnumeratorLike, EnumerableLike, enumerate } from "../../enumerable.ts";
import { compose, bind } from "../../functions.ts";
import {
  withLatestFrom,
  onNotify,
  takeWhile,
  map,
  compute,
} from "../../observable.ts";
import { createStreamable } from "../../streamable.ts";

import { AsyncEnumerableLike } from "./interfaces.ts";

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
        compute<EnumeratorLike<T>>()(
          bind(enumerate, enumerable)
        ),
        (_, enumerator) => enumerator,
      ),
      onNotify(enumerator => enumerator.move()),
      takeWhile(enumerator => enumerator.hasCurrent),
      map(enumerator => enumerator.current),
    ),
  );
