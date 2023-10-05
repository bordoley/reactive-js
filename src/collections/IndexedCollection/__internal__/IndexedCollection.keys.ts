import {
  CollectionLike_count,
  IndexedCollectionLike,
} from "../../../collections.js";
import { returns } from "../../../functions.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";

function* iterate<TKey>(indexed: IndexedCollectionLike<unknown>) {
  const count = indexed[CollectionLike_count];
  for (let i = 0; i < count; i++) {
    yield i as TKey;
  }
}

const IndexedCollection_keys: IndexedCollection.Signature["keys"] =
  /*@__PURE__*/ returns(iterate) as IndexedCollection.Signature["keys"];

export default IndexedCollection_keys;
