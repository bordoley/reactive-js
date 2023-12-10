import * as Obj from "../../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__private__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_keys: ReadonlyObjectMap.Signature["keys"] =
  <TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>() =>
  (obj: ReadonlyObjectMapLike<TKey, unknown>) => {
    function* ReadonlyObjectMapKeys(): Iterator<TKey> {
      for (const key in obj) {
        if (Obj.hasOwn(obj, key)) {
          yield key as TKey;
        }
      }
    }

    return Enumerable_create(() =>
      pipe(ReadonlyObjectMapKeys(), Enumerator_fromIterator()),
    );
  };

export default ReadonlyObjectMap_keys;
