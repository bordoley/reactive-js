import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EnumerableLike,
  EnumerableLike_enumerate,
  KeyedCollectionLike_get,
} from "../../../collections.js";
import { Optional, newInstance, pipe } from "../../../functions.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";
import ReadonlyMap_keys from "./ReadonlyMap.keys.js";

class ReadonlyMapDictionary<
  T,
  TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase,
> implements DictionaryLike<TKey, T>
{
  readonly [AssociativeCollectionLike_keys]: EnumerableLike<TKey>;

  constructor(readonly d: ReadonlyMap<TKey, T>) {
    this[AssociativeCollectionLike_keys] = pipe(this.d, ReadonlyMap_keys());
  }

  get [CollectionLike_count](): number {
    return this.d.size;
  }

  [Symbol.iterator]() {
    return this.d.values();
  }

  [EnumerableLike_enumerate]() {
    return pipe(this[Symbol.iterator](), Enumerator_fromIterator());
  }

  [KeyedCollectionLike_get](index: TKey): Optional<T> {
    return this.d.get(index);
  }
}

const ReadonlyMap_toDictionary: ReadonlyMap.Signature["toDictionary"] =
  <T, TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase>() =>
  (map: ReadonlyMap<TKey, T>) =>
    newInstance(ReadonlyMapDictionary, map);

export default ReadonlyMap_toDictionary;
