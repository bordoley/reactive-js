/// <reference types="./IndexedBufferCollection.empty.d.ts" />

import { raiseWithDebugMessage } from "../../functions.js";
import { BufferLike_capacity, CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
const _empty = {
    [BufferLike_capacity]: 0,
    [CollectionLike_count]: 0,
    [KeyedCollectionLike_get](_) {
        return raiseWithDebugMessage("buffer is empty");
    },
};
const IndexedBufferCollection_empty = (options) => {
    const { [BufferLike_capacity]: capacity = 0 } = options ?? {};
    return (capacity === 0
        ? _empty
        : {
            [BufferLike_capacity]: capacity,
            [CollectionLike_count]: 0,
            [KeyedCollectionLike_get]: _empty[KeyedCollectionLike_get],
        });
};
export default IndexedBufferCollection_empty;
