import {
  AssociativeLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EnumerableLike,
  KeyedLike_get,
} from "../../../collections.js";
import { Optional, newInstance, pipe } from "../../../functions.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";
import EnumerableIterable from "../../__classes__/EnumerableIterable.js";
import ReadonlyArray_keys from "./ReadonlyArray.keys.js";

class ReadonlyArrayDictionary<T, TKey extends ReadonlyArray.TKeyBase>
  extends EnumerableIterable<T>
  implements DictionaryLike<TKey, T>
{
  readonly d: ReadonlyArray<T>;

  constructor(delegate: ReadonlyArray<T>) {
    super();

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
