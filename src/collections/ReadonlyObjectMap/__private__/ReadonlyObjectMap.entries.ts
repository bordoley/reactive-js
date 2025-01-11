import * as Obj from "../../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../../collections.js";
import { Tuple2, returns, tuple } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_entries: ReadonlyObjectMap.Signature["entries"] =
  /*@__PURE__*/ returns(
    <T, TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>(
      obj: ReadonlyObjectMapLike<TKey, unknown>,
    ) => ({
      *[Symbol.iterator](): Iterator<Tuple2<TKey, T>> {
        for (const key in obj) {
          if (Obj.hasOwn(obj, key)) {
            yield tuple(key, obj[key as TKey] as T);
          }
        }
      },
    }),
  ) as ReadonlyObjectMap.Signature["entries"];

export default ReadonlyObjectMap_entries;
