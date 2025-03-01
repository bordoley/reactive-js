/// <reference types="./Runnable.fromIterable.d.ts" />

import { ComputationLike_isInteractive, ComputationLike_isPure, RunnableLike_eval, SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
class FromIterableRunnable {
    i;
    [ComputationLike_isPure];
    [ComputationLike_isInteractive] = false;
    constructor(i) {
        this.i = i;
        this[ComputationLike_isPure] = i[ComputationLike_isPure] ?? true;
    }
    [RunnableLike_eval](sink) {
        for (const v of this.i) {
            if (sink[SinkLike_isComplete]) {
                break;
            }
            sink[SinkLike_next](v);
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_fromIterable = (() => (iterable) => newInstance((FromIterableRunnable), iterable));
export default Runnable_fromIterable;
