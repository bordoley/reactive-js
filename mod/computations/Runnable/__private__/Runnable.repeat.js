/// <reference types="./Runnable.repeat.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { alwaysTrue, error, isFunction, isNone, newInstance, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { DisposableLike_dispose, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
class RepeatRunnable {
    s;
    p;
    [ComputationLike_isPure];
    constructor(s, p) {
        this.s = s;
        this.p = p;
        this[ComputationLike_isPure] = Computation.isPure(s);
    }
    [RunnableLike_eval](sink) {
        const source = this.s;
        const predicate = this.p;
        let cnt = 0;
        while (true) {
            const delegatingSink = pipe(Sink.createDelegatingNotifyOnlyNonCompletingNonDisposing(sink), Disposable.addTo(sink));
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
