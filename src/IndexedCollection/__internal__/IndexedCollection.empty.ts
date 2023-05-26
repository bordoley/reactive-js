import type * as IndexedCollection from "../../IndexedCollection.js";
import { raiseWithDebugMessage } from "../../functions.js";
import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../types.js";

const _empty: IndexedCollectionLike = {
  [CollectionLike_count]: 0,
  [KeyedCollectionLike_get](_: number): unknown {
    return raiseWithDebugMessage("buffer is empty");
  },
};

const IndexedCollection_empty: IndexedCollection.Signature["empty"] = <T>() =>
  _empty as IndexedCollectionLike<T>;

export default IndexedCollection_empty;
