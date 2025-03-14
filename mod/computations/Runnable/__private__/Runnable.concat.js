/// <reference types="./Runnable.concat.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import DelegatingNonCompletingSink from "../../../utils/Sink/__internal__/DelegatingNonCompletingSink.js";
import { SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
class ConcatRunnable {
    s;
    [ComputationLike_isPure];
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = Computation.areAllPure(s);
    }
    [RunnableLike_eval](sink) {
        const delegatingSink = newInstance(DelegatingNonCompletingSink, sink);
        for (const src of this.s) {
            src[RunnableLike_eval](delegatingSink);
            if (sink[SinkLike_isCompleted]) {
                break;
            }
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_concat = ((...computations) => newInstance((ConcatRunnable), computations));
export default Runnable_concat;
