import {
  CollectionLike_count,
  IndexedCollectionLike,
} from "../../../collections.js";
import { newInstance } from "../../../functions.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";

const IndexedCollection_keySet: IndexedCollection.Signature["keySet"] =
  <TKey extends number>() =>
  (indexed: IndexedCollectionLike) => {
    const result = newInstance(Set<TKey>);
    const count = indexed[CollectionLike_count];

    for (let i = 0; i < count; i++) {
      result.add(i as TKey);
    }

    return result;
  };

export default IndexedCollection_keySet;
