import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../../collections.js";
import { Factory, Function3 } from "../../../functions.js";
import type * as IndexedCollection from "../../IndexedCollection.js";

const IndexedCollection_reduce: IndexedCollection.Signature["reduce"] =
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

export default IndexedCollection_reduce;
