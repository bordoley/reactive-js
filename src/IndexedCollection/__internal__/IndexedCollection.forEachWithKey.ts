import type * as IndexedCollection from "../../IndexedCollection.js";
import { Function1, SideEffect2 } from "../../functions.js";
import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../types.js";

const IndexedCollection_forEachWithKey: IndexedCollection.Signature["forEachWithKey"] =

    <T, TKey extends IndexedCollection.TKeyBase = IndexedCollection.TKeyBase>(
      effect: SideEffect2<T, TKey>,
    ): Function1<IndexedCollectionLike<T>, IndexedCollectionLike<T>> =>
    indexed => {
      const cnt = indexed[CollectionLike_count];
      for (let i = 0; i < cnt; i++) {
        const v = indexed[KeyedCollectionLike_get](i);
        effect(v, i as TKey);
      }
      return indexed;
    };

export default IndexedCollection_forEachWithKey;
