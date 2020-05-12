import {
  referenceEquality,
  Equality,
  Predicate,
  isEqualTo,
} from "../../functions.ts";
import { enumerate } from "./enumerator.ts";
import { EnumerableLike } from "./interfaces.ts";

/**
 * Returns `true` value if the any item satisfies the predicate, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const someSatisfy = <T>(
  predicate: Predicate<T>,
): Predicate<EnumerableLike<T>> => enumerable => {
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
export const contains = <T>(
  value: T,
  equality: Equality<T> = referenceEquality,
): Predicate<EnumerableLike<T>> => someSatisfy(isEqualTo(value, equality));
