/// <reference types="./Runnable.repeat.d.ts" />

import { ComputationLike_isInteractive, ComputationLike_isPure, RunnableLike_eval, SinkLike_complete, SinkLike_isComplete, } from "../../../computations.js";
import { alwaysTrue, isFunction, isNone, newInstance, } from "../../../functions.js";
import DelegatingNonCompletingSink from "../../Sink/__internal__/DelegatingNonCompletingSink.js";
class RepeatRunnable {
    s;
    p;
    [ComputationLike_isPure];
    [ComputationLike_isInteractive] = false;
    constructor(s, p) {
        this.s = s;
        this.p = p;
        this[ComputationLike_isPure] = s[ComputationLike_isPure] ?? true;
    }
    [RunnableLike_eval](sink) {
        const source = this.s;
        const predicate = this.p;
        const delegatingSink = newInstance(DelegatingNonCompletingSink, sink);
        let cnt = 0;
        while (true) {
            source[RunnableLike_eval](delegatingSink);
            cnt++;
            if (sink[SinkLike_isComplete] || !predicate(cnt)) {
                break;
            }
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_repeat = (predicate) => {
    const repeatPredicate = isFunction(predicate)
        ? predicate
        : isNone(predicate)
            ? alwaysTrue
            : (count) => count < predicate;
    return (deferable) => newInstance(RepeatRunnable, deferable, repeatPredicate);
};
export default Runnable_repeat;
