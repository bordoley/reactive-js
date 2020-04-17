import { Operator } from "@reactive-js/pipe";

import { EnumerableLike } from "./interfaces";

export const forEach = <T>(
  f: (v: T) => void,
): Operator<EnumerableLike<void, T>, void> => enumerable => {
  const enumerator = enumerable.enumerate();
  try {
    while (enumerator.move()) {
      f(enumerator.current);
    }
    enumerator.dispose();
  } catch (e) {
    enumerator.dispose(e);
  }
};
