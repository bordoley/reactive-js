import * as Obj from "../../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../../collections.js";
import { returns } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_values: ReadonlyObjectMap.Signature["values"] =
  /*@__PURE__*/ returns(
    <T, TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>(
      obj: ReadonlyObjectMapLike<TKey, unknown>,
    ) => ({
      *[Symbol.iterator](): Iterator<T> {
        for (const key in obj) {
          if (Obj.hasOwn(obj, key)) {
            yield obj[key as TKey] as T;
          }
        }
      },
    }),
  ) as ReadonlyObjectMap.Signature["values"];

export default ReadonlyObjectMap_values;
