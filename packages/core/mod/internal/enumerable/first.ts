import { none, Option } from "../../option.ts";
import { enumerate } from "./enumerate.ts";
import { EnumerableLike } from "./interfaces.ts";
/**
 * Returns the first item in the EnumerableLike collection or none.
 *
 * @param enumerable
 */
export const first = <T>(enumerable: EnumerableLike<T>): Option<T> => {
  const enumerator = enumerate(enumerable);
  return enumerator.move() ? enumerator.current : none;
};
