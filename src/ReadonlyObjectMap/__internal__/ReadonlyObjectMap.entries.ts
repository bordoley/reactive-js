import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import * as Obj from "../../__internal__/Object.js";
import { Tuple2, pipe } from "../../functions.js";
import { ReadonlyObjectMapLike } from "../../types.js";

const ReadonlyObjectMap_entries: ReadonlyObjectMap.Signature["entries"] =
  <T, TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>() =>
  (obj: ReadonlyObjectMapLike<TKey, T>) => {
    function* ReadonlyObjectMapEntries(): Iterator<Tuple2<TKey, T>> {
      for (const key in obj) {
        if (Obj.hasOwn(obj, key)) {
          yield [key as TKey, obj[key as TKey] as T];
        }
      }
    }

    return Enumerable_create(() =>
      pipe(ReadonlyObjectMapEntries(), Iterator_enumerate()),
    );
  };

export default ReadonlyObjectMap_entries;
