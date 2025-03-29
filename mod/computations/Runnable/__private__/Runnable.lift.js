/// <reference types="./Runnable.lift.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, RunnableLike_eval, } from "../../../computations.js";
import { newInstance, pipeUnsafe } from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import * as Computation from "../../Computation.js";
class LiftedRunnable {
    src;
    ops;
    [ComputationLike_isPure];
    [ComputationLike_isDeferred] = false;
    [ComputationLike_isSynchronous] = true;
    constructor(src, ops, config) {
        this.src = src;
        this.ops = ops;
        this[ComputationLike_isPure] = Computation.isPure(config ?? {});
    }
    [RunnableLike_eval](sink) {
        const destinationOp = pipeUnsafe(sink, Sink.toLiftedSink(), ...this.ops);
        this.src[RunnableLike_eval](destinationOp);
    }
}
const Runnable_lift = ((config) => (operator) => (source) => {
    const src = source.src ?? source;
    const ops = [operator, ...(source.ops ?? [])];
    const liftedConfig = {
        [ComputationLike_isPure]: Computation.isPure(source) && Computation.isPure(config ?? {}),
    };
    return newInstance(LiftedRunnable, src, ops, liftedConfig);
});
export default Runnable_lift;
