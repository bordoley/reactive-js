import {
  referenceEquality,
  Operator,
  Equality,
  Predicate,
  isEqualTo,
} from "../../functions";
import { enumerate } from "./enumerator";
import { EnumerableLike } from "./interfaces";

/**
 * Returns `true` value if the any item satisfies the predicate, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const someSatisfy = <T>(
  predicate: Predicate<T>,
): Operator<EnumerableLike<T>, boolean> => enumerable => {
  const enumerator = enumerate(enumerable);
  while (enumerator.move()) {
    if (predicate(enumerator.current)) {
      return true;
    }
  }
  return false;
};

/**
 * Returns `true` value if source yields any item equal to `value`, otherwise `false`.
 *
 * @param value
 * @param equals
 */
export const contains = <T>(value: T, equality: Equality<T> = referenceEquality) =>
  someSatisfy(isEqualTo(value, equality));
