/// <reference types="./IndexedBufferCollection.empty.d.ts" />

import { raiseWithDebugMessage } from "../../../functions.js";
import { BufferLike_capacity, CollectionLike_count, KeyedCollectionLike_get, } from "../../../util.js";
const _empty = {
    [BufferLike_capacity]: 0,
    [KeyedCollectionLike_get](_) {
        return raiseWithDebugMessage("buffer is empty");
    },
    [CollectionLike_count]: 0,
};
const IndexedBufferCollection_empty = () => _empty;
export default IndexedBufferCollection_empty;
