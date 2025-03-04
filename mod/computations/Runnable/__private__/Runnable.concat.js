/// <reference types="./Runnable.concat.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, SinkLike_complete, SinkLike_isComplete, } from "../../../computations.js";
import { newInstance, pick } from "../../../functions.js";
import DelegatingNonCompletingSink from "../../Sink/__internal__/DelegatingNonCompletingSink.js";
class ConcatRunnable {
    s;
    [ComputationLike_isPure];
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = s.every(pick(ComputationLike_isPure));
    }
    [RunnableLike_eval](sink) {
        const delegatingSink = newInstance(DelegatingNonCompletingSink, sink);
        for (const src of this.s) {
            src[RunnableLike_eval](delegatingSink);
            if (sink[SinkLike_isComplete]) {
                break;
            }
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_concat = ((...computations) => newInstance((ConcatRunnable), computations));
export default Runnable_concat;
