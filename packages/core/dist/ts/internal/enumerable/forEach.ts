import { Operator } from "../../functions.ts";

import { EnumerableLike } from "./interfaces.ts";

export const forEach = <T>(
  f: (v: T) => void,
): Operator<EnumerableLike<T>, void> => enumerable => {
  const enumerator = enumerable.enumerate();
  while (enumerator.move()) {
    f(enumerator.current);
  }
};
