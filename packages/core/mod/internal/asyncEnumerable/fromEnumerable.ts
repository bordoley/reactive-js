import { AsyncEnumerableLike } from "./interfaces.ts";
import {
  withLatestFrom,
  onNotify,
  takeWhile,
  map,
  compute,
} from "../../observable.ts";
import { compose } from "../../functions.ts";
import { EnumeratorLike } from "../../enumerable.ts";
import { createStreamable } from "../../streamable.ts";
import { EnumerableLike } from "../../enumerable.ts";

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
