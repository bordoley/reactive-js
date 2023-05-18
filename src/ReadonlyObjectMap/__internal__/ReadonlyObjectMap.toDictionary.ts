import EnumeratorFactory_enumerate from "../../EnumeratorFactory/__internal__/EnumeratorFactory.enumerate.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import * as Obj from "../../__internal__/Object.js";
import { Optional, newInstance, pipe } from "../../functions.js";
import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EnumeratorLike,
  KeyedCollectionLike_get,
  ReadonlyObjectMapLike,
} from "../../types.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";

class ReadonlyObjectMapDictionary<T, TKey extends ReadonlyObjectMap.TKeyBase>
  implements DictionaryLike<TKey, T>
{
  constructor(readonly obj: ReadonlyObjectMapLike<TKey, T>) {}

  get [CollectionLike_count](): number {
    let cnt = 0;
    for (const key in this.obj) {
      if (Obj.hasOwn(this.obj, key)) {
        cnt++;
      }
    }
    return cnt;
  }

  [AssociativeCollectionLike_keys](): EnumeratorLike<TKey> {
    return pipe(
      this.obj,
      ReadonlyObjectMap_keys(),
      EnumeratorFactory_enumerate(),
    );
  }
  [KeyedCollectionLike_get](index: TKey): Optional<T> {
    return this.obj[index];
  }
}

const ReadonlyObjectMap_toDictionary: ReadonlyObjectMap.Signature["toDictionary"] =

    <
      T,
      TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase,
    >() =>
    (map: ReadonlyObjectMapLike<TKey, T>) =>
      newInstance(ReadonlyObjectMapDictionary, map);

export default ReadonlyObjectMap_toDictionary;
