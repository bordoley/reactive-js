import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
  EnumerableLike,
} from "../../../collections.js";
import { Optional, newInstance, pipe } from "../../../functions.js";
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

  get [DictionaryLike_keys](): EnumerableLike<TKey> {
    return pipe(this.d, ReadonlyArray_keys());
  }
}

const ReadonlyArray_toDictionary: ReadonlyArray.Signature["toDictionary"] =
  <T, TKey extends ReadonlyArray.TKeyBase = ReadonlyArray.TKeyBase>() =>
  (arr: ReadonlyArray<T>) =>
    newInstance<ReadonlyArrayDictionary<T, TKey>, ReadonlyArray<T>>(
      ReadonlyArrayDictionary,
      arr,
    );

export default ReadonlyArray_toDictionary;
