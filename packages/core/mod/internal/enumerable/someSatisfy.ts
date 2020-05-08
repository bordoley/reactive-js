import { referenceEquals, Operator } from "../../functions.ts";
import { EnumerableLike } from "./interfaces.ts";

/**
 * Returns `true` value if the any item satisfies the predicate, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const someSatisfy = <T>(
  predicate: (next: T) => boolean,
): Operator<EnumerableLike<T>, boolean> => enumerable => {
  const enumerator = enumerable.enumerate();
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
  equals: (a: T, b: T) => boolean = referenceEquals,
) => someSatisfy((b: T) => equals(value, b));
