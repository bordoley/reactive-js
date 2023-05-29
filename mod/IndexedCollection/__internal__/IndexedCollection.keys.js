/// <reference types="./IndexedCollection.keys.d.ts" />

import Observable_range from "../../Observable/__internal__/Observable.range.js";
import { CollectionLike_count } from "../../types.js";
const IndexedCollection_keys = (() => arr => Observable_range(0, {
    count: arr[CollectionLike_count],
}));
export default IndexedCollection_keys;
