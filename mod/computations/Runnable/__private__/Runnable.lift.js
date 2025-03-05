/// <reference types="./Runnable.lift.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { newInstance, pipeUnsafe } from "../../../functions.js";
import * as Computation from "../../Computation.js";
class LiftedRunnable {
    src;
    ops;
    [ComputationLike_isPure];
    constructor(src, ops, isPure) {
        this.src = src;
        this.ops = ops;
        this[ComputationLike_isPure] = isPure && Computation.isPure(src);
    }
    [RunnableLike_eval](sink) {
        this.src[RunnableLike_eval](pipeUnsafe(sink, ...this.ops));
    }
}
const Runnable_lift = ((operator, isPure) => (source) => {
    const src = source.src ?? source;
    const ops = [operator, ...(source.ops ?? [])];
    return newInstance(LiftedRunnable, src, ops, (isPure ?? true) && Computation.isPure(source));
});
export default Runnable_lift;
