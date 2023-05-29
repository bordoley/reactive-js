/// <reference types="./ReadonlyArray.toIndexedCollection.d.ts" />

import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { newInstance, pipe, raiseWithDebugMessage } from "../../functions.js";
import { CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray.toReadonlyArray.js";
class ReadonlyArrayIndexedCollection {
    [DelegatingLike_delegate];
    constructor(delegate) {
        this[DelegatingLike_delegate] = delegate;
    }
    get [CollectionLike_count]() {
        return this[DelegatingLike_delegate].length;
    }
    [KeyedCollectionLike_get](index) {
        if (index < 0 || index >= this[CollectionLike_count]) {
            raiseWithDebugMessage("out of range");
        }
        return this[DelegatingLike_delegate][index];
    }
}
const ReadonlyArray_toIndexedCollection = (options) => (arr) => {
    // FIXME: Ideally the implementation would be lazy
    const delegate = pipe(arr, ReadonlyArray_toReadonlyArray(options));
    return newInstance((ReadonlyArrayIndexedCollection), delegate);
};
export default ReadonlyArray_toIndexedCollection;
