/// <reference types="./ReadonlyArray.toDictionary.d.ts" />

import { AssociativeCollectionLike_keys, CollectionLike_count, KeyedCollectionLike_get, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import ReadonlyArray_keys from "./ReadonlyArray.keys.js";
class ReadonlyArrayDictionary {
    d;
    constructor(delegate) {
        this.d = delegate;
    }
    get [CollectionLike_count]() {
        return this.d.length;
    }
    [KeyedCollectionLike_get](index) {
        return this.d[index];
    }
    [AssociativeCollectionLike_keys]() {
        return pipe(this.d, ReadonlyArray_keys());
    }
    [Symbol.iterator]() {
        return this.d[Symbol.iterator]();
    }
}
const ReadonlyArray_toDictionary = () => (arr) => newInstance(ReadonlyArrayDictionary, arr);
export default ReadonlyArray_toDictionary;
