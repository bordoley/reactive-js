import { Operator, SideEffect1 } from "../../functions.ts";
import { enumerate } from "./enumerate.ts";
import { EnumerableLike } from "./interfaces.ts";

/**
 * Applies the side-effect function `f` to each item in the EnumerableLike collection.
 *
 * @param f
 */
export const forEach = <T>(
  f: SideEffect1<T>,
): Operator<EnumerableLike<T>, void> => enumerable => {
  const enumerator = enumerate(enumerable);
  while (enumerator.move()) {
    f(enumerator.current);
  }
};
