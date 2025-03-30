/// <reference types="./Runnable.concat.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { newInstance, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { DisposableLike_dispose, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
class ConcatRunnable {
    s;
    [ComputationLike_isPure];
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = Computation.areAllPure(s);
    }
    [RunnableLike_eval](sink) {
        for (const src of this.s) {
            const delegatingSink = pipe(Sink.createDelegatingNotifyOnlyNonCompletingNonDisposing(sink), Disposable.addTo(sink));
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
