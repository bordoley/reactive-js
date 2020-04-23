import { none, Option } from "@reactive-js/option";
import { EnumerableLike } from "./interfaces";

export const first = <T>(enumerable: EnumerableLike<T>): Option<T> => {
  const enumerator = enumerable.enumerate();
  return enumerator.move() ? enumerator.current : none;
};
