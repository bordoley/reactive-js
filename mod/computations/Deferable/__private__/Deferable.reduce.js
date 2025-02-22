/// <reference types="./Deferable.reduce.d.ts" />

import { DeferableLike_eval, SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
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
const Deferable_reduce = (reducer, initialValue) => (deferable) => {
    const sink = newInstance(ReducerSink, reducer, initialValue());
    deferable[DeferableLike_eval](sink);
    return sink.acc;
};
export default Deferable_reduce;
