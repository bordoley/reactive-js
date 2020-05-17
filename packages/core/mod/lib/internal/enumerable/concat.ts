import { pipe } from "../../functions.ts";
import { concatAll } from "./concatAll.ts";
import { fromArray } from "./fromArray.ts";
import { EnumerableLike, EnumerableOperator } from "./interfaces.ts";

/**
 * Creates an EnumerableLike which yields all values from each source sequentially.
 */
export function concat<T>(
  fst: EnumerableLike<T>,
  snd: EnumerableLike<T>,
  ...tail: Array<EnumerableLike<T>>
): EnumerableLike<T>;

export function concat<T>(
  ...enumerables: EnumerableLike<T>[]
): EnumerableLike<T> {
  return pipe(enumerables, fromArray(), concatAll());
}

export const concatWith = <T>(
  snd: EnumerableLike<T>,
): EnumerableOperator<T, T> => first => concat(first, snd);
