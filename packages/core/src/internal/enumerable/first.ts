import { none, Option } from "../../option";
import { EnumerableLike } from "./interfaces";

/**
 * Returns the first item in the EnumerableLike collection or none.
 *
 * @param enumerable
 */
export const first = <T>(enumerable: EnumerableLike<T>): Option<T> => {
  const enumerator = enumerable.enumerate();
  return enumerator.move() ? enumerator.current : none;
};
