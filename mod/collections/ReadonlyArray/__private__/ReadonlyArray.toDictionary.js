/// <reference types="./ReadonlyArray.toDictionary.d.ts" />

import { DictionaryLike_count, DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import EnumerableIterable from "../../__classes__/EnumerableIterable.js";
import ReadonlyArray_keys from "./ReadonlyArray.keys.js";
class ReadonlyArrayDictionary extends EnumerableIterable {
    d;
    constructor(delegate) {
        super();
        this.d = delegate;
    }
    get [DictionaryLike_count]() {
        return this.d.length;
    }
    [DictionaryLike_get](index) {
        return this.d[index];
    }
    get [DictionaryLike_keys]() {
        return pipe(this.d, ReadonlyArray_keys());
    }
    [Symbol.iterator]() {
        return this.d[Symbol.iterator]();
    }
}
const ReadonlyArray_toDictionary = () => (arr) => newInstance(ReadonlyArrayDictionary, arr);
export default ReadonlyArray_toDictionary;
