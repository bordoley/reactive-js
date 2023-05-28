/// <reference types="./IndexedCollection.last.d.ts" />

import { none } from "../../functions.js";
import { CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
const IndexedCollection_last = () => (values) => {
    const count = values[CollectionLike_count];
    return count > 0 ? values[KeyedCollectionLike_get](count - 1) : none;
};
export default IndexedCollection_last;
