import * as Obj from "../../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../../collections.js";
import { returns } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_keys: ReadonlyObjectMap.Signature["keys"] =
  /*@__PURE__*/ returns(
    <TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>(
      obj: ReadonlyObjectMapLike<TKey, unknown>,
    ) => ({
      *[Symbol.iterator](): Iterator<TKey> {
        for (const key in obj) {
          if (Obj.hasOwn(obj, key)) {
            yield key as TKey;
          }
        }
      },
    }),
  ) as ReadonlyObjectMap.Signature["keys"];

export default ReadonlyObjectMap_keys;
