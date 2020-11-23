import { EnumerableLike, EnumerableOperator } from "../enumerable";
import { pipe } from "../functions";
import { concatAll } from "./concatAll";
import { fromArray } from "./fromArray";

/**
 * Creates an EnumerableLike which yields all values from each source sequentially.
 */
export function concat<T>(
  fst: EnumerableLike<T>,
  snd: EnumerableLike<T>,
  ...tail: readonly EnumerableLike<T>[]
): EnumerableLike<T>;

export function concat<T>(
  ...enumerables: readonly EnumerableLike<T>[]
): EnumerableLike<T> {
  return pipe(enumerables, fromArray(), concatAll());
}

export const concatWith = <T>(
  snd: EnumerableLike<T>,
): EnumerableOperator<T, T> => first => concat(first, snd);
