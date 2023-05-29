import type * as IndexedCollection from "../../IndexedCollection.js";
import Observable_range from "../../Observable/__internal__/Observable.range.js";
import { CollectionLike_count } from "../../types.js";

const IndexedCollection_keys: IndexedCollection.Signature["keys"] = (() =>
  arr =>
    Observable_range(0, {
      count: arr[CollectionLike_count],
    })) as IndexedCollection.Signature["keys"];

export default IndexedCollection_keys;
