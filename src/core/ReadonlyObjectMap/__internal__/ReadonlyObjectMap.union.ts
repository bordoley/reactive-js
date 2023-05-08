import { create, hasOwn } from "../../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../../core.js";
import { isNone } from "../../../functions.js";

const ReadonlyObjectMap_union = <TKey extends string | symbol | number, T>(
  m1: ReadonlyObjectMapLike<TKey, T>,
  m2: ReadonlyObjectMapLike<TKey, T>,
): ReadonlyObjectMapLike<TKey, T> => {
  const result: Record<TKey, T> = create(null);

  for (const key in m1) {
    if (hasOwn(m1, key)) {
      result[key as TKey] = m1[key as TKey] as T;
    }
  }

  for (const key in m2) {
    if (hasOwn(m2, key) && isNone(result[key as TKey])) {
      result[key as TKey] = m2[key as TKey] as T;
    }
  }

  return result;
};

export default ReadonlyObjectMap_union;
