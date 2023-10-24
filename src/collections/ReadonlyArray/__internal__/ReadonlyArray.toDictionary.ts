import {
  AssociativeLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EnumerableLike,
  EnumerableLike_enumerate,
  KeyedLike_get,
} from "../../../collections.js";
import { Optional, newInstance, pipe } from "../../../functions.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";
import ReadonlyArray_keys from "./ReadonlyArray.keys.js";

class ReadonlyArrayDictionary<T, TKey extends ReadonlyArray.TKeyBase>
  implements DictionaryLike<TKey, T>
{
  readonly d: ReadonlyArray<T>;

  constructor(delegate: ReadonlyArray<T>) {
    this.d = delegate;
  }

  get [CollectionLike_count](): number {
    return this.d.length;
  }

  [KeyedLike_get](index: TKey): Optional<T> {
    return this.d[index];
  }

  get [AssociativeLike_keys](): EnumerableLike<TKey> {
    return pipe(this.d, ReadonlyArray_keys());
  }

  [EnumerableLike_enumerate]() {
    return pipe(this[Symbol.iterator](), Enumerator_fromIterator());
  }

  [Symbol.iterator](): Iterator<T, any, undefined> {
    return this.d[Symbol.iterator]();
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
