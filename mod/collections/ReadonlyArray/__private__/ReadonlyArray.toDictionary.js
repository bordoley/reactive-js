/// <reference types="./ReadonlyArray.toDictionary.d.ts" />

import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import ReadonlyArray_keys from "./ReadonlyArray.keys.js";
class ReadonlyArrayDictionary {
    d;
    constructor(delegate) {
        this.d = delegate;
    }
    [DictionaryLike_get](index) {
        return this.d[index];
    }
    get [DictionaryLike_keys]() {
        return pipe(this.d, ReadonlyArray_keys());
    }
}
const ReadonlyArray_toDictionary = () => (arr) => newInstance(ReadonlyArrayDictionary, arr);
export default ReadonlyArray_toDictionary;
