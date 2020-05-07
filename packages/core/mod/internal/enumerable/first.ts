import { none, Option } from "../../option.ts";
import { EnumerableLike } from "./interfaces.ts";

export const first = <T>(enumerable: EnumerableLike<T>): Option<T> => {
  const enumerator = enumerable.enumerate();
  return enumerator.move() ? enumerator.current : none;
};
