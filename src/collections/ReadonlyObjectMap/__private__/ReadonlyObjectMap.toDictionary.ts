import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
  ReadonlyObjectMapLike,
} from "../../../collections.js";
import { Optional, newInstance, pipe, returns } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";

class ReadonlyObjectMapDictionary<T, TKey extends ReadonlyObjectMap.TKeyBase>
  implements DictionaryLike<TKey, T>
{
  readonly [DictionaryLike_keys]: Iterable<TKey>;
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
  /*@__PURE__*/ returns((map: ReadonlyObjectMapLike) =>
    newInstance(ReadonlyObjectMapDictionary, map),
  ) as ReadonlyObjectMap.Signature["toDictionary"];

export default ReadonlyObjectMap_toDictionary;
