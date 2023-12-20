/// <reference types="./ReadonlyArray.toIndexed.d.ts" />

import { CollectionLike_count, KeyedLike_get, } from "../../../collections.js";
import { newInstance, pipe, raiseIf } from "../../../functions.js";
import EnumerableIterable from "../../__classes__/EnumerableIterable.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray.toReadonlyArray.js";
class ReadonlyArrayIndexedCollection extends EnumerableIterable {
    d;
    constructor(delegate) {
        super();
        this.d = delegate;
    }
    get [CollectionLike_count]() {
        return this.d.length;
    }
    [KeyedLike_get](index) {
        raiseIf(index < 0 || index >= this[CollectionLike_count], "out of range");
        return this.d[index];
    }
    [Symbol.iterator]() {
        return this.d[Symbol.iterator]();
    }
}
const ReadonlyArray_toIndexed = (options) => (arr) => {
    // FIXME: Ideally the implementation would be lazy
    const delegate = pipe(arr, ReadonlyArray_toReadonlyArray(options));
    return newInstance((ReadonlyArrayIndexedCollection), delegate);
};
export default ReadonlyArray_toIndexed;
