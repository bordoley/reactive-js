/// <reference types="./Runnable.reduce.d.ts" />

import { RunnableLike_eval, SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
class ReducerSink {
    r;
    acc;
    [SinkLike_isComplete] = false;
    constructor(r, acc) {
        this.r = r;
        this.acc = acc;
    }
    [SinkLike_next](next) {
        this.acc = this.r(this.acc, next);
    }
    [SinkLike_complete]() {
        this[SinkLike_isComplete] = true;
    }
}
const Runnable_reduce = (reducer, initialValue) => (deferable) => {
    const sink = newInstance(ReducerSink, reducer, initialValue());
    deferable[RunnableLike_eval](sink);
    return sink.acc;
};
export default Runnable_reduce;
