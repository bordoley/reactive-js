import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import * as Obj from "../../__internal__/Object.js";
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
  ReadonlyObjectMapLike,
} from "../../types.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";

class ReadonlyObjectMapDictionary<T, TKey extends ReadonlyObjectMap.TKeyBase>
  implements
    DictionaryLike<TKey, T>,
    DelegatingLike<ReadonlyObjectMapLike<TKey, T>>
{
  readonly [AssociativeCollectionLike_keys]: EnumerableLike<TKey>;
  readonly [DelegatingLike_delegate]: ReadonlyObjectMapLike<TKey, T>;

  constructor(delegate: ReadonlyObjectMapLike<TKey, T>) {
    this[DelegatingLike_delegate] = delegate;
    this[AssociativeCollectionLike_keys] = pipe(
      delegate,
      ReadonlyObjectMap_keys(),
    );
  }

  get [CollectionLike_count](): number {
    let cnt = 0;
    const delegate = this[DelegatingLike_delegate];
    for (const key in delegate) {
      if (Obj.hasOwn(delegate, key)) {
        cnt++;
      }
    }
    return cnt;
  }

  [KeyedCollectionLike_get](index: TKey): Optional<T> {
    return this[DelegatingLike_delegate][index];
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
