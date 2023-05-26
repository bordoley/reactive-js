/// <reference types="./IndexedCollection.toIterable.d.ts" />

import IndexedCollection_toContainer from "../../IndexedCollection/__internal__/IndexedCollection.toContainer.js";
import { newInstance } from "../../functions.js";
import { Container_type, KeyedCollectionLike_get, } from "../../types.js";
import Collection_getCount from "./Collection.getCount.js";
class IndexedCollectionIterable {
    values;
    start;
    count;
    constructor(values, start, count) {
        this.values = values;
        this.start = start;
        this.count = count;
    }
    *[Symbol.iterator]() {
        const { values } = this;
        let cnt = this.count;
        let index = this.start;
        while (cnt > 0) {
            yield values[KeyedCollectionLike_get](index);
            cnt--;
            index++;
        }
        while (cnt < 0) {
            yield values[KeyedCollectionLike_get](index);
            cnt++;
            index--;
        }
    }
}
const IndexedCollection_toIterable = 
/*@__PURE__*/ IndexedCollection_toContainer((values, startIndex, count) => newInstance(IndexedCollectionIterable, values, startIndex, count), Collection_getCount);
export default IndexedCollection_toIterable;
