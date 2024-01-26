import * as Obj from "../../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../../collections.js";
import { Function1, Function2 } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_keep: ReadonlyObjectMap.Signature["keep"] =
  <T, TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>(
    predicate: Function2<T, TKey, boolean>,
  ): Function1<
    ReadonlyObjectMapLike<TKey, T>,
    ReadonlyObjectMapLike<TKey, T>
  > =>
  (obj: ReadonlyObjectMapLike<TKey, T>): ReadonlyObjectMapLike<TKey, T> => {
    const result = Obj.createObjectMap<TKey, T>();

    for (const key in obj) {
      if (Obj.hasOwn(obj, key)) {
        const v = obj[key as TKey] as T;
        if (predicate(v, key as TKey)) {
          result[key as TKey] = v;
        }
      }
    }
    return result;
  };

export default ReadonlyObjectMap_keep;
