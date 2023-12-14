import * as Obj from "../../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../../collections.js";
import { pipe, tuple } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__private__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_entries: ReadonlyObjectMap.Signature["entries"] =
  <T, TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>() =>
  (obj: ReadonlyObjectMapLike<TKey, T>) => {
    function* ReadonlyObjectMapEntries() {
      for (const key in obj) {
        if (Obj.hasOwn(obj, key)) {
          yield tuple(key as TKey, obj[key as TKey] as T);
        }
      }
    }

    return Enumerable_create(() =>
      pipe(ReadonlyObjectMapEntries(), Enumerator_fromIterator()),
    );
  };

export default ReadonlyObjectMap_entries;
