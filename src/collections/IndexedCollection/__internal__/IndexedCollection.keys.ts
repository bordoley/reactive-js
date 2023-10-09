import {
  CollectionLike_count,
  IndexedCollectionLike,
} from "../../../collections.js";
import { returns } from "../../../functions.js";
import Enumerable_range from "../../Enumerable/__internal__/Enumerable.range.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";

const IndexedCollection_keys: IndexedCollection.Signature["keys"] =
  /*@__PURE__*/ returns((indexed: IndexedCollectionLike<unknown>) =>
    Enumerable_range(0, { count: indexed[CollectionLike_count] }),
  ) as IndexedCollection.Signature["keys"];

export default IndexedCollection_keys;
