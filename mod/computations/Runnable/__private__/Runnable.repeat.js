/// <reference types="./Runnable.repeat.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, RunnableLike_eval, } from "../../../computations.js";
import { alwaysTrue, error, isFunction, isNone, newInstance, } from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { DisposableLike_dispose, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
class RepeatRunnable {
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
            const delegatingSink = Sink.createDelegatingNonCompleting(sink);
            source[RunnableLike_eval](delegatingSink);
            cnt++;
            try {
                if (sink[SinkLike_isCompleted] || !predicate(cnt)) {
                    break;
                }
            }
            catch (e) {
                sink[DisposableLike_dispose](error(e));
                break;
            }
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_repeat = ((predicate) => {
    const repeatPredicate = isFunction(predicate)
        ? predicate
        : isNone(predicate)
            ? alwaysTrue
            : (count) => count < predicate;
    return (deferable) => newInstance(RepeatRunnable, deferable, repeatPredicate);
});
export default Runnable_repeat;
