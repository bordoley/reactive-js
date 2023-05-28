import { Function1, Predicate } from "../../functions.js";
import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../types.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";

const IndexedCollection_everySatisfy: IndexedCollection.Signature["everySatisfy"] =

    <T>(
      predicate: Predicate<T>,
    ): Function1<IndexedCollectionLike<T>, boolean> =>
    indexed => {
      const count = indexed[CollectionLike_count];
      for (let i = 0; i < count; i++) {
        if (!predicate(indexed[KeyedCollectionLike_get](i))) {
          return false;
        }
      }
      return true;
    };

export default IndexedCollection_everySatisfy;
