import { Operator } from "@reactive-js/pipe";

import { EnumerableLike } from "./interfaces";

export const forEach = <T>(
  f: (v: T) => void,
): Operator<EnumerableLike<T>, void> => enumerable => {
  const enumerator = enumerable.enumerate();
  while (enumerator.move()) {
    f(enumerator.current);
  }
};
