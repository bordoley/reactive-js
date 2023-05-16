import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import * as Obj from "../../__internal__/Object.js";
import { pipe } from "../../functions.js";
import { EnumeratorLike, ReadonlyObjectMapLike } from "../../types.js";

const ReadonlyObjectMap_keys: ReadonlyObjectMap.Signature["keys"] =
  <TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>() =>
  (obj: ReadonlyObjectMapLike<TKey, unknown>): EnumeratorLike<TKey> => {
    function* ReadonlyObjectMapKeys(): Iterator<TKey> {
      for (const key in obj) {
        if (Obj.hasOwn(obj, key)) {
          yield key as TKey;
        }
      }
    }
    return pipe(ReadonlyObjectMapKeys(), Iterator_enumerate());
  };

export default ReadonlyObjectMap_keys;
