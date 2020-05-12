import { Operator, Predicate, negate, compose } from "../../functions";
import { enumerate } from "./enumerator";
import { EnumerableLike } from "./interfaces";

/**
 * Returns `true` if the predicate is satisfied for
 * every value produced by the source, or if the source is empty, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const everySatisfy = <T>(
  predicate: Predicate<T>,
): Operator<EnumerableLike<T>, boolean> => enumerable => {
  const enumerator = enumerate(enumerable);
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
  predicate: Predicate<T>,
): Operator<EnumerableLike<T>, boolean> =>
  everySatisfy(compose(predicate, negate));
