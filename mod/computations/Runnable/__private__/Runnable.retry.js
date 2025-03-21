/// <reference types="./Runnable.retry.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { alwaysTrue, error, newInstance } from "../../../functions.js";
import DelegatingNonCompletingSink from "../../../utils/Sink/__internal__/DelegatingNonCompletingSink.js";
import { SinkLike_complete } from "../../../utils.js";
import * as Computation from "../../Computation.js";
class RetryRunnable {
    s;
    p;
    [ComputationLike_isPure];
    [ComputationLike_isDeferred] = false;
    constructor(s, p) {
        this.s = s;
        this.p = p;
        this[ComputationLike_isPure] = Computation.isPure(s);
    }
    [RunnableLike_eval](sink) {
        const source = this.s;
        const predicate = this.p;
        const delegatingSink = newInstance(DelegatingNonCompletingSink, sink);
        let cnt = 0;
        while (true) {
            try {
                source[RunnableLike_eval](delegatingSink);
                break;
            }
            catch (e) {
                cnt++;
                if (!predicate(cnt, error(e))) {
                    break;
                }
            }
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_retry = ((shouldRetry) => (deferable) => newInstance(RetryRunnable, deferable, shouldRetry ?? alwaysTrue));
export default Runnable_retry;
