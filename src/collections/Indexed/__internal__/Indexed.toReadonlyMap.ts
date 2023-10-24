import {
  CollectionLike_count,
  IndexedLike,
  KeyedLike_get,
} from "../../../collections.js";
import { newInstance } from "../../../functions.js";
import type * as Indexed from "../../Indexed.js";

const Indexed_toReadonlyMap: Indexed.Signature["toReadonlyMap"] =
  <T, TKey extends number>() =>
  (indexed: IndexedLike<T>) => {
    const map = newInstance<Map<TKey, T>>(Map);
    const count = indexed[CollectionLike_count];

    for (let i = 0; i < count; i++) {
      map.set(i as TKey, indexed[KeyedLike_get](i));
    }
    return map;
  };

export default Indexed_toReadonlyMap;
