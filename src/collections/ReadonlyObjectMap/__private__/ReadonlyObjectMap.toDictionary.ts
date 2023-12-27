import * as Obj from "../../../__internal__/Object.js";
import {
  DictionaryLike,
  DictionaryLike_count,
  DictionaryLike_get,
  DictionaryLike_keys,
  EnumerableLike,
  ReadonlyObjectMapLike,
} from "../../../collections.js";
import { Optional, newInstance, pipe } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import EnumerableIterable from "../../__classes__/EnumerableIterable.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";

class ReadonlyObjectMapDictionary<T, TKey extends ReadonlyObjectMap.TKeyBase>
  extends EnumerableIterable<T>
  implements DictionaryLike<TKey, T>
{
  readonly [DictionaryLike_keys]: EnumerableLike<TKey>;
  readonly d: ReadonlyObjectMapLike<TKey, T>;

  constructor(delegate: ReadonlyObjectMapLike<TKey, T>) {
    super();

    this.d = delegate;
    this[DictionaryLike_keys] = pipe(delegate, ReadonlyObjectMap_keys());
  }

  get [DictionaryLike_count](): number {
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

  [DictionaryLike_get](index: TKey): Optional<T> {
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
