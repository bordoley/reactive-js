import EnumeratorFactory_enumerate from "../../EnumeratorFactory/__internal__/EnumeratorFactory.enumerate.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";
import { Optional, newInstance, pipe } from "../../functions.js";
import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EnumeratorLike,
  KeyedCollectionLike_get,
} from "../../types.js";
import ReadonlyMap_keys from "./ReadonlyMap.keys.js";

class ReadonlyMapDictionary<
  T,
  TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase,
> implements DictionaryLike<TKey, T>
{
  constructor(readonly map: ReadonlyMap<TKey, T>) {}

  get [CollectionLike_count](): number {
    return this.map.size;
  }

  [AssociativeCollectionLike_keys](): EnumeratorLike<TKey> {
    return pipe(this.map, ReadonlyMap_keys(), EnumeratorFactory_enumerate());
  }
  [KeyedCollectionLike_get](index: TKey): Optional<T> {
    return this.map.get(index);
  }
}

const ReadonlyMap_toDictionary: ReadonlyMap.Signature["toDictionary"] =
  <T, TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase>() =>
  (map: ReadonlyMap<TKey, T>) =>
    newInstance(ReadonlyMapDictionary, map);

export default ReadonlyMap_toDictionary;
