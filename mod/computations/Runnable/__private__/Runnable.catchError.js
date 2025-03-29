/// <reference types="./Runnable.catchError.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { error, isNone, isSome, newInstance, none, } from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { DisposableLike_dispose, DisposableLike_error, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
class CatchErrorRunnable {
    s;
    onError;
    [ComputationLike_isPure];
    [ComputationLike_isDeferred] = false;
    constructor(s, onError, isPure) {
        this.s = s;
        this.onError = onError;
        this[ComputationLike_isPure] = Computation.isPure(s) && isPure;
    }
    [RunnableLike_eval](sink) {
        const delegatingSink = Sink.createDelegatingNotifyOnlyNonCompletingNonDisposing(sink);
        this.s[RunnableLike_eval](delegatingSink);
        const err = delegatingSink[DisposableLike_error];
        if (isNone(err)) {
            sink[SinkLike_complete]();
            return;
        }
        let action = none;
        try {
            action = this.onError(err);
        }
        catch (e) {
            sink[DisposableLike_dispose](error([error(e), err]));
        }
        if (isSome(action) && !sink[SinkLike_isCompleted]) {
            action[RunnableLike_eval](sink);
            sink[SinkLike_complete]();
        }
        else {
            sink[SinkLike_complete]();
        }
    }
}
const Runnable_catchError = ((onError, options) => (runnable) => newInstance((CatchErrorRunnable), runnable, onError, options?.innerType?.[ComputationLike_isPure] ?? true));
export default Runnable_catchError;
