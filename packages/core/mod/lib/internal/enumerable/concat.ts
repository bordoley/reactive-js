import { pipe } from "../../functions.ts";
import { flatten } from "./flatten.ts";
import { fromArray } from "./fromArray.ts";
import { EnumerableLike, EnumerableFunction } from "./interfaces.ts";

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
  return pipe(observables, fromArray(), flatten());
}

export const concatWith = <T>(
  snd: EnumerableLike<T>,
): EnumerableFunction<T, T> => first => concat(first, snd);
