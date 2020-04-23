import { Operator } from "../../pipe";
import { EnumerableLike } from "./interfaces";

export const reduce = <T, TAcc>(
  reducer: (acc: TAcc, next: T) => TAcc,
  initialValue: () => TAcc,
): Operator<EnumerableLike<T>, TAcc> => enumerable => {
  const enumerator = enumerable.enumerate();
  let acc = initialValue();
  while (enumerator.move()) {
    acc = reducer(acc, enumerator.current);
  }
  return acc;
};