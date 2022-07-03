import { zip as zipEnumerators } from "../__internal__.enumerator";
import { map } from "../__internal__.readonlyArray";
import { Zip } from "../container";
import { EnumerableLike } from "../enumerable";
import { pipe } from "../functions";
import { createEnumerable, enumerate } from "./enumerable";

/**
 * Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
 * in order, of each of its inputs.
 */
const _zip = <T>(
  ...enumerables: readonly EnumerableLike<T>[]
): EnumerableLike<any> =>
  createEnumerable(() =>
    pipe(enumerables, map(enumerate), a => zipEnumerators(...a)),
  );

export const zip: Zip<EnumerableLike<unknown>>["zip"] = _zip;

export const zipT: Zip<EnumerableLike<unknown>> = {
  zip,
};
