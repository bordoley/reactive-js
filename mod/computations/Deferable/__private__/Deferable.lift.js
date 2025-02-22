/// <reference types="./Deferable.lift.d.ts" />

import { DeferableLike_eval, } from "../../../computations.js";
import { newInstance, pipeUnsafe } from "../../../functions.js";
class LiftedDeferable {
    src;
    ops;
    constructor(src, ops) {
        this.src = src;
        this.ops = ops;
    }
    [DeferableLike_eval](sink) {
        this.src[DeferableLike_eval](pipeUnsafe(sink, ...this.ops));
    }
}
const Deferable_lift = (operator) => (source) => {
    const src = source.src ?? source;
    const ops = [operator, ...(source.ops ?? [])];
    return newInstance(LiftedDeferable, src, ops);
};
export default Deferable_lift;
