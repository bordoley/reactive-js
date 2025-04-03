import { Map_get } from "../../../__internal__/constants.js";
import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
} from "../../../collections.js";
import type { PureIterableLike } from "../../../computations.js";
import { Optional, newInstance, pipe, returns } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";
import ReadonlyMap_keys from "./ReadonlyMap.keys.js";

class ReadonlyMapDictionary<
  T,
  TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase,
> implements DictionaryLike<TKey, T>
{
  readonly [DictionaryLike_keys]: PureIterableLike<TKey>;

  constructor(readonly d: ReadonlyMap<TKey, T>) {
    this[DictionaryLike_keys] = pipe(this.d, ReadonlyMap_keys());
  }

  [DictionaryLike_get](index: TKey): Optional<T> {
    return this.d[Map_get](index);
  }
}

const ReadonlyMap_toDictionary: ReadonlyMap.Signature["toDictionary"] =
  /*@__PURE__*/ returns((map: ReadonlyMap<{}, unknown>) =>
    newInstance(ReadonlyMapDictionary<unknown, {}>, map),
  ) as ReadonlyMap.Signature["toDictionary"];

export default ReadonlyMap_toDictionary;
