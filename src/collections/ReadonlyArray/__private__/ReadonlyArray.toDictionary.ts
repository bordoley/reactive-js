import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
} from "../../../collections.js";
import { PureIterableLike } from "../../../computations.js";
import { Optional, newInstance, pipe, returns } from "../../../functions.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";
import ReadonlyArray_keys from "./ReadonlyArray.keys.js";

class ReadonlyArrayDictionary<T, TKey extends ReadonlyArray.TKeyBase>
  implements DictionaryLike<TKey, T>
{
  readonly d: ReadonlyArray<T>;

  constructor(delegate: ReadonlyArray<T>) {
    this.d = delegate;
  }

  [DictionaryLike_get](index: TKey): Optional<T> {
    return this.d[index];
  }

  get [DictionaryLike_keys](): PureIterableLike<TKey> {
    return pipe(this.d, ReadonlyArray_keys());
  }
}

const ReadonlyArray_toDictionary: ReadonlyArray.Signature["toDictionary"] =
  /*@__PURE__*/ returns((arr: ReadonlyArray<unknown>) =>
    newInstance<
      ReadonlyArrayDictionary<unknown, number>,
      ReadonlyArray<unknown>
    >(ReadonlyArrayDictionary, arr),
  ) as ReadonlyArray.Signature["toDictionary"];

export default ReadonlyArray_toDictionary;
