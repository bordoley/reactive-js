import type * as IndexedCollection from "../../IndexedCollection.js";
import { Factory, Function3 } from "../../functions.js";
import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../types.js";

const IndexedCollection_reduceWithKey: IndexedCollection.Signature["reduceWithKey"] =

    <
      T,
      TAcc,
      TKey extends IndexedCollection.TKeyBase = IndexedCollection.TKeyBase,
    >(
      reducer: Function3<TAcc, T, TKey, TAcc>,
      initialValue: Factory<TAcc>,
    ) =>
    (indexed: IndexedCollectionLike<T>) => {
      const count = indexed[CollectionLike_count];
      let acc = initialValue();

      for (let i = 0; i < count; i++) {
        acc = reducer(acc, indexed[KeyedCollectionLike_get](i), i as TKey);
      }

      return acc;
    };

export default IndexedCollection_reduceWithKey;
