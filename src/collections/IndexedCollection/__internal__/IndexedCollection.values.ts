import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../../collections.js";
import { returns } from "../../../functions.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";

function* iterate(indexed: IndexedCollectionLike<unknown>) {
  const count = indexed[CollectionLike_count];
  for (let i = 0; i < count; i++) {
    yield indexed[KeyedCollectionLike_get](i);
  }
}

const IndexedCollection_values: IndexedCollection.Signature["values"] =
  /*@__PURE__*/ returns(iterate) as IndexedCollection.Signature["values"];

export default IndexedCollection_values;
