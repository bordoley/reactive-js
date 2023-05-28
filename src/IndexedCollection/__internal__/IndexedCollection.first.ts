import { IndexedCollectionLike, KeyedCollectionLike_get } from "../../types.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";

const IndexedCollection_first: IndexedCollection.Signature["first"] =
  <T>() =>
  (values: IndexedCollectionLike<T>) =>
    values[KeyedCollectionLike_get](0);

export default IndexedCollection_first;
