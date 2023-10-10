import * as Obj from "../../../__internal__/Object.js";
import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EnumerableLike,
  EnumerableLike_enumerate,
  KeyedCollectionLike_get,
  ReadonlyObjectMapLike,
} from "../../../collections.js";
import { Optional, newInstance, pipe } from "../../../functions.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";

class ReadonlyObjectMapDictionary<T, TKey extends ReadonlyObjectMap.TKeyBase>
  implements DictionaryLike<TKey, T>
{
  readonly [AssociativeCollectionLike_keys]: EnumerableLike<TKey>;
  readonly d: ReadonlyObjectMapLike<TKey, T>;

  constructor(delegate: ReadonlyObjectMapLike<TKey, T>) {
    this.d = delegate;
    this[AssociativeCollectionLike_keys] = pipe(
      delegate,
      ReadonlyObjectMap_keys(),
    );
  }

  get [CollectionLike_count](): number {
    let cnt = 0;
    const delegate = this.d;
    for (const key in delegate) {
      if (Obj.hasOwn(delegate, key)) {
        cnt++;
      }
    }
    return cnt;
  }

  *[Symbol.iterator]() {
    const delegate = this.d;
    for (const key in delegate) {
      if (Obj.hasOwn(delegate, key)) {
        yield delegate[key] as T;
      }
    }
  }

  [EnumerableLike_enumerate]() {
    return pipe(this[Symbol.iterator](), Enumerator_fromIterator());
  }

  [KeyedCollectionLike_get](index: TKey): Optional<T> {
    return this.d[index];
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
