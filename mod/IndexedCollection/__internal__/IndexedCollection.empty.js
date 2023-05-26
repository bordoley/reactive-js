/// <reference types="./IndexedCollection.empty.d.ts" />

import { raiseWithDebugMessage } from "../../functions.js";
import { CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
const _empty = {
    [CollectionLike_count]: 0,
    [KeyedCollectionLike_get](_) {
        return raiseWithDebugMessage("buffer is empty");
    },
};
const IndexedCollection_empty = () => _empty;
export default IndexedCollection_empty;
