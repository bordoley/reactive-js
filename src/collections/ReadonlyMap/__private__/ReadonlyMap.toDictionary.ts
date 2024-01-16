import { Map_get } from "../../../__internal__/constants.js";
import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
  EnumerableLike,
} from "../../../collections.js";
import { Optional, newInstance, pipe } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";
import ReadonlyMap_keys from "./ReadonlyMap.keys.js";

class ReadonlyMapDictionary<
  T,
  TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase,
> implements DictionaryLike<TKey, T>
{
  readonly [DictionaryLike_keys]: EnumerableLike<TKey>;

  constructor(readonly d: ReadonlyMap<TKey, T>) {
    this[DictionaryLike_keys] = pipe(this.d, ReadonlyMap_keys());
  }

  [DictionaryLike_get](index: TKey): Optional<T> {
    return this.d[Map_get](index);
  }
}

const ReadonlyMap_toDictionary: ReadonlyMap.Signature["toDictionary"] =
  <T, TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase>() =>
  (map: ReadonlyMap<TKey, T>) =>
    newInstance(ReadonlyMapDictionary, map);

export default ReadonlyMap_toDictionary;
