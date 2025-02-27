/// <reference types="./Deferable.concatMany.d.ts" />

import { ComputationLike_isPure, DeferableLike_eval, SinkLike_complete, SinkLike_isComplete, } from "../../../computations.js";
import { newInstance, pick } from "../../../functions.js";
import DelegatingNonCompletingSink from "../../Sink/__internal__/DelegatingNonCompletingSink.js";
class ConcatManyDeferable {
    s;
    [ComputationLike_isPure];
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = s.every(pick(ComputationLike_isPure));
    }
    [DeferableLike_eval](sink) {
        const delegatingSink = newInstance(DelegatingNonCompletingSink, sink);
        for (const src of this.s) {
            src[DeferableLike_eval](delegatingSink);
            if (sink[SinkLike_isComplete]) {
                break;
            }
        }
        sink[SinkLike_complete]();
    }
}
const Deferable_concatMany = (computations) => newInstance((ConcatManyDeferable), computations);
export default Deferable_concatMany;
