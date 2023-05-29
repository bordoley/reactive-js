/// <reference types="./ReadonlyArray.toDictionary.d.ts" />

import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { newInstance, pipe } from "../../functions.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
import ReadonlyObjectMap_keys from "./ReadonlyArray.keys.js";
class ReadonlyArrayDictionary {
    [AssociativeCollectionLike_keys];
    [DelegatingLike_delegate];
    constructor(delegate) {
        this[DelegatingLike_delegate] = delegate;
        this[AssociativeCollectionLike_keys] = pipe(delegate, ReadonlyObjectMap_keys());
    }
    get [CollectionLike_count]() {
        return this[DelegatingLike_delegate].length;
    }
    [KeyedCollectionLike_get](index) {
        return this[DelegatingLike_delegate][index];
    }
}
const ReadonlyArray_toDictionary = () => (arr) => newInstance(ReadonlyArrayDictionary, arr);
export default ReadonlyArray_toDictionary;
