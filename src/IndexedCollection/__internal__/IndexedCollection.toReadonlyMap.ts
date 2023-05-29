import type * as IndexedCollection from "../../IndexedCollection.js";
import { newInstance } from "../../functions.js";
import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../types.js";

const IndexedCollection_toReadonlyMap: IndexedCollection.Signature["toReadonlyMap"] =

    <T, TKey extends number>() =>
    (indexed: IndexedCollectionLike<T>) => {
      const map = newInstance<Map<TKey, T>>(Map);
      const length = indexed[CollectionLike_count];

      for (let i = 0; i < length; i++) {
        map.set(i as TKey, indexed[KeyedCollectionLike_get](i));
      }
      return map;
    };

export default IndexedCollection_toReadonlyMap;
