import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../../collections.js";
import { newInstance } from "../../../functions.js";
import type * as IndexedCollection from "../../IndexedCollection.js";

const IndexedCollection_toReadonlyMap: IndexedCollection.Signature["toReadonlyMap"] =

    <T, TKey extends number>() =>
    (indexed: IndexedCollectionLike<T>) => {
      const map = newInstance<Map<TKey, T>>(Map);
      const count = indexed[CollectionLike_count];

      for (let i = 0; i < count; i++) {
        map.set(i as TKey, indexed[KeyedCollectionLike_get](i));
      }
      return map;
    };

export default IndexedCollection_toReadonlyMap;
