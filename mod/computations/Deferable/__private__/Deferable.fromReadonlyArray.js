/// <reference types="./Deferable.fromReadonlyArray.d.ts" />

import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { DeferableLike_eval, SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
class FromReadonlyArrayDeferable {
    arr;
    count;
    start;
    constructor(arr, count, start) {
        this.arr = arr;
        this.count = count;
        this.start = start;
    }
    [DeferableLike_eval](sink) {
        let { arr, start, count } = this;
        while (count !== 0 && !sink[SinkLike_isComplete]) {
            const next = arr[start];
            sink[SinkLike_next](next);
            count > 0 ? (start++, count--) : (start--, count++);
        }
        sink[SinkLike_complete]();
    }
}
const Deferable_fromReadonlyArray = (options) => (arr) => {
    let [start, count] = parseArrayBounds(arr, options);
    return newInstance(FromReadonlyArrayDeferable, arr, count, start);
};
export default Deferable_fromReadonlyArray;
