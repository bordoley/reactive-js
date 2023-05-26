/// <reference types="./ReadonlyArray.toIterable.d.ts" />

import IndexedCollection_toContainer from "../../IndexedCollection/__internal__/IndexedCollection.toContainer.js";
import { newInstance } from "../../functions.js";
import { Container_type } from "../../types.js";
import ReadonlyArray_getLength from "./ReadonlyArray.getLength.js";
class ReadonlyArrayIterable {
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
            yield values[index];
            cnt--;
            index++;
        }
        while (cnt < 0) {
            yield values[index];
            cnt++;
            index--;
        }
    }
}
const ReadonlyArray_toIterable = 
/*@__PURE__*/ IndexedCollection_toContainer((values, startIndex, count) => startIndex === 0 && values.length === count
    ? values
    : newInstance(ReadonlyArrayIterable, values, startIndex, count), ReadonlyArray_getLength);
export default ReadonlyArray_toIterable;
