/// <reference types="./Runnable.fromReadonlyArray.d.ts" />

import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
class FromReadonlyArrayRunnable {
    arr;
    count;
    start;
    [ComputationLike_isPure] = true;
    [ComputationLike_isDeferred] = false;
    constructor(arr, count, start) {
        this.arr = arr;
        this.count = count;
        this.start = start;
    }
    [RunnableLike_eval](sink) {
        let { arr, start, count } = this;
        while (count !== 0 && !sink[SinkLike_isCompleted]) {
            const next = arr[start];
            sink[EventListenerLike_notify](next);
            count > 0 ? (start++, count--) : (start--, count++);
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_fromReadonlyArray = (options) => (arr) => {
    let [start, count] = parseArrayBounds(arr, options);
    return newInstance(FromReadonlyArrayRunnable, arr, count, start);
};
export default Runnable_fromReadonlyArray;
