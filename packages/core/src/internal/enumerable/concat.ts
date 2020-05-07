import { EnumerableLike } from "./interfaces";
import { pipe } from "../../functions";
import { fromArray } from "./fromArray";
import { flatten } from "./flatten";

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
