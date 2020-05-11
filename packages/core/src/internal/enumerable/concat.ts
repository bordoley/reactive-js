import { pipe } from "../../functions";
import { flatten } from "./flatten";
import { fromArray } from "./fromArray";
import { EnumerableLike, EnumerableOperator } from "./interfaces";

/**
 * Creates an EnumerableLike which yields all values from each source sequentially.
 */
export function concat<T>(
  fst: EnumerableLike<T>,
  snd: EnumerableLike<T>,
  ...tail: Array<EnumerableLike<T>>
): EnumerableLike<T>;

export function concat<T>(
  ...observables: EnumerableLike<T>[]
): EnumerableLike<T> {
  return pipe(observables, fromArray, flatten());
}

export const concatWith = <T>(
  snd: EnumerableLike<T>,
): EnumerableOperator<T, T> =>
  first => concat(first, snd);
