/// <reference types="./ReadonlyArray.toIterable.d.ts" />

import { newInstance } from "../../functions.js";
import { Container_type } from "../../types.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";
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
/*@__PURE__*/ ReadonlyArray_toContainer((values, startIndex, count) => startIndex === 0 && values.length === count
    ? values
    : newInstance(ReadonlyArrayIterable, values, startIndex, count));
export default ReadonlyArray_toIterable;
