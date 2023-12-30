import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
  EnumerableLike,
  ReadonlyObjectMapLike,
} from "../../../collections.js";
import { Optional, newInstance, pipe } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";

class ReadonlyObjectMapDictionary<T, TKey extends ReadonlyObjectMap.TKeyBase>
  implements DictionaryLike<TKey, T>
{
  readonly [DictionaryLike_keys]: EnumerableLike<TKey>;
  readonly d: ReadonlyObjectMapLike<TKey, T>;

  constructor(delegate: ReadonlyObjectMapLike<TKey, T>) {
    this.d = delegate;
    this[DictionaryLike_keys] = pipe(delegate, ReadonlyObjectMap_keys());
  }

  [DictionaryLike_get](index: TKey): Optional<T> {
    return this.d[index];
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
