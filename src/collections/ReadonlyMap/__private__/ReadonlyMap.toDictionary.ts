import {
  DictionaryLike,
  DictionaryLike_count,
  DictionaryLike_get,
  DictionaryLike_keys,
  EnumerableLike,
} from "../../../collections.js";
import { Optional, newInstance, pipe } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";
import EnumerableIterable from "../../__classes__/EnumerableIterable.js";
import ReadonlyMap_keys from "./ReadonlyMap.keys.js";

class ReadonlyMapDictionary<
    T,
    TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase,
  >
  extends EnumerableIterable<T>
  implements DictionaryLike<TKey, T>
{
  readonly [DictionaryLike_keys]: EnumerableLike<TKey>;

  constructor(readonly d: ReadonlyMap<TKey, T>) {
    super();

    this[DictionaryLike_keys] = pipe(this.d, ReadonlyMap_keys());
  }

  get [DictionaryLike_count](): number {
    return this.d.size;
  }

  [Symbol.iterator]() {
    return this.d.values();
  }

  [DictionaryLike_get](index: TKey): Optional<T> {
    return this.d.get(index);
  }
}

const ReadonlyMap_toDictionary: ReadonlyMap.Signature["toDictionary"] =
  <T, TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase>() =>
  (map: ReadonlyMap<TKey, T>) =>
    newInstance(ReadonlyMapDictionary, map);

export default ReadonlyMap_toDictionary;
