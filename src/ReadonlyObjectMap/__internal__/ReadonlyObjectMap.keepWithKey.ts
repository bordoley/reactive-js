import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import * as Obj from "../../__internal__/Object.js";

import { Function1, Function2 } from "../../functions.js";
import { ReadonlyObjectMapLike } from "../../types.js";

const ReadonlyObjectMap_keepWithKey: ReadonlyObjectMap.Signature["keepWithKey"] =

    <T, TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>(
      predicate: Function2<T, TKey, boolean>,
    ): Function1<
      ReadonlyObjectMapLike<TKey, T>,
      ReadonlyObjectMapLike<TKey, T>
    > =>
    (obj: ReadonlyObjectMapLike<TKey, T>): ReadonlyObjectMapLike<TKey, T> => {
      const result: Record<TKey, T> = Obj.create(null);

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

export default ReadonlyObjectMap_keepWithKey;
