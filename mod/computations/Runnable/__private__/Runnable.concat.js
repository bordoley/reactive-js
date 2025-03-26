/// <reference types="./Runnable.concat.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, RunnableLike_eval, } from "../../../computations.js";
import { newInstance, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
class ConcatRunnable {
    s;
    [ComputationLike_isPure];
    [ComputationLike_isDeferred] = false;
    [ComputationLike_isSynchronous] = true;
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = Computation.areAllPure(s);
    }
    [RunnableLike_eval](sink) {
        const delegatingSink = pipe(Sink.createDelegatingNotifyOnlyNonCompletingNonDisposing(sink), Disposable.addTo(sink));
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
