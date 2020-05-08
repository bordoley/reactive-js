import { Operator } from "../../functions.ts";
import { EnumerableLike } from "./interfaces.ts";

/**
 * Returns `true` if the predicate is satisfied for
 * every value produced by the source, or if the source is empty, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const everySatisfy = <T>(
  predicate: (next: T) => boolean,
): Operator<EnumerableLike<T>, boolean> => enumerable => {
  const enumerator = enumerable.enumerate();
  while (enumerator.move()) {
    if (!predicate(enumerator.current)) {
      return false;
    }
  }
  return true;
};

/**
 * Returns `true` if the predicate does not satisfy
 * every value produced by the source, or if the source is empty, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const noneSatisfy = <T>(
  predicate: (next: T) => boolean,
): Operator<EnumerableLike<T>, boolean> =>
  everySatisfy(next => !predicate(next));
