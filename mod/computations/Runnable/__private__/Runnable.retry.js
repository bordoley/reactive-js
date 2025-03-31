/// <reference types="./Runnable.retry.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, RunnableLike_eval, } from "../../../computations.js";
import { alwaysTrue, error, newInstance, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { DisposableLike_dispose, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
class RetryRunnable {
    s;
    p;
    [ComputationLike_isPure];
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isSynchronous] = true;
    constructor(s, p) {
        this.s = s;
        this.p = p;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    [RunnableLike_eval](sink) {
        const source = this.s;
        const predicate = this.p;
        let cnt = 0;
        while (true) {
            try {
                const delegatingSink = Sink.createDelegatingNotifyOnlyNonCompletingNonDisposing(sink);
                source[RunnableLike_eval](delegatingSink);
                Disposable.raiseIfDisposedWithError(delegatingSink);
                break;
            }
            catch (e) {
                if (sink[SinkLike_isCompleted]) {
                    break;
                }
                cnt++;
                try {
                    if (!predicate(cnt, error(e))) {
                        sink[DisposableLike_dispose](error(e));
                        break;
                    }
                }
                catch (ePredicate) {
                    sink[DisposableLike_dispose](error([e, ePredicate]));
                    break;
                }
            }
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_retry = ((shouldRetry) => (deferable) => newInstance(RetryRunnable, deferable, shouldRetry ?? alwaysTrue));
export default Runnable_retry;
