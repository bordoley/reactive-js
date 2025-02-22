/// <reference types="./Deferable.repeat.d.ts" />

import { DeferableLike_eval, SinkLike_complete, SinkLike_isComplete, } from "../../../computations.js";
import { alwaysTrue, isFunction, isNone, newInstance, } from "../../../functions.js";
import DelegatingNonCompletingSink from "../../Sink/__internal__/DelegatingNonCompletingSink.js";
class RepeatDeferable {
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
            source[DeferableLike_eval](delegatingSink);
            cnt++;
            if (sink[SinkLike_isComplete] || !predicate(cnt)) {
                break;
            }
        }
        sink[SinkLike_complete]();
    }
}
const Deferable_repeat = (predicate) => {
    const repeatPredicate = isFunction(predicate)
        ? predicate
        : isNone(predicate)
            ? alwaysTrue
            : (count) => count < predicate;
    return (deferable) => newInstance(RepeatDeferable, deferable, repeatPredicate);
};
export default Deferable_repeat;
