/// <reference types="./Deferable.retry.d.ts" />

import { DeferableLike_eval, SinkLike_complete, } from "../../../computations.js";
import { alwaysTrue, error, newInstance } from "../../../functions.js";
import DelegatingNonCompletingSink from "../../Sink/__internal__/DelegatingNonCompletingSink.js";
class RetryDeferable {
    s;
    p;
    constructor(s, p) {
        this.s = s;
        this.p = p;
    }
    [DeferableLike_eval](sink) {
        const source = this.s;
        const predicate = this.p;
        const delegatingSink = newInstance(DelegatingNonCompletingSink, sink);
        let cnt = 0;
        while (true) {
            try {
                source[DeferableLike_eval](delegatingSink);
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
const Deferable_retry = (shouldRetry) => (deferable) => newInstance(RetryDeferable, deferable, shouldRetry ?? alwaysTrue);
export default Deferable_retry;
