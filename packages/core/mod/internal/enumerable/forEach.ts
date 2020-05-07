import { Operator } from "../../functions.ts";
import { EnumerableLike } from "./interfaces.ts";

/**
 * Applies the side-effect function `f` to each item in the EnumerableLike collection.
 *
 * @param f
 */
export const forEach = <T>(
  f: (v: T) => void,
): Operator<EnumerableLike<T>, void> => enumerable => {
  const enumerator = enumerable.enumerate();
  while (enumerator.move()) {
    f(enumerator.current);
  }
};
