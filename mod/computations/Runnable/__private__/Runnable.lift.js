/// <reference types="./Runnable.lift.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { newInstance, pipeUnsafe } from "../../../functions.js";
class LiftedRunnable {
    src;
    ops;
    [ComputationLike_isPure];
    constructor(src, ops, isPure) {
        this.src = src;
        this.ops = ops;
        this[ComputationLike_isPure] = isPure;
    }
    [RunnableLike_eval](sink) {
        this.src[RunnableLike_eval](pipeUnsafe(sink, ...this.ops));
    }
}
const Runnable_lift = ((operator, isPure) => (source) => {
    const src = source.src ?? source;
    const ops = [operator, ...(source.ops ?? [])];
    return newInstance(LiftedRunnable, src, ops, isPure);
});
export default Runnable_lift;
