/// <reference types="./Runnable.reduce.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import { SinkLike_complete, SinkLike_isCompleted, SinkLike_next, } from "../../../utils.js";
class ReducerSink {
    r;
    acc;
    [SinkLike_isCompleted] = false;
    constructor(r, acc) {
        this.r = r;
        this.acc = acc;
    }
    [SinkLike_next](next) {
        this.acc = this.r(this.acc, next);
    }
    [SinkLike_complete]() {
        this[SinkLike_isCompleted] = true;
    }
}
const Runnable_reduce = (reducer, initialValue) => (deferable) => {
    const sink = newInstance(ReducerSink, reducer, initialValue());
    deferable[RunnableLike_eval](sink);
    return sink.acc;
};
export default Runnable_reduce;
