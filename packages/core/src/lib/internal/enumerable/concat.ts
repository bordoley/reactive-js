import { pipe } from "../../functions";
import { concatAll } from "./concatAll";
import { fromArray } from "./fromArray";
import { EnumerableLike, EnumerableFunction } from "./interfaces";

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
): EnumerableFunction<T, T> => first => concat(first, snd);
