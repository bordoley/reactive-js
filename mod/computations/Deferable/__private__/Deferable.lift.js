/// <reference types="./Deferable.lift.d.ts" />

import { ComputationLike_isPure, DeferableLike_eval, } from "../../../computations.js";
import { newInstance, pipeUnsafe } from "../../../functions.js";
class LiftedDeferable {
    src;
    ops;
    [ComputationLike_isPure];
    constructor(src, ops, isPure) {
        this.src = src;
        this.ops = ops;
        this[ComputationLike_isPure] = isPure;
    }
    [DeferableLike_eval](sink) {
        this.src[DeferableLike_eval](pipeUnsafe(sink, ...this.ops));
    }
}
const Deferable_lift = ((operator, isPure) => (source) => {
    const src = source.src ?? source;
    const ops = [operator, ...(source.ops ?? [])];
    return newInstance(LiftedDeferable, src, ops, isPure);
});
export default Deferable_lift;
