/// <reference types="./Runnable.concat.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, RunnableLike_eval, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { DisposableLike_dispose, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
class ConcatRunnable {
    s;
    [ComputationLike_isPure];
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isSynchronous] = true;
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = Computation.areAllPure(s);
    }
    [RunnableLike_eval](sink) {
        for (const src of this.s) {
            const delegatingSink = Sink.createDelegatingNonCompleting(sink);
            src[RunnableLike_eval](delegatingSink);
            delegatingSink[DisposableLike_dispose]();
            if (sink[SinkLike_isCompleted]) {
                break;
            }
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_concat = ((...computations) => newInstance((ConcatRunnable), computations));
export default Runnable_concat;
