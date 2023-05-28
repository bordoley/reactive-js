import type * as ReadonlyMap from "../../ReadonlyMap.js";
import { Optional, newInstance, pipe } from "../../functions.js";
import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EnumerableLike,
  KeyedCollectionLike_get,
} from "../../types.js";
import ReadonlyMap_keys from "./ReadonlyMap.keys.js";

class ReadonlyMapDictionary<
  T,
  TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase,
> implements DictionaryLike<TKey, T>
{
  readonly [AssociativeCollectionLike_keys]: EnumerableLike<TKey>;

  constructor(readonly map: ReadonlyMap<TKey, T>) {
    this[AssociativeCollectionLike_keys] = pipe(this.map, ReadonlyMap_keys());
  }

  get [CollectionLike_count](): number {
    return this.map.size;
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
