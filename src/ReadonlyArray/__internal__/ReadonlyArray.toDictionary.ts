import type * as ReadonlyArray from "../../ReadonlyArray.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { Optional, newInstance, pipe } from "../../functions.js";
import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EnumerableLike,
  KeyedCollectionLike_get,
} from "../../types.js";
import ReadonlyObjectMap_keys from "./ReadonlyArray.keys.js";

class ReadonlyArrayDictionary<T, TKey extends ReadonlyArray.TKeyBase>
  implements DictionaryLike<TKey, T>, DelegatingLike<ReadonlyArray<T>>
{
  readonly [AssociativeCollectionLike_keys]: EnumerableLike<TKey>;
  readonly [DelegatingLike_delegate]: ReadonlyArray<T>;

  constructor(delegate: ReadonlyArray<T>) {
    this[DelegatingLike_delegate] = delegate;
    this[AssociativeCollectionLike_keys] = pipe(
      delegate,
      ReadonlyObjectMap_keys(),
    );
  }

  get [CollectionLike_count](): number {
    return this[DelegatingLike_delegate].length;
  }

  [KeyedCollectionLike_get](index: TKey): Optional<T> {
    return this[DelegatingLike_delegate][index];
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
