import { none } from "../../functions.js";
import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../types.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";

const IndexedCollection_last: IndexedCollection.Signature["last"] =
  <T>() =>
  (values: IndexedCollectionLike<T>) => {
    const count = values[CollectionLike_count];

    return count > 0 ? values[KeyedCollectionLike_get](count - 1) : none;
  };

export default IndexedCollection_last;
